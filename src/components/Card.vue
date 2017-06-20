<template>
  <li class="card__wrap">
    <router-link class="card" :to="{ name: 'info', params: { id: cdata['.key'], cdata: cdata }}">
      <img :src="cdata.image" alt="Image" class="card__image">
      <h1 class="card__title">{{cdata.title}}</h1>
      <span class="card__author">{{cdata.author}} {{cdata.key}}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['cdata']
}
</script>
