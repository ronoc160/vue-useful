<template>
  <li class="card__wrap">

    <router-link class="card" :to="{ name: 'info', params: { id: cdata['uuid'], cdata: cdata }}">
      <img :src="cdata.image_url" alt="Image" class="card__image">
      <h1 class="card__title">{{cdata.title}}</h1>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['cdata'],
  data () {
    return {
      author: ''
    }
  }
}
</script>
