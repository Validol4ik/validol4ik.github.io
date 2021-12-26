<template>
  <div class="site-settings">
    <vs-switch v-model="darkMode" danger>
      <template #circle>
        <i v-if="darkMode" class="bx bxs-moon"></i>
        <i v-else class="bx bxs-sun"></i>
      </template>
    </vs-switch>
    <vs-select v-model="lang" danger>
      <vs-option label="EN" value="en">EN</vs-option>
      <vs-option label="RU" value="ru">RU</vs-option>
    </vs-select>
  </div>
</template>

<script>
export default {
  name: 'SiteSettings',
  data() {
    return {
      darkMode: false,
      lang: 'en'
    }
  },
  watch: {
    darkMode() {
      this.htmlTag.classList.toggle('darkmode')
    },
		lang(newValue) {
			this.$router.push(
				{ 
					query: {
						lang: newValue
					} 
				}
			)
		},
  },
  beforeMount() {
    this.htmlTag = document.querySelector('html')

		if (this.$route.query.lang)
			this.lang = this.$route.query.lang
  }
}
</script>

<style lang="scss">
.site-settings {
  display: flex;
  align-items: center;
  .vs-select {
    width: 70px;
    margin-left: 15px;
  }
}
</style>
