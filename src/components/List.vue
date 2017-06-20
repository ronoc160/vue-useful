<template>
    <ul class="card__list" name="fade" >
      <card v-for="c in usedcard" :key="c.key" :cdata="c"></card>
    </ul>
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
