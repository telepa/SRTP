// pages/talk2/talk2.js
const app=getApp()
var timestamp = Date.parse(new Date());
var date = new Date(timestamp);
//获取年份  
var Y =date.getFullYear();
//获取月份  
var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//获取当日日期 
var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show1:false, show2:false, show3:false, show4:false, show5:false,
    show6:false, show7:false,
    an1hi:true, an2hi:true, an3hi:true, an4hi:true, an5hi:true,
    an6hi:true, an7hi:true,
    hidden12:true, hidden23:true, hidden34:true, hidden45:true,
    hidden56:true, hidden67:true, finish:true,
    actions: [
      {name: "一点也不"},
      {name: "有一点"},
      {name: "有些"},
      {name: "相当"},
      {name: "非常"},
    ],
    an21:"", an22:"", an23:"", an24:"", an25:"", an26:"", an27:"",
    sc21:"", sc22:"", sc23:"", sc24:"", sc25:"", sc26:"", sc27:"",
    t2:"0", Y:Y, M:M, D:D, id:"",
  },

  onload() {
    this.setData({
      t2:"1",
    })
        wx.request({
            method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
            url: 'http://127.0.0.1:3000/getUser',
            data: {
              an21:this.data.an21, an22:this.data.an22, an23:this.data.an23,
              an24:this.data.an24, an25:this.data.an25, an26:this.data.an26,
              an27:this.data.an27,
              sc21:this.data.sc21, sc22:this.data.sc22, sc23:this.data.sc23,
              sc24:this.data.sc24, sc25:this.data.sc25, sc26:this.data.sc26,
              sc27:this.data.sc27,
              t2:this.data.t2, Y:this.data.Y, M:this.data.M, D:this.data.D,
              id:app.globalData.id,
            },
            success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
              console.log(res.data);
              console.log("大成功");
            },
            fail: function () {//没有获取到值，说明这中间出问题了。
              console.log("获取失败");
            }
        }),
        wx.redirectTo({
          url: '../classify/classify',
        })       
    },

  onTap1(){
    this.setData({
      show1:true,
    })
  },
  onTap2(){
    this.setData({
      show2:true,
    })
  },
  onTap3(){
    this.setData({
      show3:true,
    })
  },
  onTap4(){
    this.setData({
      show4:true,
    })
  },
  onTap5(){
    this.setData({
      show5:true,
    })
  },
  onTap6(){
    this.setData({
      show6:true,
    })
  },

  onTap7(){
    this.setData({
      show7:true,
    })
  },

  onClose1() {
    this.setData({ 
      show1: false,
    })
  },
  onClose2() {
    this.setData({ 
      show2: false,
    })
  },
  onClose3() {
    this.setData({ 
      show3: false,
    })
  },
  onClose4() {
    this.setData({ 
      show4: false,
    })
  },
  onClose5() {
    this.setData({ 
      show5: false,
    })
  }, 
  onClose6() {
    this.setData({ 
      show6: false,
    })
  },

  onClose7() {
    this.setData({ 
      show7: false,
    })
  },

  onSelect1(event) {
    console.log(event.detail.name);
    this.setData({
      an21:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an1hi:false,
      })
    }
    if(this.data.an21=="一点也不"){
      this.setData({
        sc21:"0",
      })
    }else if(this.data.an21=="有一点"){
      this.setData({
        sc21:"1",
      })
    }else if(this.data.an21=="有些"){
      this.setData({
        sc21:"2",
      })
    }else if(this.data.an21=="相当"){
      this.setData({
        sc21:"3",
      })
    }else if(this.data.an21=="非常"){
      this.setData({
        sc21:"4",
      })
    }
    console.log(this.data.sc21);
    setTimeout(() => {
      this.setData({
        hidden12:false,
      })
    }, 1500);
  },
  

  onSelect2(event) {
    console.log(event.detail.name);
    this.setData({
      an22:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an2hi:false,
      })
    }
    if(this.data.an22=="一点也不"){
      this.setData({
        sc22:"0",
      })
    }else if(this.data.an22=="有一点"){
      this.setData({
        sc22:"1",
      })
    }else if(this.data.an22=="有些"){
      this.setData({
        sc22:"2",
      })
    }else if(this.data.an22=="相当"){
      this.setData({
        sc22:"3",
      })
    }else if(this.data.an22=="非常"){
      this.setData({
        sc22:"4",
      })
    }
    console.log(this.data.sc22);
    setTimeout(() => {
      this.setData({
        hidden23:false,
      })
    }, 1500);
  },

  onSelect3(event) {
    console.log(event.detail.name);
    this.setData({
      an23:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an3hi:false,
      })
    }
    if(this.data.an23=="一点也不"){
      this.setData({
        sc23:"0",
      })
    }else if(this.data.an23=="有一点"){
      this.setData({
        sc23:"1",
      })
    }else if(this.data.an23=="有些"){
      this.setData({
        sc23:"2",
      })
    }else if(this.data.an23=="相当"){
      this.setData({
        sc23:"3",
      })
    }else if(this.data.an23=="非常"){
      this.setData({
        sc23:"4",
      })
    }
    console.log(this.data.sc23);
    setTimeout(() => {
      this.setData({
        hidden34:false,
      })
    }, 1500);
  },

  onSelect4(event) {
    console.log(event.detail.name);
    this.setData({
      an24:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an4hi:false,
      })
    }
    if(this.data.an24=="一点也不"){
      this.setData({
        sc24:"0",
      })
    }else if(this.data.an24=="有一点"){
      this.setData({
        sc24:"1",
      })
    }else if(this.data.an24=="有些"){
      this.setData({
        sc24:"2",
      })
    }else if(this.data.an24=="相当"){
      this.setData({
        sc24:"3",
      })
    }else if(this.data.an24=="非常"){
      this.setData({
        sc24:"4",
      })
    }
    console.log(this.data.sc24);
    setTimeout(() => {
      this.setData({
        hidden45:false,
      })
    }, 1500);
  },
  onSelect5(event) {
    console.log(event.detail.name);
    this.setData({
      an25:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an5hi:false,
      })
    }
    if(this.data.an25=="一点也不"){
      this.setData({
        sc25:"0",
      })
    }else if(this.data.an25=="有一点"){
      this.setData({
        sc25:"1",
      })
    }else if(this.data.an25=="有些"){
      this.setData({
        sc25:"2",
      })
    }else if(this.data.an25=="相当"){
      this.setData({
        sc25:"3",
      })
    }else if(this.data.an25=="非常"){
      this.setData({
        sc25:"4",
      })
    }
    console.log(this.data.sc25);
    setTimeout(() => {
      this.setData({
        hidden56:false,
      })
    }, 1500);
  },

  onSelect6(event) {
    console.log(event.detail.name);
    this.setData({
      an26:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an6hi:false,
      })
    }
    if(this.data.an26=="一点也不"){
      this.setData({
        sc26:"0",
      })
    }else if(this.data.an26=="有一点"){
      this.setData({
        sc26:"1",
      })
    }else if(this.data.an26=="有些"){
      this.setData({
        sc26:"2",
      })
    }else if(this.data.an26=="相当"){
      this.setData({
        sc26:"3",
      })
    }else if(this.data.an26=="非常"){
      this.setData({
        sc26:"4",
      })
    }
    console.log(this.data.sc26);
    setTimeout(() => {
      this.setData({
        hidden67:false,
      })
    }, 1500);
  },

  onSelect7(event) {
    console.log(event.detail.name);
    this.setData({
      an27:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an7hi:false,
      })
    }
    if(this.data.an27=="一点也不"){
      this.setData({
        sc27:"0",
      })
    }else if(this.data.an27=="有一点"){
      this.setData({
        sc27:"1",
      })
    }else if(this.data.an27=="有些"){
      this.setData({
        sc27:"2",
      })
    }else if(this.data.an27=="相当"){
      this.setData({
        sc27:"3",
      })
    }else if(this.data.an27=="非常"){
      this.setData({
        sc27:"4",
      })
    }
    console.log(this.data.sc27);
    setTimeout(() => {
      this.setData({
        finish:false,
      })
    }, 1500);
  },

  /* 生命周期函数--监听页面加载 */
  onLoad(options) {
    
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