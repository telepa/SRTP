<template>
  <div class="content">
    <image class="picture1" :src="imgURL21"></image>
    <image class="picture2" :src="imgURL22"></image>
    <image class="picture3" :src="imgURL23"></image>
  </div>
</template>
<script>
    export default{
      data() {
        return{
          imgURL21: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture2.1.jpg',
          imgURL22: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture2.2.jpg',
          imgURL23: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture2.3.jpg',
        }
      }
    }
</script>
<style>
.content{
  height:1400rpx;
}
.picture1{
  height:1000rpx;
  width:100%;
}

.picture2{
  height:1000rpx;
  width:100%;
}
.picture3{
  height:500rpx;
  width:100%;
}
</style>