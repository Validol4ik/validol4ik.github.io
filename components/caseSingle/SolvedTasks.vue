<template>
  <section class="solved-tasks">
    <div class="container">
      <h2 class="section-title">Other solved tasks</h2>
      <ul class="other-tasks">
        <li
          v-for="task in project.worksFields"
          :key="task.id"
          :class="['task', { active: active == task.id }]"
          @click="active = task.id"
        >
          <h4 class="task__title">{{ task.title }}</h4>
          <p class="task__excerpt">{{ task.excerpt }}</p>
        </li>
      </ul>
      <div class="tasks-view">
        <p class="task__text">{{ project.worksFields[active].description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolvedTasks',
  inject: ['project'],
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
.other-tasks {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  .task {
    border-radius: 14px;
    padding: 40px 30px;
    background: #fff;
    box-shadow: 0 8px 20px rgba($color: #000, $alpha: 0.06);
    cursor: pointer;
    transition: 0.2s;
    &__title {
      font-size: 22px;
      letter-spacing: 0.5px;
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 10px;
    }
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 16px rgba($color: #000, $alpha: 0.08);
    }
    &.active {
      background: #e34a57;
      transform: translateY(-3px);
      cursor: default;
      color: #fff;
    }
  }
}
.tasks-view {
  margin-top: 40px;
  min-height: 50px;
  p {
    font-size: 18px;
    padding: 0 30px;
  }
}
</style>
