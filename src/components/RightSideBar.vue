<template>
  <div class="container variable" :style="{'position': 'absolute', 'top': top, 'left': left}">
    <div class="top">
      <div class="text">目录</div>
    </div>
    <div class="bottom">
      <div class="list" v-for="(value, key) in data">
        <div class="title">{{ key }}</div>
        <div class="body" v-for="content in value">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.variable {
  --sidebar-width: 250px;
  --top-margin: 0 20px;
  --top-padding: 10px 0;
  --bottom-padding: var(--top-padding);

  --list-item-gap: 10px;
  --list-first-margin: 0 20px;
  --list-second-margin: 0 40px;
}

.container {
  width: var(--sidebar-width);
  background-color: #fff;
}

.container .top {
  margin: var(--top-margin);
  padding: var(--top-padding);
  font-weight: 500;
  font-size: 16px;
  line-height: 2.0rem;
  color: #1d2129;
  border-bottom: 1px solid #e4e6eb;
}

.container .bottom {
  line-height: 2.0rem;
  font-weight: 500;
  color: #1d2129;
  padding: var(--bottom-padding);
}

.container .bottom .title:hover,
.container .bottom .body:hover {
  background-color: #f7f8fa;
}

.container .bottom .title {
  margin: var(--list-first-margin);
  cursor: pointer;
}

.container .bottom .body {
  margin: var(--list-second-margin);
  cursor: pointer;
}

.active {
  border-left: 10px solid #1e80ff;
}
</style>

<script lang="ts">
export default
{
  name: "RightSideBar",
  props: {
    top: {
      type: String,
      default: "0",
    },
    left: {
      type: String,
      default: "0",
    },
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

