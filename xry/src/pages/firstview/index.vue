<template>
  <div class="content" scroll-y="true">
  <button  @click="navigateTo1" class="button1" >
  <image class="image1" mode="scaleToFill" :src="imgURL01"></image>
  </button> 
  <button @click="navigateTo2" class="button2">
  <image class="image2" mode="scaleToFill" :src="imgURL02"></image>
  </button> 
  <button @click="navigateTo3" class="button3">
  <image class="image3" mode="scaleToFill" :src="imgURL03"></image>
  </button> 
  <button @click="navigateTo4" class="button4">
  <image class="image4" mode="scaleToFill" :src="imgURL04"></image>
  </button> 
  <button @click="navigateTo5" class="button5">
  <image class="image5" mode="scaleToFill" :src="imgURL05"></image>
  </button> 
  <button @click="navigateTo6" class="button6">
  <image class="image6" mode="scaleToFill" :src="imgURL06"></image>
  </button> 
  <van-tabbar active="首页"  active-color="#ffced9" inactive-color="#000">
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
 export default{
      data() {
        return{
          imgURL01: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture1.jpg',
          imgURL02: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture2.jpg',
          imgURL03: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture3.jpg',
          imgURL04: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture4.jpg',
          imgURL05: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture5.jpg',
          imgURL06: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture6.jpg'
        }
      },
      methods: {
      navigateTo1() {
       wx.navigateTo({
        url: '/pages/picture1/main'
      }
      )
      },
      navigateTo2() {
       wx.navigateTo({
        url: '/pages/picture2/main'
      }
      )
      },
      navigateTo3() {
       wx.navigateTo({
        url: '/pages/picture3/main'
      }
      )
      },
      navigateTo4() {
       wx.navigateTo({
        url: '/pages/picture4/main'
      }
      )
      },
      navigateTo5() {
       wx.navigateTo({
        url: '/pages/picture5/main'
      }
      )
      },
      navigateTo6() {
       wx.navigateTo({
        url: '/pages/picture6/main'
      }
      )
      }          
      }    
    }
    </script>
<style>
.content{
  height: 2200rpx;
}
.button1{
  height:450rpx;
  width:48%;
  margin-left:10rpx;
  margin-top:15rpx;
  border-radius:0%;
}

.image1{
  width:120%;
  height:450rpx;
  margin-left:-30rpx;
}

.button2{
  height:650rpx;
  width:48%;
  margin-left:380rpx;
  margin-top:-450rpx;
  border-radius:0%;
}

.image2{
  width:120%;
  height:650rpx;
  margin-left:-30rpx;
}

.button3{
  height:630rpx;
  width:48%;
  margin-left:10rpx;
  margin-top:-190rpx;
  border-radius:0%;
}

.image3{
  width:120%;
  height:630rpx;
  margin-left:-30rpx;
}

.button4{
  height:650rpx;
  width:48%;
  margin-left:380rpx;
  margin-top:-430rpx;
  border-radius:0%;
}

.image4{
  width:120%;
  height:650rpx;
  margin-left:-30rpx;
}

.button5{
  height:670rpx;
  width:48%;
  margin-left:10rpx;
  margin-top:-210rpx;
  border-radius:0%;
}

.image5{
  width:120%;
  height:670rpx;
  margin-left:-30rpx;
}

.button6{
  height:680rpx;
  width:48%;
  margin-left:380rpx;
  margin-top:-450rpx;
  border-radius:0%;
}

.image6{
  width:120%;
  height:680rpx;
  margin-left:-30rpx;
}

</style>