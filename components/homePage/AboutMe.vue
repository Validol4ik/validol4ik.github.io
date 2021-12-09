<template>
  <section class="main-about">
    <div class="container">
      <div class="position-wrapper">
        <div class="developer">
          <h1 class="developer__name">Who am I</h1>
          <p class="developer__desc">
            Vivamus in lectus a tellus condimentum sagittis. Aenean placerat ut
            sapien fermentum imperdiet. Vestibulum vitae tristique nulla, at
            finibus elit.
          </p>
          <ul class="services">
            <li v-for="service in casesTags" :key="service.id" class="service">
              {{ service.name }}
            </li>
          </ul>
          <div class="nav-buttons">
            <vs-button class="nav-btn" danger size="large" @click="down()">
              Projects
              <i class="bx bxs-down-arrow"></i>
            </vs-button>
            <vs-button to="/about" class="nav-btn" danger size="large" border
              >About me</vs-button
            >
          </div>
        </div>
        <img
          src="@/assets/img/mask.png"
          class="developer__preview"
          alt="My portret"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AboutMe',
  computed: {
    ...mapGetters('cases-tags', ['casesTags'])
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
}
.services {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .service {
    font-weight: 700;
    font-size: 18px;
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
}
</style>
