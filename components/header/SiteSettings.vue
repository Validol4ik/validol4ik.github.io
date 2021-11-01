<template>
  <div class="site-settings">
    <vs-switch v-model="darkMode" dark>
      <template #circle>
        <i v-if="!darkMode" class="bx bxs-moon"></i>
        <i v-else class="bx bxs-sun"></i>
      </template>
    </vs-switch>
    <vs-select v-model="lang" danger>
      <vs-option label="EN" value="EN">EN</vs-option>
      <vs-option label="RU" value="RU">RU</vs-option>
    </vs-select>
  </div>
</template>

<script>
export default {
  name: 'SiteSettings',
  data() {
    return {
      darkMode: false,
      lang: 'EN'
    }
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
