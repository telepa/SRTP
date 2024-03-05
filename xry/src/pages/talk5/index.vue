<template>
  <div>
  <div class="bg">
  <image class="background" :src="imgURL001" mode='scaleToFill'></image>
  </div>
  <div class="back" scroll-y="true">
   <div class="qa1" v-if="hidden01">
      <image class="head1" :src="imgrobot"></image> 
      <button class="talk1" >我一直气促</button> 
      <van-action-sheet :show="show1"  :actions="actions" @close="onClose"  @select="onSelect1"></van-action-sheet>
      <div class="answer" v-if="an1hi">{{an51}}</div>
      <div class="anhead">
      <image class="ad" v-if="an1hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa2" v-if="hidden12">
      <image class="head2" :src="imgrobot"></image> 
      <button class="talk2" >（由于疾病）我在意自己的穿着打扮</button> 

      <van-action-sheet :show="show2"  :actions="actions" @close="onClose"  @select="onSelect2"></van-action-sheet>

      <div class="answer" v-if="an2hi">{{an52}}</div>
      <div class="anhead">
      <image class="ad" v-if="an2hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa3" v-if="hidden23">
      <image class="head3" :src="imgrobot"></image> 
      <button class="talk3" > 我的一只或两只胳膊肿胀或无力</button> 

      <van-action-sheet :show="show3"  :actions="actions" @close="onClose"  @select="onSelect3"></van-action-sheet>

      <div class="answer" v-if="an3hi">{{an53}}</div>
      <div class="anhead">
      <image class="ad" v-if="an3hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa4" v-if="hidden34">
      <image class="head4" :src="imgrobot"></image> 
      <button class="talk4" >我感到在性方面有吸引力</button> 

      <van-action-sheet :show="show4"  :actions="actions" @close="onClose"  @select="onSelect4"></van-action-sheet>

      <div class="answer" v-if="an4hi">{{an54}}</div>
      <div class="anhead">
      <image class="ad" v-if="an4hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa5" v-if="hidden45">
      <image class="head5" :src="imgrobot"></image> 
      <button class="talk5" >脱发使我烦恼</button> 

      <van-action-sheet :show="show5"  :actions="actions" @close="onClose"  @select="onSelect5"></van-action-sheet>

      <div class="answer" v-if="an5hi">{{an55}}</div>
      <div class="anhead">
      <image class="ad" v-if="an5hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa6" v-if="hidden56">
      <image class="head6" :src="imgrobot"></image> 
      <button class="talk6" >我担心家里其他人有一天会得和我一样的疾病</button> 

      <van-action-sheet :show="show6"  :actions="actions" @close="onClose"  @select="onSelect6"></van-action-sheet>

      <div class="answer" v-if="an6hi">{{an56}}</div>
      <div class="anhead">
      <image class="ad" v-if="an6hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa7" v-if="hidden67">
      <image class="head7" :src="imgrobot"></image> 
      <button class="talk7" >我担心紧张对我的疾病造成的影响</button> 

      <van-action-sheet :show="show7"  :actions="actions" @close="onClose"  @select="onSelect7"></van-action-sheet>

      <div class="answer" v-if="an7hi">{{an57}}</div>
      <div class="anhead">
      <image class="ad" v-if="an7hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa8" v-if="hidden78">
      <image class="head8" :src="imgrobot"></image> 
      <button class="talk8" >体重的变化使我烦恼</button> 

      <van-action-sheet :show="show8"  :actions="actions" @close="onClose"  @select="onSelect8"></van-action-sheet>

      <div class="answer" v-if="an8hi">{{an58}}</div>
      <div class="anhead">
      <image class="ad" v-if="an8hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa9" v-if="hidden89">
      <image class="head9" :src="imgrobot"></image> 
      <button class="talk9" >我仍能感到像一个女人</button> 

      <van-action-sheet :show="show9"  :actions="actions" @close="onClose"  @select="onSelect9"></van-action-sheet>

      <div class="answer" v-if="an9hi">{{an59}}</div>
      <div class="anhead">
      <image class="ad" v-if="an9hi" mode="scaleToFill"  :src="imguserhead"></image>
      </div>
    </div>
    <div class="qa10" v-if="hidden910">
      <image class="head10" :src="imgrobot"></image> 
      <button class="talk10" >我的身体的一部分很明显能感到疼痛</button> 

      <van-action-sheet :show="show10"  :actions="actions" @close="onClose"  @select="onSelect10"></van-action-sheet>

      <div class="answer" v-if="an10hi">{{an510}}</div>
      <div class="anhead">
      <image class="ad" v-if="an10hi" mode="scaleToFill"  :src="imguserhead"></image>
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
          show5:false, show6:false, show7:false,  show8:false, show9:false, show10:false,
          an1hi:false, an2hi:false, an3hi:false, an4hi:false,an5hi:false,
          an6hi:false, an7hi:false,x:'',y:'',an8hi:false, an9hi:false,an10hi:false,
          hidden01:false, hidden12:false, hidden23:false, hidden34:false, 
          hidden45:false, hidden56:false, hidden67:false,hidden78:false, hidden89:false, hidden910:false, finish:false,
          realyear: new Date().getFullYear(),
          realmonth: ((new Date().getMonth()+1)>10?(new Date().getMonth()+1):'0'+(new Date().getMonth()+1)),
          realdate: ((new Date().getDate())>10?(new Date().getDate()):'0'+(new Date().getDate())),
          microshow:false,
          name:{},
          actions: [
              {name: "一点也不",subname: "0"},
              {name: "有一点",subname: "1"},
              {name: "有些",subname: "2"},
              {name: "相当",subname: "3"},
              {name: "非常",subname: "4"},
          ],
         an51:"", an52:"", an53:"", an54:"", an55:"", an56:"", an57:"",an58:"", an59:"", an510:"",
         sc51:"", sc52:"", sc53:"", sc54:"", sc55:"", sc56:"", sc57:"",sc58:"", sc59:"", sc510:"",
          t1:"0",  judge:0,
         userhead:'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/userhead.png',
         imgrobot:'https://rxaxcx-1322427198.cos.ap-beijing.myqcloud.com/robot.png',
         imguserhead:global.userhead
        }
      },
      mounted(){
        this.imguserhead=global.userhead;
        if(global.n5==0){
          this.an1hi=false, this.an2hi=false, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,this.an8hi=false, this.an9hi=false,this.an10hi=false,
          this.hidden01=false, this.hidden12=false, this.hidden23=false, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.hidden78=false, this.hidden89=false, this.hidden910=false,this.finish=false,
          this.judge=0
        }else if(global.n5==1){
          this.an1hi=true, this.an2hi=false, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,this.an8hi=false, this.an9hi=false,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=false, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.hidden78=false, this.hidden89=false, this.hidden910=false,this.finish=false,
          this.judge=1
        }else if(global.n5==2){
          this.an1hi=true, this.an2hi=true, this.an3hi=false, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,this.an8hi=false, this.an9hi=false,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=false, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.hidden78=false, this.hidden89=false, this.hidden910=false,this.finish=false,
          this.judge=2
        }else if(global.n5==3){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=false,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,this.an8hi=false, this.an9hi=false,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=false, this.hidden56=false, this.hidden67=false, this.hidden78=false, this.hidden89=false, this.hidden910=false,this.finish=false,
          this.judge=3
        }else if(global.n5==4){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=false,
          this.an6hi=false, this.an7hi=false,this.an8hi=false, this.an9hi=false,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=false, this.hidden67=false, this.hidden78=false, this.hidden89=false, this.hidden910=false,this.finish=false,
          this.judge=4
        }else if(global.n5==5){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=false, this.an7hi=false,this.an8hi=false, this.an9hi=false,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=false, this.hidden78=false, this.hidden89=false, this.hidden910=false,this.finish=false,
          this.judge=5
        }else if(global.n5==6){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=true, this.an7hi=false,this.an8hi=false, this.an9hi=false,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=true, this.hidden78=false, this.hidden89=false, this.hidden910=false,this.finish=false,
          this.judge=6
        }else if(global.n5==7){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=true, this.an7hi=true,this.an8hi=false, this.an9hi=false,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=true, this.hidden78=true, this.hidden89=false, this.hidden910=false,this.finish=false,
          this.judge=7
        }else if(global.n5==8){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=true, this.an7hi=true,this.an8hi=true, this.an9hi=false,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=true, this.hidden78=true, this.hidden89=true, this.hidden910=false,this.finish=false,
          this.judge=8
        }else if(global.n5==9){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=true, this.an7hi=true,this.an8hi=true, this.an9hi=true,this.an10hi=false,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=true, this.hidden78=true, this.hidden89=true, this.hidden910=true,this.finish=false,
          this.judge=9
        }else if(global.n5==10){
          this.an1hi=true, this.an2hi=true, this.an3hi=true, this.an4hi=true,this.an5hi=true,
          this.an6hi=true, this.an7hi=true,this.an8hi=true, this.an9hi=true,this.an10hi=true,
          this.hidden01=true, this.hidden12=true, this.hidden23=true, this.hidden34=true, 
          this.hidden45=true, this.hidden56=true, this.hidden67=true, this.hidden78=true, this.hidden89=true, this.hidden910=true,this.finish=true,
          this.judge=10
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
                this.an51 = "一点也不",
                this.sc51 = 0
              }else if(res.data=="有一点。"){
                this.an51 = "有一点",
                this.sc51 = 1
              }else if(res.data=="有些。"){
                this.an51 = "有些",
                this.sc51 = 2
              }else if(res.data=="相当。"){
                this.an51 = "相当",
                this.sc51 = 3
              }else if(res.data=="非常。"){
                this.an51 = "非常",
                this.sc51 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-1',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我一直气促',
            ans: this.an51,
            score: this.sc51
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an1hi = true,
          setTimeout(() => {
          this.hidden12=true;
          this.judge=1;
          global.n5=1;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-2.wav', //仅为示例，并非真实的资源
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
                this.an52 = "一点也不",
                this.sc52 = 0
              }else if(res.data=="有一点。"){
                this.an52 = "有一点",
                this.sc52 = 1
              }else if(res.data=="有些。"){
                this.an52 = "有些",
                this.sc52 = 2
              }else if(res.data=="相当。"){
                this.an52 = "相当",
                this.sc52 = 3
              }else if(res.data=="非常。"){
                this.an52 = "非常",
                this.sc52 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-2',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '（由于疾病）我在意自己的穿着打扮',
            ans: this.an52,
            score: this.sc52
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an2hi = true,
          setTimeout(() => {
          this.hidden23=true;
          this.judge=2;
          global.n5=2;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-3.wav', //仅为示例，并非真实的资源
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
                this.an53 = "一点也不",
                this.sc53 = 0
              }else if(res.data=="有一点。"){
                this.an53 = "有一点",
                this.sc53 = 1
              }else if(res.data=="有些。"){
                this.an53 = "有些",
                this.sc53 = 2
              }else if(res.data=="相当。"){
                this.an53 = "相当",
                this.sc53 = 3
              }else if(res.data=="非常。"){
                this.an53 = "非常",
                this.sc53 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-3',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我的一只或两只胳膊肿胀或无力',
            ans: this.an53,
            score: this.sc53
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an3hi = true,
          setTimeout(() => {
          this.hidden34=true;
          this.judge=3;
          global.n5=3;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-4.wav', //仅为示例，并非真实的资源
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
                this.an54 = "一点也不",
                this.sc54 = 0
              }else if(res.data=="有一点。"){
                this.an54 = "有一点",
                this.sc54 = 1
              }else if(res.data=="有些。"){
                this.an54 = "有些",
                this.sc54 = 2
              }else if(res.data=="相当。"){
                this.an54 = "相当",
                this.sc54 = 3
              }else if(res.data=="非常。"){
                this.an54 = "非常",
                this.sc54 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-4',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我感到在性方面有吸引力',
            ans: this.an54,
            score: this.sc54
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an4hi = true,
          setTimeout(() => {
          this.hidden45=true;
          this.judge=4;
          global.n5=4;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-5.wav', //仅为示例，并非真实的资源
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
                this.an55 = "一点也不",
                this.sc55 = 0
              }else if(res.data=="有一点。"){
                this.an55 = "有一点",
                this.sc55 = 1
              }else if(res.data=="有些。"){
                this.an55 = "有些",
                this.sc55 = 2
              }else if(res.data=="相当。"){
                this.an55 = "相当",
                this.sc55 = 3
              }else if(res.data=="非常。"){
                this.an55 = "非常",
                this.sc55 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-5',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '脱发使我烦恼',
            ans: this.an55,
            score: this.sc55
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an5hi = true,
          setTimeout(() => {
          this.hidden56=true;
          this.judge=5;
          global.n5=5;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-6.wav', //仅为示例，并非真实的资源
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
                this.an56 = "一点也不",
                this.sc56 = 0
              }else if(res.data=="有一点。"){
                this.an56 = "有一点",
                this.sc56 = 1
              }else if(res.data=="有些。"){
                this.an56 = "有些",
                this.sc56 = 2
              }else if(res.data=="相当。"){
                this.an56 = "相当",
                this.sc56 = 3
              }else if(res.data=="非常。"){
                this.an56 = "非常",
                this.sc56 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-6',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我担心家里其他人有一天会得和我一样的疾病',
            ans: this.an56,
            score: this.sc56
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an6hi = true,
          setTimeout(() => {
          this.hidden67=true;
          this.judge=6;
          global.n5=6;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-7.wav', //仅为示例，并非真实的资源
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
            }else if(this.hidden67==true&&this.an7hi==false){
              if(res.data=="一点也不。"){
                this.an57 = "一点也不",
                this.sc57 = 0
              }else if(res.data=="有一点。"){
                this.an57 = "有一点",
                this.sc57 = 1
              }else if(res.data=="有些。"){
                this.an57 = "有些",
                this.sc57 = 2
              }else if(res.data=="相当。"){
                this.an57 = "相当",
                this.sc57 = 3
              }else if(res.data=="非常。"){
                this.an57 = "非常",
                this.sc57 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-7',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我担心紧张对我的疾病造成的影响',
            ans: this.an57,
            score: this.sc57
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an7hi = true,
          setTimeout(() => {
          this.hidden78=true;
          this.judge=7;
          global.n5=7;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-8.wav', //仅为示例，并非真实的资源
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
            }else if(this.hidden78==true&&this.an8hi==false){
              if(res.data=="一点也不。"){
                this.an58 = "一点也不",
                this.sc58 = 0
              }else if(res.data=="有一点。"){
                this.an58 = "有一点",
                this.sc58 = 1
              }else if(res.data=="有些。"){
                this.an58 = "有些",
                this.sc58 = 2
              }else if(res.data=="相当。"){
                this.an58 = "相当",
                this.sc58 = 3
              }else if(res.data=="非常。"){
                this.an58 = "非常",
                this.sc58 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-8',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '体重的变化使我烦恼',
            ans: this.an58,
            score: this.sc58
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an8hi = true,
          setTimeout(() => {
          this.hidden89=true;
          this.judge=8;
          global.n5=8;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-9.wav', //仅为示例，并非真实的资源
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
            }else if(this.hidden89==true&&this.an9hi==false){
              if(res.data=="一点也不。"){
                this.an59 = "一点也不",
                this.sc59 = 0
              }else if(res.data=="有一点。"){
                this.an59 = "有一点",
                this.sc59 = 1
              }else if(res.data=="有些。"){
                this.an59 = "有些",
                this.sc59 = 2
              }else if(res.data=="相当。"){
                this.an59 = "相当",
                this.sc59 = 3
              }else if(res.data=="非常。"){
                this.an59 = "非常",
                this.sc59 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-9',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我仍能感到像一个女人',
            ans: this.an59,
            score: this.sc59
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an9hi = true,
          setTimeout(() => {
          this.hidden910=true;
          this.judge=9;
          global.n5=9;
          wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-10.wav', //仅为示例，并非真实的资源
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
            }else if(this.hidden910==true&&this.an10hi==false){
              if(res.data=="一点也不。"){
                this.an510 = "一点也不",
                this.sc510 = 0
              }else if(res.data=="有一点。"){
                this.an510 = "有一点",
                this.sc510 = 1
              }else if(res.data=="有些。"){
                this.an510 = "有些",
                this.sc510 = 2
              }else if(res.data=="相当。"){
                this.an510 = "相当",
                this.sc510 = 3
              }else if(res.data=="非常。"){
                this.an510 = "非常",
                this.sc510 = 4
              }     
        this.$axios
          .post('/InsertRecords', {
            f_id: '5-10',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我的身体的一部分很明显能感到疼痛',
            ans: this.an510,
            score: this.sc510
          })
        .then(successResponse => {
          console.log(successResponse.data)
          this.an10hi = true,
          setTimeout(() => {
          this.finish=true;
          this.judge=10;
          global.n5=10;
          
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
    stop() {
    this.recorderManager.stop()
    this.microshow = false
   
  },
      navigateToC() {
        global.n5=10;
        wx.redirectTo({
        url: '/pages/classify/main'  
      }
      )
      },
      Start(){
      this.hidden01=true,
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-1.wav', //仅为示例，并非真实的资源
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
    }else if(this.hidden78==true&&this.judge==7){
      this.show8=true;
      this.judge=8;
    }else if(this.hidden89==true&&this.judge==8){
      this.show9=true;
      this.judge=9;
    }else if(this.hidden910==true&&this.judge==9){
      this.show10=true;
      this.judge=10;
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
    }else if(this.hidden78==true&&this.judge==8){
      this.show8=false;
    }else if(this.hidden89==true&&this.judge==9){
      this.show9=false;
    }else if(this.hidden910==true&&this.judge==10){
      this.show10=false;
    }
  },

  onSelect1(item) {
    console.log(item.mp.detail.name);
      this.an51=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an1hi=true
    }
    if(this.an51=="一点也不"){
      this.sc51=0;
    }else if(this.an51=="有一点"){
      this.sc51=1;
    }else if(this.an51=="有些"){
      this.sc51=2;
    }else if(this.an51=="相当"){
      this.sc51=3;
    }else if(this.an51=="非常"){
      this.sc51=4;
    }
    console.log(this.sc51);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-1',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我一直气促',
            ans: this.an51,
            score: this.sc51
          })
    setTimeout(() => {
      this.hidden12=true;
      global.n5=1;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-2.wav', //仅为示例，并非真实的资源
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
      this.an52=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an2hi=true
    }
    if(this.an52=="一点也不"){
      this.sc52=0;
    }else if(this.an52=="有一点"){
      this.sc52=1;
    }else if(this.an52=="有些"){
      this.sc52=2;
    }else if(this.an52=="相当"){
      this.sc52=3;
    }else if(this.an52=="非常"){
      this.sc52=4;
    }
    console.log(this.sc52);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-2',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '（由于疾病）我在意自己的穿着打扮',
            ans: this.an52,
            score: this.sc52
          })
    setTimeout(() => {
      this.hidden23=true;
      global.n5=2;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-3.wav', //仅为示例，并非真实的资源
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
      this.an53=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an3hi=true
    }
    if(this.an53=="一点也不"){
      this.sc53=0;
    }else if(this.an53=="有一点"){
      this.sc53=1;
    }else if(this.an53=="有些"){
      this.sc53=2;
    }else if(this.an53=="相当"){
      this.sc53=3;
    }else if(this.an53=="非常"){
      this.sc53=4;
    }
    console.log(this.sc53);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-3',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我的一只或两只胳膊肿胀或无力',
            ans: this.an53,
            score: this.sc53
          })
    setTimeout(() => {
      this.hidden34=true;
      global.n5=3;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-4.wav', //仅为示例，并非真实的资源
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
      this.an54=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an4hi=true
    }
    if(this.an54=="一点也不"){
      this.sc54=0;
    }else if(this.an54=="有一点"){
      this.sc54=1;
    }else if(this.an54=="有些"){
      this.sc54=2;
    }else if(this.an54=="相当"){
      this.sc54=3;
    }else if(this.an54=="非常"){
      this.sc54=4;
    }
    console.log(this.sc54);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-4',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我感到在性方面有吸引力',
            ans: this.an54,
            score: this.sc54
          })
    setTimeout(() => {
      this.hidden45=true;
      global.n5=4;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-5.wav', //仅为示例，并非真实的资源
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
      this.an55=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an5hi=true
    }
    if(this.an55=="一点也不"){
      this.sc55=0;
    }else if(this.an55=="有一点"){
      this.sc55=1;
    }else if(this.an55=="有些"){
      this.sc55=2;
    }else if(this.an55=="相当"){
      this.sc55=3;
    }else if(this.an55=="非常"){
      this.sc55=4;
    }
    console.log(this.sc55);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-5',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '脱发使我烦恼',
            ans: this.an55,
            score: this.sc55
          })
    setTimeout(() => {
      this.hidden56=true;
      global.n5=5;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-6.wav', //仅为示例，并非真实的资源
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
      this.an56=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an6hi=true
    }
    if(this.an56=="一点也不"){
      this.sc56=0;
    }else if(this.an56=="有一点"){
      this.sc56=1;
    }else if(this.an56=="有些"){
      this.sc56=2;
    }else if(this.an56=="相当"){
      this.sc56=3;
    }else if(this.an56=="非常"){
      this.sc56=4;
    }
    console.log(this.sc56);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-6',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我担心家里其他人有一天会得和我一样的疾病',
            ans: this.an56,
            score: this.sc56
          })
    setTimeout(() => {
      this.hidden67=true;
      global.n5=6;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-7.wav', //仅为示例，并非真实的资源
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
      this.an57=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an7hi=true
    }
    if(this.an57=="一点也不"){
      this.sc57=0;
    }else if(this.an57=="有一点"){
      this.sc57=1;
    }else if(this.an57=="有些"){
      this.sc57=2;
    }else if(this.an57=="相当"){
      this.sc57=3;
    }else if(this.an57=="非常"){
      this.sc57=4;
    }
    console.log(this.sc57);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-7',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我担心紧张对我的疾病造成的影响',
            ans: this.an57,
            score: this.sc57
          })
    setTimeout(() => {
      this.hidden78=true;
      global.n5=7;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-8.wav', //仅为示例，并非真实的资源
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
  onSelect8(item) {
    console.log(item.mp.detail.name);
      this.an58=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an8hi=true
    }
    if(this.an58=="一点也不"){
      this.sc58=0;
    }else if(this.an58=="有一点"){
      this.sc58=1;
    }else if(this.an58=="有些"){
      this.sc58=2;
    }else if(this.an58=="相当"){
      this.sc58=3;
    }else if(this.an58=="非常"){
      this.sc58=4;
    }
    console.log(this.sc58);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-8',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '体重的变化使我烦恼',
            ans: this.an58,
            score: this.sc58
          })
    setTimeout(() => {
      this.hidden89=true;
      global.n5=8;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-9.wav', //仅为示例，并非真实的资源
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
  onSelect9(item) {
    console.log(item.mp.detail.name);
      this.an59=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an9hi=true
    }
    if(this.an59=="一点也不"){
      this.sc59=0;
    }else if(this.an59=="有一点"){
      this.sc59=1;
    }else if(this.an59=="有些"){
      this.sc59=2;
    }else if(this.an59=="相当"){
      this.sc59=3;
    }else if(this.an59=="非常"){
      this.sc59=4;
    }
    console.log(this.sc59);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-9',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我仍能感到像一个女人',
            ans: this.an59,
            score: this.sc59
          })
    setTimeout(() => {
      this.hidden910=true;
      global.n5=9;
      wx.downloadFile({
        url: 'http://10.193.201.230:8442/audio?file=5-10.wav', //仅为示例，并非真实的资源
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
  onSelect10(item) {
    console.log(item.mp.detail.name);
      this.an510=item.mp.detail.name;
    if(item.mp.detail.name=="一点也不"||item.mp.detail.name== "有一点"||item.mp.detail.name=="有些"
      ||item.mp.detail.name== "相当"||item.mp.detail.name=="非常"){
      this.an10hi=true
    }
    if(this.an510=="一点也不"){
      this.sc510=0;
    }else if(this.an510=="有一点"){
      this.sc510=1;
    }else if(this.an510=="有些"){
      this.sc510=2;
    }else if(this.an510=="相当"){
      this.sc510=3;
    }else if(this.an59=="非常"){
      this.sc510=4;
    }
    console.log(this.sc510);
    this.$axios
          .post('/InsertRecords', {
            f_id: '5-10',
            id: global.id,
            classify: '附加关注',
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
            question: '我的身体的一部分很明显能感到疼痛',
            ans: this.an510,
            score: this.sc510
          })
    setTimeout(() => {
      global.n5=10;
      this.finish=true;
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
  height: 300rpx;
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


.talk1{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-111rpx;
  margin-left:125rpx;
  width:40%;
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
  margin-top:-114rpx;
  margin-left:125rpx;
  width:70%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}

.talk3{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-110rpx;
  margin-left:125rpx;
  width:85%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}

.talk4{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-114rpx;
  margin-left:125rpx;
  width:68%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.talk5{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-114rpx;
  margin-left:125rpx;
  width:43%;
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
  margin-top:-114rpx;
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

.talk7{
  border: 2rpx solid #000000;
  height: 200rpx;
  margin-top:-114rpx;
  margin-left:125rpx;
  width:67%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.talk8{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-111rpx;
  margin-left:125rpx;
  width:57%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.talk9{
  border: 2rpx solid #000000;
  height: 110rpx;
  margin-top:-111rpx;
  margin-left:125rpx;
  width:62%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
}

.talk10{
  border: 2rpx solid #000000;
  height: 200rpx;
  margin-top:-114rpx;
  margin-left:125rpx;
  width:70%;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 38rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}

.head1{
  height:100rpx;
  width:100rpx;
  margin-top:120rpx;
}

.head2{
  height:100rpx;
  width:100rpx;
  margin-top:40rpx;
}

.head3{
  height:100rpx;
  width:100rpx;
  margin-top:150rpx;
}

.head4{
  height:100rpx;
  width:100rpx;
  margin-top:170rpx;
}

.head5{
  height:100rpx;
  width:100rpx;
  margin-top:180rpx;
}

.head6{
  height:100rpx;
  width:100rpx;
  margin-top:190rpx;
}

.head7{
  height:100rpx;
  width:100rpx;
  margin-top:300rpx;
}

.head8{
  height:100rpx;
  width:100rpx;
  margin-top:400rpx;
}

.head9{
  height:100rpx;
  width:100rpx;
  margin-top:150rpx;
}

.head10{
  height:100rpx;
  width:100rpx;
  margin-top:160rpx;
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
  margin-top:160rpx;
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
