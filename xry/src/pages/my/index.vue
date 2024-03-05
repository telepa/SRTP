<template>
    <div>
      <div class="bg">
      <image class="background" :src='imgmybg' mode='scaleToFill'></image>
      </div>
      <button class="head" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
    <image class="image" mode="scaleToFill"  v-if="avatarUrl.length>0" :src='avatarUrl'></image>
    </button> 
    <div class="divider">
  <van-divider
  contentPosition="center"
  customStyle="color: #ffced9; border-color: #ffced9; font-size: 24px;"
  >{{username}}, 你好
  </van-divider>
</div>

<div class="content">
  <van-cell-group >
  <van-cell 
  title="个人信息" 
  icon="manager-o"  
  is-link
  size="large"
  link-type="navigateTo"
  @click="navigatetoI">
</van-cell>

  <van-cell 
  title="设置" 
  icon="setting-o"  
  is-link
  size="large"></van-cell>

  <van-cell 
  title="使用帮助" 
  icon="service-o"  
  is-link
  size="large"
  @click="navigatetoII"></van-cell>
  <van-cell 
  title="意见反馈" 
  icon="comment-o"  
  is-link
  size="large"></van-cell>

  <van-cell 
  title="关于我们" 
  icon="info-o"  
  is-link
  size="large"></van-cell>
  
  <van-cell 
  title="个性化" 
  icon="star-o"  
  is-link
  size="large"></van-cell>
</van-cell-group>
</div>

    <van-tabbar active="我的"  active-color="#ffced9" inactive-color="#000">
  <van-tabbar-item
  name="首页" 
  icon="home-o" 
  mode="aspectFit" 
  url='/pages/firstview/main'
  style="width: 60px; height: 60px;">首页</van-tabbar-item>
  <van-tabbar-item 
  name="分类"
  icon="search" 
  mode="aspectFit" 
  url='/pages/classify/main'
  style="width: 60px; height: 60px;">分类</van-tabbar-item>
  <van-tabbar-item 
  name="总览"
  icon="notes-o" 
  mode="aspectFit" 
  url='/pages/overview/main'
  style="width: 60px; height: 60px;">总览</van-tabbar-item>
  <van-tabbar-item 
  name="我的"
  icon="manager-o"
  mode="aspectFit"
  url='/pages/my/main'
  style="width: 60px; height: 60px;">我的</van-tabbar-item>
</van-tabbar>
    </div>
</template>
<script>
import global from "@/components/global";
export default{
  data() {
      return{
        imgmybg:'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/mybg.jpg',
        avatarUrl:'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/userhead.png',
        username:global.username
      }
  },
  methods: {
    onChooseAvatar(e) {
    global.userhead= e.mp.detail.avatarUrl,
    this.avatarUrl=e.mp.detail.avatarUrl,
    console.log(e.mp.detail)
  },
  navigatetoI(){
    
    wx.navigateTo({
        url: '/pages/information/main'
      
      }
      )
  },
  navigatetoII(){
    
    wx.navigateTo({
        url: '/pages/procedure/main'
      
      }
      )
  }
  }
}
</script>
<style>
.background{
  height:100%;
  width:100%;
  position: absolute;
  z-index: -100;
}

.bg{
  height: 83%;
  width:100%;
  top:0;
  position: absolute;
}

.head{
  height:300rpx;
  width:40%;
  margin-top:125rpx;
  margin-left:235rpx;
  border-radius: 50%;
}

.image{
  width:135%;
  height:300rpx;
  margin-left:-50rpx;
  border-radius: 50%;
}

.divider{
  margin-top: 50rpx;
}

.content{
  width:85%;
  margin-top: 100rpx;
  margin-left: 50rpx;
  height:578rpx;
  border-radius: 12rpx;
  border: 5rpx solid #ffced9;
}
</style>