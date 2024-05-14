import { acceptHMRUpdate, defineStore } from 'pinia'

interface State {
  count: number
}

export const useCountStore = defineStore('Count', {
  state: (): State => ({
    count: 0,
  }),
  actions: {
    change(newValue: number) {
      this.count = newValue
    },
  },
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot))
