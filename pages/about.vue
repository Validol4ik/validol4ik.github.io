<template>
  <main class="main about">
    <about-section />
    <my-experience :title="$t('workExpTitle')" :list="works" />
    <my-experience :title="$t('eduTitle')" :list="education" />
    <skills-section :list="skills" />
    <related-cases :title="$t('someProjectsTitle')" />
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
    }
  },
	watch: {
		'$i18n.locale': {
			handler() {
				this.loadData()
			},
			deep: true,
			immediate: true
		}
	},
	methods: {
		async loadData() {
			const response = await fetch(`/db/${this.$i18n.locale}/about.json`)

			const author = await response.json()
			this.works = author.works
			this.education = author.education
			this.skills = author.skills
		}
	},
}
</script>
