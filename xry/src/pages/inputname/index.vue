<template>
<div>
<van-cell-group>
  <van-field
    :value="value"
    label="姓名"
    size="large"
    input-align="left"
    placeholder="请输入您的真实姓名"
    @change="onchange"
  ></van-field>
</van-cell-group>

<div class="button">
  <van-button type="primary" size="large" color="#929090" @click="return1" plain>完成</van-button>
</div>
</div>
</template>
<script>
import global from "@/components/global";
export default{
    data() {
        return{
            value:'',
            id: global.id
        }
    },
    methods:{
        return1(){
          console.log(global.name),
          this.$axios
          .post('/setName', {
            id: this.id,
            name: global.name
          })
          .then(successResponse => {        
    
          })
          .catch(failResponse => {
            console.log(failResponse);
          })
            wx.redirectTo({
            url:'/pages/information/main',
    })
        },
        onchange(e){
            this.value=e.mp.detail,
            global.name=this.value
            
        }
    }
}
</script>
<style>
.button{
  margin-top: 120rpx;
  margin-left: 110rpx;
  width:70%;
}
</style>