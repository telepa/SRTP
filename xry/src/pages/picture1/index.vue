<template>
  <div class="content">
    <image class="picture1" :src="imgURL11"></image>
    <image class="picture2" :src="imgURL12"></image>
  </div>
</template>
<script>
    export default{
      data() {
        return{
          imgURL11: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture1.1.jpg',
          imgURL12: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture1.2.jpg'
        }
      }
    }
</script>
<style>
.content{
  height:1400rpx;
}
.picture1{
  height:2200rpx;
  width:100%;
}

.picture2{
  height:1800rpx;
  width:100%;
}
</style>