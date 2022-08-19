<template >
  <div class="entry" ref="scrollDiv" @scroll="onScroll" >
    <div class="maincontainer"  >
      <h2 id="maintitle">山寨版掘金官网</h2>
      <div class="userContainer">
        <img id="userIcon" src="./assets/kenan.jpg" />
        <div class="userMsg">
          <div id="userName" style="width: 700px">mahoushoujyo</div>
          <div class="timeContainer">
            <span>2022年08月13日 </span>
            <span>15:29</span>
            <span> · 阅读 {{ readerCount }}</span>
          </div>
        </div>
        <div style="width: 120px">
          <button :class="btnStatus.className" @click="changeBtnStatus">
            {{ btnStatus.btncontent }}
          </button>
        </div>
      </div>

      <v-md-preview style="margin-left: 0" :text="text"></v-md-preview>
      
      <div class="tagWrapper">
        <div class="tagContainer">
          <div class="tagName">分类:</div>
          <div class="tagValue">前端</div>
        </div>
        <div class="tagContainer">
          <div class="tagName">标签:</div>
          <div class="tagValue">前端</div>
        </div>
      </div>
    </div>

    <div class="commentContainer" >
      <div class="myCommentTitle">评论</div>
      <div class="myCommentWrapper">
        <div class="iconWrapper">
          <img class="icon" src="./assets/kenan.jpg" />
        </div>
        <div class="inputAreaWrapper">
          <a-textarea
            class="inputArea"
            @change="textchange"
            :auto-size="{ minRows: 3 }"
            v-model:value="inputValue"
            placeholder="请输入评论(Enter换行)"
            @click="showHideArea"
          ></a-textarea>
          <div class="hideArea" :style="hide">
            <div class="emojiWrapper">
              <div class="emoji">
                <img class="emojiIcon" src="./assets/smile.png" />
                <span class="emojiText">表情</span>
              </div>
              <div class="emoji">
                <img class="emojiIcon" src="./assets/picture.png" />
                <span class="emojiText">图片</span>
              </div>
            </div>
            <a-button type="primary" :disabled="btnCommentStatus">发表评论</a-button>
          </div>
        </div>

        
      </div>
    </div>
<!-- 处理Card组件就完事了 -->
    <div class="recommendContainer">
      <div class="title">相关推荐</div>
      <div class="recommend" v-for="item in users">
        <Card :user="item"></Card>
      </div>
    </div>
    
  </div>
</template>

<style>
body {
  background-color: #f4f5f5;
}

.entry {
  width: 100vw;
  height: 100vh;
  overflow:auto;
}
.entry .maincontainer {
  /* 正文宽度 */
  width: 800px;
  /* height: 200px; */
  overflow: auto;
  margin: 20px auto;
  border-radius: 4px;
  background-color: white;
}
/* 正文部分 */
#maintitle {
  width: 100%;
  height: 20px;
  padding: 20px 20px;
}
.userContainer {
  width: 750px;
  height: 60px;
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
}

#userIcon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.userContainer .userMsg {
  /* 不写高度，让文本行高撑起高度 */
  width: 550px;
  line-height: 20px;
  letter-spacing: 1px;
}
#userName {
  color: #515b70;
}

.userContainer .userMsg .timeContainer {
  color: #8f94ab;
}

/* 关注按钮未点击 */

button {
  border-radius: 8px;
  background-color: #f4f9ff;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  /* 设置鼠标样式 */
  cursor: pointer;
  transition: border-color 0.25s;
}

.btnUnclick,
.btnUnclick:focus {
  outline: none;
  width: 110px;
  border-color: #8ebfff;
  color: #1e80ff;
}
.btnUnclick:hover {
  outline: none;
  width: 110px;
  border-color: #8ebfff;
  background-color: #e8f2ff;
  color: #1e80ff;
}

/* 关注按钮被点击 */
.btnClick,
.btnClick:focus {
  outline: none;
  width: 110px;
  border-color: #a7aab2;
  color: #515767;
}

