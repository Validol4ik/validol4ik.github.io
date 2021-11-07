<template>
  <main class="main about">
    <about-section />
    <my-experience title="Work experience" :list="works" />
    <my-experience title="Education" :list="education" />
    <skills-section />
    <related-cases title="Some of my projects" />
  </main>
</template>

<script>
import SkillsSection from '@/components/aboutPage/SkillsSection.vue'
import RelatedCases from '@/components/caseSingle/RelatedCases.vue'
import AboutSection from '@/components/aboutPage/AboutSection.vue'
import MyExperience from '@/components/aboutPage/MyExperience.vue'

export default {
  components: {
    SkillsSection,
    RelatedCases,
    AboutSection,
    MyExperience
  },
  data() {
    return {
      works: [
        {
          id: 0,
          title: 'InternetDevels',
          time: '2020 - now',
          desc: 'Developed frontend and backend for web applications. Sometimes I developed sites on WordPres',
          active: true
        }
      ],
      education: [
        {
          id: 0,
          title: 'TVC of LNTU',
          time: '2018 - 2021',
          desc: 'Computer injenering'
        },
        {
          id: 1,
          title: 'Oxit School',
          time: '2020 (5 month)',
          desc: 'Wordpress developing'
        },
        {
          id: 2,
          title: 'Lutsk NTU',
          time: '2021 - now',
          desc: 'Ciber security',
          active: true
        }
      ]
    }
  }
}
</script>
