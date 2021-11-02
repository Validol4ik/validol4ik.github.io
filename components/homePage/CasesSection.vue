<template>
  <section id="cases-hook" class="cases-section">
    <div class="container">
      <h3 class="section-title">My recent projects</h3>
      <filter-tags />
      <cases-list :cases="cases" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterTags from './FilterTags.vue'
import CasesList from '@/components/global/CasesList'

export default {
  name: 'CasesSection',
  components: {
    CasesList,
    FilterTags
  },
  computed: {
    ...mapGetters('cases', ['cases'])
  }
}
</script>
