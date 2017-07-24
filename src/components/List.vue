<template>
    <ul class="card__list" name="fade" >
      <card v-for="c in $store.state.newState" :key="c.author_id " :cdata="c"></card>
    </ul>
</template>

<script>
import card from '@/components/Card'
export default {
  components: {
    card
  },
  data () {
    return {
      cardData: ''
    }
  },
  mounted () {
    this.cardData = this.$store.dispatch('getCardsData')
  }
}
</script>
