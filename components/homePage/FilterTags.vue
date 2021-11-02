<template>
  <!-- <ul class="filter-tags">
    <cases-tag
      v-for="tag in casesTags"
			:key="tag.id"
			:tag-obj="tag"
      @filter="updateTags"
    />
  </ul>-->
  <vs-select v-model="selected" class="filter-tags" filter multiple placeholder="Categories">
    <vs-option
      v-for="tag in casesTags"
      :key="tag.id"
      :label="tag.name"
      :value="tag.id"
    >{{ tag.name }}</vs-option>
  </vs-select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import CasesTag from './CasesTag.vue'

export default {
  name: 'FilterTags',
  // components: {
  //   CasesTag
  // },
  data() {
    return {
      selected: []
    }
  },
  computed: {
    ...mapGetters('cases-tags', ['casesTags'])
  },
  methods: {
    ...mapActions('cases', ['fetchCases']),
    updateTags(tagId, bool) {
      if (bool) this.selectedTags.push(tagId)
      else {
        const elementIndex = this.selectedTags.findIndex(
          (item) => item === tagId
        )
        this.selectedTags.splice(elementIndex, 1)
      }
      this.fetchCases(this.selectedTags)
    }
  }
}
</script>

<style lang="scss">
.tags-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.filter-tags {
  max-width: 300px;
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
