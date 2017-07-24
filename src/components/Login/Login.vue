<template>
  <div>
    <div class="login" v-if="!isLogged">
      <input class="login__input " type="text" placeholder="useful email"  v-model="user.email">
      <input class="login__input " type="text" placeholder="useful password" v-model="user.password">
    <button type="button" name="button" @click="doAuth()"> Sign in</button>
    </div>
    <div class="" v-if="isLogged">
      <button type="button" name="button" @click="logout()"> Logout</button>
    </div>
    <!-- <p>
      Don't have an account? <router-link to ="/register">Sign up! </router-link>
    </p> -->
  </div>
</template>

<script>
import {loginUser} from '../../services'
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      isActiveLogin: '',
      error: '',
      show: true,
      returnTo: null
    }
  },
  computed: mapGetters(['isLogged']),
  methods: {
    doAuth () {
      this.error = ''
      this.login(this.credentials)
    },
    login () {
      if (this.user.email && this.user.password) {
        loginUser(this.user).then(res => {
          this.setApiToken(res.data.token)
          this.setUserDetails(res.data.user)
        }).catch(res => {
          this.isActiveLogin = true
          console.log(this.isActiveLogin)
        })
        setTimeout(function () {
          this.isActiveLogin = false
          console.log(this.isActiveLogin)
        }, 1000)
      }
    },
    logout () {
      this.removeApiToken()
    },
    ...mapActions(['setApiToken', 'setUserDetails', 'removeApiToken'])
  }
}
</script>

<style lang="css">
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
