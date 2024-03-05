<template>
  <div>
  <div class="bg">
  <image class="background" :src="imgURL001" mode='scaleToFill'></image>
  </div>
  <div class="back" scroll-y="true">

   <div class="qa1" v-if="hidden01">
      <image class="head1" :src="imgrobot"></image> 
      <button class="talk1" > 我精力不济</button> 
      <van-action-sheet :show="show1"  :actions="actions" @close="onClose"  @select="onSelect1"></van-action-sheet>
      <div class="answer" v-if="an1hi">{{an11}}</div>
      <div class="anhead">
      <image class="ad" v-if="an1hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa2" v-if="hidden12">
      <image class="head2" :src="imgrobot"></image> 
      <button class="talk2" > 我感到恶心</button> 

      <van-action-sheet :show="show2"  :actions="actions" @close="onClose"  @select="onSelect2"></van-action-sheet>

      <div class="answer" v-if="an2hi">{{an12}}</div>
      <div class="anhead">
      <image class="ad" v-if="an2hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa3" v-if="hidden23">
      <image class="head3" :src="imgrobot"></image> 
      <button class="talk3" > 因为我身体不好，我满足不了家庭的需要</button> 

      <van-action-sheet :show="show3"  :actions="actions" @close="onClose"  @select="onSelect3"></van-action-sheet>

      <div class="answer" v-if="an3hi">{{an13}}</div>
      <div class="anhead">
      <image class="ad" v-if="an3hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa4" v-if="hidden34">
      <image class="head4" :src="imgrobot"></image> 
      <button class="talk4" > 我感到疼痛</button> 

      <van-action-sheet :show="show4"  :actions="actions" @close="onClose"  @select="onSelect4"></van-action-sheet>

      <div class="answer" v-if="an4hi">{{an14}}</div>
      <div class="anhead">
      <image class="ad" v-if="an4hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa5" v-if="hidden45">
      <image class="head5" :src="imgrobot"></image> 
      <button class="talk5" > 治疗的副作用让我觉得不舒服</button> 

      <van-action-sheet :show="show5"  :actions="actions" @close="onClose"  @select="onSelect5"></van-action-sheet>

      <div class="answer" v-if="an5hi">{{an15}}</div>
      <div class="anhead">
      <image class="ad" v-if="an5hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa6" v-if="hidden56">
      <image class="head6" :src="imgrobot"></image> 
      <button class="talk6" > 我觉得病了</button> 

      <van-action-sheet :show="show6"  :actions="actions" @close="onClose"  @select="onSelect6"></van-action-sheet>

      <div class="answer" v-if="an6hi">{{an16}}</div>
      <div class="anhead">
      <image class="ad" v-if="an6hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa7" v-if="hidden67">
      <image class="head7" :src="imgrobot"></image> 
      <button class="talk7" > 我不得不卧床</button> 

      <van-action-sheet :show="show7"  :actions="actions" @close="onClose"  @select="onSelect7"></van-action-sheet>

      <div class="answer" v-if="an7hi">{{an17}}</div>
      <div class="anhead">
      <image class="ad" v-if="an7hi" mode="scaleToFill"  :src="imguserhead"></image>
        </div> 
     </div>   
      <div class="try">
          <button class="finish" v-if="finish" @click="navigateToC">完成</button>
      </div>
  <cover-view v-if="microshow" class="loader">
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
    <cover-view class="span"></cover-view>
  </cover-view>
 <van-tabbar active-color="#ffced9" inactive-color="#000">
  <van-tabbar-item
  name="选项形式" 
  icon="label-o" 
  mode="aspectFit"
  @click="onTap" 
  style="width: 60px; height: 60px;">选项形式</van-tabbar-item>
  <van-tabbar-item
  name="开始作答" 
  icon="smile-comment-o"
  mode="aspectFit"
  @click="Start" 
  style="width: 60px; height: 60px;">开始作答</van-tabbar-item>
  <van-tabbar-item 
  name="语音形式"
  icon="volume-o" 
  mode="aspectFit" 
  @touchstart="start"
  @touchend="stop"
  style="width: 60px; height: 60px;">语音形式</van-tabbar-item>
</van-tabbar>
</div>
 </div>
 
