<template>
  <header class="header">
    <div class="container">
      <portfolio-profile />
      <icons-list />
    </div>
  </header>
</template>

<script>
import PortfolioProfile from "./PortfolioProfile.vue";
import IconsList from "@/components/global/IconsList.vue";
export default {
  name: "PortfolioHeader",
  components: {
    PortfolioProfile,
    IconsList,
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 25px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media (max-width: 767px) {
  .header {
    .container {
      flex-direction: column;
    }
  }
}
</style>
