import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
import {getCards, newCard, getCard, uploadFiles} from './services'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    apiToken: false,
    newState: [],
    currentArticle: [],
    userDetails: {}
  },
  mutations: {
    createCard (state, cardObj) {
      state.newState.push(cardObj)
    },
    SET_API_TOKEN (state, token) {
      state.apiToken = token
    },
    REMOVE_API_TOKEN (state) {
      state.apiToken = false
      state.userDetails = {}
    },
    SET_USSER_DETAILS (state, user) {
      state.userDetails = user
    },
    getCardsData (state, cardsData) {
      state.newState = cardsData
    },
    getCardData (state, cardData) {
      state.currentArticle = cardData
    },
    getFileData (state, file) {
      state.currentArticle.files.push(file)
    }
  },
  actions: {
    getCardsData ({commit}, cardObj) {
      getCards().then(res => {
        commit('getCardsData', res.data.cards)
      })
    },
    getCardData ({commit}, cardId) {
      getCard(cardId).then(res => {
        commit('getCardData', res.data.card)
      })
    },
    createCard ({commit}, cardObj) {
      newCard(cardObj).then(res => {
        commit('createCard', res.data)
      })
    },
    uploadNewFiles ({commit}, files) {
      uploadFiles(files).then(res => {
        commit('getFileData', res.data)
      })
    },
    setApiToken ({commit}, token) {
      const expiry = Date.now() + 14400000
      console.log('expiry === out', expiry)
      if (expiry < Date.now()) {
        console.log('expiry === in', expiry)
        localStorage.removeItem('id_token')
        return
      }
      localStorage.setItem('id_token', token)
      commit('SET_API_TOKEN', token)
    },
    setUserDetails ({commit}, user) {
      commit('SET_USSER_DETAILS', user)
    },
    removeApiToken ({commit}) {
      localStorage.removeItem('id_token')
      commit('REMOVE_API_TOKEN')
    }
  },
  getters: {
    isLogged: (state) => !!state.apiToken
  },
  plugins: [createPersistedState()]
})
