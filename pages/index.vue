<template>
  <main class="main home">
    <about-me />
    <cases-section />
  </main>
</template>

<script>
import CasesSection from '@/components/homePage/CasesSection'
import AboutMe from '@/components/homePage/AboutMe.vue'

export default {
  components: {
    AboutMe,
    CasesSection
  },
}
</script>
