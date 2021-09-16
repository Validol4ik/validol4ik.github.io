<template>
  <section class="purpose">
    <div class="container">
      <div class="boxes">
        <p-box box-title="Main Problem" :text="purpose"
          ><icon-base width="49" height="65"
            ><exercises-icon /></icon-base></p-box>
        <p-box box-title="Solution" :text="solution"
          ><icon-base width="41" height="65"
            ><idea-icon /></icon-base></p-box>
      </div>
      <h2 class="works-title">Other solved tasks</h2>
      <works-list :works="works" />
    </div>
  </section>
</template>

<script>
import PBox from "@/components/caseSingle/PurposeBox";
import IconBase from "@/components/global/icons/IconBase";
import ExercisesIcon from "@/components/global/icons/ExercisesIcon";
import IdeaIcon from "@/components/global/icons/IdeaIcon";
import WorksList from "@/components/caseSingle/WorksList";

export default {
  name: "PurposeSection",
  components: {
    PBox,
    IconBase,
    ExercisesIcon,
    IdeaIcon,
    WorksList,
  },
  props: {
    purpose: {
			type: String,
			default: () => ''
		},
    solution: {
			type: String,
			default: () => ''
		},
    works: {
			type: Array,
			default: () => []
		},
  },
};
</script>

<style lang="scss">
.purpose {
  margin-top: 120px;
  .works-title {
    font-size: 36px;
    margin-top: 120px;
    text-align: center;
		font-family: "Montserrat", sans-serif;
  }
	svg {
		fill: #b02851;
	}
}
.boxes {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 991px) {
  .purpose {
    margin-top: 90px;
  }
  .boxes {
    flex-direction: column;
    align-items: center;
    .purpose-box {
      &:first-child {
        margin-bottom: 50px;
      }
    }
  }
}

@media (max-width: 575px) {
  .purpose {
    .works-title {
      font-size: 32px;
    }
  }
}
</style>
