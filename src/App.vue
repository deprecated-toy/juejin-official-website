<template>
  <div class="container">
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<style>
.container{
  width: 80vw;
  text-align:justify;
}
</style>
<script lang="ts">
import { ref } from "vue";
import markdownText from "./assets/test.md?raw";
export default {
  setup() {
    //代码段识别有点问题，
    // 无法识别
    // ```bash
    // ```
    const text = ref(markdownText);

    return {
      text,
    };
  },
};
</script>

