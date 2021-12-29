<template>
  <section class="case-header">
    <div class="container">
      <div class="header-content">
        <h1 class="case-header__title">{{ project.name }}</h1>
        <ul class="case-stats">
          <li class="stat">
            <p class="stat__title">{{ $t('type') }}</p>
            <h3 class="stat__value">{{ project.type }}</h3>
          </li>
          <li class="stat">
            <p class="stat__title">{{ $t('deadline') }}</p>
            <h3 class="stat__value">{{ project.time }}</h3>
          </li>
          <li class="stat">
            <p class="stat__title">{{ $t('budget') }}</p>
            <h3 class="stat__value">{{ project.price }}</h3>
          </li>
          <li v-if="project.siteUrl" class="stat">
            <vs-button
              class="stat__btn"
              :href="project.siteUrl"
              size="large"
              blank
              danger
              >{{ $t('siteUrl') }}</vs-button
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="case-header__img" :style="imgStyle"></div>
  </section>
</template>

<script>
export default {
  name: 'CaseHeader',
	props: {
		project: {
			type: Object,
			default: () => {},
		}
	},
  computed: {
    imgStyle() {
      if (!this.project.preview) {
        return ''
      }
      return {
        background: `center / cover no-repeat url("${require(`@/assets/img/cases/${this.project.preview}`)}") fixed`
      }
    }
  }
}
</script>

<style lang="scss">
.case-header {
  padding-top: 150px;
  overflow: hidden;
  position: relative;
  margin-top: -113px;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.85;
  }
  .header-content {
    position: relative;
    z-index: 5;
  }
  &__title {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 58px;
    letter-spacing: 3px;
    color: #fff;
  }
	@media (max-width: 575px) {
		&__title {
			font-size: 40px;
		}
	}
}
.case-stats {
  margin-top: 150px;
  display: flex;
  background: #fff;
  border-radius: 25px;
  justify-content: space-around;
  padding: 30px 12px;
  .stat {
    &__title {
      margin-bottom: 8px;
      color: #000;
    }
    &__value {
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0.4px;
      font-size: 24px;
    }
    &__btn {
      padding: 4px 2px;
    }
  }

	@media (max-width: 991px) {
		margin-top: 120px;
		padding: 24px 0;
		.stat {
			&__title {
				margin-bottom: 6px;
				font-size: 14px;
			}
			&__value {
				font-size: 16px;
			}
			&__btn {
				padding: 0;
			}
		}
	}

	@media (max-width: 575px) {
		.stat {
			&__value {
				letter-spacing: 0.3px;
				font-size: 20px;
			}
		}
	}

	@media (max-width: 575px) {
		display: none;
	}
}
</style>