</template>
<script>
import global from "@/components/global";
    export default{
      data() {
        return{
          imgURL001: 'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/talkbg.jpg',
          showstt:false,
          tempFilePath:'',
          show1:false, show2:false, show3:false, show4:false, 
          show5:false, show6:false, show7:false, 
          an1hi:false, an2hi:false, an3hi:false, an4hi:false,an5hi:false,
          an6hi:false, an7hi:false,x:'',y:'',
          microshow:false,
          hidden01:false, hidden12:false, hidden23:false, hidden34:false, 
          hidden45:false, hidden56:false, hidden67:false, finish:false,
          n1:0,
          name:{},
          actions: [
              {name: "一点也不",subname: "0"},
              {name: "有一点",subname: "1"},
              {name: "有些",subname: "2"},
              {name: "相当",subname: "3"},
              {name: "非常",subname: "4"},
          ],
         an11:"", an12:"", an13:"", an14:"", an15:"", an16:"", an17:"",
         sc11:"", sc12:"", sc13:"", sc14:"", sc15:"", sc16:"", sc17:"",
          t1:"0",  judge:0,
         userhead:'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/userhead.png',
         imgrobot:'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/robot.png',
         imguserhead:global.userhead,
         realyear: new Date().getFullYear(),
         realmonth: ((new Date().getMonth()+1)>10?(new Date().getMonth()+1):'0'+(new Date().getMonth()+1)),
         realdate: ((new Date().getDate())>10?(new Date().getDate()):'0'+(new Date().getDate())),
        }
      },
      mounted(){
        this.imguserhead=global.userhead;
        if(global.n1==0){
          this.an1hi=false, this.an2hi=false, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=false, this.hidden12=false, this.hidden23=false, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=0;
        }else if(global.n1==1){
          this.an1hi=true, this.an2hi=false, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=false, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=1;
        }else if(global.n1==2){
          this.show1=false, this.show2=false, this.show3=false, this.show4=false, 
          this.show5=false, this.show6=false, this.show7=false, 
          this.an1hi=true, this.an2hi=true, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=2;
        }else if(global.n1==3){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=3;
        }else if(global.n1==4){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=4;
        }else if(global.n1==5){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=false, this.finish=false,
          this.judge=5;
        }else if(global.n1==6){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=true, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=true, this.finish=false,
          this.judge=6;
        }else if(global.n1==7){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=true, this.an7hi=true,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=true, this.finish=true,
          this.judge=7;
        }
          var that = this;
    //获取全局唯一的录音管理器 RecorderManager实例
      that.recorderManager = wx.getRecorderManager()
      that.recorderManager.onStop((res) => {
      
        this.tempFilePath= res.tempFilePath // 文件临时路径
        console.log(res)
        wx.uploadFile({
           url: 'http://10.193.201.230:8442/upload',
           header: { "Content-Type": "multipart/form-data" },
           filePath: this.tempFilePath,
           name: 'file',
           formData:{
            id: global.id.toString(),
           },
           success: res=>{
             if(this.hidden01==true&&this.an1hi==false){
              if(res.data=="一点也不。"){
                this.an11 = "一点也不",
                this.sc11 = 0
              }else if(res.data=="有一点。"){
                this.an11 = "有一点",
                this.sc11 = 1
              }else if(res.data=="有些。"){
                this.an11 = "有些",
                this.sc11 = 2
              }else if(res.data=="相当。"){
                this.an11 = "相当",
                this.sc11 = 3
              }else if(res.data=="非常。"){
                this.an11 = "非常",
                this.sc11 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '1-1',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我精力不济',
            ans: this.an11,
            score: this.sc11
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an1hi = true,
          setTimeout(() => {
          this.hidden12=true;
          this.judge = 1;
          global.n1=1;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-2.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
        }, 1500);
        }
        ) 
            } else if(this.hidden12==true&&this.an2hi==false){
              if(res.data=="一点也不。"){
                this.an12 = "一点也不",
                this.sc12 = 0
              }else if(res.data=="有一点。"){
                this.an12 = "有一点",
                this.sc12 = 1
              }else if(res.data=="有些。"){
                this.an12 = "有些",
                this.sc12 = 2
              }else if(res.data=="相当。"){
                this.an12 = "相当",
                this.sc12 = 3
              }else if(res.data=="非常。"){
                this.an12 = "非常",
                this.sc12 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '1-2',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我感到恶心',
            ans: this.an12,
            score: this.sc12
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an2hi = true,
          setTimeout(() => {
          this.hidden23=true;
          this.judge=2;
          global.n1=2;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-3.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
        }, 1500);
        }
        ) 
            } else if(this.hidden23==true&&this.an3hi==false){
              if(res.data=="一点也不。"){
                this.an13 = "一点也不",
                this.sc13 = 0
              }else if(res.data=="有一点。"){
                this.an13 = "有一点",
                this.sc13 = 1
              }else if(res.data=="有些。"){
                this.an13 = "有些",
                this.sc13 = 2
              }else if(res.data=="相当。"){
                this.an13 = "相当",
                this.sc13 = 3
              }else if(res.data=="非常。"){
                this.an13 = "非常",
                this.sc13 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '1-3',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '因为我身体不好，我满足不了家庭的需要',
            ans: this.an13,
            score: this.sc13
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an3hi = true,
          setTimeout(() => {
          this.hidden34=true;
          this.judge=3;
          global.n1=3;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-4.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
        }, 1500);
        }
        ) 
            } else if(this.hidden34==true&&this.an4hi==false){
              if(res.data=="一点也不。"){
                this.an14 = "一点也不",
                this.sc14 = 0
              }else if(res.data=="有一点。"){
                this.an14 = "有一点",
                this.sc14 = 1
              }else if(res.data=="有些。"){
                this.an14 = "有些",
                this.sc14 = 2
              }else if(res.data=="相当。"){
                this.an14 = "相当",
                this.sc14 = 3
              }else if(res.data=="非常。"){
                this.an14 = "非常",
                this.sc14 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '1-4',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我感到疼痛',
            ans: this.an14,
            score: this.sc14
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an4hi = true,
          setTimeout(() => {
          this.hidden45=true;
          this.judge=4;
          global.n1=4;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-5.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
        }, 1500);
        }
        ) 
            } else if(this.hidden45==true&&this.an5hi==false){
              if(res.data=="一点也不。"){
                this.an15 = "一点也不",
                this.sc15 = 0
              }else if(res.data=="有一点。"){
                this.an15 = "有一点",
                this.sc15 = 1
              }else if(res.data=="有些。"){
                this.an15 = "有些",
                this.sc15 = 2
              }else if(res.data=="相当。"){
                this.an15 = "相当",
                this.sc15 = 3
              }else if(res.data=="非常。"){
                this.an15 = "非常",
                this.sc15 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '1-5',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '治疗的副作用让我觉得不舒服',
            ans: this.an15,
            score: this.sc15
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an5hi = true,
          setTimeout(() => {
          this.hidden56=true;
          this.judge=5;
          global.n1=5;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-6.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
        }, 1500);
        }
        ) 
            } else if(this.hidden56==true&&this.an6hi==false){
              if(res.data=="一点也不。"){
                this.an16 = "一点也不",
                this.sc16 = 0
              }else if(res.data=="有一点。"){
                this.an16 = "有一点",
                this.sc16 = 1
              }else if(res.data=="有些。"){
                this.an16 = "有些",
                this.sc16 = 2
              }else if(res.data=="相当。"){
                this.an16 = "相当",
                this.sc16 = 3
              }else if(res.data=="非常。"){
                this.an16 = "非常",
                this.sc16 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '1-6',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我觉得病了',
            ans: this.an16,
            score: this.sc16
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an6hi = true,
          setTimeout(() => {
          this.hidden67=true;
          this.judge=6;
          global.n1=6;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-7.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
        }, 1500);
        }
        ) 
            } else if(this.hidden67==true&&this.an7hi==false){
              if(res.data=="一点也不。"){
                this.an17 = "一点也不",
                this.sc17 = 0
              }else if(res.data=="有一点。"){
                this.an17 = "有一点",
                this.sc17 = 1
              }else if(res.data=="有些。"){
                this.an17 = "有些",
                this.sc17 = 2
              }else if(res.data=="相当。"){
                this.an17 = "相当",
                this.sc17 = 3
              }else if(res.data=="非常。"){
                this.an17 = "非常",
                this.sc17 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '1-7',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我不得不卧床',
            ans: this.an17,
            score: this.sc17
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an7hi = true,
          this.judge=7;
          setTimeout(() => {
          this.finish=true;
          global.n1=7;
          
        }, 1500);
        }
        ) 
            } 
      
           }
         })
        console.log('获取到文件：' + this.tempFilePath)
    })
    this.recorderManager.onError((res) => {
      console.log('录音失败了！')
      //console.log(res)
    })
      },
  methods: {
      navigateToC() {
        global.n1=7;
       wx.redirectTo({
        url: '/pages/classify/main'
      
      }
      )
      },
      Start(){
      this.hidden01=true,
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-1.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
      
      },
      StartSTT(){
        this.showstt=true
        
        
      },
      onTap(){
    if(this.hidden01==true&&this.judge==0){
      this.show1=true;
      this.judge=1;
    }else if(this.hidden12==true&&this.judge==1){
      this.show2=true;
      this.judge=2;
    }else if(this.hidden23==true&&this.judge==2){
      this.show3=true;
      this.judge=3;
    }else if(this.hidden34==true&&this.judge==3){
      this.show4=true;
      this.judge=4;
    }else if(this.hidden45==true&&this.judge==4){
      this.show5=true;
      this.judge=5;
    }else if(this.hidden56==true&&this.judge==5){
      this.show6=true;
      this.judge=6;
    }else if(this.hidden67==true&&this.judge==6){
      this.show7=true;
      this.judge=7;
    }
  },
    onClose() {
    if(this.hidden01==true&&this.judge==1){
      this.show1=false;
    }else if(this.hidden12==true&&this.judge==2){
      this.show2=false;
    }else if(this.hidden23==true&&this.judge==3){
      this.show3=false;
    }else if(this.hidden34==true&&this.judge==4){
      this.show4=false;
    }else if(this.hidden45==true&&this.judge==5){
      this.show5=false;
    }else if(this.hidden56==true&&this.judge==6){
      this.show6=false;
    }else if(this.hidden67==true&&this.judge==7){
      this.show7=false;
    }
  },

  onSelect1(item) {
    console.log(item.mp.detail.name);
      this.an11=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an1hi=true
    }
    if(this.an11=="一点也不"){
      this.sc11=0;
    }else if(this.an11=="有一点"){
      this.sc11=1;
    }else if(this.an11=="有些"){
      this.sc11=2;
    }else if(this.an11=="相当"){
      this.sc11=3;
    }else if(this.an11=="非常"){
      this.sc11=4;
    }
    console.log(this.sc11);
    this.$axios
          .post('/InsertRecords', {
            f_id: '1-1',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我精力不济',
            ans: this.an11,
            score: this.sc11
          })
    setTimeout(() => {
      this.hidden12=true;
      global.n1 =1;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-2.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
    }, 1500);
  },
  onSelect2(item) {
    console.log(item.mp.detail.name);
      this.an12=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an2hi=true
    }
    if(this.an12=="一点也不"){
      this.sc12=0;
    }else if(this.an12=="有一点"){
      this.sc12=1;
    }else if(this.an12=="有些"){
      this.sc12=2;
    }else if(this.an12=="相当"){
      this.sc12=3;
    }else if(this.an12=="非常"){
      this.sc12=4;
    }
    console.log(this.sc12);
    this.$axios
          .post('/InsertRecords', {
            f_id: '1-2',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我感到恶心',
            ans: this.an12,
            score: this.sc12
          })
    setTimeout(() => {
      this.hidden23=true;
      global.n1 =2;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-3.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
    }, 1500);
  },
  onSelect3(item) {
    console.log(item.mp.detail.name);
      this.an13=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an3hi=true
    }
    if(this.an13=="一点也不"){
      this.sc13=0;
    }else if(this.an13=="有一点"){
      this.sc13=1;
    }else if(this.an13=="有些"){
      this.sc13=2;
    }else if(this.an13=="相当"){
      this.sc13=3;
    }else if(this.an13=="非常"){
      this.sc13=4;
    }
    console.log(this.sc13);
    this.$axios
          .post('/InsertRecords', {
            f_id: '1-3',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '因为我身体不好，我满足不了家庭的需要',
            ans: this.an13,
            score: this.sc13
          })
    setTimeout(() => {
      this.hidden34=true;
      global.n1 =3;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-4.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
    }, 1500);
  },
  onSelect4(item) {
    console.log(item.mp.detail.name);
      this.an14=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an4hi=true
    }
    if(this.an14=="一点也不"){
      this.sc14=0;
    }else if(this.an14=="有一点"){
      this.sc14=1;
    }else if(this.an14=="有些"){
      this.sc14=2;
    }else if(this.an14=="相当"){
      this.sc14=3;
    }else if(this.an14=="非常"){
      this.sc14=4;
    }
    console.log(this.sc14);
    this.$axios
          .post('/InsertRecords', {
            f_id: '1-4',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我感到疼痛',
            ans: this.an14,
            score: this.sc14
          })
    setTimeout(() => {
      this.hidden45=true;
      global.n1 =4;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-5.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
    }, 1500);
  },
  onSelect5(item) {
    console.log(item.mp.detail.name);
      this.an15=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an5hi=true
    }
    if(this.an15=="一点也不"){
      this.sc15=0;
    }else if(this.an15=="有一点"){
      this.sc15=1;
    }else if(this.an15=="有些"){
      this.sc15=2;
    }else if(this.an15=="相当"){
      this.sc15=3;
    }else if(this.an15=="非常"){
      this.sc15=4;
    }
    console.log(this.sc15);
    this.$axios
          .post('/InsertRecords', {
            f_id: '1-5',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '治疗的副作用让我觉得不舒服',
            ans: this.an15,
            score: this.sc15
          })
    setTimeout(() => {
      this.hidden56=true;
      global.n1 =5;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-6.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
    }, 1500);
  },
  onSelect6(item) {
    console.log(item.mp.detail.name);
      this.an16=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an6hi=true
    }
    if(this.an16=="一点也不"){
      this.sc16=0;
    }else if(this.an16=="有一点"){
      this.sc16=1;
    }else if(this.an16=="有些"){
      this.sc16=2;
    }else if(this.an16=="相当"){
      this.sc16=3;
    }else if(this.an16=="非常"){
      this.sc16=4;
    }
    console.log(this.sc16);
    this.$axios
          .post('/InsertRecords', {
            f_id: '1-6',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我觉得病了',
            ans: this.an16,
            score: this.sc16
          })
    setTimeout(() => {
      this.hidden67=true;
      global.n1 =6;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=1-7.wav', //仅为示例，并非真实的资源
        header: {
        'Content-Type': 'application/wav',
        },
      success (res) {
        console.log(res.tempFilePath)
    if (res.statusCode === 200) {
      const innerAudioContext = wx.createInnerAudioContext()
        // 是否自动播放
        innerAudioContext.autoplay = true
    // 设置音频文件的路径
        innerAudioContext.src = res.tempFilePath;
    // 播放音频文件
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
          });

    }
  }
})
    }, 1500);
  },
  onSelect7(item) {
    console.log(item.mp.detail.name);
      this.an17=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an7hi=true
    }
    if(this.an17=="一点也不"){
      this.sc17=0;
    }else if(this.an17=="有一点"){
      this.sc17=1;
    }else if(this.an17=="有些"){
      this.sc17=2;
    }else if(this.an17=="相当"){
      this.sc17=3;
    }else if(this.an17=="非常"){
      this.sc17=4;
    }
    console.log(this.sc17);
    this.$axios
          .post('/InsertRecords', {
            f_id: '1-7',
            id: global.id,
            classify: '生理状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我不得不卧床',
            ans: this.an17,
            score: this.sc17
          })
    setTimeout(() => {
      this.finish=true;
      global.n1 =7;
    }, 1500);
  },
  start() {
    this.microshow = true,
      this.recorderManager.start({
      duration: 60000,
      sampleRate: 16000, //采样率，有效值 8000/16000/44100
      numberOfChannels: 1, //录音通道数，有效值 1/2
      encodeBitRate: 96000, //编码码率
      format: 'wav', //音频格式，有效值 aac/mp3
       //指定帧大小
      audioSource: 'auto' //指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取
    })
    },
    suspend() {
    this.recorderManager.pause()
  },
  //继续录音
   continue2() {
    this.recorderManager.resume()
  },
  //录音停止
  stop() {
    this.recorderManager.stop()
    this.microshow = false
   
  },
  //播放录音
  play(){
    // 获取innerAudioContext实例
    const innerAudioContext = wx.createInnerAudioContext()
    // 是否自动播放
    innerAudioContext.autoplay = true
    // 设置音频文件的路径
    innerAudioContext.src = this.tempFilePath;
    // 播放音频文件
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    });
    // 监听音频播放错误事件
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  } 
  },  
  
  }
