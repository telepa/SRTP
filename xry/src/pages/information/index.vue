<template>
    <div>
        <van-cell-group title="基本信息">
  <van-cell 
  title="姓名" 
  :value="name"
  is-link
  link-type="redirectTo"
  @click="navigatetoname"></van-cell>
  
  <van-cell 
  title="性别" 
  :value="gender" 
  is-link
  link-type="redirectTo"
  @click="navigatetogender"></van-cell>
  <van-cell 
  title="年龄" 
  :value="age" 
  is-link
  link-type="redirectTo"
  @click="navigatetoage"></van-cell>
  <van-cell 
  title="联系方式" 
  :value="number" 
  is-link
  link-type="redirectTo"
  @click="navigatetonumber"></van-cell>
  <van-cell 
  title="语言设置" 
  :value="language" 
  is-link
  link-type="redirectTo"
  @click="navigatetolanguage"></van-cell>
</van-cell-group>
<van-cell-group title="手术信息">
  <van-cell 
  title="手术情况" 
  :value="isoperation"
  is-link
  link-type="redirectTo"
  @click="navigatetoisoperation"></van-cell>
  <van-cell 
  title="手术日期" 
  :value="operationdate[0]+operationdate[1]+operationdate[2]" 
  is-link
  link-type="redirectTo"
  @click="navigatetooperationdate"></van-cell>
  <van-cell 
  title="上次随访日期" 
  :value="lastfollowup[0]+lastfollowup[1]+lastfollowup[2]" 
  is-link
  ></van-cell>
</van-cell-group>

    </div>
</template>
<script>
import global from "@/components/global";
export default{
    data() {
        return{
            name:global.name,
            age:global.age,
            gender:global.gender,
            number:global.number,
            language: global.language,
            isoperation:global.isoperation,
            operationdate:global.operationdate,
            lastfollowup:''
        }
    },
    mounted(){
      var realyear=new Date().getFullYear();
      var realmonth= ((new Date().getMonth()+1)>10?(new Date().getMonth()+1):'0'+(new Date().getMonth()+1));
      var realdate= ((new Date().getDate())>10?(new Date().getDate()):'0'+(new Date().getDate()));
        this.name=global.name,
        this.age=global.age,
        this.gender=global.gender,
        this.number=global.number,
        this.language = global.language,
        this.isoperation=global.isoperation,
        this.operationdate=global.operationdate,
        this.$axios
        .post('/getUserInfo', {
            id: global.id
          })
          .then(successResponse => {
            console.log(successResponse.data)
            if(successResponse.data.name!=null){
            global.name = successResponse.data.name,
            this.name = global.name;}
            console.log(successResponse.data.birth);
            if(successResponse.data.birth!=null){
            if(realmonth<(successResponse.data.birth[5]+successResponse.data.birth[6])||((successResponse.data.birth[5]+successResponse.data.birth[6])==realmonth)&&(realdate<(successResponse.data.birth[8]+successResponse.data.birth[9]))){
              global.age = realyear -1- parseInt((successResponse.data.birth[0]+successResponse.data.birth[1]+successResponse.data.birth[2]+successResponse.data.birth[3]));
              this.age = global.age;
            }else{
              global.age = realyear - parseInt((successResponse.data.birth[0]+successResponse.data.birth[1]+successResponse.data.birth[2]+successResponse.data.birth[3]));
              this.age = global.age;
            }
          }
          
          if(successResponse.data.gender=='女'||successResponse.data.gender=='男'){
            global.gender = successResponse.data.gender,
            this.gender = global.gender;
          }
            console.log(successResponse.data.tele);
          if(successResponse.data.tele!=null){
            global.number = successResponse.data.tele,
            this.number = global.number;
          }
          if(successResponse.data.surgery_or_not!=null){
            if(successResponse.data.surgery_or_not=='是'){
              global.isoperation = '已手术';
              this.isoperation = global.isoperation;
            }else if(successResponse.data.surgery_or_not=='否'){
              global.isoperation = '未手术';
              this.isoperation = global.isoperation;
            }
          }
          if(successResponse.data.surgery_date!=null){
            global.operationdate[0]=(successResponse.data.surgery_date[0]+successResponse.data.surgery_date[1]+successResponse.data.surgery_date[2]+successResponse.data.surgery_date[3])+'年',
            global.operationdate[1]=successResponse.data.surgery_date[5]+successResponse.data.surgery_date[6]+'月';
            global.operationdate[2]=successResponse.data.surgery_date[8]+successResponse.data.surgery_date[9]+'日';
            this.operationdate = global.operationdate
          }
          if(successResponse.data.Language!=null){
            if(successResponse.data.Language=='zh-CN') {global.language = '普通话'; this.language = global.language;}
            else if(successResponse.data.Language=='wuu-CN') {global.language = '吴语';this.language = global.language;}
            else if(successResponse.data.Language=='yue-CN') {global.language = '粤语';this.language = global.language;}
            else if(successResponse.data.Language=='zh-CN-shandong') {global.language = '冀鲁官话';this.language = global.language;}
            else if(successResponse.data.Language=='zhu-CN-sichuan') {global.language = '四川话';this.language = global.language;}
          }
    })
          .catch(failResponse => {
            console.log(failResponse);
          })
    this.$axios
          .post('/getLastDate', {
            id: global.id,
            surgery_date: realyear+'-'+realmonth+'-'+realdate
          })
          .then(successResponse => {
            var date = successResponse.data;
            if(successResponse.data.length==10){
            global.lastfollowup[0] = date[0]+date[1]+date[2]+date[3]+'年';
            global.lastfollowup[1] = date[5]+date[6]+'月';
            global.lastfollowup[2] = date[8]+date[9]+'日';
            this.lastfollowup = global.lastfollowup;
            }else{
              console.log(global.lastfollowup);
               this.lastfollowup = global.lastfollowup;
            }
          })
          .catch(failResponse => {
            console.log(failResponse);
           
          })
    },
    methods:{
        navigatetoname() {
       wx.redirectTo({
        url: '/pages/inputname/main'
      
      }
      )
      },
      navigatetolanguage() {
            console.log(this.name),
            console.log(global.name),
       wx.redirectTo({
        url: '/pages/inputlanguage/main'
      
      }
      )
      },
      navigatetogender() {
       wx.redirectTo({
        url: '/pages/inputgender/main'
      
      }
      )
      },
      navigatetoage() {
       wx.redirectTo({
        url: '/pages/inputage/main'
      
      }
      )
      },
      navigatetonumber() {
       wx.redirectTo({
        url: '/pages/inputnumber/main'
      
      }
      )
      },
      navigatetoisoperation() {
       wx.redirectTo({
        url: '/pages/isoperation/main'
      
      }
      )
      },
      navigatetooperationdate() {
       wx.redirectTo({
        url: '/pages/operationdate/main'
      
      }
      )
      },
      navigatetolastfollowup() {
       wx.redirectTo({
        url: '/pages/lastfollowup/main'
      
      }
      )
      },
    }
}
</script>
<style>
.background{
  height:100%;
  width:100%;
  position: absolute;
  z-index: -100;
}

.bg{
  height: 100%;
  width:100%;
  top:0;
  position: absolute;
}

</style>