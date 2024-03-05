<template>
  <div>
  <div class="bg">
  <image class="background" :src="imgURL001" mode='scaleToFill'></image>
  </div>
  <div class="back" scroll-y="true">
   <div class="qa1" v-if="hidden01">
      <image class="head1" :src="imgrobot"></image> 
      <button class="talk1" > 我和朋友们很接近</button> 
      <van-action-sheet :show="show1"  :actions="actions" @close="onClose"  @select="onSelect1"></van-action-sheet>
      <div class="answer" v-if="an1hi">{{an21}}</div>
      <div class="anhead">
      <image class="ad" v-if="an1hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa2" v-if="hidden12">
      <image class="head2" :src="imgrobot"></image> 
      <button class="talk2" > 我在感情上得到了家人的支持</button> 

      <van-action-sheet :show="show2"  :actions="actions" @close="onClose"  @select="onSelect2"></van-action-sheet>

      <div class="answer" v-if="an2hi">{{an22}}</div>
      <div class="anhead">
      <image class="ad" v-if="an2hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa3" v-if="hidden23">
      <image class="head3" :src="imgrobot"></image> 
      <button class="talk3" > 我得到朋友的支持</button> 

      <van-action-sheet :show="show3"  :actions="actions" @close="onClose"  @select="onSelect3"></van-action-sheet>

      <div class="answer" v-if="an3hi">{{an23}}</div>
      <div class="anhead">
      <image class="ad" v-if="an3hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa4" v-if="hidden34">
      <image class="head4" :src="imgrobot"></image> 
      <button class="talk4" > 我的家人已能正视我患病这一事实</button> 

      <van-action-sheet :show="show4"  :actions="actions" @close="onClose"  @select="onSelect4"></van-action-sheet>

      <div class="answer" v-if="an4hi">{{an24}}</div>
      <div class="anhead">
      <image class="ad" v-if="an4hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa5" v-if="hidden45">
      <image class="head5" :src="imgrobot"></image> 
      <button class="talk5" > 我高兴和家里人谈论我的病情</button> 

      <van-action-sheet :show="show5"  :actions="actions" @close="onClose"  @select="onSelect5"></van-action-sheet>

      <div class="answer" v-if="an5hi">{{an25}}</div>
      <div class="anhead">
      <image class="ad" v-if="an5hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa6" v-if="hidden56">
      <image class="head6" :src="imgrobot"></image> 
      <button class="talk6" > 我与自己的配偶（或给我主要支持的人）很亲近</button> 

      <van-action-sheet :show="show6"  :actions="actions" @close="onClose"  @select="onSelect6"></van-action-sheet>

      <div class="answer" v-if="an6hi">{{an26}}</div>
      <div class="anhead">
      <image class="ad" v-if="an6hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa7" v-if="hidden67">
      <image class="head7" :src="imgrobot"></image> 
      <button class="talk7" > 我对自己的性生活感到满意</button> 

      <van-action-sheet :show="show7"  :actions="actions" @close="onClose"  @select="onSelect7"></van-action-sheet>

      <div class="answer" v-if="an7hi">{{an27}}</div>
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
          show1:false, show2:false, show3:false, show4:false, 
          show5:false, show6:false, show7:false, 
          an1hi:false, an2hi:false, an3hi:false, an4hi:false,an5hi:false,
          an6hi:false, an7hi:false,x:'',y:'',
          hidden01:false, hidden12:false, hidden23:false, hidden34:false, 
          hidden45:false, hidden56:false, hidden67:false, finish:false,
          microshow:false,
          name:{},
          actions: [
              {name: "一点也不",subname: "0"},
              {name: "有一点",subname: "1"},
              {name: "有些",subname: "2"},
              {name: "相当",subname: "3"},
              {name: "非常",subname: "4"},
          ],
         an21:"", an22:"", an23:"", an24:"", an25:"", an26:"", an27:"",
         sc21:"", sc22:"", sc23:"", sc24:"", sc25:"", sc26:"", sc27:"",
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
        if(global.n2==0){
          this.an1hi=false, this.an2hi=false, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=false, this.hidden12=false, this.hidden23=false, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=0;
        }else if(global.n2==1){
          this.an1hi=true, this.an2hi=false, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=false, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=1;
        }else if(global.n2==2){
          this.show1=false, this.show2=false, this.show3=false, this.show4=false, 
          this.show5=false, this.show6=false, this.show7=false, 
          this.an1hi=true, this.an2hi=true, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=2;
        }else if(global.n2==3){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=3;
        }else if(global.n2==4){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=false, this.hidden67=false, this.finish=false,
          this.judge=4;
        }else if(global.n2==5){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=false, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=false, this.finish=false,
          this.judge=5;
        }else if(global.n2==6){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=true, this.an7hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=true, this.finish=false,
          this.judge=6;
        }else if(global.n2==7){
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
        console.log('获取到文件：' + this.tempFilePath)
        wx.uploadFile({
           url: 'http://10.193.201.230:8442/upload',
           header: { "Content-Type": "multipart/form-data" },
           filePath: this.tempFilePath,
           name: 'file',
           formData:{
            id: global.id.toString(),
           },
           success: res=>{
            console.log(res.data)
            if(this.hidden01==true&&this.an1hi==false){
              if(res.data=="一点也不。"){
                this.an21 = "一点也不",
                this.sc21 = 0
              }else if(res.data=="有一点。"){
                this.an21 = "有一点",
                this.sc21 = 1
              }else if(res.data=="有些。"){
                this.an21 = "有些",
                this.sc21 = 2
              }else if(res.data=="相当。"){
                this.an21 = "相当",
                this.sc21 = 3
              }else if(res.data=="非常。"){
                this.an21 = "非常",
                this.sc21 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '2-1',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我和朋友们很接近',
            ans: this.an21,
            score: this.sc21
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an1hi = true,
          setTimeout(() => {
          this.hidden12=true;
          this.judge=1;
          global.n2=1;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-2.wav', //仅为示例，并非真实的资源
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
                this.an22 = "一点也不",
                this.sc22 = 0
              }else if(res.data=="有一点。"){
                this.an22 = "有一点",
                this.sc22 = 1
              }else if(res.data=="有些。"){
                this.an22 = "有些",
                this.sc22 = 2
              }else if(res.data=="相当。"){
                this.an22 = "相当",
                this.sc22 = 3
              }else if(res.data=="非常。"){
                this.an22 = "非常",
                this.sc22 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '2-2',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我在感情上得到了家人的支持',
            ans: this.an22,
            score: this.sc22
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an2hi = true,
          setTimeout(() => {
          this.hidden23=true;
          this.judge=2;
          global.n2=2;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-3.wav', //仅为示例，并非真实的资源
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
                this.an23 = "一点也不",
                this.sc23 = 0
              }else if(res.data=="有一点。"){
                this.an23 = "有一点",
                this.sc23 = 1
              }else if(res.data=="有些。"){
                this.an23 = "有些",
                this.sc23 = 2
              }else if(res.data=="相当。"){
                this.an23 = "相当",
                this.sc23 = 3
              }else if(res.data=="非常。"){
                this.an23 = "非常",
                this.sc23 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '2-3',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我得到朋友的支持',
            ans: this.an23,
            score: this.sc23
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an3hi = true,
          setTimeout(() => {
          this.hidden34=true;
          this.judge=3;
          global.n2=3;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-4.wav', //仅为示例，并非真实的资源
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
                this.an24 = "一点也不",
                this.sc24 = 0
              }else if(res.data=="有一点。"){
                this.an24 = "有一点",
                this.sc24 = 1
              }else if(res.data=="有些。"){
                this.an24 = "有些",
                this.sc24 = 2
              }else if(res.data=="相当。"){
                this.an24 = "相当",
                this.sc24 = 3
              }else if(res.data=="非常。"){
                this.an24 = "非常",
                this.sc24 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '2-4',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我的家人已能正视我患病这一事实',
            ans: this.an24,
            score: this.sc24
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an4hi = true,
          setTimeout(() => {
          this.hidden45=true;
          this.judge=4;
          global.n2=4;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-5.wav', //仅为示例，并非真实的资源
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
                this.an25 = "一点也不",
                this.sc25 = 0
              }else if(res.data=="有一点。"){
                this.an25 = "有一点",
                this.sc25 = 1
              }else if(res.data=="有些。"){
                this.an25 = "有些",
                this.sc25 = 2
              }else if(res.data=="相当。"){
                this.an25 = "相当",
                this.sc25 = 3
              }else if(res.data=="非常。"){
                this.an25 = "非常",
                this.sc25 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '2-5',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我高兴和家里人谈论我的病情',
            ans: this.an25,
            score: this.sc25
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an5hi = true,
          setTimeout(() => {
          this.hidden56=true;
          this.judge=5;
          global.n2=5;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-6.wav', //仅为示例，并非真实的资源
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
                this.an26 = "一点也不",
                this.sc26 = 0
              }else if(res.data=="有一点。"){
                this.an26 = "有一点",
                this.sc26 = 1
              }else if(res.data=="有些。"){
                this.an26 = "有些",
                this.sc26 = 2
              }else if(res.data=="相当。"){
                this.an26 = "相当",
                this.sc26 = 3
              }else if(res.data=="非常。"){
                this.an26 = "非常",
                this.sc26 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '2-6',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我与自己的配偶（或给我主要支持的人）很亲近',
            ans: this.an26,
            score: this.sc26
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an6hi = true,
          setTimeout(() => {
          this.hidden67=true;
          this.judge=6;
          global.n2=6;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-7.wav', //仅为示例，并非真实的资源
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
                this.an27 = "一点也不",
                this.sc27 = 0
              }else if(res.data=="有一点。"){
                this.an27 = "有一点",
                this.sc27 = 1
              }else if(res.data=="有些。"){
                this.an27 = "有些",
                this.sc27 = 2
              }else if(res.data=="相当。"){
                this.an27 = "相当",
                this.sc27 = 3
              }else if(res.data=="非常。"){
                this.an27 = "非常",
                this.sc27 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '2-7',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我对自己的性生活感到满意',
            ans: this.an27,
            score: this.sc27
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an7hi = true,
          setTimeout(() => {
          this.finish=true;
          this.judge=7;
          global.n2=7;
          
        }, 1500);
        }
        ) 
            } 
           }
    })
  }
      )
      },
       methods: {
      navigateToC() {
        global.n2=7;
        wx.redirectTo({
        url: '/pages/classify/main'
      
      }
      )
      },
      start() {
        this.microshow=true,
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
  }, 
      Start(){
      this.hidden01=true,
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-1.wav', //仅为示例，并非真实的资源
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
      this.an21=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an1hi=true
    }
    if(this.an21=="一点也不"){
      this.sc21=0;
    }else if(this.an21=="有一点"){
      this.sc21=1;
    }else if(this.an21=="有些"){
      this.sc21=2;
    }else if(this.an21=="相当"){
      this.sc21=3;
    }else if(this.an21=="非常"){
      this.sc21=4;
    }
    console.log(this.sc21);
    this.$axios
          .post('/InsertRecords', {
            f_id: '2-1',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我和朋友们很接近',
            ans: this.an21,
            score: this.sc21
          })
    setTimeout(() => {
      this.hidden12=true;
      global.n2=1;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-2.wav', //仅为示例，并非真实的资源
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
      this.an22=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an2hi=true
    }
    if(this.an22=="一点也不"){
      this.sc22=0;
    }else if(this.an22=="有一点"){
      this.sc22=1;
    }else if(this.an22=="有些"){
      this.sc22=2;
    }else if(this.an22=="相当"){
      this.sc22=3;
    }else if(this.an22=="非常"){
      this.sc22=4;
    }
    console.log(this.sc22);
    this.$axios
          .post('/InsertRecords', {
            f_id: '2-2',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我在感情上得到了家人的支持',
            ans: this.an22,
            score: this.sc22
          })
    setTimeout(() => {
      this.hidden23=true;
      global.n2=2;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-3.wav', //仅为示例，并非真实的资源
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
      this.an23=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an3hi=true
    }
    if(this.an23=="一点也不"){
      this.sc23=0;
    }else if(this.an23=="有一点"){
      this.sc23=1;
    }else if(this.an23=="有些"){
      this.sc23=2;
    }else if(this.an23=="相当"){
      this.sc23=3;
    }else if(this.an23=="非常"){
      this.sc23=4;
    }
    console.log(this.sc23);
    this.$axios
          .post('/InsertRecords', {
            f_id: '2-3',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我得到朋友的支持',
            ans: this.an23,
            score: this.sc23
          })
    setTimeout(() => {
      this.hidden34=true;
      global.n2=3;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-4.wav', //仅为示例，并非真实的资源
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
      this.an24=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an4hi=true
    }
    if(this.an24=="一点也不"){
      this.sc24=0;
    }else if(this.an24=="有一点"){
      this.sc24=1;
    }else if(this.an24=="有些"){
      this.sc24=2;
    }else if(this.an24=="相当"){
      this.sc24=3;
    }else if(this.an24=="非常"){
      this.sc24=4;
    }
    console.log(this.sc24);
    this.$axios
          .post('/InsertRecords', {
            f_id: '2-4',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我的家人已能正视我患病这一事实',
            ans: this.an24,
            score: this.sc24
          })
    setTimeout(() => {
      this.hidden45=true;
      global.n2=4;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-5.wav', //仅为示例，并非真实的资源
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
      this.an25=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an5hi=true
    }
    if(this.an25=="一点也不"){
      this.sc25=0;
    }else if(this.an25=="有一点"){
      this.sc25=1;
    }else if(this.an25=="有些"){
      this.sc25=2;
    }else if(this.an25=="相当"){
      this.sc25=3;
    }else if(this.an25=="非常"){
      this.sc25=4;
    }
    console.log(this.sc25);
    this.$axios
          .post('/InsertRecords', {
            f_id: '2-5',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我高兴和家里人谈论我的病情',
            ans: this.an25,
            score: this.sc25
          })
    setTimeout(() => {
      this.hidden56=true;
      global.n2=5;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-6.wav', //仅为示例，并非真实的资源
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
      this.an26=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an6hi=true
    }
    if(this.an26=="一点也不"){
      this.sc26=0;
    }else if(this.an26=="有一点"){
      this.sc26=1;
    }else if(this.an26=="有些"){
      this.sc26=2;
    }else if(this.an26=="相当"){
      this.sc26=3;
    }else if(this.an26=="非常"){
      this.sc26=4;
    }
    console.log(this.sc26);
    this.$axios
          .post('/InsertRecords', {
            f_id: '2-6',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我与自己的配偶（或给我主要支持的人）很亲近',
            ans: this.an26,
            score: this.sc26
          })
    setTimeout(() => {
      this.hidden67=true;
      global.n2=6;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=2-7.wav', //仅为示例，并非真实的资源
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
      this.an27=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an7hi=true
    }
    if(this.an27=="一点也不"){
      this.sc27=0;
    }else if(this.an27=="有一点"){
      this.sc27=1;
    }else if(this.an27=="有些"){
      this.sc27=2;
    }else if(this.an27=="相当"){
      this.sc27=3;
    }else if(this.an27=="非常"){
      this.sc27=4;
    }
    console.log(this.sc27);
    this.$axios
          .post('/InsertRecords', {
            f_id: '2-7',
            id: global.id,
            classify: '社会/家庭状况',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我对自己的性生活感到满意',
            ans: this.an27,
            score: this.sc27
          })
    setTimeout(() => {
      this.finish=true;
      global.n2=7;
    }, 1500);
  },
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
  height: auto; 
  position: sticky;
}
.try{
  height:300rpx;
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


.talk1,
.talk3{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-111rpx;
  margin-left:125rpx;
  width:53%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}
.talk2{
  border: 2rpx solid #000000;
  height: 200rpx;
  margin-top:-113rpx;
  margin-left:125rpx;
  width:65%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.talk4{
  border: 2rpx solid #000000;
  height: 200rpx;
  margin-top:-113rpx;
  margin-left:125rpx;
  width:70%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.talk6{
  border: 2rpx solid #000000;
  height: 200rpx;
  margin-top:-113rpx;
  margin-left:125rpx;
  width:70%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.talk5,
.talk7{
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
  margin-top:28rpx;
}

.head3{
  height:100rpx;
  width:100rpx;
  margin-top:100rpx;
}

.head4{
  height:100rpx;
  width:100rpx;
  margin-top:100rpx;
}

.head5{
  height:100rpx;
  width:100rpx;
  margin-top: 200rpx;
}

.head6{
  height:100rpx;
  width:100rpx;
  margin-top:192rpx;
}

.head7{
  height:100rpx;
  width:100rpx;
  margin-top: 270rpx;
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
  margin-top:200rpx;
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
