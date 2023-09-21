// pages/index/index.js
// 获取应用实例
const app=getApp()
Page({
  data: {
    username: '',
    password: '',
  },

inputUsername(e) {
  this.setData({
    username: e.detail.value,
  })
},

inputPassword(e) {
  this.setData({
    password: e.detail.value,
  })
},

login(){
  var that = this;
  const logpwd = that.data.password;
  app.globalData.username = this.data.username;
  wx.request({
  method: 'POST',
  url: 'http://127.0.0.1:3000/configUser',
    data: {
      'logname' : that.data.username,
    },
  success: function (res) {
      console.log(res.data)
      app.globalData.id=res.data[0].id
      if(res.data[0].pwd==logpwd) {
        wx.redirectTo({
          url: '../classify/classify',
        });
        wx.showToast({
          title:'登陆成功' ,
          icon: 'success'
        });
      }else {
        wx.showToast({
          title: '账号或密码错误',
          icon: 'fail'
        })
      }
  },
  fail: function () {
    console.log("获取失败");
  }
}) 
},

toregiste(){
  wx.navigateTo({
    url: '../register/register',
  })
},
})