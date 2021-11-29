<template>
  <ul class="soc-links">
    <vs-button v-for="link in list" :key="link.id" :href="link.url" blank icon size="large" danger>
      <i :class="['bx', link.name] "></i>
    </vs-button>
  </ul>
</template>

<script>
export default {
  name: 'IconsList',
  data() {
    return {
      list: [
        {
          id: 0,
          name: 'bxl-telegram',
          url: 'https://t.me/valiidol4ik'
        },
        {
          id: 1,
          name: 'bxl-instagram-alt',
          url: 'https://www.instagram.com/valentynpolishchyk'
        },
        {
          id: 2,
          name: 'bxl-linkedin',
          url: 'https://www.linkedin.com/in/valentyn-polishchyk-8a2435217/'
        },
        {
          id: 3,
          name: 'bxl-github',
          url: 'https://github.com/validol4ik'
        }
      ]
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
