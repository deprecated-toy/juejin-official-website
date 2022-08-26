<template>
  <div class="container variable">
    <div class="top">
      <div class="text">目录</div>
    </div>
    <div class="bottom">
      <div v-for="(value, key) in data">
        <div class="title"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.variable {
  --sidebar-width: 300px;
  --title-margin: 0 1.667rem;
  --title-padding: 1.333rem 0;
}

.container {
  width: var(--sidebar-width);
  background-color: #fff;
}

.container .top {
  margin: var(--title-margin);
  padding: var(--title-padding);
  font-weight: 500;
  font-size: 16px;
  line-height: 2rem;
  color: #1d2129;
  border-bottom: 1px solid #e4e6eb;
}
</style>

<script lang="ts">
export default
{
  name: "RightSideBar",
  setup() {
    const data: any = {
      "前言": [
          "非全局注册模式",
          "全局注册模式"
      ],
      "Vue3+Vite中配置全局的less": []
    };

    return {
      data
    };
  }
}
</script>

