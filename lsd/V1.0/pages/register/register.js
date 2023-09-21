// pages/register/register.js
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

register(){
  var that=this;
    wx.request({
    method: 'POST',
    url: 'http://127.0.0.1:3000/getUser',
    data:{
      "reg": that.data.username,
      "phd": that.data.password
      },
    success: function (res) {
      console.log(res.data); 
       
    },
    fail: function () {
      console.log("获取失败");
    }
  })
  wx.navigateTo({
    url: '../index/index',
  })
}
})