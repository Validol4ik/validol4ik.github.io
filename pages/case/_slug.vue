<template>
  <main id="case-views" class="main case-page">
    <case-header :project="project" />
    <!-- <main-info-section />
    <solved-tasks />
    <related-cases :project-slug="$route.params.slug" />-->
  </main>
</template>

<script>
import CaseHeader from '@/components/caseSingle/CaseHeader'
// import MainInfoSection from '@/components/caseSingle/MainInfoSection.vue'
// import SolvedTasks from '@/components/caseSingle/SolvedTasks.vue'
// import RelatedCases from '@/components/caseSingle/RelatedCases'

export default {
  name: 'Case',
  components: {
    CaseHeader
    // MainInfoSection,
    // SolvedTasks,
    // RelatedCases
  },
  data() {
    return {
      project: {}
    }
  },
  async beforeMount() {
    const response = await fetch(`/db/cases/${this.$route.params.slug}.json`)

    const project = await response.json()
    if (project) {
      this.project = project
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
