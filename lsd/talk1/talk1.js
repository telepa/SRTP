// pages/talk/talk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1:false, show2:false, show3:false, show4:false, show5:false,
    show6:false, show7:false,
    an1hi:true, an2hi:true, an3hi:true, an4hi:true,an5hi:true,
    an6hi:true, an7hi:true,
    hidden12:true, hidden23:true, hidden34:true, hidden45:true,
    hidden56:true, hidden67:true, finish:true,
    actions: [
      {name: "一点也不（0）"},
      {name: "有一点（1）"},
      {name: "有些（2）"},
      {name: "相当（3）"},
      {name: "非常（4）"},
    ],
    an1:"", an2:"", an3:"",an4:"",an5:"",an6:"",an7:""
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

  toclassify(){
    wx.navigateTo({
      url: '../classify/classify',
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
      an1:event.detail.name,
    })
    if(event.detail.name=="一点也不（0）"||event.detail.name== "有一点（1）"||event.detail.name=="有些（2）"
      ||event.detail.name== "相当（3）"||event.detail.name=="非常（4）"){
      this.setData({
        an1hi:false,
      })
    }
    setTimeout(() => {
      this.setData({
        hidden12:false,
      })
    }, 1500);
  },
  

  onSelect2(event) {
    console.log(event.detail.name);
    this.setData({
      an2:event.detail.name,
    })
    if(event.detail.name=="一点也不（0）"||event.detail.name== "有一点（1）"||event.detail.name=="有些（2）"
      ||event.detail.name== "相当（3）"||event.detail.name=="非常（4）"){
      this.setData({
        an2hi:false,
      })
    }
    setTimeout(() => {
      this.setData({
        hidden23:false,
      })
    }, 1500);
  },

  onSelect3(event) {
    console.log(event.detail.name);
    this.setData({
      an3:event.detail.name,
    })
    if(event.detail.name=="一点也不（0）"||event.detail.name== "有一点（1）"||event.detail.name=="有些（2）"
      ||event.detail.name== "相当（3）"||event.detail.name=="非常（4）"){
      this.setData({
        an3hi:false,
      })
    }
    setTimeout(() => {
      this.setData({
        hidden34:false,
      })
    }, 1500);
  },

  onSelect4(event) {
    console.log(event.detail.name);
    this.setData({
      an4:event.detail.name,
    })
    if(event.detail.name=="一点也不（0）"||event.detail.name== "有一点（1）"||event.detail.name=="有些（2）"
      ||event.detail.name== "相当（3）"||event.detail.name=="非常（4）"){
      this.setData({
        an4hi:false,
      })
    }
    setTimeout(() => {
      this.setData({
        hidden45:false,
      })
    }, 1500);
  },
  onSelect5(event) {
    console.log(event.detail.name);
    this.setData({
      an5:event.detail.name,
    })
    if(event.detail.name=="一点也不（0）"||event.detail.name== "有一点（1）"||event.detail.name=="有些（2）"
      ||event.detail.name== "相当（3）"||event.detail.name=="非常（4）"){
      this.setData({
        an5hi:false,
      })
    }
    setTimeout(() => {
      this.setData({
        hidden56:false,
      })
    }, 1500);
  },
  onSelect6(event) {
    console.log(event.detail.name);
    this.setData({
      an6:event.detail.name,
    })
    if(event.detail.name=="一点也不（0）"||event.detail.name== "有一点（1）"||event.detail.name=="有些（2）"
      ||event.detail.name== "相当（3）"||event.detail.name=="非常（4）"){
      this.setData({
        an6hi:false,
      })
    }
    setTimeout(() => {
      this.setData({
        hidden67:false,
      })
    }, 1500);
  },

  onSelect7(event) {
    console.log(event.detail.name);
    this.setData({
      an7:event.detail.name,
    })
    if(event.detail.name=="一点也不（0）"||event.detail.name== "有一点（1）"||event.detail.name=="有些（2）"
      ||event.detail.name== "相当（3）"||event.detail.name=="非常（4）"){
      this.setData({
        an7hi:false,
      })
    }
    setTimeout(() => {
      this.setData({
        finish:false,
      })
    }, 1500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
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