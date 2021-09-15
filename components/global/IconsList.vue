<template>
  <ul class="icons-list">
    <li class="icons-item">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/valentyn-polishchyk-8a2435217/"
      >
        <icon-base>
					<lin-icon />
				</icon-base>
      </a>
    </li>
		<li class="icons-item">
      <a
        target="_blank"
        href="https://www.instagram.com/validol4ik12/"
      >
        <icon-base>
					<insta-icon />
				</icon-base>
      </a>
    </li>
		<li class="icons-item">
      <a
        target="_blank"
        href="https://t.me/valiidol4ik"
      >
        <icon-base>
					<telega-icon />
				</icon-base>
      </a>
    </li>
  </ul>
</template>

<script>
import IconBase from "@/components/global/icons/IconBase";
import TelegaIcon from "@/components/global/icons/Telega";
import InstaIcon from "@/components/global/icons/Insta";
import LinIcon from "@/components/global/icons/LinIcon";

export default {
  name: "IconsList",
  components: {
    IconBase,
    TelegaIcon,
		InstaIcon,
		LinIcon
  },
};
</script>

<style lang="scss">
$iconsHover: #b02851;
$iconsHoverFill: #fff;
$iconsBorder: #b02851;
$iconsFill: #000;

@media (min-width: 1199px) {
  .icons-item {
    &:hover {
      background: $iconsHover;
      path {
        fill: $iconsHoverFill;
      }
    }
  }
}
.icons-list {
  display: flex;
  align-items: center;
}
.icons-item {
  margin-left: 13px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $iconsBorder;
  border-radius: 17px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 42px;
  }
  svg {
    transition: 0.2s ease-in-out;
		path {
			fill: $iconsFill;
    }
  }
}
@media (max-width: 767px) {
  .icons-list {
    margin-top: 30px;
  }
}
</style>
