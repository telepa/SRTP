<template>
  <div>   
    <div v-show="notshow2" class="page">
          <div class="kuang">
            <div class='title' > 乳腺癌随访信息收集\n</div>
              <div class="center"><p>时间：{{ currentTime }} 用户：{{username}}</p></div>
                  <div class="classii">健康状况分数汇总</div>
                      <div class="table">
      <div class="tr"> 
        <div class="th">分类</div>
        <div class="th">分数</div>
      </div>
      <div class="tr"> 
        <div class="td">生理健康</div>
        <div class="td">{{score1}}</div>
      </div>
      <div class="tr"> 
        <div class="td">社会/家庭健康</div>
        <div class="td">{{score2}}</div>
      </div>
      <div class="tr"> 
        <div class="td">情感健康</div>
        <div class="td">{{score3}}</div>
      </div>
      <div class="tr"> 
        <div class="td">功能健康</div>
        <div class="td">{{score4}}</div>
      </div>
      <div class="tr"> 
        <div class="td">附加状况健康</div>
        <div class="td">{{score5}}</div>
      </div>
      <div class="tr"> 
        <div class="td">FACT-B TOI</div>
        <div class="td">{{scoreB}}</div>
      </div>
      <div class="tr"> 
        <div class="td">FACT-G Total score</div>
        <div class="td">{{scoreG}}</div>
      </div>
      <div class="tr"> 
        <div class="td">FACT-B Total score</div>
        <div class="td">{{scoreBT}}</div>
      </div>
                        </div>
    <div class="classii">生理状况</div>
    <div class="mytext">
    <text space="ensp">1.我精力不济    </text>
      <text space="ensp" class="bold">{{ans11}}\n</text>
      <text space="ensp">2.我感到恶心    </text>
      <text space="ensp" class="bold">{{ans12}}\n</text>
      <text space="ensp">3.因为身体不好，我满足不了家庭的需要  </text>
      <text space="ensp" class="bold">{{ans13}}\n</text>
      <text space="ensp">4.我感到疼痛    </text>
      <text space="ensp" class="bold">{{ans14}}\n</text>
      <text space="ensp">5.治疗的副作用让我觉得不舒服    </text>
      <text space="ensp" class="bold">{{ans15}}\n</text>
      <text space="ensp">6.我觉得病了    </text>
      <text space="ensp" class="bold">{{ans16}}\n</text>
      <text space="ensp">7.我不得不卧床    </text>
      <text space="ensp" class="bold">{{ans17}}\n</text>
    </div>
    <div class="classii">家庭状况</div>
    <div class="mytext">
    <text space="ensp">1.我和朋友们很接近    </text>
      <text space="ensp" class="bold">{{ans21}}\n</text>
      <text space="ensp">2.我在感情上得到了家人的支持    </text>
      <text space="ensp" class="bold">{{ans22}}\n</text>
      <text space="ensp">3.我得到朋友的支持  </text>
      <text space="ensp" class="bold">{{ans23}}\n</text>
      <text space="ensp">4.我的家人已能正视我患病这一事实    </text>
      <text space="ensp" class="bold">{{ans24}}\n</text>
      <text space="ensp">5.我高兴和家里人谈论我的病情    </text>
      <text space="ensp" class="bold">{{ans25}}\n</text>
      <text space="ensp">6.我与自己的配偶（或给我主要支持的人）很亲近    </text>
      <text space="ensp" class="bold">{{ans26}}\n</text>
      <text space="ensp">7.我对自己的性生活感到满意    </text>
      <text space="ensp" class="bold">{{ans27}}\n</text>
    </div>
    <div class="classii">情感状况</div>
    <div class="mytext">
    <text space="ensp">1.我感到悲伤    </text>
      <text space="ensp" class="bold">{{ans31}}\n</text>
      <text space="ensp">2.我为自己这样对待疾病感到自豪    </text>
      <text space="ensp" class="bold">{{ans32}}\n</text>
      <text space="ensp">3.在与疾病的抗争中，我越来越感到失望  </text>
      <text space="ensp" class="bold">{{ans33}}\n</text>
      <text space="ensp">4.我感到紧张    </text>
      <text space="ensp" class="bold">{{ans34}}\n</text>
      <text space="ensp">5.我担心可能会去世    </text>
      <text space="ensp" class="bold">{{ans35}}\n</text>
      <text space="ensp">6.我担心自己的病情会更糟    </text>
      <text space="ensp" class="bold">{{ans36}}\n</text>
    </div>
    <div class="classii">功能状况</div>
    <div class="mytext">
    <text space="ensp">1.我能够工作（包括家里的工作）    </text>
      <text space="ensp" class="bold">{{ans41}}\n</text>
      <text space="ensp">2.我的工作（包括家里的工作）令我有成就感    </text>
      <text space="ensp" class="bold">{{ans42}}\n</text>
      <text space="ensp">3.我能够享受生活  </text>
      <text space="ensp" class="bold">{{ans43}}\n</text>
      <text space="ensp">4.我已能面对自己的疾病    </text>
      <text space="ensp" class="bold">{{ans44}}\n</text>
      <text space="ensp">5.我睡的很好    </text>
      <text space="ensp" class="bold">{{ans45}}\n</text>
      <text space="ensp">6.我在享受我过去常做的娱乐活动    </text>
      <text space="ensp" class="bold">{{ans46}}\n</text>
      <text space="ensp">7.我对现在的生活质量感到满意    </text>
      <text space="ensp" class="bold">{{ans47}}\n</text>
    </div>
    <div class="classii">附加情况</div>
    <div class="mytext">
    <text space="ensp">1.我一直气促    </text>
      <text space="ensp" class="bold">{{ans51}}\n</text>
      <text space="ensp">2.（由于疾病）我在意自己的穿着打扮    </text>
      <text space="ensp" class="bold">{{ans52}}\n</text>
      <text space="ensp">3.我的一只或两只胳膊肿胀或无力    </text>
      <text space="ensp" class="bold">{{ans53}}\n</text>
      <text space="ensp">4.我感到在性方面有吸引力    </text>
      <text space="ensp" class="bold">{{ans54}}\n</text>
      <text space="ensp">5.脱发使我烦恼    </text>
      <text space="ensp" class="bold">{{ans55}}\n</text>
      <text space="ensp">6.我担心家里其他人有一天会得和我一样的疾病    </text>
      <text space="ensp" class="bold">{{ans56}}\n</text>
      <text space="ensp">7.我担心紧张对我的疾病造成的影响    </text>
      <text space="ensp" class="bold">{{ans57}}\n</text>
      <text space="ensp">8.体重的变化使我烦恼    </text>
      <text space="ensp" class="bold">{{ans58}}\n</text>
      <text space="ensp">9.我仍能感到像一个女人    </text>
      <text space="ensp" class="bold">{{ans59}}\n</text>
      <text space="ensp">10.我的身体的一部分很明显能感到疼痛    </text>
      <text space="ensp" class="bold">{{ans510}}\n</text>
    </div>
    
    </div>
    </div>
      <div v-if="notshow" class="loading">
        <van-loading  size="32px" text-size="24px" type="spinner" color="#ffced9"  >正在获取结果...</van-loading>   
  </div>
  <van-tabbar active="总览"  active-color="#ffced9" inactive-color="#000">
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
export default {
  data() {
      return {
          notshow: true,
          notshow2: false,
          score1:'#',
          score2:'#',
          score3:'#',
          score4:'#',
          score5:'#',
          scoreB:'#',
          scoreG:'#',
          scoreBT:'#',
          ans11:'待选',
          ans12:'待选',
          ans13:'待选',
          ans14:'待选',
          ans15:'待选',
          ans16:'待选',
          ans17:'待选',
          ans21:'待选',
          ans22:'待选',
          ans23:'待选',
          ans24:'待选',
          ans25:'待选',
          ans26:'待选',
          ans27:'待选',
          ans31:'待选',
          ans32:'待选',
          ans33:'待选',
          ans34:'待选',
          ans35:'待选',
          ans36:'待选',
          ans41:'待选',
          ans42:'待选',
          ans43:'待选',
          ans44:'待选',
          ans45:'待选',
          ans46:'待选',
          ans47:'待选',
          ans51:'待选',
          ans52:'待选',
          ans53:'待选',
          ans54:'待选',
          ans55:'待选',
          ans56:'待选',
          ans57:'待选',
          ans58:'待选',
          ans59:'待选',
          ans510:'待选',
          sco11:0,sco12:0,sco13:0,sco14:0,sco15:0,sco16:0,sco17:0,
          sco21:0,sco22:0,sco23:0,sco24:0,sco25:0,sco26:0,sco27:0,
          sco31:0,sco32:0,sco33:0,sco34:0,sco35:0,sco36:0,
          sco41:0,sco42:0,sco43:0,sco44:0,sco45:0,sco46:0,sco47:0,
          sco51:0,sco52:0,sco53:0,sco54:0,sco55:0,sco56:0,sco57:0,sco58:0,sco59:0,sco510:0,
          judge1:0,judge2:0,judge3:0,judge4:0,judge5:0,
          username:global.username,
          realyear: new Date().getFullYear(),
          realmonth: ((new Date().getMonth()+1)>10?(new Date().getMonth()+1):'0'+(new Date().getMonth()+1)),
          realdate: ((new Date().getDate())>10?(new Date().getDate()):'0'+(new Date().getDate())),
          currentTime: new Date().getFullYear()+'-'+((new Date().getMonth()+1)>10?(new Date().getMonth()+1):'0'+(new Date().getMonth()+1))+'-'+((new Date().getDate())>10?(new Date().getDate()):'0'+(new Date().getDate())),
      
      }
  },
 
  mounted(){
          this.notshow = true,
          this.notshow2 = false,
          this.score1='#',
          this.score2='#',
          this.score3='#',
          this.score4='#',
          this.score5='#',
          this.scoreB='#',
          this.scoreG='#',
          this.scoreBT='#',
          this.ans11='待选',
          this.ans12='待选',
          this.ans13='待选',
          this.ans14='待选',
          this.ans15='待选',
          this.ans16='待选',
          this.ans17='待选',
          this.ans21='待选',
          this.ans22='待选',
          this.ans23='待选',
          this.ans24='待选',
          this.ans25='待选',
          this.ans26='待选',
          this.ans27='待选',
          this.ans31='待选',
          this.ans32='待选',
          this.ans33='待选',
          this.ans34='待选',
          this.ans35='待选',
          this.ans36='待选',
          this.ans41='待选',
          this.ans42='待选',
          this.ans43='待选',
          this.ans44='待选',
          this.ans45='待选',
          this.ans46='待选',
          this.ans47='待选',
          this.ans51='待选',
          this.ans52='待选',
          this.ans53='待选',
          this.ans54='待选',
          this.ans55='待选',
          this.ans56='待选',
          this.ans57='待选',
          this.ans58='待选',
          this.ans59='待选',
          this.ans510='待选',
          this.sco11=0,this.sco12=0,this.sco13=0,this.sco14=0,this.sco15=0,this.sco16=0,this.sco17=0,
          this.sco21=0,this.sco22=0,this.sco23=0,this.sco24=0,this.sco25=0,this.sco26=0,this.sco27=0,
          this.sco31=0,this.sco32=0,this.sco33=0,this.sco34=0,this.sco35=0,this.sco36=0,
          this.sco41=0,this.sco42=0,this.sco43=0,this.sco44=0,this.sco45=0,this.sco46=0,this.sco47=0,
          this.sco51=0,this.sco52=0,this.sco53=0,this.sco54=0,this.sco55=0,this.sco56=0,this.sco57=0,this.sco58=0,this.sco59=0,this.sco510=0,
          this.judge1=0,this.judge2=0,this.judge3=0,this.judge4=0,this.judge5=0,
         
    this.$axios
          .post('/FollowSearch', {
            f_id: '1-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans11 = successResponse.data.ans;
            this.sco11 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '1-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans12 = successResponse.data.ans;
            this.sco12 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '1-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans13 = successResponse.data.ans;
            this.sco13 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '1-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans14 = successResponse.data.ans;
            this.sco14 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '1-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans15 = successResponse.data.ans;
            this.sco15 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '1-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans16 = successResponse.data.ans;
            this.sco16 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '1-7',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans17 = successResponse.data.ans;
            this.sco17 = successResponse.data.sco;
            this.score1 = 28-(this.sco11+this.sco12+this.sco13+this.sco14+this.sco15+this.sco16+this.sco17);
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '2-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans21 = successResponse.data.ans;
            this.sco21 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '2-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans22 = successResponse.data.ans;
            this.sco22 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '2-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans23 = successResponse.data.ans;
            this.sco23 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '2-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans24 = successResponse.data.ans;
            this.sco24 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '2-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans25 = successResponse.data.ans;
            this.sco25 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '2-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans26 = successResponse.data.ans;
            this.sco26 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '2-7',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans27 = successResponse.data.ans;
            this.sco27 = successResponse.data.sco;
            this.score2 = this.sco21+this.sco22+this.sco23+this.sco24+this.sco25+this.sco26+this.sco27;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '3-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans31 = successResponse.data.ans;
            this.sco31 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '3-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans32 = successResponse.data.ans;
            this.sco32 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '3-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans33 = successResponse.data.ans;
            this.sco33 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '3-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans34 = successResponse.data.ans;
            this.sco34 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '3-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans35 = successResponse.data.ans;
            this.sco35 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '3-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans36 = successResponse.data.ans;
            this.sco36 = successResponse.data.sco;
            this.score3 = 20+this.sco32-(this.sco31+this.sco33+this.sco34+this.sco35+this.sco36);
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '4-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans41 = successResponse.data.ans;
            this.sco41 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '4-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans42 = successResponse.data.ans;
            this.sco42 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '4-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans43 = successResponse.data.ans;
            this.sco43 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '4-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans44 = successResponse.data.ans;
            this.sco44 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '4-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans45 = successResponse.data.ans;
            this.sco45 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '4-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans46 = successResponse.data.ans;
            this.sco46 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '4-7',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans47 = successResponse.data.ans;
            this.sco47 = successResponse.data.sco;
            this.score4 = this.sco41+this.sco42+this.sco43+this.sco44+this.sco45+this.sco46+this.sco47;
            
          if(this.score1!='#'&&this.score4!='#'&&this.score2!='#'&&this.score3!='#'){
          this.scoreG = this.score1+this.score2+this.score3+this.score4;
          }
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-1',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans51 = successResponse.data.ans;
            this.sco51 = successResponse.data.sco;
            this.notshow = false;
            this.notshow2 = true;
          })
          .catch(err => {
            this.notshow = false;
            this.notshow2 = true;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-2',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans52 = successResponse.data.ans;
            this.sco52 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-3',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans53 = successResponse.data.ans;
            this.sco53 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-4',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans54 = successResponse.data.ans;
            this.sco54 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-5',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans55 = successResponse.data.ans;
            this.sco55 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-6',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans56 = successResponse.data.ans;
            this.sco56 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-7',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans57 = successResponse.data.ans;
            this.sco57 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-8',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans58 = successResponse.data.ans;
            this.sco58 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-9',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans59 = successResponse.data.ans;
            this.sco59 = successResponse.data.sco;
          })
          .catch(err => {
            this.notshow = false;
          })
    this.$axios
          .post('/FollowSearch', {
            f_id: '5-10',
            id: global.id,
            f_date: this.realyear+'-'+this.realmonth+'-'+this.realdate,
          })
          .then(successResponse => {          
            this.ans510 = successResponse.data.ans;
            this.sco510 = successResponse.data.sco;
            this.score5 = 32+this.sco54+this.sco59-(this.sco51+this.sco52+this.sco53+this.sco55+this.sco56+this.sco57+this.sco58+this.sco510);   
            if(this.score1!='#'&&this.score4!='#'&&this.score5!='#'){
          this.scoreB = this.score1+this.score4+this.score5;
          }    
          
          if(this.score1!='#'&&this.score2!='#'&&this.score3!='#'&&this.score4!='#'&&this.score5!='#'){
          this.scoreBT = this.score1+this.score2+this.score3+this.score4+this.score5;
          }
          })
          .catch(err => {
            this.notshow = false;
          }) 
          console.log(this.ans11);
          console.log(this.ans11!='待选');
          
          
          
          

  }
}
</script>
<style>
.loading{
  margin-top: 500rpx;
  margin-left: 175rpx;
}
.page {
background-color: #fddadf;
height: 100%;
position: fixed;
left: 0;
top: 0;
width: 100%;
overflow: auto;
overscroll-behavior-y: contain;
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
.title{
  color:black;
  font-weight: bold;
  height: auto;
  font-size:34rpx;
  text-align:center
}
.center{
  margin: 10px;
  display: flex;
  text-align: center;
  font-size: 13px;
  justify-content: center;
  align-content: center;
  font-size:34rpx
}
.classii{
  margin: 10px;
  margin-bottom: -2px;
  margin-top: 30px;
  font-size: 13px;
  font-weight: bold;
  font-size:34rpx
}
.table {
  display: flex;
  flex-direction: column;     /* 排列形式: 向下 */
  margin-top: 15px;
}
.tr {
  display: flex;
  flex-direction: row;
}

.th, .td {  /* 公有的属性 */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;            /* 自动换行 */
  width: 50%;					/* 4个25%相加刚好100% */
  text-align: center;         /* 文本居中 */
  justify-content:center;     /* 主轴居中 */
  align-items: center;        /* 交叉轴居中 */
  border-top: 1px solid #dadada;      /* 单元格上线框 */
  border-bottom: 1px solid #dadada;   /* 单元格下线框 */
  border-left: 1px solid #dadada;     /* 单元格左线框 */
  border-right: 1px solid #dadada;    /* 单元格右线框 */
}

.th {
  font-weight: 800;           /* 字体加重 */
  background-color:#ffced9;   /* 背景色 */
}

.td {
  font-weight: 500;
  background-color:#ffe9f4;   /* 背景色 */
}
.bold{
  font-weight: bold;
}
.mytext{
  margin: 8px;
  font-size: 12px;
  line-height: 20px;
  font-size:34rpx
}
</style>