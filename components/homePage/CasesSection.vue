<template>
  <section id="cases-hook" class="cases-section">
    <div class="container">
      <h3 class="section-title">{{ $t('recentTitle') }}</h3>
      <vs-select 
				v-model="selectedTags"
				filter
				color="danger"
				multiple
				class="filter-tags" 
				:placeholder="$t('categories')">
				<vs-option
					v-for="tag in tags"
					:key="tag.id"
					:label="tag.name"
					:value="tag.id"
				>{{ tag.name }}</vs-option>
			</vs-select>
      <cases-list :cases="filteredCases" />
    </div>
  </section>
</template>

<script>
import CasesList from '@/components/global/CasesList'

export default {
  name: 'CasesSection',
	components: {
    CasesList,
  },
	props: {
		tags: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			cases: [],
			filteredCases: [],
			selectedTags: [],
		}
	},
	watch: {
    selectedTags(tags) {
      this.filterCases(tags)
    },
		'$route.query.lang': {
			handler() {
				this.loadCases()
			},
			deep: true,
			immediate: true
		}
  },
	methods: {
		async loadCases() {

			const response = await fetch(`/db/${this.$i18n.locale}/cases.json`)

			this.cases = await response.json()
			this.filteredCases = this.cases
		},
		filterCases(tags) {
			if (tags.length < 1 || tags.length === this.tags.length)
				this.filteredCases = this.cases
			else {
				this.filteredCases = this.cases.filter((item) => {
					let checkIncludes = false
					tags.forEach((tag) => {
						if (item.tags.includes(tag)) checkIncludes = true
					})
					return checkIncludes
				})
			}
		}
  }
}
</script>

<style lang="scss">
.filter-tags {
  max-width: 300px;
  @media (max-width: 767px) {
    margin: 0 auto;
  }
}
.cases-section {
	min-height: 400px;
}
</style>
