<template>
  <section class="case-single">
    <div class="container">
      <div class="case-content">
        <div class="case-content__preview">
          <img :src="imageSrc('cases/' + project.image)" class="image" alt="case image" />
        </div>
        <div class="case-desc">
          <h4 class="case-content__about">About the case</h4>
          <h2 class="case-content__title">{{ project.name }}</h2>
          <p class="case-content__desc">{{ project.description }}</p>
          <div class="avatars">
            <h6 class="case-content__members">Contributors</h6>
            <vs-avatar-group max="6">
              <vs-avatar v-for="member in project.contributors" :key="member.id" size="65">
                <img :src="imageSrc('contributors/' + member.avatar)" alt />
              </vs-avatar>
            </vs-avatar-group>
          </div>
          <div class="tasks">
            <div class="task">
              <i class="task__icon bx bxs-notepad"></i>
              <h6 class="task__title">Problem</h6>
              <p class="task__text">{{ project.purpose }}</p>
            </div>
            <div class="task">
              <i class="task__icon bx bxs-message-square-check"></i>
              <h6 class="task__title">Solution</h6>
              <p class="task__text">{{ project.solution }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainInfoSection',
  inject: ['project'],
  methods: {
    imageSrc(image) {
      return require(`@/assets/img/${image}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.case-content {
  display: flex;
  justify-content: space-between;
  &__preview {
    width: 38%;
    height: 590px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .case-desc {
    width: 56%;
  }
  &__about {
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.5px;
    margin-bottom: 60px;
    color: rgba($color: #000, $alpha: 0.2);
  }
  &__title {
    font-size: 36px;
    font-family: 'Montserrat', sans-serif;
  }
  &__desc {
    line-height: 24px;
    font-size: 18px;
    margin: 30px 0 20px;
  }
  &__members {
    font-size: 24px;
    margin-bottom: 5px;
    letter-spacing: 0.5px;
  }
  .vs-avatar__group {
    justify-content: flex-start;
  }
}

.tasks {
  display: flex;
  justify-content: space-between;
  .task {
    margin-top: 30px;
    width: 46%;
    &__icon {
      color: #e34a57;
      font-size: 46px;
    }
    &__title {
      font-size: 24px;
      margin: 10px 0 5px;
    }
  }
}
</style>
