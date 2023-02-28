import {defineStore} from "pinia"

export const useNumbersStore = defineStore("numbers", {
  state: () => {
    return {
      numbers: [14, 15, 17, 18, 20, 21, 22, 35]
    }
  },
  actions: {
    addNumber(num) {
      this.numbers.push(num)
    }
  },
  getters: {
    doubleNumber: (state) => {
      return state.numbers.map(num => num * 2)
    },
    filterNum: (state) => {
      return (minNumber) => state.numbers.filter(num => num >= minNumber)
    }
  }
})
