<template>
  <header class="header">
    <div class="container">
      <portfolio-profile :author="author" />
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
	props: {
		author: {
			type: Object,
			default: () => {},
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
}
@media (max-width: 450px) {
  .header {
    .container {
      flex-direction: column;
    }
    .profile {
      margin-bottom: 20px;
    }
  }
}
</style>
