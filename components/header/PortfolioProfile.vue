<template>
  <nuxt-link class="profile" to="/">
		<div class="img-wrapper">
      <img class="image" src="@/assets/img/avatar.webp" alt="Portrait" />
    </div>
    <div class="wrapper">
      <h5 class="profile__name">Polishchuk Valentyn</h5>
      <span class="profile__specialization">Full stack Web Developer</span>
    </div>
	</nuxt-link>
</template>

<script>
export default {
  name: "PortfolioProfile",
};
</script>

<style lang="scss">
$mon: 'Montserrat', sans-serif;
.profile {
  display: flex;
  align-items: center;
  cursor: pointer;
  &__name {
    font-family: $mon;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 10px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      display: inline-block;
      width: 32px;
      height: 1px;
      background: #b02851;
    }
  }
  &__specialization {
    font-family: 'PTSans', sans-serif;
    font-size: 17px;
  }
}
.img-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 30px;
  overflow: hidden;
  margin-right: 20px;
}
</style>
