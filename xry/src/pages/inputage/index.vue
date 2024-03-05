<template>
  <div>
      <van-datetime-picker
type="date"
:value=" currentDate "
@input="onInput"
@confirm="onConfirm"
@cancel="onCancel"
:min-date=" minDate "
:formatter=" formatter "
></van-datetime-picker>

<div class="button">
<van-button type="primary" size="large" color="#929090" @click="return1" plain>请选择您的生日，系统将自动计算年龄</van-button>
</div>
  </div>
</template>
<script>
import global from "@/components/global";
  export default{
      data() {
          return{
              currentDate: new Date(2000,0,1).getTime(),
              currentdate:'',
              minDate: new Date(new Date().getFullYear() - 100, 0, 1).getTime(),
              realyear: new Date().getFullYear(),
              realmonth: ((new Date().getMonth()+1)>10?(new Date().getMonth()+1):'0'+(new Date().getMonth()+1)),
              realdate: ((new Date().getDate())>10?(new Date().getDate()):'0'+(new Date().getDate())),
              formatter(type, value) {
                  if (type === 'year') {
                           return `${value}年`;
                          }
                  if (type === 'month') {
                          return `${value}月`;
                          }
                  if (type === 'day') {
                          return `${value}日`;
                          }
                          return value;
                          },
          }  
      },
      mounted(){
            this.currentDate = new Date(2000,0,1).getTime()
      },
      methods:{
          
          onCancel(){
              wx.redirectTo({
                 url:'/pages/information/main',
              })  
          },
          onConfirm(e){   
            var month = ((new Date(e.mp.detail).getMonth()+1)>10?(new Date(e.mp.detail).getMonth()+1):'0'+(new Date(e.mp.detail).getMonth()+1));
            var date = ((new Date(e.mp.detail).getDate())>10?(new Date(e.mp.detail).getDate()):'0'+(new Date(e.mp.detail).getDate()));
            if((this.realmonth+'月')<(month+'月')||(((this.realmonth+'月')==(month+'月'))&&(this.realdate+'日')<(date))){  
                                         
                                         global.age=(this.realyear-new Date(e.mp.detail).getFullYear()-1).toString();
                                         console.log(global.age);
                                }else{
                                         global.age=(this.realyear-new Date(e.mp.detail).getFullYear()).toString();
                                };       
              this.$axios
              .post('/setBirth', {
                id: global.id,
                birth: new Date(e.mp.detail).getFullYear()+'-'+month+'-'+date
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
          return1(){
          wx.redirectTo({
          url:'/pages/information/main',
               })
           },
          onInput(e){
              this.currentDate=e.mp.detail
          }
      }
  }
</script>
<style>
.button{
margin-top: 120rpx;
margin-left: 80rpx;
height:300rpx;
width:80%;
}
</style>