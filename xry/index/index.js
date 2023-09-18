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

login(){
    var that = this;
    const logpwd = that.data.password;
    wx.request({
    method: 'POST',
    url: 'http://10.192.195.126:3000/configUser',
      data: {
        'logname' : that.data.username,
      },
    success: function (res) {
        if(res.data[0].pwd==logpwd) {
          wx.navigateTo({
            url: '../classify/classify',
          });
          wx.showToast({
            title:'登陆成功' ,
            icon: 'success'
          })
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
  
}
})