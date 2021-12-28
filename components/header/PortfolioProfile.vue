<template>
  <nuxt-link class="profile" :to="localePath('/')">
    <vs-avatar size="65">
      <img src="@/assets/img/avatar.webp" alt="Avatar" />
    </vs-avatar>
    <div class="profile-data">
      <h5 class="profile__name">{{ $t('firstName') }} {{ $t('lastName') }}</h5>
      <span class="profile__post">{{ $t('post') }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PortfolioProfile',
	props: {
		author: {
			type: Object,
			default: () => {},
		}
	}
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
