import { createStore } from 'vuex'
import getters from './getters'


const modules = {}
async function SetModu(){
  const modulesFile = import.meta.glob('./Modules/*.ts')
  for (const path in modulesFile) {
      await modulesFile[path]().then((mod) => {
        let moduleName = path.replace(/^\.\/.*\/(.*)\.\w+$/, '$1')
        modules[moduleName] = mod.default
      })
  }
} 

SetModu()

export default createStore({
  modules,
  getters
})