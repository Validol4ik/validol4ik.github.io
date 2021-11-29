<template>
  <section class="skills-section">
    <div class="container">
      <h1 class="section-title">My skills</h1>
      <ul class="skills">
        <li v-for="skill in skills" :key="skill.id" class="skill">
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
  data() {
    return {
      skills: [
        {
          id: 0,
          title: 'JavaScript',
          value: '85',
          desc: 'I had many experiance with js. Now it is my favorite language'
        },
        {
          id: 1,
          title: 'Vue 2/3',
          value: '80',
          desc: 'I have 3 months of experiance developing web apps with vue'
        },
        {
          id: 2,
          title: 'Nuxt',
          value: '70',
          desc: 'I use the framework as default. I realy used to use it'
        },
        {
          id: 3,
          title: 'WordPress',
          value: '80',
          desc: "I don't like to work with WordPress, but it is good solution for small projects"
        },
        {
          id: 4,
          title: 'Web design',
          value: '50',
          desc: 'I love creative and I get experience every day'
        },
        {
          id: 5,
          title: 'English',
          value: '45',
          desc: 'Now my level is B1. I study hard to improve the level'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;
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
}
</style>
