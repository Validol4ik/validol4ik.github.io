<template>
  <main id="case-views" class="main case-page">
    <go-back-section />
    <main-info-section :case-obj="dataObj" />
		<purpose-section 
			:purpose="dataObj.purpose"
      :solution="dataObj.solution"
      :works="dataObj.worksFields"
		/>
		<related-cases :current-id="dataObj.id" />
    <go-back-section />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import MainInfoSection from "@/components/caseSingle/MainInfoSection.vue";
import GoBackSection from "@/components/global/GoBackSection.vue";
import PurposeSection from "@/components/caseSingle/PurposeSection";
import RelatedCases from "@/components/caseSingle/RelatedCases";

export default {
  name: "Case",
  components: {
    MainInfoSection,
    PurposeSection,
    GoBackSection,
    RelatedCases,
  },
  computed: {
    ...mapGetters('cases', ["caseSingle"]),
    dataObj() {
      return this.caseSingle(this.$route.params.slug);
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 576px) {
  .case-page {
    padding: 20px 0;
  }
}
</style>
