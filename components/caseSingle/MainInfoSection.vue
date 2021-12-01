<template>
  <section class="case-single">
    <div class="container">
      <div class="case-info-wrapper">
        <img
          :src="require(`@/assets/img/cases/${project.image}`)"
          class="case-single__preview"
          alt="Case image"
        />
        <div class="case-target">
          <h4 class="pretitle">About the case</h4>
          <h2 class="case-single__title">{{ project.name }}</h2>
          <p class="case-single__desc">{{ project.description }}</p>
          <div class="avatars">
            <h6 class="case-single__members">Contributors</h6>
            <vs-avatar-group max="6">
              <vs-avatar v-for="member in project.contributors" :key="member.id" size="65">
                <img :src="require(`@/assets/img/contributors/${member.avatar}`)" alt="Member" />
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
  inject: ['project']
}
</script>

<style lang="scss" scoped>
.case-single {
  &__preview {
    width: 38%;
    height: 590px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
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
}
.case-info-wrapper {
  display: flex;
  justify-content: space-between;

  .case-target {
    width: 56%;
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
