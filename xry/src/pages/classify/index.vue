<template>
  <div>
    <div class="background">
<div class="bg" >
  

  </div>
</div>
<div class="cell">
  <van-cell-group >
  <van-cell 
  @click="navigateTo1"
  is-link
  
  icon="orders-o"
  size="large"
  title="生理状况" 
  :value="n1+'/7'"
  label="这部分为生理状况相关的问题，例：治疗的副作用让我觉得不舒服" ></van-cell>
  <van-cell
  @click="navigateTo2"
  is-link 
  icon="friends-o"
  size="large"  
  title="社会家庭状况" 
  :value="n2+'/7'" 
  label="这部分为社会家庭状况相关的问题，例：我与自己的配偶（或给我主要支持的人）很亲近" ></van-cell>
<van-cell 
  @click="navigateTo3"
  is-link
  icon="smile-o"
  size="large"  
  title="情感状况" 
  :value="n3+'/6'" 
  label="这部分为情感状况相关的问题，例：我为自己这样对待疾病感到自豪" ></van-cell>
<van-cell
  @click="navigateTo4" 
  is-link
  icon="apps-o"
  size="large"  
  title="功能状况" 
  :value="n4+'/7'" 
  label="这部分为功能状况相关的问题，例：我在享受我过去常做的娱乐活动"></van-cell>
<van-cell 
  @click="navigateTo5"
  is-link
  icon="flower-o"
  size="large"  
  title="附加关注" 
  :value="n5+'/10'" 
  label="这部分为附加关心相关的问题，例：（由于疾病）我在意自己的穿着打扮" ></van-cell>
</van-cell-group>
<div class="button">
  <van-button type="primary" size="large" color="#929090" @click="restart" plain>重新作答</van-button>
</div>
<div class="button2">
  <van-button type="primary" size="large" color="#929090" @click="reload" plain>刷新页面</van-button>
</div>
</div>

 <van-tabbar active="分类"  active-color="#ffced9" inactive-color="#000">
  <van-tabbar-item
  name="首页" 
  icon="home-o" 
  mode="aspectFit" 
  url='/pages/firstview/main'
  style="width: 60px; height: 60px;">首页</van-tabbar-item>
  <van-tabbar-item 
  name="分类"
  icon="search" 
  mode="aspectFit" 
  url='/pages/classify/main'
  style="width: 60px; height: 60px;">分类</van-tabbar-item>
  <van-tabbar-item 
  name="总览"
  icon="notes-o" 
  mode="aspectFit" 
  url='/pages/overview/main'
  style="width: 60px; height: 60px;">总览</van-tabbar-item>
  <van-tabbar-item 
  name="我的"
  icon="manager-o"
  mode="aspectFit"
  url='/pages/my/main'
  style="width: 60px; height: 60px;">我的</van-tabbar-item>
</van-tabbar>
 </div>
