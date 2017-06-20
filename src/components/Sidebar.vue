<template>
  <header class="header">
    <router-link class="header__logo" to="/"><img src="http://cnprogramming.com/images/documentation-small.png" alt="documentation"></router-link>
    <nav class="nav">
      <ul class="nav__list">
        <li>
          <router-link to="/" class="nav__item">Just a Useful List</router-link>
        </li>
        <li>
          <router-link to="/About" class="nav__item">About</router-link>
        </li>
        <li>
          <router-link to="/create" class="nav__item">Create Useful Card</router-link>
        </li>        
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  components: {
  }
}
</script>
