<template>
  <div>
    <div class="container">
      <app-header></app-header>
      <div class="columns">
        <side-bar></side-bar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from '@/components/Sidebar'
import AppHeader from '@/components/app-header'
export default {
  components: {
    'side-bar': sideBar,
    AppHeader
  },
  name: 'main'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
