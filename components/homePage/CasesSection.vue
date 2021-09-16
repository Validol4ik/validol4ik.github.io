<template>
  <section id="cases-hook" class="cases-section">
    <div class="container">
      <h3 class="section-title">A few of my recent projects</h3>
      <filter-tags />
      <cases-list :cases="cases" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import FilterTags from "./FilterTags.vue";
import CasesList from "@/components/global/CasesList";

export default {
  name: "CasesSection",
  components: {
    CasesList,
    FilterTags,
  },
  computed: {
    ...mapGetters('cases', ["cases"]),
  },
};
</script>

<style lang="scss">
.cases-section {
  padding-top: 15px;
  .section-title {
    font-size: 38px;
    text-align: center;
		font-family: 'Montserrat', sans-serif;
  }
  .filter-tags {
    margin-top: 30px;
  }
}

@media (max-width: 767px) {
  .cases-section {
    padding-top: 70px;
    .section-title {
      font-size: 30px;
    }
  }
}
</style>
