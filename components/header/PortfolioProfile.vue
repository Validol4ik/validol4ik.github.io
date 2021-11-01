<template>
  <nuxt-link class="profile" to="/">
    <vs-avatar size="65">
      <img src="@/assets/img/avatar.webp" alt />
    </vs-avatar>
    <div class="profile-data">
      <h5 class="profile__name">Polishchuk Valentyn</h5>
      <span class="profile__post">Full stack Web Developer</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PortfolioProfile'
}
</script>

<style lang="scss">
.profile {
  display: flex;
  align-items: center;
  .profile-data {
    margin-left: 15px;
  }
  &__name {
    letter-spacing: 0.3px;
    font-weight: 700;
    font-size: 21px;
    margin-bottom: 5px;
  }
}
</style>
