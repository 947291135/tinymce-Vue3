import { createStore } from 'vuex'
interface state {
    count: number
}
export default createStore({
    state () {
        return {
          count: 0
        }
    },
    mutations: {
        increment(state:state) {
        state.count+=1;
        },
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
    }
})