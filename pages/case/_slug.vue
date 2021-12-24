<template>
  <main id="case-views" class="main case-page">
    <case-header :project="project" />
    <main-info-section :project="project" />
		<my-experience title="Other solved tasks" :list="project.worksFields" />
    <related-cases :project-slug="$route.params.slug" />
  </main>
</template>

<script>
import CaseHeader from '@/components/caseSingle/CaseHeader'
import MainInfoSection from '@/components/caseSingle/MainInfoSection.vue'
import RelatedCases from '@/components/caseSingle/RelatedCases'
import MyExperience from '@/components/aboutPage/MyExperience.vue'

export default {
  name: 'Case',
  components: {
    CaseHeader,
    MainInfoSection,
    RelatedCases,
		MyExperience
  },
	data() {
		return {
			project: {},
		}
	},
  mounted() {
		this.caseBySlug()
  },
	methods: {
		async caseBySlug() {
			const response = await fetch(`/db/cases/${this.$route.params.slug}.json`)

			this.project = await response.json()
		}
	}
}
</script>

<style>
@media (min-width: 576px) {
  .case-page {
    padding: 20px 0;
  }
}
</style>
