<template>
  <div class="content">
    <image class="picture1" :src="imgURL41"></image>
    <image class="picture2" :src="imgURL42"></image>
    <image class="picture3" :src="imgURL43"></image>
    <image class="picture4" :src="imgURL44"></image>
    <image class="picture5" :src="imgURL45"></image>
    <image class="picture6" :src="imgURL46"></image>
  </div>
</template>
<script>
    export default{
      data() {
        return{
          imgURL41: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture4.1.jpg',
          imgURL42: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture4.2.jpg',
          imgURL43: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture4.3.jpg',
          imgURL44: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture4.4.jpg',
          imgURL45: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture4.5.jpg',
          imgURL46: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture4.6.jpg'
        }
      }
    }
</script>
<style>
.content{
  height:1400rpx;
}
.picture1{
  height:1100rpx;
  width:100%;
}

.picture2{
  height:1000rpx;
  width:100%;
}

.picture3{
  height:1000rpx;
  width:100%;
}

.picture4{
  height:1000rpx;
  width:100%;
}

.picture5{
  height:1000rpx;
  width:100%;
}

.picture6{
  height:2300rpx;
  width:100%;
}
</style>