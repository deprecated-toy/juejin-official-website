<template>
    <div class="container">
        <div class="userWrapper grayFont">
            <span>{{user.name}}</span>
            <span class="division">|</span>
            <span>{{user.time}}</span>
            <span class="division">|</span>
            <span>Java</span>        
        </div>
        <div class="content">美团面试官问我一个字符串的String.lenth()是多少</div>
        <div class="functionWrapper grayFont">
            <div class="item">
                <img class="icon" src="../assets/eye.png">
                <div class="grayFont">11.7w</div>
            </div>
            <div class="item">
                <img class="icon" src="../assets/pause.png">
                <div class="grayFont">11.7w</div>
            </div>
            <div class="item">
                <img class="icon" src="../assets/comment.png">
                <div class="grayFont">11.7w</div>
            </div>
        </div>
    </div>
</template>

<style>
.container{
    width: 720px;
    letter-spacing: 1px;
}
.container .division{
    margin: 0 10px;
}
.container .grayFont{
    font-size: 16px;
    color:#8a919f ;
    padding-right: 5px;
}
.container .userWrapper{
    width: 100%;
    height: 40px;
    padding: 10px 0;
    border-top: 1px solid #e7e9ed;
}
.container .content {
    font-size: 20px;
    font-weight: 700;
}
.container .functionWrapper{
    width: 50%;
    height: 40px;
    padding: 10px 0;
    display: flex;
    
}
.container .functionWrapper .item{
    width: 20%;
    display: flex;
    margin-right: 20px;
    justify-content: space-between;
    align-items: center;
}
.container .functionWrapper .item .icon{
    width: 20px;
    height: 20px;
}
</style>

<script lang="ts">
import { type } from 'os';
import { object } from 'vue-types';

export default {
    props:{
    user:{
        type :Object
    }
    
    },
    setup(props:any) {
        console.log(props.user);
    }
}


</script>