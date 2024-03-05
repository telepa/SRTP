<template>
    <div>
        <van-picker 
            show-toolbar
            title="语言"
            :columns="columns"          
            @change="onchange"
            @cancel="onCancel"
            @confirm="onConfirm"></van-picker>
        <van-toast id="van-toast" />
        <div class="button">
            <van-button type="primary" size="large" color="#929090"  plain>若后续无法识别您的方言，请选择普通话</van-button>
        </div>
    </div>
</template>
<script>
import global from "@/components/global";
    export default{
        data() {
            return{
            value:'',
            columns:['普通话', '吴语', '粤语' , '冀鲁官话' , '西南普通话'],
            save:''
            }  
        },
        mounted(){
            this.save = global.language,
            global.language = '普通话'
        },
        methods:{
            onchange(e) { 
                this.value=e.mp.detail.value,
                global.language=this.value
            },
            onCancel(){
                global.language = this.save,
                wx.redirectTo({
                   url:'/pages/information/main',
                })  
            },
            onConfirm(){
                var Language;
                if(global.language=='普通话') Language='zh-CN';
                else if(global.language=='吴语') Language='wuu-CN';
                else if(global.language=='粤语') Language='yue-CN';
                else if(global.language=='冀鲁官话') Language='zh-CN-shandong';
                else if(global.language=='四川话') Language='zh-CN-sichuan';
                this.$axios
                .post('/setLanguage', {
                    id: global.id,
                    Language: Language
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
<style>
.button{
margin-top: 120rpx;
margin-left: 80rpx;
height:500rpx;
width:80%;
}
</style>