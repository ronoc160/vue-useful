<template>
  <div class="column">
    <form class=" is-half">
      <div class="field">
        <p class="control">
          <input class="input" type="text" placeholder="Enter title" v-model="title">
        </p>
      </div>
      <div class="field">
        <p class="control">
          <input class="input" type="text" placeholder="Enter url of image" v-model="image" require="">
        </p>
      </div>
      <div class="field">
        <p class="control">
          <input  type="file" name="file" @change="addDocuments">
          <ul>
            <li v-for="doc in documentArr" @click="removeDoc(doc)">{{doc.name}}</li>
          </ul>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <input class="input" type="text" placeholder="Enter author" v-model="author" require="">
        </p>
      </div>
      <div class="field">
        <p class="control">
          <input class="input" type="text" placeholder="Enter web link" v-model="link">
          <button class="button is-primary button--link" type="button" name="button" @click="addLink(link)">add</button>
          <ul>
            <li v-for="l in links" @click="removeLink(l)">{{l}}</li>
          </ul>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <input class="input" type="text" placeholder="Enter vido link" v-model="video">
        </p>
      </div>

      <div class="field">
        <p class="control">
          <textarea class="textarea" placeholder="Enter Descrition" v-model="desc"></textarea>
        </p>
      </div>
      <button class="button is-primary" type="button" name="button" @click="onSubmit()"  >Create Card</button>
      <p v-if="ifCreated">Thanks for creating this awsome super <b> Useful </b> tip head check <router-link to="/list" > check out some other one's</router-link>  </p>
      <b v-if="noImage">Please add an image URL</b>
    </form>
  </div>
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
      documents: '',
      links: [],
      documentArr: []
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
          video: this.video,
          documents: this.documentArr
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
    },
    addDocuments (e) {
      let file = e.target.files || e.dataTransfer.files
      this.createFile(file[0])
    },
    createFile (f) {
      let reader = new FileReader()
      reader.onload = (e) => {
        let fullFile = {
          result: e.target.result,
          name: f.name
        }
        this.documentArr.push(fullFile)
      }
      reader.readAsDataURL(f)
    },
    removeDoc (doc) {
      this.documentArr.splice(this.documentArr.indexOf(doc), 1)
    },
    removeLink (l) {
      this.links.splice(this.links.indexOf(l), 1)
    }
  }
}
</script>
