<template>
  <section class="case-header">
    <div class="container">
      <div class="header-content">
        <h1 class="case-header__title">{{ project.name }}</h1>
        <ul class="case-stats">
          <li class="stat">
            <p class="stat__title">Type of project</p>
            <h3 class="stat__value">{{ project.type }}</h3>
          </li>
          <li class="stat">
            <p class="stat__title">Deadline</p>
            <h3 class="stat__value">{{ project.time }}</h3>
          </li>
          <li class="stat">
            <p class="stat__title">Budget</p>
            <h3 class="stat__value">{{ project.price }}</h3>
          </li>
          <li v-if="project.siteUrl" class="stat">
            <vs-button
              class="stat__btn"
              :href="project.siteUrl"
              size="large"
              blank
              danger
              >Visit the site</vs-button
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
  inject: ['project'],
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
}
</style>
