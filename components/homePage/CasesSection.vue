<template>
  <section id="cases-hook" class="cases-section">
    <div class="container">
      <h3 class="section-title">My recent projects</h3>
      <vs-select v-model="selectedTags" danger class="filter-tags" filter multiple placeholder="Categories">
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
			const addQuery = this.$route.query.lang === 'ru' ? '_ru' : ''

			const response = await fetch(`/db/cases${addQuery}.json`)
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
</style>
