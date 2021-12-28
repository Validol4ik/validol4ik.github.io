<template>
  <main class="main about">
    <about-section :author="author" />
    <my-experience title="Work experience" :list="works" />
    <my-experience title="Education" :list="education" />
    <skills-section :list="skills" />
    <related-cases title="Some of my projects" />
  </main>
</template>

<script>
import SkillsSection from '@/components/aboutPage/SkillsSection.vue'
import RelatedCases from '@/components/caseSingle/RelatedCases.vue'
import AboutSection from '@/components/aboutPage/AboutSection.vue'
import MyExperience from '@/components/aboutPage/MyExperience.vue'

export default {
  components: {
    SkillsSection,
    RelatedCases,
    AboutSection,
    MyExperience
  },
  data() {
    return {
      works: [],
      education: [],
			skills: [],
			author: {},
    }
  },
	watch: {
		'$route.query.lang': {
			handler() {
				this.loadData()
			},
			deep: true,
			immediate: true
		}
	},
	methods: {
		async loadData() {
			const addQuery = this.$route.query.lang === 'ru' ? '_ru' : ''
			const response = await fetch(`/db/author${addQuery}.json`)

			const author = await response.json()
			this.works = author.works
			this.education = author.education
			this.skills = author.skills
			this.author = author
		}
	},
}
</script>
