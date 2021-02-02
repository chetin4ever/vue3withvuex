import { createStore } from "vuex"
import axios from "axios"
export default createStore({
  state: {
    counter: 0,
    colorCode: "blue",
  },
  mutations: {
    incrementCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    decrementCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    },
  },
  actions: {
    incrementCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        console.log("response", response.data)
        commit("incrementCounter", response.data)
      })
    },
    decrementCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        console.log("response", response.data)
        commit("decrementCounter", response.data)
      })
    },
    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue)
    },
  },
  modules: {},
  getters: {
    counterSuare(state) {
      return state.counter * state.counter
    },
  },
})
