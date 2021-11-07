<template>
  <main id="case-views" class="main case-page">
    <case-header />
    <main-info-section />
    <solved-tasks />
    <related-cases :project-id="caseSingle($route.params.slug).id" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import CaseHeader from '@/components/caseSingle/CaseHeader'
import MainInfoSection from '@/components/caseSingle/MainInfoSection.vue'
import SolvedTasks from '@/components/caseSingle/SolvedTasks.vue'
import RelatedCases from '@/components/caseSingle/RelatedCases'

export default {
  name: 'Case',
  components: {
    CaseHeader,
    MainInfoSection,
    SolvedTasks,
    RelatedCases
  },
  provide() {
    return {
      project: this.caseSingle(this.$route.params.slug)
    }
  },
  data() {
    return {
      project: {}
    }
  },
  computed: {
    ...mapGetters('cases', ['caseSingle'])
  }
}
</script>

<style lang="scss">
@media (min-width: 576px) {
  .case-page {
    padding: 20px 0;
  }
}
</style>
