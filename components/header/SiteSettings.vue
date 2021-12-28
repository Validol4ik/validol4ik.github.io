<template>
  <div class="site-settings">
    <vs-switch v-model="darkMode" danger>
      <template #circle>
        <i v-if="darkMode" class="bx bxs-moon"></i>
        <i v-else class="bx bxs-sun"></i>
      </template>
    </vs-switch>
    <vs-select v-model="lang" danger>
      <vs-option 
				v-for="locale in $i18n.locales" 
				:key="locale.code" 
				:label="locale.name" 
				:value="locale.code"
				>{{ locale.name }}
			</vs-option>
    </vs-select>
  </div>
</template>

<script>
export default {
  name: 'SiteSettings',
  data() {
    return {
      darkMode: false,
      lang: '',
    }
  },
  watch: {
    darkMode() {
      this.htmlTag.classList.toggle('darkmode')
    },
		lang(newValue) {
			this.$i18n.setLocale(newValue)
		},
  },
  beforeMount() {
		this.lang = this.$i18n.locale
    this.htmlTag = document.querySelector('html')
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
