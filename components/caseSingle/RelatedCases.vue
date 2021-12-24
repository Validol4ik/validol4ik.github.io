<template>
  <section class="related">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <cases-list :cases="relatedCases" />
    </div>
  </section>
</template>

<script>
import CasesList from '@/components/global/CasesList.vue'

export default {
  name: 'RelatedCases',
  components: {
    CasesList
  },
  props: {
    title: {
      type: String,
      default: 'Other Cases'
    },
    projectSlug: {
      type: String,
      default: () => null
    }
  },
	data() {
		return {
			cases: [],
		}
	},
  computed: {
    relatedCases() {
			let shuffledCases = this.cases
      shuffledCases = shuffledCases.sort(() => 0.5 - Math.random())

			return shuffledCases.slice(0, 3);
    }
  },
	mounted() {
		this.loadCases()
	},
	methods: {
		async loadCases() {
			const response = await fetch('/db/cases.json')

			this.cases = await response.json()
		}
	}
}
</script>

<style lang="scss">
.related {
  max-width: 100%;
  &__title {
    margin-bottom: 30px;
    font-size: 36px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }
}
</style>