</template>
<script>
import global from "@/components/global";
    export default{
      data() {
        return{
          n1:global.n1,
          n2:global.n2,
          n3:global.n3,
          n4:global.n4,
          n5:global.n5,
          realyear: new Date().getFullYear(),
          realmonth: ((new Date().getMonth()+1)>10?(new Date().getMonth()+1):'0'+(new Date().getMonth()+1)),
          realdate: ((new Date().getDate())>10?(new Date().getDate()):'0'+(new Date().getDate())),
        }

      },
      mounted(){
        this.n1=global.n1,
        this.n2=global.n2,
        this.n3=global.n3,
        this.n4=global.n4,
        this.n5=global.n5,
        this.$axios
          .post('/FollowSearch', {
            f_id: '1-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '1-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '1-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '1-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '1-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '1-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '1-7',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            global.n1=7;
            this.n1=7;
          })
          .catch(err => {
            global.n1=6;
            this.n1=6;
          })
          })
          .catch(err => {
            global.n1=5;
            this.n1=5;
          })
          })
          .catch(err => {
            global.n1=4;
            this.n1=4;
          })
          })
          .catch(err => {
            global.n1=3;
            this.n1=3;
          })
          })
          .catch(err => {
            global.n1=2;
            this.n1=2;
          })
          })
          .catch(err => {
            global.n1=1;
            this.n1=1;
          })
            
          })
          .catch(err => {
            global.n1=0;
            this.n1=global.n1;
            
          })
          this.$axios
          .post('/FollowSearch', {
            f_id: '2-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '2-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '2-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '2-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '2-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '2-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '2-7',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            global.n2=7;
            this.n2=7;
          })
          .catch(err => {
            global.n2=6;
            this.n2=6;
          })
          })
          .catch(err => {
            global.n2=5;
            this.n2=5;
          })
          })
          .catch(err => {
            global.n2=4;
            this.n2=4;
          })
          })
          .catch(err => {
            global.n2=3;
            this.n2=3;
          })
          })
          .catch(err => {
            global.n2=2;
            this.n2=2;
          })
          })
          .catch(err => {
            global.n2=1;
            this.n2=1;
          })
            
          })
          .catch(err => {
            global.n2=0;
            this.n2=global.n2;
            
          })
          this.$axios
          .post('/FollowSearch', {
            f_id: '3-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '3-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '3-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '3-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '3-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '3-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            global.n3=6;
            this.n3=6;
          })
          .catch(err => {
            global.n3=5;
            this.n3=5;
          })
          })
          .catch(err => {
            global.n3=4;
            this.n3=4;
          })
          })
          .catch(err => {
            global.n3=3;
            this.n3=3;
          })
          })
          .catch(err => {
            global.n3=2;
            this.n3=2;
          })
          })
          .catch(err => {
            global.n3=1;
            this.n3=1;
          })
            
          })
          .catch(err => {
            global.n3=0;
            this.n3=global.n3;
            
          })
          this.$axios
          .post('/FollowSearch', {
            f_id: '4-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '4-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '4-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '4-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '4-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '4-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '4-7',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            global.n4=7;
            this.n4=7;
          })
          .catch(err => {
            global.n4=6;
            this.n4=6;
          })
          })
          .catch(err => {
            global.n4=5;
            this.n4=5;
          })
          })
          .catch(err => {
            global.n4=4;
            this.n4=4;
          })
          })
          .catch(err => {
            global.n4=3;
            this.n4=3;
          })
          })
          .catch(err => {
            global.n4=2;
            this.n4=2;
          })
          })
          .catch(err => {
            global.n4=1;
            this.n4=1;
          })
            
          })
          .catch(err => {
            global.n4=0;
            this.n4=global.n4;
            
          })
          this.$axios
          .post('/FollowSearch', {
            f_id: '5-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '5-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '5-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '5-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '5-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '5-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '5-7',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {  
            this.$axios        
            .post('/FollowSearch', {
            f_id: '5-8',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '5-9',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.$axios
          .post('/FollowSearch', {
            f_id: '5-10',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
           global.n5=10;
           this.n5=10;
          })
          .catch(err => {
            global.n5=9;
            this.n5=9;
          })
          })
          .catch(err => {
            global.n5=8;
            this.n5=8;
          })
          })
          .catch(err => {
            global.n5=7;
            this.n5=7;
          })
          })
          .catch(err => {
            global.n5=6;
            this.n5=6;
          })
          })
          .catch(err => {
            global.n5=5;
            this.n5=5;
          })
          })
          .catch(err => {
            global.n5=4;
            this.n5=4;
          })
          })
          .catch(err => {
            global.n5=3;
            this.n5=3;
          })
          })
          .catch(err => {
            global.n5=2;
            this.n5=2;
          })
          })
          .catch(err => {
            global.n5=1;
            this.n5=1;
          })
            
          })
          .catch(err => {
            global.n5=0;
            this.n5=global.n5;
            
          })
      },

       methods: {
        restart() {
         this.n1=0,
         this.n2=0,
         this.n3=0,
         this.n4=0,
         this.n5=0,
         global.n1 = 0,
         global.n2 = 0,
         global.n3 = 0,
         global.n4 = 0,
         global.n5 = 0,
         this.$axios
          .post('/Restart', {
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
      },
      reload(){
        this.n1=global.n1,
        this.n2=global.n2,
        this.n3=global.n3,
        this.n4=global.n4,
        this.n5=global.n5
      },
      navigateTo1() {
      console.log('haha');
       wx.navigateTo({
        url: '/pages/talk1/main',
        
      }
      )
      },
      navigateTo2() {
       wx.navigateTo({
        url: '/pages/talk2/main'
      
      }
      )
      },
      navigateTo3() {
       wx.navigateTo({
        url: '/pages/talk3/main'
      
      }
      )
      },
      navigateTo4() {
       wx.navigateTo({
        url: '/pages/talk4/main'
      
      }
      )
      }, 
      navigateTo5() {
       wx.navigateTo({
        url: '/pages/talk5/main'
      
      }
      )
      }          
  }
      }
</script>
<style>
.bg{
  height:100%;
  width:100%;
  position: absolute;
  z-index: -100;
}

.background{
  height: 100%;
  width:100%;
  top:0;
  position: absolute;
}

.cell{
  width:100%;
  margin-top:15rpx;
  height:1300rpx;
}

.button{
  margin-top: 25rpx;
  margin-left: 50rpx;
  width:300rpx;
}
.button2{
  margin-top: -100rpx;
  margin-left: 400rpx;
  width:300rpx;
}
</style>
