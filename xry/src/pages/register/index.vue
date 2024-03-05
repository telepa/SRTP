<template>
<div>
<div class="bg">
<image class="background" src='' mode='scaleToFill'></image>
</div>
<image class="logo" :src='imgURL'></image>
<div class="content">
  <div class="nicheng">昵称：</div>
<div class="input-wrap">
  <input  @change="inputUsername"
  class="info-input" type="nickname" placeholder="请输入昵称"/>
</div>
<div class="mima">密码：</div>
<div class="input-wrap">
  <input @change="inputPassword"
  class="info-input" placeholder="请输入密码"/>
</div>
<button  class="action" @click="register">点击注册</button>
</div>
</div>
</template>

<script>
  export default{
    data() {
      return{
        username:'',
        password:'',
        imgURL: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/logo.png'
      }
    },
    methods:{
      register(){
          console.log(this.username);
          console.log(this.password);
          this.$axios
          .post('/RegisterIn', {
            user_name: this.username,
            pwd: this.password
          })
          .then(successResponse => {
            console.log(successResponse.data.code);
            if (successResponse.data.code == 400) {
              wx.redirectTo({
                 url: '/pages/firstview/main'
                })
            }
          })
          .catch(failResponse => {
            console.log(failResponse);
          })
          wx.redirectTo({
            url: '/pages/login/main'
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
  margin-top: 90rpx;
  border-bottom: solid #ffced9;
  margin-left: 175rpx;
  font-size: 36rpx;
}

.info-input {
  inset:10px;
  width: 400rpx;
}

.action {
  margin-top: 120rpx;
  background-color: #fcd0df;
  color: rgb(255, 255, 255);
  font-family: Arial, Helvetica, sans-serif;
  width:420rpx;
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