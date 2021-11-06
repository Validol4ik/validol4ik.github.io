<template>
  <section class="about-section">
    <div class="container">
      <h4 class="pretitle">About me</h4>
      <div class="flex-wrapper">
        <div class="about-media">
          <img :src="imgSrc" alt="me" />
          <div class="layer"></div>
        </div>
        <div class="bio">
          <h1 class="bio-name">
            Polishchyk
            <br />Valentyn
          </h1>
          <p
            class="whatiam"
          >Proin imperdiet lacus quis odio aliquet, commodo scelerisque libero molestie. Duis fermentum nisi ut semper accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id volutpat enim, quis malesuada metus. Ut lobortis urna maximus.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  computed: {
    imgSrc() {
      return require(`@/assets/img/about.webp`)
    }
  }
}
</script>

<style lang="scss">
.pretitle {
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
  margin-bottom: 60px;
  color: rgba(0, 0, 0, 0.2);
}
.flex-wrapper {
  display: flex;
  justify-content: space-between;
}
.about-media {
  width: 32%;
  position: relative;
  img {
    max-width: 80%;
    border-radius: 16px;
  }
  .layer {
    position: absolute;
    right: 0;
    top: 0;
    width: 60%;
    height: 80%;
    background: rgba($color: #e34a57, $alpha: 0.2);
  }
}
.bio {
  width: 58%;
}
</style>
