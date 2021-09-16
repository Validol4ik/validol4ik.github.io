<template>
	<main class="main about">
		<go-back-section />
    <skills-section />
		<related-cases title="Some of my projects" />
		<go-back-section />
  </main>
</template>

<script>
import SkillsSection from '@/components/aboutPage/SkillsSection.vue'
import GoBackSection from "@/components/global/GoBackSection.vue";
import RelatedCases from '@/components/caseSingle/RelatedCases.vue'

export default {
	components: {
		SkillsSection,
		GoBackSection,
		RelatedCases,
	}
};
</script>
