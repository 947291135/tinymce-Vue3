import { createStore } from 'vuex'
import getters from './getters'

const modules = {}
const modulesFile = import.meta.glob('./Modules/*.ts')
for (const path in modulesFile) {
    await modulesFile[path]().then((mod) => {
      let moduleName = path.replace(/^\.\/.*\/(.*)\.\w+$/, '$1')
      modules[moduleName] = mod.default
    })
}
interface State {
  count: number
}
export default createStore<State>({
  modules,
  getters
})