<template>
  <section class="about-section">
    <div class="container">
      <h4 class="pretitle">About me</h4>
      <div class="flex-wrapper">
        <img src="@/assets/img/about.webp" class="portret" alt="me" />
        <div class="bio">
          <h1 class="bio-full-name">
            <span class="bio__title bio-name">Valentyn</span>
            <br />
            <span class="bio__title bio-last-name">Polishchyk</span>
          </h1>
          <p
            class="bio__desc"
          >Proin imperdiet lacus quis odio aliquet, commodo scelerisque libero molestie. Duis fermentum nisi ut semper accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id volutpat enim, quis malesuada metus. Ut lobortis urna maximus.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style lang="scss">
.flex-wrapper {
  display: flex;
  justify-content: space-between;
}
.portret {
  width: 25%;
  position: relative;
  border-radius: 16px;
}

.bio {
  width: 58%;
  .bio-full-name {
    margin-top: 40px;
    line-height: 65px;
  }
  &__title {
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
  &__desc {
    margin-top: 40px;
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 1px;
    padding-right: 80px;
  }
}
</style>
