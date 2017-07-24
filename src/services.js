import axios from 'axios'
import { store } from './store'

let formData = new FormData()
let headers = {headers: { token: store.state.apiToken }}

export const getCards = function () {
  return axios.get(`http://frontend-api-dev.digitalannexe.eu/api/v1/cards`)
}
export const getCard = function (cardId) {
  return axios.get(`http://frontend-api-dev.digitalannexe.eu/api/v1/cards/${cardId.uuid}`)
}
export const deleteUpload = function (fileId) {
  return axios.delete(`http://frontend-api-dev.digitalannexe.eu/api/v1/cards/${store.state.currentArticle.uuid}/files/${fileId}`, {headers: { token: store.state.apiToken }})
}
export const deletedCard = function (cardId) {
  return axios.delete(`http://frontend-api-dev.digitalannexe.eu/api/v1/cards/${cardId}`, headers)
}
export const uploadFiles = function (files) {
  formData.append('attachment_file', files[0].result)
  return axios.post(`http://frontend-api-dev.digitalannexe.eu/api/v1/cards/${store.state.currentArticle.uuid}/files`, formData, {headers: { token: store.state.apiToken, 'Content-Type': 'multipart/form-data' }})
}
export const newCard = function (cardObj) {
  return axios.post(`http://frontend-api-dev.digitalannexe.eu/api/v1/cards`, cardObj, headers)
}
export const registerUser = function (url) {
  const registerUser = axios.post(`http://frontend-api-dev.digitalannexe.eu/api/v1/users${url}`)
  return registerUser
}
export const loginUser = function (login) {
  const loginUser = axios.post(`http://frontend-api-dev.digitalannexe.eu/api/v1/login`, login)
  return loginUser
}
