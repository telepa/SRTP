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
    url: '../register',
  })
},

onLoad() {
  //我们写一个调用数据库函数，使得本页面加载时调用此函数，查找 youqi.data 里的所有条目。
      wx.request({
          method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
          url: 'http://10.192.195.126:3000/getUser',//这里的 ip 地址不是数据库的地址，而是你的电脑本地的地址，因为这一步的操作是要找到本地 nodejs 服务器。getUser 要和 server.js 中定义的方法名一致。
       
          success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
            console.log(res);
          },
          fail: function () {//没有获取到值，说明这中间出问题了。
            console.log("获取失败");
          }
        })
  },
})