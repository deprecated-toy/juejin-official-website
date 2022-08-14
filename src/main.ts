import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//引入markdown文件预览组件（VMdPreview），来实现展示markdown到html上
import VMdPreview from '@kangc/v-md-editor/lib/preview'; 
import '@kangc/v-md-editor/lib/style/base-editor.css';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

//代码高亮
// highlightjs
import hljs from 'highlight.js';


VMdPreview.use(githubTheme, {
  Hljs: hljs
});



//初始化app
const app = createApp(App);
app.use(VMdPreview);
//   app.use(VueMarkdownEditor);
  app.mount('#app');
// const app=createApp(App).mount('#app')


