<template>
  <form class="form">
    <h1 class="alpha">Submit a useful</h1>
    <ul class="form__items">
      <li>
        <label class="form__control">
          <span class="form__label">Title</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter title..." v-model="title" require required="required">
          </div>
        </label>
      </li>
      <li>
        <label class="form__control">
          <span class="form__label">Image URL</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter URL..." v-model="image" require required="required">
          </div>
        </label>
      </li>
      <li>
        <label class="form__control">
          <span class="form__label">Author</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter author name..." v-model="author" require required="required">
          </div>
        </label>
      </li>
      <li>
        <label class="form__control">
          <span class="form__label">External URL</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter external link..." v-model="link">
          </div>
        </label>
      </li>
      <li>
        <label class="form__control">
          <span class="form__label">Video URL</span>
          <div class="form__input-wrap">
            <input type="text" class="form__input" placeholder="Enter video URL..." v-model="video">
          </div>
        </label>
      </li>
      <li>
        <label class="form__control">
          <span class="form__label">Content</span>
          <div class="form__input-wrap">
            <textarea class="form__textarea" rows="10" placeholder="Enter content..." v-model="desc"></textarea>
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
import {firebase} from '@/components/List'
export default {
  data () {
    return {
      ifCreated: false,
      noImage: false,
      title: '',
      desc: '',
      image: '',
      author: '',
      link: '',
      video: '',
      links: []
    }
  },
  methods: {
    onSubmit () {
      if (this.image.length) {
        firebase.usedcard.push({
          title: this.title,
          desc: this.desc,
          image: this.image,
          author: this.author,
          links: this.links,
          video: this.video
        })
        this.cardCreated()
      } else {
        this.noImage = true
      }
    },
    cardCreated () {
      this.title = ''
      this.desc = ''
      this.image = ''
      this.author = ''
      this.link = ''
      this.video = ''
      this.ifCreated = true
    },
    addLink () {
      if (this.link) {
        this.links.push(this.link)
        this.link = ''
      }
    }
  }
}
</script>
