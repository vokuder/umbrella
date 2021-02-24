

export default {
  namespaced: true,
  state: {
    active: false
  },

  mutations: {
    enable(state) {
      state.active = true
    },

    disable(state) {
      state.active = false
    }
  },

  getters: {
    getIsActive: state => {
      return state.active
    }
  }
}
