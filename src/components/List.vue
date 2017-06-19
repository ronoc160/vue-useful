<template>
  <div>
    <div class="column is-11">
      <div class="columns is-multiline" name="fade" >
        <card v-for="c in usedcard" :key="c.key" :cdata="c"></card>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/Card'
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAKt85Xet8wFtOx4Q5u9nS-u_urVwYSdoM',
  authDomain: 'useful-3a253.firebaseapp.com',
  databaseURL: 'https://useful-3a253.firebaseio.com',
  projectId: 'useful-3a253',
  storageBucket: 'useful-3a253.appspot.com',
  messagingSenderId: '445471669924'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let use = db.ref('use')

export default {
  firebase: {
    usedcard: use
  },
  components: {
    card
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
.container-min{
  width: 100%;
  max-width: 960px;
  margin: auto 0;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity:0
}
</style>