</script>
<style>
.background{
  height:100%;
  width:100%;
  position: fixed;
  z-index: -100;
}

.bg{
  height: 100%;
  width:100%;
  top:0;
  position: absolute;
}

.back{
  margin-left: 20rpx;
  margin-right: 20rpx;
  height:auto;
  position: sticky;
}

.qa1{
  height:500rpx;
}

.qa2,
.qa3,
.qa4,
.qa5,
.qa6,
.qa7{
  height:400rpx;
  margin-top:0rpx;
}

.try{
  height:300rpx;
}
.talk1,
.talk2,
.talk4,
.talk6,
.talk7{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-111rpx;
  margin-left:125rpx;
  width:45%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.talk3{
  border: 2rpx solid #000000;
  height: 200rpx;
  margin-top:-115rpx;
  margin-left:125rpx;
  width:67%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}

.talk5{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-111rpx;
  margin-left:125rpx;
  width:80%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.head1{
  height:100rpx;
  width:100rpx;
  margin-top: 120rpx;
}

.head2{
  height:100rpx;
  width:100rpx;
  margin-top: 20rpx;
}

.head3{
  height:100rpx;
  width:100rpx;
  margin-top:20rpx;
}

.head4{
  height:100rpx;
  width:100rpx;
  margin-top: 100rpx;
}

.head5{
  height:100rpx;
  width:100rpx;
  margin-top: 100rpx;
}

.head6{
  height:100rpx;
  width:100rpx;
  margin-top: 90rpx;
}

.head7{
  height:100rpx;
  width:100rpx;
  margin-top: 90rpx;
}
.answer{
  background-color: #fddadf;
  height: 75rpx;
  border:2rpx solid #000000;
  width:30%;
  margin-top: 50rpx;
  margin-left: 345rpx;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 25rpx;
  font-size: 36rpx;
  border-radius: 14rpx;
}

.anhead{
  height:100rpx;
  width:100rpx;
  margin-top:-105rpx;
  margin-left: 600rpx;
}

.ad{
  height:100rpx;
  width: 100rpx;
}

.finish{
  border:2rpx solid #000000;
  height: 110rpx;
  margin-top:10rpx;
  margin-left:90rpx;
  width:72%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}
.kuang {
  background-color: white;
  height:100%;
  position: fixed;
  left:20px;
  top:25px;
  right:20px;
  width: auto;
  height: 1100rpx;
  border: solid black 2px;
  overflow: scroll;
  padding: 17px;
}
.button {
  margin: 20rpx;
  font-size: 30rpx;
}
.loader {
  position: absolute;
  top: 50%;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 175px;
  height: 100px;
  display: flex;
  justify-content: center;
}
.loader .span {
  display: block;
  background: #ccc;
  width: 7px;
  height: 10%;
  border-radius: 14px;
  margin-right: 5px;
  float: left;
  margin-top: 25%;
}
.loader .span:last-child {
  margin-right: 0px;
}
.loader .span:nth-child(1) {
  animation: load 2.5s 1.4s infinite linear;
}
.loader .span:nth-child(2) {
  animation: load 2.5s 1.2s infinite linear;
}
.loader .span:nth-child(3) {
  animation: load 2.5s 1s infinite linear;
}
.loader .span:nth-child(4) {
  animation: load 2.5s 0.8s infinite linear;
}
.loader .span:nth-child(5) {
  animation: load 2.5s 0.6s infinite linear;
}
.loader .span:nth-child(6) {
  animation: load 2.5s 0.4s infinite linear;
}
.loader .span:nth-child(7) {
  animation: load 2.5s 0.2s infinite linear;
}
.loader .span:nth-child(8) {
  animation: load 2.5s 0s infinite linear;
}
.loader .span:nth-child(9) {
  animation: load 2.5s 0.2s infinite linear;
}
.loader .span:nth-child(10) {
  animation: load 2.5s 0.4s infinite linear;
}
.loader .span:nth-child(11) {
  animation: load 2.5s 0.6s infinite linear;
}
.loader .span:nth-child(12) {
  animation: load 2.5s 0.8s infinite linear;
}
.loader .span:nth-child(13) {
  animation: load 2.5s 1s infinite linear;
}
.loader .span:nth-child(14) {
  animation: load 2.5s 1.2s infinite linear;
}
.loader .span:nth-child(15) {
  animation: load 2.5s 1.4s infinite linear;
}
@keyframes load {
  0% {
      background: #ccc;
      margin-top: 25%;
      height: 10%;
  }
  50% {
      background: #444;
      height: 100%;
      margin-top: 0%;
  }
  100% {
      background: #ccc;
      height: 10%;
      margin-top: 25%;
  }
}
</style>
