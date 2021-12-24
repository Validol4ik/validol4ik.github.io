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
	mounted() {
		this.loadData()
	},
	methods: {
		async loadData() {
			const response = await fetch('/db/author.json')

			this.author = await response.json()
		}
	},
}
</script>
