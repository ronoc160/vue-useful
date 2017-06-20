<template>
  <div class="container">
    <side-bar></side-bar>
    <div class="content__wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import sideBar from '@/components/Sidebar'
export default {
  components: {
    'side-bar': sideBar
  },
  name: 'main'
}
</script>
