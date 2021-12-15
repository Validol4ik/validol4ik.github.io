<template>
  <section class="my-exp">
    <div class="container">
      <h1 class="section-title">{{ title }}</h1>
      <ul class="exp-list">
        <li v-for="item in list" :key="item.id" :class="['exp-item', {active: item.active}]">
          <h2 class="exp-item__title">
            {{item.title}}
            <br />
            <span class="exp-item__time">{{item.time}}</span>
          </h2>
          <p class="exp-item__desc">{{ item.desc }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyExperience',
  props: {
    title: {
      type: String,
      default: () => 'My Work experience'
    },
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.exp-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;

  @media (max-width: 1199px) {
    gap: 22px;
  }

  @media (max-width: 991px) {
    gap: 46px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  .exp-item {
    padding: 60px 35px;
    box-shadow: 0 8px 20px rgba($color: #000, $alpha: 0.07);
    border-radius: 14px;
    &__title {
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0.5px;
      font-size: 26px;
      margin-bottom: 18px;
    }
    &__time {
      font-size: 20px;
      font-family: 'PTSans', sans-serif;
    }
    &__desc {
      font-size: 18px;
      line-height: 25px;
    }
    &.active {
      background: #e34a57;
      color: #fff;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      padding: 40px 20px;
    }
    @media (max-width: 767px) {
      width: 100%;
      max-width: 335px;
      margin: 0 auto;
      padding: 45px 25px;
    }
  }
}
</style>
