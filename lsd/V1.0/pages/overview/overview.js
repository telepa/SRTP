// pages/overview/overview.js
const wx2=require('../../utils/util.js');
const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date:"2023/9/4",
    user:app.globalData.username,
    id:-1,
    score1:0,
    score2:0,
    score3:0,
    score4:0,
    score5:0,
    ans11:{
      ans:"待选",
      score:0
    },
    ans12:{
      ans:"待选",
      score:0
    },
    ans13:{
      ans:"待选",
      score:0
    },
    ans14:{
      ans:"待选",
      score:0
    },
    ans15:{
      ans:"待选",
      score:0
    },
    ans16:{
      ans:"待选",
      score:0
    },
    ans17:{
      ans:"待选",
      score:0
    },
    ans21:{
      ans:"待选",
      score:0
    },
    ans22:{
      ans:"待选",
      score:0
    },
    ans23:{
      ans:"待选",
      score:0
    },
    ans24:{
      ans:"待选",
      score:0
    },
    ans25:{
      ans:"待选",
      score:0
    },
    ans26:{
      ans:"待选",
      score:0
    },
    ans27:{
      ans:"待选",
      score:0
    },
    ans31:{
      ans:"待选",
      score:0
    },
    ans32:{
      ans:"待选",
      score:0
    },
    ans33:{
      ans:"待选",
      score:0
    },
    ans34:{
      ans:"待选",
      score:0
    },
    ans35:{
      ans:"待选",
      score:0
    },
    ans36:{
      ans:"待选",
      score:0
    },
    ans41:{
      ans:"待选",
      score:0
    },
    ans42:{
      ans:"待选",
      score:0
    },
    ans43:{
      ans:"待选",
      score:0
    },
    ans44:{
      ans:"待选",
      score:0
    },
    ans45:{
      ans:"待选",
      score:0
    },
    ans46:{
      ans:"待选",
      score:0
    },
    ans47:{
      ans:"待选",
      score:0
    },
    ans51:{
      ans:"待选",
      score:0
    },
    ans52:{
      ans:"待选",
      score:0
    },
    ans53:{
      ans:"待选",
      score:0
    },
    ans54:{
      ans:"待选",
      score:0
    },
    ans55:{
      ans:"待选",
      score:0
    },
    ans56:{
      ans:"待选",
      score:0
    },
    ans57:{
      ans:"待选",
      score:0
    },
    ans58:{
      ans:"待选",
      score:0
    },
    ans59:{
      ans:"待选",
      score:0
    },
    ans510:{
      ans:"待选",
      score:0
    },
    scoreB:"#",
    scoreG:"#",
    scoreBT:"#",
    ans:"",
    isShow:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //调用API接口获取数据
    this.setData({
      id:app.globalData.id,
      user:app.globalData.username
    });
    this.getAns("1-1",this.data.id,this.data.ans11);
    this.getAns("1-2",this.data.id,this.data.ans12);
    this.getAns("1-3",this.data.id,this.data.ans13);
    this.getAns("1-4",this.data.id,this.data.ans14);
    this.getAns("1-5",this.data.id,this.data.ans15);
    this.getAns("1-6",this.data.id,this.data.ans16);
    this.getAns("1-7",this.data.id,this.data.ans17);
    this.getAns("2-1",this.data.id,this.data.ans21);
    this.getAns("2-2",this.data.id,this.data.ans22);
    this.getAns("2-3",this.data.id,this.data.ans23);
    this.getAns("2-4",this.data.id,this.data.ans24);
    this.getAns("2-5",this.data.id,this.data.ans25);
    this.getAns("2-6",this.data.id,this.data.ans26);
    this.getAns("2-7",this.data.id,this.data.ans27);
    this.getAns("3-1",this.data.id,this.data.ans31);
    this.getAns("3-2",this.data.id,this.data.ans32);
    this.getAns("3-3",this.data.id,this.data.ans33);
    this.getAns("3-4",this.data.id,this.data.ans34);
    this.getAns("3-5",this.data.id,this.data.ans35);
    this.getAns("3-6",this.data.id,this.data.ans36);
    this.getAns("4-1",this.data.id,this.data.ans41);
    this.getAns("4-2",this.data.id,this.data.ans42);
    this.getAns("4-3",this.data.id,this.data.ans43);
    this.getAns("4-4",this.data.id,this.data.ans44);
    this.getAns("4-5",this.data.id,this.data.ans45);
    this.getAns("4-6",this.data.id,this.data.ans46);
    this.getAns("4-7",this.data.id,this.data.ans47);
    this.getAns("5-1",this.data.id,this.data.ans51);
    this.getAns("5-2",this.data.id,this.data.ans52);
    this.getAns("5-3",this.data.id,this.data.ans53);
    this.getAns("5-4",this.data.id,this.data.ans54);
    this.getAns("5-5",this.data.id,this.data.ans55);
    this.getAns("5-6",this.data.id,this.data.ans56);
    this.getAns("5-7",this.data.id,this.data.ans57);
    this.getAns("5-8",this.data.id,this.data.ans58);
    this.getAns("5-9",this.data.id,this.data.ans59);
    this.getAns("5-10",this.data.id,this.data.ans510);
    setTimeout(() => {
      var ans11=this.data.ans11;
      var ans12=this.data.ans12;
      var ans13=this.data.ans13;
      var ans14=this.data.ans14;
      var ans15=this.data.ans15;
      var ans16=this.data.ans16;
      var ans17=this.data.ans17;
      var ans21=this.data.ans21;
      var ans22=this.data.ans22;
      var ans23=this.data.ans23;
      var ans24=this.data.ans24;
      var ans25=this.data.ans25;
      var ans26=this.data.ans26;
      var ans27=this.data.ans27;
      var ans31=this.data.ans31;
      var ans32=this.data.ans32;
      var ans33=this.data.ans33;
      var ans34=this.data.ans34;
      var ans35=this.data.ans35;
      var ans36=this.data.ans36;
      var ans41=this.data.ans41;
      var ans42=this.data.ans42;
      var ans43=this.data.ans43;
      var ans44=this.data.ans44;
      var ans45=this.data.ans45;
      var ans46=this.data.ans46;
      var ans47=this.data.ans47;
      var ans51=this.data.ans51;
      var ans52=this.data.ans52;
      var ans53=this.data.ans53;
      var ans54=this.data.ans54;
      var ans55=this.data.ans55;
      var ans56=this.data.ans56;
      var ans57=this.data.ans57;
      var ans58=this.data.ans58;
      var ans59=this.data.ans59;
      var ans510=this.data.ans510;
      ans11.ans=this.data.ans11.ans;
      ans11.score=this.data.ans11.score;
      ans12.ans=this.data.ans12.ans;
      ans12.score=this.data.ans12.score;
      ans13.ans=this.data.ans13.ans;
      ans13.score=this.data.ans13.score;
      ans14.ans=this.data.ans14.ans;
      ans14.score=this.data.ans14.score;
      ans15.ans=this.data.ans15.ans;
      ans15.score=this.data.ans15.score;
      ans16.ans=this.data.ans16.ans;
      ans16.score=this.data.ans16.score;
      ans17.ans=this.data.ans17.ans;
      ans17.score=this.data.ans17.score;
      ans21.ans=this.data.ans21.ans;
      ans21.score=this.data.ans21.score;
      ans22.ans=this.data.ans22.ans;
      ans22.score=this.data.ans22.score;
      ans23.ans=this.data.ans23.ans;
      ans23.score=this.data.ans23.score;
      ans24.ans=this.data.ans24.ans;
      ans24.score=this.data.ans24.score;
      ans25.ans=this.data.ans25.ans;
      ans25.score=this.data.ans25.score;
      ans26.ans=this.data.ans26.ans;
      ans26.score=this.data.ans26.score;
      ans27.ans=this.data.ans27.ans;
      ans27.score=this.data.ans27.score;
      ans31.ans=this.data.ans31.ans;
      ans31.score=this.data.ans31.score;
      ans32.ans=this.data.ans32.ans;
      ans32.score=this.data.ans32.score;
      ans33.ans=this.data.ans33.ans;
      ans33.score=this.data.ans33.score;
      ans34.ans=this.data.ans34.ans;
      ans34.score=this.data.ans34.score;
      ans35.ans=this.data.ans35.ans;
      ans35.score=this.data.ans35.score;
      ans36.ans=this.data.ans36.ans;
      ans36.score=this.data.ans36.score;
      ans41.ans=this.data.ans41.ans;
      ans41.score=this.data.ans41.score;
      ans42.ans=this.data.ans42.ans;
      ans42.score=this.data.ans42.score;
      ans43.ans=this.data.ans43.ans;
      ans43.score=this.data.ans43.score;
      ans44.ans=this.data.ans44.ans;
      ans44.score=this.data.ans44.score;
      ans45.ans=this.data.ans45.ans;
      ans45.score=this.data.ans45.score;
      ans46.ans=this.data.ans46.ans;
      ans46.score=this.data.ans46.score;
      ans47.ans=this.data.ans47.ans;
      ans47.score=this.data.ans47.score;
      ans51.ans=this.data.ans51.ans;
      ans51.score=this.data.ans51.score;
      ans52.ans=this.data.ans52.ans;
      ans52.score=this.data.ans52.score;
      ans53.ans=this.data.ans53.ans;
      ans53.score=this.data.ans53.score;
      ans54.ans=this.data.ans54.ans;
      ans54.score=this.data.ans54.score;
      ans55.ans=this.data.ans55.ans;
      ans55.score=this.data.ans55.score;
      ans56.ans=this.data.ans56.ans;
      ans56.score=this.data.ans56.score;
      ans57.ans=this.data.ans57.ans;
      ans57.score=this.data.ans57.score;
      ans58.ans=this.data.ans58.ans;
      ans58.score=this.data.ans58.score;
      ans59.ans=this.data.ans59.ans;
      ans59.score=this.data.ans59.score;
      ans510.ans=this.data.ans510.ans;
      ans510.score=this.data.ans510.score;
      this.setData({
        ans11,ans12,ans13,ans14,ans15,ans16,ans17,
        ans21,ans22,ans23,ans24,ans25,ans26,ans27,
        ans31,ans32,ans33,ans34,ans35,ans36,
        ans41,ans42,ans43,ans44,ans45,ans46,ans47,
        ans51,ans52,ans53,ans54,ans55,ans56,ans57,ans58,ans59,ans510
      });
      //score1
      if(this.data.ans11.ans!="待选"&&this.data.ans11.ans!="待选"&&this.data.ans13.ans!="待选"&&this.data.ans14.ans!="待选"&&this.data.ans15.ans!="待选"&&this.data.ans16.ans!="待选"&&this.data.ans17.ans!="待选"){
        this.setData({
          score1:28-(ans11.score+ans12.score+ans13.score+ans14.score+ans15.score+ans16.score+ans17.score)
        })
      }else{
        this.setData({
          score1:"#"
        })
      }
      //score2
      if(this.data.ans21.ans!="待选"&&this.data.ans22.ans!="待选"&&this.data.ans23.ans!="待选"&&this.data.ans24.ans!="待选"&&this.data.ans25.ans!="待选"&&this.data.ans26.ans!="待选"&&this.data.ans27.ans!="待选"){
        this.setData({
          score2:ans21.score+ans22.score+ans23.score+ans24.score+ans25.score+ans26.score+ans27.score
        })
      }else{
        this.setData({
          score2:"#"
        })
      }
      //score3
      if(this.data.ans31.ans!="待选"&&this.data.ans32.ans!="待选"&&this.data.ans33.ans!="待选"&&this.data.ans34.ans!="待选"&&this.data.ans35.ans!="待选"&&this.data.ans36.ans!="待选"){
        this.setData({
          score3:20-(ans31.score+ans33.score+ans34.score+ans35.score+ans36.score)+ans32.score
        })
      }else{
        this.setData({
          score3:"#"
        })
      }
      //score4
      if(this.data.ans41.ans!="待选"&&this.data.ans42.ans!="待选"&&this.data.ans43.ans!="待选"&&this.data.ans44.ans!="待选"&&this.data.ans45.ans!="待选"&&this.data.ans46.ans!="待选"&&this.data.ans47.ans!="待选"){
        this.setData({
          score4:ans41.score+ans42.score+ans43.score+ans44.score+ans45.score+ans46.score+ans47.score
        })
      }else{
        this.setData({
          score4:"#"
        })
      }
      //score5
      if(this.data.ans51.ans!="待选"&&this.data.ans52.ans!="待选"&&this.data.ans53.ans!="待选"&&this.data.ans54.ans!="待选"&&this.data.ans55.ans!="待选"&&this.data.ans56.ans!="待选"&&this.data.ans57.ans!="待选"&&this.data.ans58.ans!="待选"&&this.data.ans59.ans!="待选"&&this.data.ans510.ans!="待选"){
        this.setData({
          score5:32-(ans51.score+ans52.score+ans53.score+ans55.score+ans56.score+ans57.score+ans58.score+ans510.score)+ans54.score+ans59.score
        })
      }else{
        this.setData({
          score5:"#"
        })
      }
      //scoreB=score1+score4+score5
      if(this.data.score1=="#"||this.data.score4=="#"||this.data.score5=="#"){
        this.setData({scoreB:"#"});
      }else{
        this.setData({scoreB:this.data.score1+this.data.score4+this.data.score5});
      }
      //scoreG=score1+score2+score3+score4
      if(this.data.score1=="#"||this.data.score2=="#"||this.data.score3=="#"||this.data.score4=="#"){
        this.setData({scoreG:"#"});
      }else{
        this.setData({scoreG:this.data.score1+this.data.score2+this.data.score3+this.data.score4});
      }
      //scoreBT=score1+score2+score3+score4+score5
      if(this.data.score1=="#"||this.data.score2=="#"||this.data.score3=="#"||this.data.score4=="#"||this.data.score5=="#"){
        this.setData({scoreBT:"#"});
      }else{
        this.setData({scoreBT:this.data.score1+this.data.score2+this.data.score3+this.data.score4+this.data.score5});
      }
      this.setData({date:wx2.getDate()})
      this.setData({isShow:1});
    }, "2000");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
    
  },
  //以select语句为主，查询随访信息表中的信息并以插入或选项结果重新渲染界面
  //参数:f_id,id,myans
  //使用wx.request方法
  getAns(myfid,myid,myans){
    //获取今日日期
    var nowDate=wx2.getDate();
    let url="http://127.0.0.1:3000/getAns";
    let data={
      mydate:nowDate,
      myfid:myfid,
      myid:myid
    };
    wx2.myrequest(url,data,"POST",null).then(function(res){
      // console.log(res.data);
      if(res.data.length==1){
        myans.ans=res.data[0].ans;
        myans.score=res.data[0].score;
        // console.log(that.data.ans11.score); //调试信息
        // console.log(that.data.ans11.ans);
      }
    }).catch(function(res){
      console.log("error:"+res.errMsg);
      wx.showToast({
        title: '系统出错'
      })
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})