<template>
  <li class="case" @click="$router.push({path: `/case/${caseObj.slug}`})">
    <div class="case__img">
      <img :src="imageSrc(caseObj.preview)" alt="case Image" class="image" />
      <h3 class="case__title">{{ caseObj.name }}</h3>
      <ul class="case-tags">
        <li
          v-for="tegObj in cardTags(caseObj.tags)"
          :key="tegObj.id"
					class="case__tag"
        >
          {{ tegObj.name }}
        </li>
      </ul>
    </div>
    <div class="content">
      <p class="case__excerpt">{{ caseObj.excerpt }}</p>
      <div class="other-info">
        <div class="visit">
          <icon-base><show-icon /></icon-base>
          <a :href="caseObj.siteUrl" class="case__url" target="_blank"
            >visit site</a
          >
        </div>
        <div class="deadline">
          <icon-base><clock-icon /></icon-base>
          <span class="case__time">{{ caseObj.time }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
import IconBase from "@/components/global/icons/IconBase";
import ShowIcon from "@/components/global/icons/ShowIcon";
import ClockIcon from "@/components/global/icons/ClockIcon";
export default {
  name: "CaseIteam",
  components: {
    IconBase,
    ShowIcon,
    ClockIcon,
  },
  props: {
    caseObj: {
			type: Object,
			default: () => {},
		},
  },
  computed: {
    ...mapGetters("cases-tags", ["cardTags"]),
  },
  methods: {
    imageSrc(preview) {
      return require(`@/assets/img/cases/${preview}`);
    },
    openCase(caseId) {
      this.$router.push({ name: "case", params: { id: caseId } });
    },
  },
};
</script>

<style lang="scss">
.case {
  width: 360px;
  background: #fff;
  box-shadow: 0 7px 14px rgba($color: #000, $alpha: 0.08 );
  border-radius: 22px;
  overflow: hidden;
  transition: 0.25s ease-in-out;
  user-select: none;
  position: relative;
	cursor: pointer;
	&__img {
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    background: #000;
    img {
      opacity: 0.8;
      transition: 0.25s ease-in-out;
      z-index: 0;
    }
  }
  &:hover {
    transform: translateY(4px);
    box-shadow: none;
    .case__img {
      img {
        transform: scale(1.15);
      }
    }
  }
  &__title {
    font-size: 32px;
		letter-spacing: 0.5px;
		font-family: "Montserrat", sans-serif;
    color: #fff;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  .case-tags {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  &__tag {
    padding: 4px 7px 5px;
    background: #fff;
    margin: 5px;
    border-radius: 9px;
    font-size: 14px;
    box-shadow: 0 4px 6px rgba($color: #000, $alpha: 0.2);
  }
  .content {
    padding: 15px 15px 60px 15px;
  }
  &__excerpt {
    line-height: 18px;
    letter-spacing: 0.045em;
  }
  .other-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    .visit,
    .deadline {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .visit {
      svg {
        transition: 0.25s;
      }
      &:hover {
        svg {
          transform: scaleY(0);
        }
      }
    }
  }
  &__url,
  &__time {
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.045em;
    margin-left: 6px;
  }
  &__url {
    color: #000;
    text-decoration: underline;
  }
}

@media (max-width: 400px) {
  .case {
    &__tag {
      font-size: 12px;
      border-radius: 7px;
    }
  }
}
</style>
