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
       <h1 class="c-card-info__content-title" v-if="links || link">Useful Resources</h1>
       <ul class="c-card-info__content-resources">
         <li> <a v-for="link in links" :href="link" target="_blank" class="c-card-info__content-resource">{{link}}</a></li>
         <!-- <li> <a :href="video" v-if="video" target="_blank" class="c-card-info__content-resource">video link</a></li> -->
       </ul>
    </section>
    <section class="c-card-info__content" v-if="documents">
      <h2 class="c-card-info__content-title">Useful downloads </h2>
      <ul class="c-card-info__content-resources">
        <li v-for="doc in documents"><a class="c-card-info__content-resource" :href="doc.result" download> {{doc.name}} </a></li>
      </ul>
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
      links: '',
      author: '',
      documents: ''
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
      this.links = this.$route.params.cdata.links
      this.author = this.$route.params.cdata.author
      this.documents = this.$route.params.cdata.documents
    }
  }
}
</script>
