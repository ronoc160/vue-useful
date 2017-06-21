import axios from 'axios'

export const foo = function (callback) {
  axios.get('http://jsonplaceholder.typicode.com/albums/1/photos').then(response => {
    callback(response.data.slice(0, 5))
  })
}
export const poo = function (url) {
  const postData = axios.post('').then(response => console.log(response))
  return postData
}
