<template>
  <div class="content">
    <image class="picture1" :src="imgURL61"></image>
    <image class="picture2" :src="imgURL62"></image>
    <image class="picture3" :src="imgURL63"></image>
    <image class="picture4" :src="imgURL64"></image>
    <image class="picture5" :src="imgURL65"></image>
    <image class="picture6" :src="imgURL66"></image>
    <image class="picture7" :src="imgURL67"></image>
  </div>
</template>
<script>
    export default{
      data() {
        return{
          imgURL61: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture6.1.jpg',
          imgURL62: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture6.2.jpg',
          imgURL63: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture6.3.jpg',
          imgURL64: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture6.4.jpg',
          imgURL65: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture6.5.jpg',
          imgURL66: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture6.6.jpg',
          imgURL67: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture6.7.jpg',
        }
      }
    }
</script>
<style>
.content{
  height:1400rpx;
}
.picture1{
  height:1150rpx;
  width:100%;
}

.picture2{
  height:1050rpx;
  width:100%;
}

.picture3{
  height:1050rpx;
  width:100%;
}

.picture4{
  height:1050rpx;
  width:100%;
}

.picture5{
  height:950rpx;
  width:100%;
}

.picture6{
  height:1350rpx;
  width:100%;
}

.picture7{
  height:500rpx;
  width:100%;
}
</style>