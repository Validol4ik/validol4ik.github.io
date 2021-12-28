<template>
  <section class="main-about">
    <div class="container">
      <div class="position-wrapper">
        <div class="developer">
          <h1 class="developer__name">{{ $t('whoAmI') }}</h1>
          <p class="developer__desc">{{ $t('excerpt') }}</p>
          <ul class="services">
            <li v-for="service in tags" :key="service.id" class="service">{{ service.name }}</li>
          </ul>
          <div class="nav-buttons">
            <vs-button class="nav-btn" danger size="large" @click="down()">
              {{ $t('projectBtn') }}
              <i class="bx bxs-down-arrow"></i>
            </vs-button>
            <vs-button 
							:to="localePath('/about')" 
							class="nav-btn" 
							danger 
							size="large" 
							border
							>{{ $t('aboutBtn') }}
						</vs-button>
          </div>
        </div>
        <img src="@/assets/img/mask.png" class="developer__preview" alt="My portret" />
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AboutMe',
	props: {
		tags: {
			type: Array,
			default: () => []
		}
	},
  methods: {
    down() {
      const cases = document.getElementById('cases-hook')
      cases.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
@keyframes blink {
  from {
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  55% {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.main-about {
  .position-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 339px) {
    padding-top: 20px;
  }
}
.developer {
  width: 52%;
  &__name {
    margin-bottom: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 58px;
    &::after {
      content: '_';
      color: #e34a57;
      animation: blink 1.2s ease-in-out 0.4s infinite, both;
    }
  }
  &__preview {
    width: 34%;
  }

  @media (max-width: 991px) {
    width: 80%;
    &__preview {
      display: none;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    &__name {
      font-size: 48px;
    }
  }
  @media (max-width: 575px) {
    &__name {
      font-size: 42px;
    }
  }
}
.services {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .service {
    font-weight: 700;
    font-size: 18px;
  }
  @media (max-width: 767px) {
    margin-top: 46px;
    flex-wrap: wrap;
    justify-content: center;
    .service {
      margin: 2px 12px;
    }
  }
}
.nav-buttons {
  display: flex;
  margin-top: 30px;
  .nav-btn {
    i {
      font-size: 13px;
      transform: translateY(1px);
      margin-left: 4px;
    }
  }
  @media (max-width: 767px) {
    margin-top: 46px;
    justify-content: center;
  }
}
</style>
