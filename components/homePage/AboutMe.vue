<template>
  <section class="main-about">
    <div class="container">
      <div class="position-wrapper">
        <div class="developer">
          <h1 class="developer__name">Who am I</h1>
          <p
            class="developer__desc"
          >Vivamus in lectus a tellus condimentum sagittis. Aenean placerat ut sapien fermentum imperdiet. Vestibulum vitae tristique nulla, at finibus elit.</p>
          <ul class="services">
            <li class="service">Web app</li>
            <li class="service">Wordpress</li>
            <li class="service">Landing</li>
            <li class="service">Store</li>
            <li class="service">Layout</li>
            <li class="service">Design</li>
          </ul>
          <div class="nav-buttons">
            <vs-button class="nav-btn" danger size="large" @click="down()">
              Projects
              <i class="bx bxs-down-arrow"></i>
            </vs-button>
            <vs-button to="/about" class="nav-btn" danger size="large" border>About</vs-button>
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
  methods: {
    down() {
      const cases = document.getElementById('cases-hook')
      cases.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
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