.tagWrapper {
  display: flex;
  width: 250px;
  padding: 20px 20px;
  font-size: 14px;
  justify-content: space-around;
}
.tagWrapper .tagContainer {
  display: flex;
  width: 100px;
  letter-spacing: 1px;
}
.tagContainer .tagValue {
  width: 50px;
  border-radius: 3px;
  background-color: #f2f3f5;
  text-align: center;
  color: #72819a;
  margin-left: 10px;
}
.tagValue:hover {
  background-color: #e4e6eb;
}

/*##### comment #####*/

.commentContainer {
  width: 800px;
  margin: auto;
  /* margin-bottom: 100px; */
  border-radius: 4px;
  background-color: white;
}
.myCommentTitle {
  font-size: 20px;
  font-weight: 800;
  padding: 20px 20px;
}
.myCommentWrapper {
  width: 750px;
  padding-bottom: 10px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  /* background-color: black; */
}
.iconWrapper {
  width: 40px;
  /* background-color: red; */
}
.iconWrapper .icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.inputAreaWrapper {
  width: 650px;
}
.inputAreaWrapper .inputArea {
  width: 100%;
}
.inputAreaWrapper .hideArea {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hideArea .emojiWrapper {
  width: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.emoji {
  width: 50px;
  height: 20px;
  display: flex;
  justify-content: space-around;
}
.emoji .emojiIcon {
  width: 20px;
  height: 20px;
}
.emoji .emojiText {
  color: #8a919f;
  font-size: 12px;
}
.recommendContainer{
  width:800px ;
  background-color: white;
  margin: auto;
  margin-top: 20px;
  border-radius: 4px;
}

.recommendContainer .title{
  margin-left: 20px;
  padding: 20px 0;
  font-size: 20px;
}
.recommendContainer .recommend{
  width: 750px;
  margin: auto;
}

</style>

<script lang="ts">
import { ref, reactive,onMounted,onUnmounted } from "vue";
import markdownText from "./assets/test.md?raw";
import { Textarea, Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Card from "./components/Card.vue"
import Card1 from "./components/Card.vue";

export default {
  components: {
    ATextarea: Textarea,
    AButton: Button,
    Card: Card,
    Card1
},
  setup() {
    
    const testIndex = ref(1)
    const users = reactive([{
      name:"mahoushoujyo",
      time:"2年前"
    }])
    
    const text = ref(markdownText);
    const inputValue = ref<String>("");
    const btnCommentStatus = ref<boolean>(true);
    const readerCount = ref(538);
    const btnStatus = reactive({
      active: false,
      className: "btnUnclick",
      btncontent: "+ 关注",
    });
    const changeBtnStatus = () => {
      if (!btnStatus.active) {
        btnStatus.active = true;
        btnStatus.className = "btnClick";
        btnStatus.btncontent = "√ 已关注";
        return;
      }
      btnStatus.active = false;
      btnStatus.className = "btnUnclick";
      btnStatus.btncontent = "＋ 关注";
    };
    const hide = ref<String>("display: none;");
    const showHideArea = () => {
      hide.value = "";
    };

    const textchange = function () {
      if (text.value != "") {
        btnCommentStatus.value = false;
      }
    };
    const scrollDiv = ref();
    
    const onScroll = function (){
      let scrolltop = scrollDiv.value.scrollTop;//滚轮上端距离顶部高度
      let winHeight = scrollDiv.value.clientHeight;//界面视口高度
      let scrollHeight = scrollDiv.value.scrollHeight;//整个滚轮的高度
      let user = {
        name:'mahoushoujyo',
        time:'两年前'
      }
      
      if(scrolltop + winHeight+1 >= scrollHeight){

        users.push(user);
        users.push(user);
      }
      
    };
    // onMounted(()=>{
    //   onScroll();
    // })
    
    

    return {
      text,
      readerCount,
      btnStatus,
      changeBtnStatus,
      hide,
      showHideArea,
      inputValue,
      textchange,
      btnCommentStatus,
      users,
      scrollDiv,
      onScroll
    };
  },
};
</script>
