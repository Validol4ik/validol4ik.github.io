<template>
  <div>
    <portfolio-header />
    <Nuxt />
    <portfolio-footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PortfolioHeader from '@/components/header/PortfolioHeader.vue'
import PortfolioFooter from '@/components/footer/PortfolioFooter.vue'

export default {
  components: {
    PortfolioHeader,
    PortfolioFooter
  },
  mounted() {
    this.fillTagsStore()
  },
  methods: {
    ...mapActions('cases-tags', ['fillTagsStore'])
  }
}
</script>
