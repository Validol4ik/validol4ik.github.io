<template>
  <section class="about-section">
    <div class="container">
      <h4 class="pretitle">{{ $t('aboutPretitle') }}</h4>
      <div class="flex-wrapper">
        <img src="@/assets/img/about.webp" class="portret" alt="me" />
        <div class="bio">
          <h1 class="bio-full-name">
            <span class="bio__title bio-name">{{ $t('firstName') }}</span>
            <br />
            <span class="bio__title bio-last-name">{{ $t('lastName') }}</span>
          </h1>
          <p class="bio__desc">{{ $t('authorDesc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
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
	@media (max-width: 1199px) {
		width: 28%;
	}
	@media (max-width: 991px) {
		width: 33%;
		height: 400px;
	}
	@media (max-width: 767px) {
		width: 44%;
		height: 420px;
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
	}
	@media (max-width: 575px) {
		width: 250px;
		height: 420px;
	}
}

.bio {
  width: 58%;
  .bio-full-name {
    margin-top: 40px;
    line-height: 65px;

		@media (max-width: 767px) {
			line-height: 30px;
		}
		@media (max-width: 375px) {
			line-height: 20px;
		}
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
	@media (max-width: 1199px) {
		width: 64%;
		&__desc {
    	padding-right: 50px;
  	}
	}
	@media (max-width: 991px) {
		width: 60%;
		&__desc {
    	padding-right: 0;
			margin-top: 20px;
			font-size: 18px;
			line-height: 27px;
			letter-spacing: 0.5px;
  	}
		&__title {
			font-size: 38px;
			letter-spacing: 9px;

			&:last-child {
				margin-left: 80px;
			}

			&::before {
				left: -4%;
				height: 24%;
				width: 105%;
			}
  	}
	}
	@media (max-width: 767px) {
		width: 100%;
		padding-top: 220px;
		z-index: 5;
		&__title {
			display: block;
			width: 80%;
			margin-left: 10%;
			&:last-child {
				margin-left: 10%;
				text-align: right;
			}
			&::before {
				height: 52%;
				top: 40%;
				background: rgba($color: #e34a57, $alpha: 0.7);
			}
  	}
		&__desc {
    	margin-top: 80px;
			font-size: 20px;
  	}
	}
	@media (max-width: 575px) {
		&__title {
			display: block;
			width: 95%;
			margin: 0 15px;
			&:last-child {
				margin: 0 15px;
				padding-left: 0;
				text-align: right;
			}
  	}
		&__desc {
    	text-align: center;
  	}
	}
	@media (max-width: 375px) {
		padding-top: 250px;
		&__title {
			font-size: 35px;
			letter-spacing: 7px;
			&::before {
				height: 90%;
				top: 30%;
				background: rgba($color: #e34a57, $alpha: 0.7);
			}
  	}
		&__desc {
    	font-size: 18px;
  	}
	}
}
</style>
