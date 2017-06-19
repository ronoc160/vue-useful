<template>
  <div class="c-side-bar column is-3">
    <aside class="c-side-bar__menu">
      <ul class="c-side-bar__menu-list">
        <router-link to="/" tag="li">About</router-link>
        <router-link to="/create" tag="li">Create Useful Card</router-link>
        <router-link to="/list" tag="li">Just a Useful List</router-link>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="css">
</style>
