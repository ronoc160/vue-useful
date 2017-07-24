<template>
  <article class="content">
    <div class="article__header">
      <div class="article__exit">
        <router-link to="/" class="btn--back"> < back</router-link>
      </div>
      <img :src="this.$store.state.currentArticle.image_url" :alt="title">
      <h1 class="article__title">{{this.$store.state.currentArticle.title}}</h1>
    </div>
    <section v-html="this.$store.state.currentArticle.content" class="markdown article__content"></section>
    <section class="article__content" v-if="this.$store.state.currentArticle.files.length > 0 || this.$store.state.currentArticle.links" >
      <h3 class="gamma">Useful Resources</h3>
      <div v-if="this.$store.state.currentArticle.files.length > 0">
        <ul class="list" v-for= "file in this.$store.state.currentArticle.files">
          <h2>Some Downloads</h2>
          <li><a class="link" target="_blank" :href="file.file_name" download >{{file.file_name}} {{file.url}} </a></li>
        </ul>
      </div>
      <ul class="list" v-if="this.$store.state.currentArticle.links">
        <h2>Some Links</h2>
        <li v-for="link in this.$store.state.currentArticle.links"> <a :href="link.url" target="_blank" class="link">{{link.url}}</a></li>
      </ul>
    </section>

    <!-- <div>
       <h3 class="gamma" v-if="links || link">Useful Resources</h3>
    </div> -->
    <!-- <div v-if="documents">
      <h3 class="gamma">Useful downloads</h3>
      <ul class="list">
        <li v-for="doc in documents"><a class="link" :href="doc.result" download> {{doc.name}} </a></li>
      </ul>
    </div> -->
    <form v-if="isLogged">
      <label class="form__control">
        <span class="form__label">Add files</span>
        <div class="form__input-wrap">
          <input type="file" name="file" @change="addDocuments">
        </div>
        <ul class="form__listing">
          <li v-for="doc in addedDoc" @click="removeDoc(doc)">{{doc.name}}</li>
        </ul>
      </label>
    </form>
    <button v-if="isLogged" type="button" name="button" @click="deleteCard($store.state.currentArticle.uuid)">delete card</button>
  </article>
</template>

<script>
import { store } from '../store'
import { mapGetters } from 'vuex'
import { deleteUpload, deletedCard } from '../services'
export default {
  data () {
    return {
      title: '',
      image: '',
      desc: '',
      video: '',
      links: '',
      author: '',
      documents: '',
      addedDoc: []
    }
  },
  created () {
    if (!this.$route.params.cdata) {
      this.$store.dispatch('getCardData', store.state.currentArticle)
    } else {
      this.$store.dispatch('getCardData', this.$route.params.cdata)
    }
  },
  watch: {
    $route: 'loadContent'
  },
  computed: mapGetters(['isLogged']),
  methods: {
    loadContent () {
      this.$store.dispatch('getCardData', this.$route.params.cdata)
    },
    addDocuments (e) {
      let file = e.target.files || e.dataTransfer.files
      this.createFile(file[0])
    },
    createFile (f) {
      let reader = new FileReader()
      reader.onload = (e) => {
        let fullFile = {
          result: e.target.result
        }
        this.addedDoc.push(fullFile)
        this.uploadDocs()
      }
      reader.readAsDataURL(f)
    },
    removeDoc (doc) {
      this.addedDoc.splice(this.addedDoc.indexOf(doc), 1)
    },
    uploadDocs () {
      this.$store.dispatch('uploadNewFiles', this.addedDoc)
    },
    removeDownloan (fileId) {
      deleteUpload(fileId).then(res => {
        this.$store.state.currentArticle.files.splice(this.$store.state.currentArticle.files.indexOf(fileId), 1)
      })
    },
    deleteCard (cardId) {
      deletedCard(cardId).then(res => {
        this.$router.push({path: '/'})
      })
    }
  }
}
</script>
