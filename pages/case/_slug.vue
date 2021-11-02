<template>
  <main id="case-views" class="main case-page">
    <go-back-section />
    <main-info-section :case-obj="dataObj" />
    <related-cases :current-id="dataObj.id" />
    <go-back-section />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import MainInfoSection from '@/components/caseSingle/MainInfoSection.vue'
import GoBackSection from '@/components/global/GoBackSection.vue'
import RelatedCases from '@/components/caseSingle/RelatedCases'

export default {
  name: 'Case',
  components: {
    MainInfoSection,
    GoBackSection,
    RelatedCases
  },
  computed: {
    ...mapGetters('cases', ['caseSingle']),
    dataObj() {
      return this.caseSingle(this.$route.params.slug)
    }
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
