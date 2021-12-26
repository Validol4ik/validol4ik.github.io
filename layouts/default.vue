<template>
  <div>
    <portfolio-header :author="author" />
    <Nuxt />
    <portfolio-footer :author="author" />
  </div>
</template>

<script>
import PortfolioHeader from '@/components/header/PortfolioHeader.vue'
import PortfolioFooter from '@/components/footer/PortfolioFooter.vue'

export default {
  components: {
    PortfolioHeader,
    PortfolioFooter
  },
	data() {
		return {
			author: {},
		}
	},
	watch: {
		'$route.query.lang': {
			handler() {
				this.loadData()
			},
			deep: true,
			immediate: true
		}
	},
	mounted() {
		this.loadData()
	},
	methods: {
		async loadData() {
			const addQuery = this.$route.query.lang === 'ru' ? '_ru' : ''
			const response = await fetch(`/db/author${addQuery}.json`)

			this.author = await response.json()
		}
	},
}
</script>
