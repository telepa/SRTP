// pages/talk/talk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    an1hi:true,
    actions: [
      {name: "1"},
      {name: "2"},
      {name: "3"},
      {name: "4"},
      {name: "5"},
    ],
    an1:"",
  },
  
  onTap(){
    this.setData({
      show:true,
    })
  },

  onClose() {
    this.setData({ 
      show: false,
    })
  },

  onSelect(event) {
    console.log(event.detail.name);
    this.setData({
      an1:event.detail.name,
    })
    if(event.detail.name==1||event.detail.name==2||event.detail.name==3
      ||event.detail.name==4||event.detail.name==5){
      this.setData({
        an1hi:false,
      })
    }
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