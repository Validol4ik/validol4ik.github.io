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
		'$i18n.locale': {
			handler() {
				this.loadTags()
			},
			deep: true,
			immediate: true
		}
	},
	methods: {
		async loadTags() {
			const response = await fetch(`/db/${this.$i18n.locale}/tags.json`)

			this.tags = await response.json()
		},
	}
}
</script>
