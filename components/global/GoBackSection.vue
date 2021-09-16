<template>
  <section class="go-back">
    <div class="container">
			<nuxt-link class="go-back__button" to="/"><span class="go-back__arrows">{{ arrows }}</span> Retun to home</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "GoBackSection",
  data() {
    return {
      arrows: "<< ",
    };
  },
};
</script>

<style lang="scss">
.go-back {
  padding: 45px 0;
	&__arrows {
    display: inline-block;
    margin-right: 8px;
    transition: 0.2s ease-in-out;
  }
  &__button {
    font-family: "PTSans", sans-serif;
    font-weight: 400;
    padding: 10px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
    &:hover {
      .go-back__arrows {
        transform: translateX(-6px);
      }
    }
  }
  &__text {
    text-decoration: underline;
  }
}
</style>
