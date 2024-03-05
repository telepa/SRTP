<template>
    <div>
        <van-picker 
            show-toolbar
            title="手术情况"
            :columns="columns"          
            @change="onchange"
            @cancel="onCancel"
            @confirm="onConfirm"></van-picker>
        <van-toast id="van-toast" />
    </div>
</template>
<script>
import global from "@/components/global";
    export default{
        data() {
            return{
            value:'',
            columns:['已手术', '未手术'],
            save:''
            }  
        },
        mounted(){
            this.save = global.isoperation,
            global.isoperation = '已手术'
        },
        methods:{
            onchange(e) {
                this.value=e.mp.detail.value,
                global.isoperation=this.value
            },
            onCancel(){
                global.isoperation = this.save,
                wx.redirectTo({
                   url:'/pages/information/main',
                })  
            },
            onConfirm(){
                var ifsurgery = ''
                if(global.isoperation=='已手术') ifsurgery = '是';
                else if(global.isoperation=='未手术') ifsurgery = '否'
                this.$axios
          .post('/setSurgeryOrNot', {
            id: global.id,
            surgery_or_not: ifsurgery
          })
          .then(successResponse => {        
    
          })
          .catch(failResponse => {
            console.log(failResponse);
          })
                wx.redirectTo({
                   url:'/pages/information/main',
                })  
            }
        }
    }
</script>