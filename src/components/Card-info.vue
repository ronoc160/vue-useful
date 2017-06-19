<template>
  <div class="c-card-info">
    <router-link to="/list" class="back"> < back</router-link>
    <div class="c-card-info__hero-body">
        <img :src="image" alt="">
    </div>
    <section class="c-card-info__content">
       <h1 class="c-card-info__content-title">{{title}}</h1>
       <p class="c-card-info__content-author">by {{author}}</p>
       <p class="c-card-info__content-subtitle">{{desc}}</p>
    </section>
    <section class="c-card-info__content">
       <h1 class="c-card-info__content-title" v-if="link">Useful Resources</h1>
       <a :href="link" target="_blank" class="c-card-info__content-resource">{{link}}</a>
       <a :href="video" v-if="video" target="_blank" class="c-card-info__content-resource">video link</a>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      image: '',
      desc: '',
      video: '',
      link: '',
      author: ''
    }
  },
  created () {
    this.loadContent()
  },
  watch: {
    $route: 'loadContent'
  },
  methods: {
    loadContent () {
      this.title = this.$route.params.cdata.title
      this.image = this.$route.params.cdata.image
      this.desc = this.$route.params.cdata.desc
      this.video = this.$route.params.cdata.video
      this.link = this.$route.params.cdata.link
      this.author = this.$route.params.cdata.author
    }
  }
}
</script>

<style lang="css">
</style>
