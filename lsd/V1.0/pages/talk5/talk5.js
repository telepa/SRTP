// pages/talk5/talk5.js
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
    show6:false, show7:false, show8:false, show9:false, show10:false,
    an1hi:true, an2hi:true, an3hi:true, an4hi:true,an5hi:true,
    an6hi:true, an7hi:true, an8hi:true, an9hi:true,an10hi:true,
    hidden12:true, hidden23:true, hidden34:true, hidden45:true, hidden56:true, hidden67:true, hidden78:true, hidden89:true, hidden910:true,finish:true,
    actions: [
      {name: "一点也不"},
      {name: "有一点"},
      {name: "有些"},
      {name: "相当"},
      {name: "非常"},
    ],
    an51:"", an52:"", an53:"", an54:"", an55:"",
    an56:"", an57:"", an58:"", an59:"", an510:"",
    sc51:"", sc52:"", sc53:"", sc54:"", sc55:"",
    sc56:"", sc57:"", sc58:"", sc59:"", sc510:"",
    t5:"0", Y:Y, M:M, D:D, id:"",
  },

  onload() {  
    this.setData({
      t5:"1",
    }) 
        wx.request({
            method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
            url: 'http://127.0.0.1:3000/getUser',
            data: {
              an51:this.data.an51, an52:this.data.an52, an53:this.data.an53,
              an54:this.data.an54, an55:this.data.an55, an56:this.data.an56,
              an57:this.data.an57, an58:this.data.an58, an59:this.data.an59,
              an510:this.data.an510,
              sc51:this.data.sc51, sc52:this.data.sc52, sc53:this.data.sc53,
              sc54:this.data.sc54, sc55:this.data.sc55, sc56:this.data.sc56,
              sc57:this.data.sc57, sc58:this.data.sc58, sc59:this.data.sc59,
              sc510:this.data.sc510, 
              t5:this.data.t5, Y:this.data.Y, M:this.data.M, D:this.data.D,
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
          url: '../overview/overview',
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

  onTap8(){
    this.setData({
      show8:true,
    })
  },

  onTap9(){
    this.setData({
      show9:true,
    })
  },

  onTap10(){
    this.setData({
      show10:true,
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

  onClose8() {
    this.setData({ 
      show8: false,
    })
  },
  onClose9() {
    this.setData({ 
      show9: false,
    })
  },

  onClose10() {
    this.setData({ 
      show10: false,
    })
  },

  onSelect1(event) {
    console.log(event.detail.name);
    this.setData({
      an51:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an1hi:false,
      })
    }
    if(this.data.an51=="一点也不"){
      this.setData({
        sc51:"0",
      })
    }else if(this.data.an51=="有一点"){
      this.setData({
        sc51:"1",
      })
    }else if(this.data.an51=="有些"){
      this.setData({
        sc51:"2",
      })
    }else if(this.data.an51=="相当"){
      this.setData({
        sc51:"3",
      })
    }else if(this.data.an51=="非常"){
      this.setData({
        sc51:"4",
      })
    }
    console.log(this.data.sc51);
    setTimeout(() => {
      this.setData({
        hidden12:false,
      })
    }, 1500);
  },
  

  onSelect2(event) {
    console.log(event.detail.name);
    this.setData({
      an52:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an2hi:false,
      })
    }
    if(this.data.an52=="一点也不"){
      this.setData({
        sc52:"0",
      })
    }else if(this.data.an52=="有一点"){
      this.setData({
        sc52:"1",
      })
    }else if(this.data.an52=="有些"){
      this.setData({
        sc52:"2",
      })
    }else if(this.data.an52=="相当"){
      this.setData({
        sc52:"3",
      })
    }else if(this.data.an52=="非常"){
      this.setData({
        sc52:"4",
      })
    }
    console.log(this.data.sc52);
    setTimeout(() => {
      this.setData({
        hidden23:false,
      })
    }, 1500);
  },

  onSelect3(event) {
    console.log(event.detail.name);
    this.setData({
      an53:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an3hi:false,
      })
    }
    if(this.data.an53=="一点也不"){
      this.setData({
        sc53:"0",
      })
    }else if(this.data.an53=="有一点"){
      this.setData({
        sc53:"1",
      })
    }else if(this.data.an53=="有些"){
      this.setData({
        sc53:"2",
      })
    }else if(this.data.an53=="相当"){
      this.setData({
        sc53:"3",
      })
    }else if(this.data.an53=="非常"){
      this.setData({
        sc53:"4",
      })
    }
    console.log(this.data.sc53);
    setTimeout(() => {
      this.setData({
        hidden34:false,
      })
    }, 1500);
  },

  onSelect4(event) {
    console.log(event.detail.name);
    this.setData({
      an54:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an4hi:false,
      })
    }
    if(this.data.an54=="一点也不"){
      this.setData({
        sc54:"0",
      })
    }else if(this.data.an54=="有一点"){
      this.setData({
        sc54:"1",
      })
    }else if(this.data.an54=="有些"){
      this.setData({
        sc54:"2",
      })
    }else if(this.data.an54=="相当"){
      this.setData({
        sc54:"3",
      })
    }else if(this.data.an54=="非常"){
      this.setData({
        sc54:"4",
      })
    }
    console.log(this.data.sc54);
    setTimeout(() => {
      this.setData({
        hidden45:false,
      })
    }, 1500);
  },
  onSelect5(event) {
    console.log(event.detail.name);
    this.setData({
      an55:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an5hi:false,
      })
    }
    if(this.data.an55=="一点也不"){
      this.setData({
        sc55:"0",
      })
    }else if(this.data.an55=="有一点"){
      this.setData({
        sc55:"1",
      })
    }else if(this.data.an55=="有些"){
      this.setData({
        sc55:"2",
      })
    }else if(this.data.an55=="相当"){
      this.setData({
        sc55:"3",
      })
    }else if(this.data.an55=="非常"){
      this.setData({
        sc55:"4",
      })
    }
    console.log(this.data.sc55);
    setTimeout(() => {
      this.setData({
        hidden56:false,
      })
    }, 1500);
  },

  onSelect6(event) {
    console.log(event.detail.name);
    this.setData({
      an56:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an6hi:false,
      })
    }
    if(this.data.an56=="一点也不"){
      this.setData({
        sc56:"0",
      })
    }else if(this.data.an56=="有一点"){
      this.setData({
        sc56:"1",
      })
    }else if(this.data.an56=="有些"){
      this.setData({
        sc56:"2",
      })
    }else if(this.data.an56=="相当"){
      this.setData({
        sc56:"3",
      })
    }else if(this.data.an56=="非常"){
      this.setData({
        sc56:"4",
      })
    }
    console.log(this.data.sc56);
    setTimeout(() => {
      this.setData({
        hidden67:false,
      })
    }, 1500);
  },

  onSelect7(event) {
    console.log(event.detail.name);
    this.setData({
      an57:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an7hi:false,
      })
    }
    if(this.data.an57=="一点也不"){
      this.setData({
        sc57:"0",
      })
    }else if(this.data.an57=="有一点"){
      this.setData({
        sc57:"1",
      })
    }else if(this.data.an57=="有些"){
      this.setData({
        sc57:"2",
      })
    }else if(this.data.an57=="相当"){
      this.setData({
        sc57:"3",
      })
    }else if(this.data.an57=="非常"){
      this.setData({
        sc57:"4",
      })
    }
    console.log(this.data.sc57);
    setTimeout(() => {
      this.setData({
        hidden78:false,
      })
    }, 1500);
  },

  onSelect8(event) {
    console.log(event.detail.name);
    this.setData({
      an58:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an8hi:false,
      })
    }
    if(this.data.an58=="一点也不"){
      this.setData({
        sc58:"0",
      })
    }else if(this.data.an58=="有一点"){
      this.setData({
        sc58:"1",
      })
    }else if(this.data.an58=="有些"){
      this.setData({
        sc58:"2",
      })
    }else if(this.data.an58=="相当"){
      this.setData({
        sc58:"3",
      })
    }else if(this.data.an58=="非常"){
      this.setData({
        sc58:"4",
      })
    }
    console.log(this.data.sc58);
    setTimeout(() => {
      this.setData({
        hidden89:false,
      })
    }, 1500);
  },

  onSelect9(event) {
    console.log(event.detail.name);
    this.setData({
      an59:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an9hi:false,
      })
    }
    if(this.data.an59=="一点也不"){
      this.setData({
        sc59:"0",
      })
    }else if(this.data.an59=="有一点"){
      this.setData({
        sc59:"1",
      })
    }else if(this.data.an59=="有些"){
      this.setData({
        sc59:"2",
      })
    }else if(this.data.an59=="相当"){
      this.setData({
        sc59:"3",
      })
    }else if(this.data.an59=="非常"){
      this.setData({
        sc59:"4",
      })
    }
    console.log(this.data.sc59);
    setTimeout(() => {
      this.setData({
        hidden910:false,
      })
    }, 1500);
  },

  onSelect10(event) {
    console.log(event.detail.name);
    this.setData({
      an510:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an10hi:false,
      })
    }
    if(this.data.an510=="一点也不"){
      this.setData({
        sc510:"0",
      })
    }else if(this.data.an510=="有一点"){
      this.setData({
        sc510:"1",
      })
    }else if(this.data.an510=="有些"){
      this.setData({
        sc510:"2",
      })
    }else if(this.data.an510=="相当"){
      this.setData({
        sc510:"3",
      })
    }else if(this.data.an510=="非常"){
      this.setData({
        sc510:"4",
      })
    }
    console.log(this.data.sc510);
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