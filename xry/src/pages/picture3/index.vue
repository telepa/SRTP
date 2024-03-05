<template>
  <div class="content">
    <image class="picture1" :src="imgURL31"></image>
  </div>
</template>
<script>
    export default{
      data() {
        return{
          imgURL31: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/picture3.1.jpg'
        }
      }
    }
</script>
<style>
.content{
  height:1400rpx;
}
.picture1{
  height:3000rpx;
  width:100%;
}
</style>