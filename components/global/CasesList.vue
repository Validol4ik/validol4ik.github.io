<template>
  <ul class="cases-list">
    <vs-card
      v-for="project in cases"
      :key="project.slug"
      class="case"
      @click="$router.push({ path: `/case/${project.slug}` })"
    >
      <template #title>
        <h3 class="case__title">{{ project.name }}</h3>
      </template>
      <template #img>
        <img :src="require(`@/assets/img/cases/${project.preview}`)" alt="Project preview" />
      </template>
      <template #text>
        <p class="case__excerpt">{{ project.excerpt }}</p>
      </template>
      <template #interactions>
        <vs-button icon shadow>
          <i class="bx bxs-stopwatch"></i>
          <span class="deadline">{{ project.time }}</span>
        </vs-button>
        <vs-tooltip shadow>
          <vs-button :href="project.siteUrl" blank class="visit" icon danger>
            <i class="bx bx-link-external"></i>
          </vs-button>
          <template #tooltip>Visit site</template>
        </vs-tooltip>
      </template>
    </vs-card>
  </ul>
</template>

<script>
export default {
  name: 'CasesList',
  props: {
    cases: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.cases-list {
  margin-top: 30px;
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  gap: 40px;
  .case {
    .vs-card {
      height: 100%;
    }
    .deadline {
      margin-left: 3px;
    }
    &__title {
      font-size: 24px;
    }
    &__excerpt {
      line-height: 23px;
      font-size: 16px;
    }
  }
}
</style>
