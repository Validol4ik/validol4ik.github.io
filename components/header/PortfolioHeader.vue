<template>
  <header class="header">
    <div class="container">
      <portfolio-profile />
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
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 14px 0;
  z-index: 5;
  position: relative;
  background: rgba($color: #fff, $alpha: 0.45);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
