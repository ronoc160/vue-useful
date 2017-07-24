<template>
  <div id="app">
    <main-view></main-view>
  </div>
</template>

<script>
import Main from './components/Main'
import { store } from './store'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    'main-view': Main
  },
  store,
  methods: mapActions(['setApiToken']),
  mounted () {
    const token = localStorage.getItem('id_token')
    if (token) {
      this.setApiToken(token)
    }
  }
}
</script>

<style lang="scss" type="text/scss">
@import 'css/main.scss';
</style>
