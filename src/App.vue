<template>
  <div class="entry">
    <div class="maincontainer">
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
    <div class="commentContainer">
          <div class="myComment">
            <div style="font-size: 16px; font-weight: 800">评论</div>
            <div class="commentPlace">
              <div class="iconWrapper">
                <img class="icon" src="./assets/kenan.jpg" />
              </div>
              <div  class="comment">
                <textarea  id="textPlace" ></textarea>
                <div class="hideArea">
                </div>
              </div>
              
            </div>
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
}
.entry .maincontainer {
  width: 800px;
  margin: auto;
  background-color: white;
}
/* 正文部分 */
#maintitle{
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
.userContainer .userMsg{
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
  width: 100%;
  margin-top: 20px;
  margin-left: 0;
  background-color: red;
  border-radius: 3px;
}
.myComment{
  width:95% ;
}

.myComment .commentPlace {
 width: 95%;
 height:140px;
 margin: auto;
 /* margin-top: 10px; */
 display: flex;
 justify-content: space-around;
}

.myComment .iconWrapper {
  width: 5%;
}
.commentContainer .icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.commentPlace .comment{
  width:90%;
  height:100% ;

}

#textPlace{
  width: 100%;
  height: 65%;
}
.commentPlace .comment .hideArea{
  width: 100%;
  height: 30%;
  background-color: yellow;
}


</style>

<script lang="ts">
import { ref, reactive } from "vue";
import markdownText from "./assets/test.md?raw";
export default {
  setup() {
    const text = ref(markdownText);
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
    return {
      text,
      readerCount,
      btnStatus,
      changeBtnStatus,
    };
  },
};
</script>
