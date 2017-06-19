<template>
  <div class="column is-4">
      <router-link :to="{ name: 'info', params: { id: cdata['.key'], cdata: cdata }}">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4">
            <img :src="cdata.image" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{cdata.author}} {{cdata.key}}</p>
            </div>
          </div>

          <div class="content">
            {{cdata.title}}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['cdata']
}
</script>

<style lang="css">
</style>
