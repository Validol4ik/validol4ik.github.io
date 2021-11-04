<template>
  <section class="abot-me">
    <div class="container">
      <div class="abot-me-content">
        <div class="me-data">
          <h1 class="abot-me__name">Who am I</h1>
          <p
            class="abot-me__info"
          >Vivamus in lectus a tellus condimentum sagittis. Aenean placerat ut sapien fermentum imperdiet. Vestibulum vitae tristique nulla, at finibus elit.</p>
          <ul class="posts">
            <li class="post">Web app</li>
            <li class="post">Wordpress</li>
            <li class="post">Landing</li>
            <li class="post">Store</li>
            <li class="post">Layout</li>
            <li class="post">Design</li>
          </ul>
          <div class="media-nav">
            <div class="buttons">
              <vs-button class="nav-btn" danger size="large" @click="down()">
                Projects
                <i class="bx bxs-down-arrow"></i>
              </vs-button>
              <vs-button to="/about" class="nav-btn" danger size="large" border>
                About
                <i class="bx bxs-right-arrow"></i>
              </vs-button>
            </div>
          </div>
        </div>
        <div class="me-content">
          <img :src="mascSrc" alt />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import IconsList from '@/components/global/IconsList.vue'

export default {
  name: 'AboutMe',
  // components: {
  //   IconsList
  // },
  computed: {
    mascSrc() {
      return require('@/assets/img/mask.png')
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
.abot-me {
  &__name {
    margin-bottom: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 58px;
    &::after {
      content: '_';
      color: #e34a57;
    }
  }
  .media-nav {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  .buttons {
    display: flex;
    .nav-btn {
      i {
        font-size: 13px;
        transform: translateY(1px);
        margin-left: 4px;
      }
    }
  }
}
.abot-me-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .me-data {
    width: 52%;
  }
  .posts {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .post {
      font-weight: 700;
      font-size: 18px;
    }
  }
  .me-content {
    width: 34%;
    img {
      max-width: 100%;
    }
  }
}
</style>
