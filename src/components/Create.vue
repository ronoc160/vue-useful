<template>
  <form class="form">
    <div class="form__logged" :class="{'form__logged--in':isLogged }"></div>
    <h1 class="alpha">Submit a useful</h1>
    <ul class="form__items">
      <li>
        <label class="form__control">
          <span class="form__label">Title</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter title..." v-model="cardObj.title" required="required">
          </div>
        </label>
      </li>
      <li>
        <label class="form__control">
          <span class="form__label">Image URL</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter URL..." v-model="cardObj.image_url" require required="required">
          </div>
        </label>
      </li>
      <!-- <li>
        <label class="form__control">
          <span class="form__label">Add files</span>
          <div class="form__input-wrap">
            <input type="file" name="file" @change="addDocuments">
          </div>
          <ul class="form__listing">
            <li v-for="doc in cardObj.documentArr" @click="removeDoc(doc)">{{doc.name}}</li>
          </ul>
        </label>
      </li> -->
      <!-- <li>
        <label class="form__control">
          <span class="form__label">Author</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter author name..." v-model="cardObj.author_id" require required="required">
          </div>
        </label>
      </li> -->
      <li>
        <label class="form__control">
          <span class="form__label">External URL</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter external link..." v-model="cardObj.link">
            <button class="btn--primary form__listing-btn" type="button" name="button" @click="addLink(cardObj.link)">add</button>
          </div>
          <ul class="form__listing">
            <li v-for="l in cardObj.links" @click="removeLink(l)">{{l}}</li>
          </ul>
        </label>
      </li>
      <li>
        <label class="form__control">
          <span class="form__label">Upload .md file</span>
          <div class="form__input-wrap">
              <input type="file" name="file" class="form__input" @change="addMarkdown">
          </div>
          <ul class="form__listing">
            <li v-for="l in cardObj.links" @click="removeLink(l)">{{l}}</li>
          </ul>
        </label>
      </li>
      <!-- <li>
        <label class="form__control">
          <span class="form__label">Video URL</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter video URL..." v-model="cardObj.video">
          </div>
        </label>
      </li> -->
      <li>
        <label class="form__control">
          <span class="form__label">Content</span>
          <div class="form__input-wrap">
            <textarea class="form__textarea" rows="10" placeholder="Enter content..." v-model="cardObj.card_content"></textarea>
          </div>
        </label>
      </li>
      <li>
        <div class="form__submit">
          <button class="btn--primary" type="button" name="button" @click="onSubmit()">Create Card</button>
        </div>
      </li>
    </ul>
    <p v-if="ifCreated">Thanks for creating this awsome super <b> Useful </b> tip head check <router-link to="/list" > check out some other one's</router-link>  </p>
    <b v-if="noImage">Please add an image URL</b>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import {markdown} from 'markdown'
export default {
  data () {
    return {
      ifCreated: false,
      noImage: false,
      cardObj: {
        title: '',
        card_content: '',
        image_url: '',
        author_id: '',
        link: '',
        links: []
      }
    }
  },
  computed: mapGetters(['isLogged']),
  methods: {
    onSubmit () {
      let finishedCard = {
        author_id: this.$store.state.userDetails.uuid,
        title: this.cardObj.title,
        image_url: this.cardObj.image_url,
        card_content: this.cardObj.card_content,
        links: this.cardObj.links,
        tags: this.cardObj.tags
      }
      this.cardObj.title = ''
      this.cardObj.card_content = ''
      this.cardObj.image_url = ''
      this.cardObj.link = ''
      this.$store.dispatch('createCard', finishedCard)
    },

    cardCreated () {
      this.ifCreated = true
    },
    addLink () {
      if (this.cardObj.link) {
        this.cardObj.links.push(this.cardObj.link)
        this.cardObj.link = ''
      }
    },
    removeLink (l) {
      this.cardObj.links.splice(this.cardObj.links.indexOf(l), 1)
    },
    createFile (f) {
      let reader = new FileReader()
      reader.onload = (e) => {
        var text = reader.result
        this.cardObj.card_content = markdown.toHTML(text)
      }
      reader.readAsText(f)
    },
    addMarkdown (e) {
      let file = e.target.files || e.dataTransfer.files
      if (file.length > 1) {
        alert('Only one markdown file can be uploaded')
        return
      } else if (file[0].type !== 'text/markdown') {
        alert('Only markdown files can be uploaded')
        return
      }
      this.createFile(file[0])
    }
  }
}
</script>
