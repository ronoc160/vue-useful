import axios from 'axios'
// import Firebase from 'firebase'
//
// let config = {
//   apiKey: 'AIzaSyAKt85Xet8wFtOx4Q5u9nS-u_urVwYSdoM',
//   authDomain: 'useful-3a253.firebaseapp.com',
//   databaseURL: 'https://useful-3a253.firebaseio.com',
//   projectId: 'useful-3a253',
//   storageBucket: 'useful-3a253.appspot.com',
//   messagingSenderId: '445471669924'
// }
//
// let app = Firebase.initializeApp(config)
// let db = app.database()
//
// let usefulRef = db.ref('useful')
//
// export const firebaseObj = {
//   firebase: {
//     usedcard: usefulRef
//   }
// }

export const foo = function (callback) {
  axios.get('http://jsonplaceholder.typicode.com/albums/1/photos').then(response => {
    callback(response.data.slice(0, 5))
  })
}
export const poo = function (url) {
  const postData = axios.post('').then(response => console.log(response))
  return postData
}
