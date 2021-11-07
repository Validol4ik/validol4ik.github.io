<template>
  <header class="header">
    <div class="container">
      <div class="pseudo-nav">
        <portfolio-profile />
        <vs-select v-model="page" danger class="page-selector" placeholder="Select Page">
          <vs-option label="Home" value="home">Home</vs-option>
          <vs-option label="About Me" value="about">About Me</vs-option>
        </vs-select>
      </div>
      <site-settings />
    </div>
  </header>
</template>

<script>
import PortfolioProfile from './PortfolioProfile.vue'
import SiteSettings from '@/components/header/SiteSettings.vue'

export default {
  name: 'PortfolioHeader',
  components: {
    PortfolioProfile,
    SiteSettings
  },
  data() {
    return {
      page: 'home'
    }
  },
  watch: {
    page(value) {
      if (value === 'home') this.$router.push({ path: '/' })
      else if (value === 'about') this.$router.push({ path: '/about' })
    },
    $route(value) {
      switch (value.name) {
        case 'index':
          this.page = 'home'
          break
        case 'about':
          this.page = 'about'
          break
        default:
          this.page = ''
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 14px 0;
  z-index: 5;
  position: relative;
  background: rgba($color: #fff, $alpha: 0.8);
  transition: 0.29s;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pseudo-nav {
    display: flex;
    align-items: center;
  }
  .page-selector {
    max-width: 130px;
    margin-left: 30px;
  }
}
@media (max-width: 767px) {
  .header {
    .container {
      flex-direction: column;
    }
  }
}
</style>
