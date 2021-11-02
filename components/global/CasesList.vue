<template>
  <ul class="cases-list">
    <vs-card
      v-for="project in cases"
      :key="project.slug"
      class="case"
      @click="openCase(project.slug)"
    >
      <template #title>
        <h3>{{ project.name }}</h3>
      </template>
      <template #img>
        <img :src="imageSrc(project.preview)" alt />
      </template>
      <template #text>
        <p>{{ project.excerpt }}</p>
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
  },
  methods: {
    imageSrc(preview) {
      return require(`@/assets/img/cases/${preview}`)
    },
    openCase(slug) {
      this.$router.push({ path: `/case/${slug}` })
    }
  }
}
</script>

<style lang="scss">
.cases-list {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 40px;
  .case {
    .vs-card {
      height: 100%;
    }
    .deadline {
      margin-left: 3px;
    }
    h3 {
      font-size: 24px;
    }
    p {
      line-height: 23px;
      font-size: 16px;
    }
  }
}
</style>
