<template>
  <ul class="filter-tags">
    <cases-tag
      v-for="tag in casesTags"
			:key="tag.id"
			:tag-obj="tag"
      @filter="updateTags"
    />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CasesTag from "./CasesTag.vue";

export default {
  name: "FilterTags",
	components: {
    CasesTag,
  },
  data() {
    return {
      selectedTags: [],
    };
  },
  computed: {
    ...mapGetters("cases-tags", ["casesTags"]),
  },
  methods: {
    ...mapActions(["fetchCases"]),
    updateTags(tagId, bool) {
      if (bool) this.selectedTags.push(tagId);
      else {
        const elementIndex = this.selectedTags.findIndex(
          (item) => item === tagId
        );
        this.selectedTags.splice(elementIndex, 1);
      }
      this.fetchCases(this.selectedTags);
    },
  },
};
</script>

<style lang="scss">
.filter-tags {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 200px;
  li {
    margin: 8px;
  }
}

@media (max-width: 1199px) {
  .filter-tags {
    padding: 0 100px;
  }
}

@media (max-width: 991px) {
  .filter-tags {
    padding: 0;
  }
}
</style>
