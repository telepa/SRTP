<template>
    <div>
        <van-picker 
            show-toolbar
            title="性别"
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
            columns:['女', '男'],
            save:''
            }  
        },
        mounted(){
            this.save = global.gender,
            global.gender = '女'
        },
        methods:{
            onchange(e) { 
                this.value=e.mp.detail.value,
                global.gender=this.value
            },
            onCancel(){
                global.gender = this.save,
                wx.redirectTo({
                   url:'/pages/information/main',
                })  
            },
            onConfirm(){
                this.$axios
                .post('/setGender', {
                    id: global.id,
                    gender: global.gender
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