// index.js
// 获取应用实例
Page({
  data: {
      username: '',
      password: '',
      text:'',
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
toregiste(){
  wx.navigateTo({
    url: '../register/register',
  })
},

})