<template>
  <main class="main about">
    <about-section />
    <skills-section />
    <related-cases title="Some of my projects" />
  </main>
</template>

<script>
import SkillsSection from '@/components/aboutPage/SkillsSection.vue'
import RelatedCases from '@/components/caseSingle/RelatedCases.vue'
import AboutSection from '@/components/aboutPage/AboutSection.vue'

export default {
  components: {
    SkillsSection,
    RelatedCases,
    AboutSection
  }
}
</script>
