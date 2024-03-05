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
  <van-button type="primary" size="large" color="#929090" @click="return1" plain>若未手术，请点击此按钮</van-button>
</div>
    </div>
</template>
<script>
import global from "@/components/global";
    export default{
        data() {
            return{
                currentDate: new Date().getTime(),
                currentdate:'',
                minDate: new Date(new Date().getFullYear() - 2, 0, 1).getTime(),
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
            this.currentDate = new Date().getTime()
        },
        methods:{
            onCancel(){
                wx.redirectTo({
                   url:'/pages/information/main',
                })  
            },
            onConfirm(e){    
                console.log(new Date(e.mp.detail).getFullYear())
                    var month = ((new Date(e.mp.detail).getMonth()+1)>10?(new Date(e.mp.detail).getMonth()+1):'0'+(new Date(e.mp.detail).getMonth()+1));
                    var date = ((new Date(e.mp.detail).getDate())>10?(new Date(e.mp.detail).getDate()):'0'+(new Date(e.mp.detail).getDate()));
                    global.operationdate[0] =  new Date(e.mp.detail).getFullYear()+'年',
                    global.operationdate[1] = month +'月',
                    global.operationdate[2] = date +'日',
                    this.$axios
                .post('/setSurgeryDate', {
                id: global.id,
                surgery_date: new Date(e.mp.detail).getFullYear()+'-'+month+'-'+date
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
  margin-left: 110rpx;
  width:70%;
}
</style>
