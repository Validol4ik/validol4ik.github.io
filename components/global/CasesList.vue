<template>
  <ul class="cases-list">
    <case-item
      v-for="caseObj in cases"
      :key="caseObj.slug"
      :case-obj="caseObj"
    />
  </ul>
</template>

<script>
import CaseItem from './CaseItem.vue'

export default {
  name: 'CasesList',
  components: {
    CaseItem,
  },
  props: {
    cases: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.cases-list {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  min-height: 450px;
  .case {
    margin-bottom: 50px;
  }
  .case:not(:nth-child(3n)) {
    margin-right: 30px;
  }
}

@media (max-width: 1199px) {
  .cases-list {
    justify-content: space-between;
    padding: 0 80px;
    .case {
      margin-bottom: 65px;
    }
    .case:not(:nth-child(3n)) {
      margin-right: 0;
    }
  }
}

@media (max-width: 991px) {
  .cases-list {
    justify-content: space-between;
    padding: 0;
    .case {
      margin-bottom: 35px;
      width: 345px;
    }
  }
}

@media (max-width: 767px) {
  .cases-list {
    justify-content: space-around;
    .case {
      margin-bottom: 50px;
      width: 380px;
    }
  }
}
</style>
