// pages/talk3/talk3.js
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
    show6:false, 
    an1hi:true, an2hi:true, an3hi:true, an4hi:true, an5hi:true,
    an6hi:true,
    hidden12:true, hidden23:true, hidden34:true, hidden45:true,
    hidden56:true, finish:true,
    actions: [
      {name: "一点也不"},
      {name: "有一点"},
      {name: "有些"},
      {name: "相当"},
      {name: "非常"},
    ],
    an31:"", an32:"", an33:"", an34:"", an35:"", an36:"", 
    sc31:"", sc32:"", sc33:"", sc34:"", sc35:"", sc36:"",
    t3:"0", Y:Y, M:M, D:D, id:"",
  },

  onload() { 
    this.setData({
      t3:"1",
    }) 
        wx.request({
            method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
            url: 'http://127.0.0.1:3000/getUser',
            data: {
              an31:this.data.an31, an32:this.data.an32, an33:this.data.an33,
              an34:this.data.an34, an35:this.data.an35, an36:this.data.an36,
              sc31:this.data.sc31, sc32:this.data.sc32, sc33:this.data.sc33,
              sc34:this.data.sc34, sc35:this.data.sc35, sc36:this.data.sc36,
              t3:this.data.t3, Y:this.data.Y, M:this.data.M, D:this.data.D,
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
          url: '../classify/classify',
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

  onSelect1(event) {
    console.log(event.detail.name);
    this.setData({
      an31:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an1hi:false,
      })
    }
    if(this.data.an31=="一点也不"){
      this.setData({
        sc31:"0",
      })
    }else if(this.data.an31=="有一点"){
      this.setData({
        sc31:"1",
      })
    }else if(this.data.an31=="有些"){
      this.setData({
        sc31:"2",
      })
    }else if(this.data.an31=="相当"){
      this.setData({
        sc31:"3",
      })
    }else if(this.data.an31=="非常"){
      this.setData({
        sc31:"4",
      })
    }
    console.log(this.data.sc31);
    setTimeout(() => {
      this.setData({
        hidden12:false,
      })
    }, 1500);
  },
  

  onSelect2(event) {
    console.log(event.detail.name);
    this.setData({
      an32:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an2hi:false,
      })
    }
    if(this.data.an32=="一点也不"){
      this.setData({
        sc32:"0",
      })
    }else if(this.data.an32=="有一点"){
      this.setData({
        sc32:"1",
      })
    }else if(this.data.an32=="有些"){
      this.setData({
        sc32:"2",
      })
    }else if(this.data.an32=="相当"){
      this.setData({
        sc32:"3",
      })
    }else if(this.data.an32=="非常"){
      this.setData({
        sc32:"4",
      })
    }
    console.log(this.data.sc32);
    setTimeout(() => {
      this.setData({
        hidden23:false,
      })
    }, 1500);
  },

  onSelect3(event) {
    console.log(event.detail.name);
    this.setData({
      an33:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an3hi:false,
      })
    }
    if(this.data.an33=="一点也不"){
      this.setData({
        sc33:"0",
      })
    }else if(this.data.an33=="有一点"){
      this.setData({
        sc33:"1",
      })
    }else if(this.data.an33=="有些"){
      this.setData({
        sc33:"2",
      })
    }else if(this.data.an33=="相当"){
      this.setData({
        sc33:"3",
      })
    }else if(this.data.an33=="非常"){
      this.setData({
        sc33:"4",
      })
    }
    console.log(this.data.sc33);
    setTimeout(() => {
      this.setData({
        hidden34:false,
      })
    }, 1500);
  },

  onSelect4(event) {
    console.log(event.detail.name);
    this.setData({
      an34:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an4hi:false,
      })
    }
    if(this.data.an34=="一点也不"){
      this.setData({
        sc34:"0",
      })
    }else if(this.data.an34=="有一点"){
      this.setData({
        sc34:"1",
      })
    }else if(this.data.an34=="有些"){
      this.setData({
        sc34:"2",
      })
    }else if(this.data.an34=="相当"){
      this.setData({
        sc34:"3",
      })
    }else if(this.data.an34=="非常"){
      this.setData({
        sc34:"4",
      })
    }
    console.log(this.data.sc34);
    setTimeout(() => {
      this.setData({
        hidden45:false,
      })
    }, 1500);
  },
  onSelect5(event) {
    console.log(event.detail.name);
    this.setData({
      an35:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an5hi:false,
      })
    }
    if(this.data.an35=="一点也不"){
      this.setData({
        sc35:"0",
      })
    }else if(this.data.an35=="有一点"){
      this.setData({
        sc35:"1",
      })
    }else if(this.data.an35=="有些"){
      this.setData({
        sc35:"2",
      })
    }else if(this.data.an35=="相当"){
      this.setData({
        sc35:"3",
      })
    }else if(this.data.an35=="非常"){
      this.setData({
        sc35:"4",
      })
    }
    console.log(this.data.sc35);
    setTimeout(() => {
      this.setData({
        hidden56:false,
      })
    }, 1500);
  },

  onSelect6(event) {
    console.log(event.detail.name);
    this.setData({
      an36:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an6hi:false,
      })
    }
    if(this.data.an36=="一点也不"){
      this.setData({
        sc36:"0",
      })
    }else if(this.data.an36=="有一点"){
      this.setData({
        sc36:"1",
      })
    }else if(this.data.an36=="有些"){
      this.setData({
        sc36:"2",
      })
    }else if(this.data.an36=="相当"){
      this.setData({
        sc36:"3",
      })
    }else if(this.data.an36=="非常"){
      this.setData({
        sc36:"4",
      })
    }
    console.log(this.data.sc36);
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