<template>
  <ul class="soc-links">
    <vs-button href="https://t.me/valiidol4ik" blank icon size="large" danger>
      <i class="bx bxl-telegram"></i>
    </vs-button>
    <vs-button href="https://www.instagram.com/valentynpolishchyk" blank icon size="large" danger>
      <i class="bx bxl-instagram-alt"></i>
    </vs-button>
    <vs-button
      href="https://www.linkedin.com/in/valentyn-polishchyk-8a2435217/"
      blank
      icon
      size="large"
      danger
    >
      <i class="bx bxl-linkedin"></i>
    </vs-button>
    <vs-button href="https://github.com/validol4ik" blank icon size="large" danger>
      <i class="bx bxl-github"></i>
    </vs-button>
  </ul>
</template>

<script>
export default {
  name: 'IconsList'
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
        color: #000;
      }
    }
  }
}
</style>
