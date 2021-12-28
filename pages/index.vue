<template>
  <main class="main home">
    <about-me :tags="tags" />
    <cases-section :tags="tags" />
  </main>
</template>

<script>
import CasesSection from '@/components/homePage/CasesSection'
import AboutMe from '@/components/homePage/AboutMe.vue'

export default {
  components: {
    AboutMe,
    CasesSection
  },
	data() {
		return {
			tags: []
		}
	},
	watch: {
		'$route.query.lang': {
			handler() {
				this.loadTags()
			},
			deep: true,
			immediate: true
		}
	},
	methods: {
		async loadTags() {
			const addQuery = this.$route.query.lang === 'ru' ? '_ru' : ''

			const response = await fetch(`/db/tags${addQuery}.json`)
			this.tags = await response.json()
		},
	}
}
</script>
