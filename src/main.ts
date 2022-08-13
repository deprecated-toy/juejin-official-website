import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//使用markdown编辑器（v-md-editor）
// import VueMarkdownEditor from '@kangc/v-md-editor';
// import Prism from 'prismjs';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
//引入markdown文件预览组件（VMdPreview），来实现展示markdown到html上
import VMdPreview from '@kangc/v-md-editor/lib/preview'; 
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';


// VueMarkdownEditor.use(vuepressTheme, {
//     Prism,
//   });
VMdPreview.use(vuepressTheme);
const app = createApp(App);
app.use(VMdPreview);
//   app.use(VueMarkdownEditor);
  app.mount('#app');
// const app=createApp(App).mount('#app')


