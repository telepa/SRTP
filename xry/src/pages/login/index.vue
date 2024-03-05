<template>
<div>
<div class="bg">
<image class="background" src='' mode='scaleToFill'></image>
</div>
<image class="logo" :src='imgURL'></image>
<div class="content">
<div class="nicheng">昵称：</div>
<div class="input-wrap">
  <input @change="inputUsername"  class="info-input" type="nickname"  placeholder="请输入昵称"/>
</div>

<div class="mima">密码：</div>
<div class="input-wrap">
  <input  @change="inputPassword"
  class="info-input" placeholder="请输入密码"/>
</div>

<button @click="login" class="action">登录</button>
<button @click="navigatetoG" class="register">注册</button>
</div>
</div>
</template>
<script>
import global from "@/components/global";
    export default{
      data() {
          return{
            username:'',
            password:'',
            imgURL:'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/logo.png'
          }
      },
      methods:{
        login(){
          this.$axios
          .post('/login', {
            user_name: this.username,
            pwd: this.password
          })
          .then(successResponse => {        
            global.id = successResponse.data.id;
            if (successResponse.data.code == 400) {
              wx.showToast({
                title:'登陆成功' ,
                icon: 'success'
              });
              wx.redirectTo({
                 url: '/pages/firstview/main'
                }),
                global.username=this.username
            }else{
              wx.showToast({
                title: '账号或密码错误',
                icon: 'fail'
                })
            }
          })
          .catch(failResponse => {
            console.log(failResponse);
          })
        },
      navigatetoG(){
        wx.redirectTo({
        url: '/pages/register/main'
      }
        )
      },
      inputUsername(e){
        this.username = e.mp.detail.value
      },
      inputPassword(e){
        this.password = e.mp.detail.value
      }    
     }
  }
</script>
<style>
.input-wrap {
  width: 400rpx;
  height:50rpx;
  flex-direction: row;
  margin-top: 80rpx;
  border-bottom:solid #ffced9;
  margin-left: 175rpx;
  font-size: 36rpx;
}

.info-input {
inset:10rpx;
width: 400rpx;
}

.action {
margin-top: 130rpx;
margin-left: 65rpx;
background-color: #fcd0df;
color: rgb(255, 255, 255);
font-family: Arial, Helvetica, sans-serif;
width:270rpx;
height:100rpx;
font-size: 42rpx;
}

.register {
margin-top: -100rpx;
margin-left: 425rpx;
background-color: #fcd0df;
color: white;
font-family: Arial, Helvetica, sans-serif;
width:270rpx;
height:100rpx;
font-size: 42rpx;
}

.nicheng{
color: #ffced9;
font-family: Arial, Helvetica, sans-serif;
width:400rpx;
height:10rpx;
margin-left: 175rpx;
margin-top: -60rpx;
font-size: 43rpx;
}

.mima {
margin-top: 40rpx;
color: #ffced9;
font-family: Arial, Helvetica, sans-serif;
width:400rpx;
height:10rpx;
margin-left: 175rpx;
font-size: 43rpx;
}

.background{
  height:100%;
  width:100%;
  position: absolute;
  z-index: -100;
}

.bg{
  height: 100%;
  width:100%;
  top:0;
  position: absolute;
}

.content{
  flex-direction: column;
  align-items: center;
  padding: 200rpx 0;
  height:500rpx;
  margin-top:-50rpx;
}

.logo{
  height:350rpx;
  margin-top:120rpx;
  margin-left:150rpx;
  width:60%;
}

</style>