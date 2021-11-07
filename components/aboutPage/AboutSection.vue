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
            <span class="error">Valentyn</span>
            <br />
            <span class="error">Polishchyk</span>
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
    // box-shadow: 50px -10px 75px rgba($color: #e34a57, $alpha: 0.6);
  }
  .layer {
    position: absolute;
    border-radius: 16px;
    right: 0;
    top: 0;
    width: 60%;
    height: 80%;
    // z-index: -1;
    background: rgba($color: #e34a57, $alpha: 0.2);
  }
}
.bio {
  width: 58%;
  .whatiam {
    margin-top: 40px;
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 1px;
    padding-right: 80px;
  }
}
.bio-name {
  margin-top: 40px;
  line-height: 65px;
  span.error {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    letter-spacing: 12px;
    position: relative;

    &:last-child {
      margin-left: 80px;
    }

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      left: -5%;
      top: 50%;
      transform: translateY(-25%);
      height: 27%;
      z-index: -1;
      width: 106%;
      background: rgba($color: #e34a57, $alpha: 0.6);
    }
  }
}
</style>
