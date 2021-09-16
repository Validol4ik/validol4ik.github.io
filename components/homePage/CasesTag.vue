<template>
  <li
    :class="['cases-tag', isActive ? 'active' : '']"
    @click="toggleActive(tagObj.id)"
  >
    {{ tagObj.name }}
  </li>
</template>

<script>
export default {
  name: "CasesTag",
	props: {
    tagObj: {
			type: Object,
			default: () => {},
		},
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive(tagId) {
      this.isActive = !this.isActive;
      this.$emit("filter", tagId, this.isActive);
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 1199px) {
  .cases-tag {
    &:hover {
      background: #b02851;
      color: #fff;
    }
  }
}

.cases-tag {
  border: 2px solid #b02851;
  padding: 4px 10px 6px;
  font-size: 16px;
  color: #000;
  border-radius: 13px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  &.active {
    background: #b02851;
    transform: translateY(4px);
    color: #fff;
  }
}
</style>
