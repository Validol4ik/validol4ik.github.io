<template>
  <vs-select v-model="selected" danger class="filter-tags" filter multiple placeholder="Categories">
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

export default {
  name: 'FilterTags',
  data() {
    return {
      selected: []
    }
  },
  computed: {
    ...mapGetters('cases-tags', ['casesTags'])
  },
  watch: {
    selected() {
      this.updateTags()
    }
  },
  methods: {
    ...mapActions('cases', ['fetchCases']),
    updateTags() {
      this.fetchCases(this.selected)
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
</style>
