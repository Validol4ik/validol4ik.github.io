<template>
  <ul class="works">
    <work-item
      v-for="work in works"
      :key="work.id"
      :image="work.imgSrc"
      :desk="work.description"
      :is-right="work.id % 2 != 0"
    ></work-item>
  </ul>
</template>

<script>
import WorkItem from "./WorkItem.vue";
export default {
  name: "WorksList",
  components: {
    WorkItem,
  },
  props: {
    works: {
			type: Array,
			default: () => []
		},
  },
};
</script>

<style lang="scss">
.works {
  margin: 60px 0 0;
}
</style>
