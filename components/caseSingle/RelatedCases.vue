<template>
  <section class="related">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <cases-list :cases="relatedCases" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import CasesList from '@/components/global/CasesList.vue'
export default {
  name: 'RelatedCases',
  components: {
    CasesList
  },
  props: {
    title: {
      type: String,
      default: 'Other Cases'
    },
    projectId: {
      type: Number,
      default: () => null
    }
  },
  computed: {
    ...mapGetters('cases', ['cases']),
    relatedCases() {
      const randCases = []
      let filteredCases = ''

      if (this.projectId) {
        filteredCases = this.cases.filter((item) => item.id !== this.projectId)
      } else {
        filteredCases = this.cases
      }

      while (randCases.length < 3) {
        const randNum = Math.floor(Math.random() * filteredCases.length)

        if (randCases.includes(filteredCases[randNum])) continue
        else randCases.push(filteredCases[randNum])
      }

      return randCases
    }
  }
}
</script>

<style lang="scss">
.related {
  max-width: 100%;
  &__title {
    margin-bottom: 30px;
    font-size: 36px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }
}
</style>
