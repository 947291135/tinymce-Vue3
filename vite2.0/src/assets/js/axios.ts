import axios from 'axios';

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
}

let server = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    timeout: 10000, // 设置十秒的请求，如果十秒还不返回报错
    withCredentials: false
})

server.interceptors.request.use(function (config) {
    return config   
// 请求拦截
}, function (error) {
// 请求错误时弹框提示，或做些其他事
    return Promise.reject(error)
})

server.interceptors.response.use(function (response) {
// 对响应数据做点什么
    return response.data
}, function (error) {
    // 对响应错误做点什么
    let msg = ''
    if (error && error.response) {
        // eslint-disable-next-line no-unused-expressions
        msg = codeMessage[error.response.status] ? codeMessage[error.response.status] : '服务器错误'
    } else {
        msg = '网络出现问题,请稍后再试'
    }
    let errorArr = {
        'type': 'Fail',
        'body': {
        'message': msg,
        'code': error
        }
    }
    return Promise.reject(errorArr)
})

export default server