<template>
  <div>
    <h3>Register</h3>
    <input type="text" name="" value="" placeholder="Email address" v-model="user.email">
    <input type="text" name="" value="" placeholder="Username" v-model="user.name">
    <input type="text" name="" value="" placeholder="Password" v-model="user.password">

    <button type="button" name="button" @click="register()">Register</button>

    <p>
      Don't have an account? <router-link to ="/login">Login! </router-link>
    </p>
  </div>
</template>

<script>
import {registerUser} from '../../services'
export default {
  data () {
    return {
      user: {
        email: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      registerUser(this.user).then(res => {
        // localStorage.setItem('id_token', res.data.token)
        this.$router.push('/articles')
      })
    }
  }
}
</script>
