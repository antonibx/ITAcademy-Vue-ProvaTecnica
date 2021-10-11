import { createStore } from 'vuex';

export default createStore({
  state: {
    height:2,
    width:2,
    x:0,
    y:0,
    orientation:'N',
    inSquare: true,
  },
  getters: {
    getHeight(state) {
      return state.height;
    },
    getWidth(state) {
      return state.width;
    },
    getX(state) {
      return state.x;
    },
    getY(state) {
      return state.y;
    },
    getOrientation(state) {
      return state.orientation;
    },
    getInSquare(state) {
      return state.inSquare;
    }
  },
  mutations: {
    setHeight(state, newData) {
      state.height = newData;
    },
    setWidth(state, newData) {
      state.width = newData;
    },
    setX(state, newData) {
      state.x = newData;
    },
    setY(state, newData) {
      state.y = newData;
    },
    setOrientation(state, newData) {
      state.orientation = newData;
    },
    setInSquare(state, newData) {
      state.inSquare = newData;
    }
  },
  actions: {
    setHeight({ commit }, newData) {
      commit('setHeight', newData);
    },
    setWidth({ commit }, newData) {
      commit('setWidth', newData);
    },
    setX({ commit }, newData) {
      commit('setX', newData);
    },
    setY({ commit }, newData) {
      commit('setY', newData);
    },
    setOrientation({ commit }, newData) {
      commit('setOrientation', newData);
    },
    setInSquare({ commit }, newData) {
      commit('setInSquare', newData);
    }
  }
});
