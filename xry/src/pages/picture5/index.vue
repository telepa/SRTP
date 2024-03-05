<template>
  <div class="content">
    <image class="picture1" :src="imgURL51"></image>
    <image class="picture2" :src="imgURL52"></image>
    <image class="picture3" :src="imgURL53"></image>
    <image class="picture4" :src="imgURL54"></image>
  </div>
</template>
<script>
    export default{
      data() {
        return{
          imgURL51: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture5.1.jpg',
          imgURL52: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture5.2.jpg',
          imgURL53: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture5.3.jpg',
          imgURL54: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture5.4.jpg'
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
  height:1900rpx;
  width:100%;
}
</style>