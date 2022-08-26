<template>
  <div class="container variable" :style="{'position': 'absolute', 'top': top, 'left': left}">
    <ul>
      <li><div class="icon"><img alt="thumbs" src="/src/assets/thumbs.svg"></div></li>
      <li><div class="icon"><img alt="chatbox" src="/src/assets/chatbox.svg"></div></li>
      <li><div class="icon"><img alt="star" src="/src/assets/star.svg"></div></li>
      <li data-popout><div class="icon"><img alt="share" src="/src/assets/share.svg"></div></li>
    </ul>
    <div id="line"></div>
    <ul>
      <li><div class="icon"><img alt="report" src="/src/assets/report.svg"></div></li>
      <li><div class="icon"><img alt="immerse" src="/src/assets/immerse.svg"></div></li>
    </ul>
  </div>
</template>

<style scoped>
.variable {
  --sidebar-item-width: 48px;
  --sidebar-item-height: 48px;
  --sidebar-item-margin: 0 0 20px 0;
  --icon-width: 20px;
  --icon-height: var(--icon-width);
  --icon-origin-opacity: 0.5;
  --icon-hover-opacity: 0.75;
}

.container {
  width: var(--sidebar-item-width);
  position: absolute;
}

.container ul {
  width: 100%;
  list-style-type: none;
}

.container ul li {
  width: var(--sidebar-item-width);
  height: var(--sidebar-item-height);
  margin: var(--sidebar-item-margin);
}

.container ul li .icon {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
}

.container ul li .icon img {
  position: absolute;
  inset: 50%;
  width: var(--icon-width);
  height: var(--icon-height);
  transform: translate(-50%, -50%);
  background-color: #fff;
  opacity: var(--icon-origin-opacity);
  transition: 0.5s;
}

.container ul li .icon:hover img {
  opacity: var(--icon-hover-opacity)
}

.container #line {
  width: 100%;
  height: 1px;
  margin: var(--sidebar-item-margin);
  background-color: #e4e6eb;
}
</style>

<script lang="ts">
import {onMounted, Ref, ref} from "vue";

export default {
  name: "LeftSideBar",
  props: {
    top: {
      type: String,
      default: "0",
    },
    left: {
      type: String,
      default: "0",
    }
  }
}
</script>