<template>
  <main class="main home">
    <about-me />
    <cases-section />
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import CasesSection from '@/components/homePage/CasesSection'
import AboutMe from '@/components/homePage/AboutMe.vue'

export default {
  components: {
    AboutMe,
    CasesSection
  },
  mounted() {
    this.fillTagsStore()
    this.fillCasesStore()
  },
  methods: {
    ...mapActions('cases-tags', ['fillTagsStore']),
    ...mapActions('cases', ['fillCasesStore'])
  }
}
</script>
