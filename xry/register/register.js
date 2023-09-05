// pages/register.js
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
})