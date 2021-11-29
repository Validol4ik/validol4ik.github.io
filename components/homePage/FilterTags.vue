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
      this.fetchCases(this.selected)
    }
  },
  methods: {
    ...mapActions('cases', ['fetchCases'])
  }
}
</script>

<style lang="scss">
.filter-tags {
  max-width: 300px;
}
</style>
