<template>
  <footer class="footer">
    <div class="container">
      <div class="content-wrapper">
        <icons-list :list="author.social" />
        <h3 class="footer__title">{{author.firstName}} {{author.lastName}}</h3>
      </div>
    </div>
  </footer>
</template>

<script>
import IconsList from '@/components/global/IconsList.vue'

export default {
  name: 'PortfolioFooter',
  components: {
    IconsList
  },
	props: {
		author: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="scss">
.footer {
  padding: 40px 0;
  margin-top: 180px;
  background: #fff;
  box-shadow: 0 -40px 110px rgba(#000, 0.035);
  .content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
  }
}

@media (max-width: 575px) {
  .footer {
    .content-wrapper {
      flex-direction: column;
    }
    &__title {
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>
