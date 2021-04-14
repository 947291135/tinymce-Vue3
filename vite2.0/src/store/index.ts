import { createStore } from 'vuex'
interface State {
  count: number
}
export default createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})