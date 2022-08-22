<template>
  <div class="entry" ref="scrollDiv" @scroll="onScroll">
    <div class="Wrapper">
      <div class="mainContainer">
        <div class="selectionbar">
          <span :class="select.recommend" @click="selectRecommend">推荐</span>
          <span class="division">|</span>
          <span :class="select.newest" @click="selectNewest">最新</span>
          <span class="division">|</span>
          <span :class="select.hotpoint" @click="selectHotpoint">热榜</span>
        </div>
        <div class="recommendWrapper">
          <div class="recommend" v-for="item in users">
            <Card :user="item"></Card>
          </div>
        </div>
      </div>
      <div class="expandContainer">
        <div class="container helloCard">
          <div class="topWrapper">
            <img class="icon" src="./assets/dir.png" />
            <div style="font-size: 20px; font-weight=600;margin-left: 10px;">
              下午好！
            </div>
            <a-button style="margin-left: 20px" type="primary">去签到</a-button>
          </div>
          <div id="hello">点亮你在社区的每一天</div>
        </div>

        <div class="container msgCard">
          <div class="textWrapper">
            <span >用户协议</span>
            <span >隐私政策</span>
            <span >关于我们</span>
          </div>
          <div class="msg">联系电话:1111111111</div>
          <div class="msg">联系电话:1111111111</div>
          <div class="msg">联系电话:1111111111</div>
          <div class="msg">联系电话:1111111111</div>
          <div class="msg">有事请不要联系我们</div>
          <div class="msg">有事请不要联系我们</div>
          <div class="msg">有事请不要联系我们</div>
          <div class="msg">有事请不要联系我们</div>
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
  height: 100vh;
  overflow: auto;
  user-select: none;
}
.Wrapper {
  width: 1000px;
  /* height: 100%; */
  /* background-color: white; */
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.entry .mainContainer {
  width: 750px;
  background-color: white;
}

.selectionbar {
  color: #8a919f;
  margin: 20px 20px;
  /* 取消文本焦点选中 */
}
.division {
  margin: 0 10px;
}
.select {
  /* color: #8a919f; */
  color: #007fff;
}
.recommendWrapper {
  width: 710px;
  margin: auto;
}

.entry .expandContainer {
  width: 230px;
  /* height: 200px; */
  background-color: #f4f5f5;
}
.expandContainer .container {
  background-color: white;
  border-radius: 4px;
  margin-bottom: 20px;
}
.expandContainer .helloCard {
  width: 100%;
  height: 100px;
}
.expandContainer .topWrapper {
  width: 100%;
  height: 50px;
  display: flex;
  padding-top: 10px;
}
.expandContainer .topWrapper .icon {
  width: 32px;
  height: 32px;
  /* margin-left: ; */
}
#hello {
  width: 100%;
  text-align: center;
  color: #525d6d;

}
.expandContainer .msgCard{
  width: 100%;
  height: 200px;
  font-size: 14px;
  color:#909090;
}
.expandContainer .msgCard .textWrapper{
  display: flex;
  justify-content: space-around;
  
}
.msgCard .msg{
  padding-left: 8px;
}


</style>

<script lang="ts">
import { reactive, ref } from "vue";
import Card from "./components/Card.vue";
import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
export default {
  components: {
    Card: Card,
    AButton: Button,
  },
  setup() {
    const users = reactive([
      {
        name: "mahoushoujyo",
        time: "2年前",
      },
      {
        name: "mahoushoujyo",
        time: "2年前",
      },
      {
        name: "mahoushoujyo",
        time: "2年前",
      },
      {
        name: "mahoushoujyo",
        time: "2年前",
      },
      {
        name: "mahoushoujyo",
        time: "2年前",
      },
      {
        name: "mahoushoujyo",
        time: "2年前",
      },
      {
        name: "mahoushoujyo",
        time: "2年前",
      },
    ]);
    const scrollDiv = ref();
    const select = reactive({
      recommend: "",
      newest: "",
      hotpoint: "",
    });
    const selectRecommend = () => {
      (select.recommend = "select"), (select.newest = ""), (select.hotpoint = "");
    };
    const selectNewest = () => {
      (select.recommend = ""), (select.newest = "select"), (select.hotpoint = "");
    };
    const selectHotpoint = () => {
      (select.recommend = ""), (select.newest = ""), (select.hotpoint = "select");
    };

    const onScroll = function () {
      let scrolltop = scrollDiv.value.scrollTop; //滚轮上端距离顶部高度
      let winHeight = scrollDiv.value.clientHeight; //界面视口高度
      let scrollHeight = scrollDiv.value.scrollHeight; //整个滚轮的高度
      let user = {
        name: "mahoushoujyo",
        time: "2年前",
      };

      if (scrolltop + winHeight + 1 >= scrollHeight) {
        users.push(user);
        users.push(user);
      }
    };

    return {
      select,
      selectRecommend,
      selectNewest,
      selectHotpoint,
      users,
      scrollDiv,
      onScroll,
    };
  },
};
</script>
