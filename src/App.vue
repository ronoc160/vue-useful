<template>
  <div id="app">
    <main-view></main-view>
  </div>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    'main-view': Main
  }
}
</script>

<style lang="scss" type="text/scss">
@import 'css/main.scss';
</style>
