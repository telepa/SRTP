// pages/talk1/talk1.js
const app=getApp()
var timestamp = Date.parse(new Date());
var date = new Date(timestamp);
//获取年份  
var Y =date.getFullYear();
//获取月份  
var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//获取当日日期 
var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
console.log(Y + '年' + M + '月' + D + '日' ); 
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
      {name: "一点也不"},
      {name: "有一点"},
      {name: "有些"},
      {name: "相当"},
      {name: "非常"},
    ],
    an11:"", an12:"", an13:"", an14:"", an15:"", an16:"", an17:"",
    sc11:"", sc12:"", sc13:"", sc14:"", sc15:"", sc16:"", sc17:"",
    t1:"0", Y:Y, M:M, D:D, id:"",
  },

  onload() { 
        this.setData({
          t1:"1",
        })
        wx.request({
            method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
            url: 'http://127.0.0.1:3000/getUser',
            data: {
              an11:this.data.an11, an12:this.data.an12, an13:this.data.an13,
              an14:this.data.an14, an15:this.data.an15, an16:this.data.an16,
              an17:this.data.an17,
              sc11:this.data.sc11, sc12:this.data.sc12, sc13:this.data.sc13,
              sc14:this.data.sc14, sc15:this.data.sc15, sc16:this.data.sc16,
              sc17:this.data.sc17,
              t1:this.data.t1, Y:this.data.Y, M:this.data.M, D:this.data.D,
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

  onTap7(){
    this.setData({
      show7:true,
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
      an11:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an1hi:false,
      })
    }
    if(this.data.an11=="一点也不"){
      this.setData({
        sc11:"0",
      })
    }else if(this.data.an11=="有一点"){
      this.setData({
        sc11:"1",
      })
    }else if(this.data.an11=="有些"){
      this.setData({
        sc11:"2",
      })
    }else if(this.data.an11=="相当"){
      this.setData({
        sc11:"3",
      })
    }else if(this.data.an11=="非常"){
      this.setData({
        sc11:"4",
      })
    }
    console.log(this.data.sc11);
    setTimeout(() => {
      this.setData({
        hidden12:false,
      })
    }, 1500);
  },
  

  onSelect2(event) {
    console.log(event.detail.name);
    this.setData({
      an12:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an2hi:false,
      })
    }
    if(this.data.an12=="一点也不"){
      this.setData({
        sc12:"0",
      })
    }else if(this.data.an12=="有一点"){
      this.setData({
        sc12:"1",
      })
    }else if(this.data.an12=="有些"){
      this.setData({
        sc12:"2",
      })
    }else if(this.data.an12=="相当"){
      this.setData({
        sc12:"3",
      })
    }else if(this.data.an12=="非常"){
      this.setData({
        sc12:"4",
      })
    }
    console.log(this.data.sc12);
    setTimeout(() => {
      this.setData({
        hidden23:false,
      })
    }, 1500);
  },

  onSelect3(event) {
    console.log(event.detail.name);
    this.setData({
      an13:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an3hi:false,
      })
    }
    if(this.data.an13=="一点也不"){
      this.setData({
        sc13:"0",
      })
    }else if(this.data.an13=="有一点"){
      this.setData({
        sc13:"1",
      })
    }else if(this.data.an13=="有些"){
      this.setData({
        sc13:"2",
      })
    }else if(this.data.an13=="相当"){
      this.setData({
        sc13:"3",
      })
    }else if(this.data.an13=="非常"){
      this.setData({
        sc13:"4",
      })
    }
    console.log(this.data.sc13);
    setTimeout(() => {
      this.setData({
        hidden34:false,
      })
    }, 1500);
  },

  onSelect4(event) {
    console.log(event.detail.name);
    this.setData({
      an14:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an4hi:false,
      })
    }
    if(this.data.an14=="一点也不"){
      this.setData({
        sc14:"0",
      })
    }else if(this.data.an14=="有一点"){
      this.setData({
        sc14:"1",
      })
    }else if(this.data.an14=="有些"){
      this.setData({
        sc14:"2",
      })
    }else if(this.data.an14=="相当"){
      this.setData({
        sc14:"3",
      })
    }else if(this.data.an14=="非常"){
      this.setData({
        sc14:"4",
      })
    }
    console.log(this.data.sc14);
    setTimeout(() => {
      this.setData({
        hidden45:false,
      })
    }, 1500);
  },
  onSelect5(event) {
    console.log(event.detail.name);
    this.setData({
      an15:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an5hi:false,
      })
    }
    if(this.data.an15=="一点也不"){
      this.setData({
        sc15:"0",
      })
    }else if(this.data.an15=="有一点"){
      this.setData({
        sc15:"1",
      })
    }else if(this.data.an15=="有些"){
      this.setData({
        sc15:"2",
      })
    }else if(this.data.an15=="相当"){
      this.setData({
        sc15:"3",
      })
    }else if(this.data.an15=="非常"){
      this.setData({
        sc15:"4",
      })
    }
    console.log(this.data.sc15);
    setTimeout(() => {
      this.setData({
        hidden56:false,
      })
    }, 1500);
  },

  onSelect6(event) {
    console.log(event.detail.name);
    this.setData({
      an16:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an6hi:false,
      })
    }
    if(this.data.an16=="一点也不"){
      this.setData({
        sc16:"0",
      })
    }else if(this.data.an16=="有一点"){
      this.setData({
        sc16:"1",
      })
    }else if(this.data.an16=="有些"){
      this.setData({
        sc16:"2",
      })
    }else if(this.data.an16=="相当"){
      this.setData({
        sc16:"3",
      })
    }else if(this.data.an16=="非常"){
      this.setData({
        sc16:"4",
      })
    }
    console.log(this.data.sc16);
    setTimeout(() => {
      this.setData({
        hidden67:false,
      })
    }, 1500);
  },

  onSelect7(event) {
    console.log(event.detail.name);
    this.setData({
      an17:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an7hi:false,
      })
    }
    if(this.data.an17=="一点也不"){
      this.setData({
        sc17:"0",
      })
    }else if(this.data.an17=="有一点"){
      this.setData({
        sc17:"1",
      })
    }else if(this.data.an17=="有些"){
      this.setData({
        sc17:"2",
      })
    }else if(this.data.an17=="相当"){
      this.setData({
        sc17:"3",
      })
    }else if(this.data.an17=="非常"){
      this.setData({
        sc17:"4",
      })
    }
    console.log(this.data.sc17);
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