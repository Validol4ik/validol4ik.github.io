<template>
  <section class="skills-section">
    <div class="container">
      <h1 class="section-title">My skills</h1>
      <ul class="skills">
        <li v-for="skill in list" :key="skill.id" class="skill">
          <h6 class="skill__title">{{skill.title}}</h6>
          <div class="skill__value">
            <p class="percents">{{skill.value}}%</p>
            <span class="ranger">
              <span class="ranger__value" :style="{width: skill.value + '%'}"></span>
            </span>
          </div>
          <p class="skill__desc">{{skill.desc}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  props: {
		list: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss">
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;
  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    gap: 46px 150px;
  }
  @media (max-width: 991px) {
    gap: 40px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 359px) {
    gap: 30px;
  }
}
.skill {
  padding: 20px 35px;
  box-shadow: 0 8px 20px rgba($color: #000, $alpha: 0.07);
  border-radius: 14px;

  &__title {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #e34a57;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    text-align: center;
  }

  &__value {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    .percents {
      font-family: 'Montserrat', sans-serif;
      font-size: 26px;
      font-weight: 700;
    }
    .ranger {
      display: inline-block;
      height: 3px;
      width: 100%;
      background: rgba($color: #000, $alpha: 0.07);
      position: relative;
      &__value {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #e34a57;
      }
    }
  }

  &__desc {
    font-size: 15px;
    text-align: center;
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
    margin: 0 auto;
  }

  @media (max-width: 359px) {
    padding: 20px;
  }
}
</style>
