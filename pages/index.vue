<template>
	<main class="main home">
    <header-section />
    <cases-section />
  </main>
</template>

<script>
import HeaderSection from "@/components/homePage/HeaderSection";
import CasesSection from "@/components/homePage/CasesSection";

export default {
	components: {
    HeaderSection,
    CasesSection,
  },
}
</script>
