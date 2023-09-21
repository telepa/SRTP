// pages/classify/classify.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    class1:"生理状况",
    class2:"家庭状况",
    class3:"情感状况",
    class4:"功能状况",
    class5:"附加关注",
    t1:"1",t2:"1",t3:"1",t4:"1",t5:"1",
  },
  onload1() { 
    this.setData({
      t1:"0",
    })
    console.log(this.data.t1)
    wx.request({
        method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
        url: 'http://127.0.0.1:3000/getUser',
        data:{
          t1:this.data.t1,
        },
        success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
          console.log(res.data);
          console.log("大成功");
        },
        fail: function () {//没有获取到值，说明这中间出问题了。
          console.log("获取失败");
        }
    })  
    wx.navigateTo({
      url: '../talk1/talk1',
    })     
  },

  onload2() { 
    this.setData({
      t2:"0",
    })
    wx.request({
        method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
        url: 'http://127.0.0.1:3000/getUser',
        data:{
          t2:this.data.t2,
        },
        success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
          console.log(res.data);
          console.log("大成功");
        },
        fail: function () {//没有获取到值，说明这中间出问题了。
          console.log("获取失败");
        }
    })  
    wx.navigateTo({
      url: '../talk2/talk2',
    })    
  },

  onload3() { 
    this.setData({
      t3:"0",
    })
    wx.request({
        method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
        url: 'http://127.0.0.1:3000/getUser',
        data:{
          t3:this.data.t3,
        },
        success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
          console.log(res.data);
          console.log("大成功");
        },
        fail: function () {//没有获取到值，说明这中间出问题了。
          console.log("获取失败");
        }
    })  
    wx.navigateTo({
      url: '../talk3/talk3',
    })    
  },

  onload4() { 
    this.setData({
      t4:"0",
    })
    wx.request({
        method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
        url: 'http://127.0.0.1:3000/getUser',
        data:{
          t4:this.data.t4,
        },
        success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
          console.log(res.data);
          console.log("大成功");
        },
        fail: function () {//没有获取到值，说明这中间出问题了。
          console.log("获取失败");
        }
    })  
    wx.navigateTo({
      url: '../talk4/talk4',
    })    
  },

  onload5() { 
    this.setData({
      t5:"0",
    })
    wx.request({
        method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
        url: 'http://127.0.0.1:3000/getUser',
        data:{
          t5:this.data.t5,
        },
        success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
          console.log(res.data);
          console.log("大成功");
        },
        fail: function () {//没有获取到值，说明这中间出问题了。
          console.log("获取失败");
        }
    })  
    wx.navigateTo({
      url: '../talk5/talk5',
    })    
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