<template>
  <ul class="soc-links">
    <vs-button v-for="link in list" :key="link.id" :href="link.url" blank icon size="large" danger>
      <i :class="['bx', link.icon] "></i>
    </vs-button>
  </ul>
</template>

<script>
export default {
  name: 'IconsList',
  props: {
		list: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss">
.soc-links {
  display: flex;
  align-items: center;
  .vs-button {
    i {
      font-size: 24px;
      transition: 0.2s;
    }
    &:hover {
      i {
        color: #2c3e50;
      }
    }
  }
}
</style>
