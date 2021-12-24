<template>
  <main class="main home">
    <about-me />
    <cases-section :cases="cases" />
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
	data() {
		return {
			cases: [],
		}
	},
  mounted() {
		this.loadCases()
    this.fillTagsStore()
  },
  methods: {
    ...mapActions('cases-tags', ['fillTagsStore']),
		async loadCases() {
			const response = await fetch('/db/cases.json')

			this.cases = await response.json()
		}
  }
}
</script>
