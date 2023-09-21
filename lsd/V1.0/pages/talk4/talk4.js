// pages/talk4/talk4.js
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
    show6:false, show7:false, 
    an1hi:true, an2hi:true, an3hi:true, an4hi:true, an5hi:true,
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
    an41:"", an42:"", an43:"", an44:"", an45:"", an46:"", an47:"",
    sc41:"", sc42:"", sc43:"", sc44:"", sc45:"", sc46:"", sc47:"",
    t4:"0", Y:Y, M:M, D:D, id:"",
  },

  onload() {  
    this.setData({
      t4:"1",
    }) 
        wx.request({
            method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
            url: 'http://127.0.0.1:3000/getUser',
            data: {
              an41:this.data.an41, an42:this.data.an42, an43:this.data.an43,
              an44:this.data.an44, an45:this.data.an45, an46:this.data.an46,
              an47:this.data.an47,
              sc41:this.data.sc41, sc42:this.data.sc42, sc43:this.data.sc43,
              sc44:this.data.sc44, sc45:this.data.sc45, sc46:this.data.sc46,
              sc47:this.data.sc47,
              t4:this.data.t4, Y:this.data.Y, M:this.data.M, D:this.data.D,
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
      an41:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an1hi:false,
      })
    }
    if(this.data.an41=="一点也不"){
      this.setData({
        sc41:"0",
      })
    }else if(this.data.an41=="有一点"){
      this.setData({
        sc41:"1",
      })
    }else if(this.data.an41=="有些"){
      this.setData({
        sc41:"2",
      })
    }else if(this.data.an41=="相当"){
      this.setData({
        sc41:"3",
      })
    }else if(this.data.an41=="非常"){
      this.setData({
        sc41:"4",
      })
    }
    console.log(this.data.sc41);
    setTimeout(() => {
      this.setData({
        hidden12:false,
      })
    }, 1500);
  },
  

  onSelect2(event) {
    console.log(event.detail.name);
    this.setData({
      an42:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an2hi:false,
      })
    }
    if(this.data.an42=="一点也不"){
      this.setData({
        sc42:"0",
      })
    }else if(this.data.an42=="有一点"){
      this.setData({
        sc42:"1",
      })
    }else if(this.data.an42=="有些"){
      this.setData({
        sc42:"2",
      })
    }else if(this.data.an42=="相当"){
      this.setData({
        sc42:"3",
      })
    }else if(this.data.an42=="非常"){
      this.setData({
        sc42:"4",
      })
    }
    console.log(this.data.sc42);
    setTimeout(() => {
      this.setData({
        hidden23:false,
      })
    }, 1500);
  },

  onSelect3(event) {
    console.log(event.detail.name);
    this.setData({
      an43:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an3hi:false,
      })
    }
    if(this.data.an43=="一点也不"){
      this.setData({
        sc43:"0",
      })
    }else if(this.data.an43=="有一点"){
      this.setData({
        sc43:"1",
      })
    }else if(this.data.an43=="有些"){
      this.setData({
        sc43:"2",
      })
    }else if(this.data.an43=="相当"){
      this.setData({
        sc43:"3",
      })
    }else if(this.data.an43=="非常"){
      this.setData({
        sc43:"4",
      })
    }
    console.log(this.data.sc43);
    setTimeout(() => {
      this.setData({
        hidden34:false,
      })
    }, 1500);
  },

  onSelect4(event) {
    console.log(event.detail.name);
    this.setData({
      an44:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an4hi:false,
      })
    }
    if(this.data.an44=="一点也不"){
      this.setData({
        sc44:"0",
      })
    }else if(this.data.an44=="有一点"){
      this.setData({
        sc44:"1",
      })
    }else if(this.data.an44=="有些"){
      this.setData({
        sc44:"2",
      })
    }else if(this.data.an44=="相当"){
      this.setData({
        sc44:"3",
      })
    }else if(this.data.an44=="非常"){
      this.setData({
        sc44:"4",
      })
    }
    console.log(this.data.sc44);
    setTimeout(() => {
      this.setData({
        hidden45:false,
      })
    }, 1500);
  },
  onSelect5(event) {
    console.log(event.detail.name);
    this.setData({
      an45:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an5hi:false,
      })
    }
    if(this.data.an45=="一点也不"){
      this.setData({
        sc45:"0",
      })
    }else if(this.data.an45=="有一点"){
      this.setData({
        sc45:"1",
      })
    }else if(this.data.an45=="有些"){
      this.setData({
        sc45:"2",
      })
    }else if(this.data.an45=="相当"){
      this.setData({
        sc45:"3",
      })
    }else if(this.data.an45=="非常"){
      this.setData({
        sc45:"4",
      })
    }
    console.log(this.data.sc45);
    setTimeout(() => {
      this.setData({
        hidden56:false,
      })
    }, 1500);
  },

  onSelect6(event) {
    console.log(event.detail.name);
    this.setData({
      an46:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an6hi:false,
      })
    }
    if(this.data.an46=="一点也不"){
      this.setData({
        sc46:"0",
      })
    }else if(this.data.an46=="有一点"){
      this.setData({
        sc46:"1",
      })
    }else if(this.data.an46=="有些"){
      this.setData({
        sc46:"2",
      })
    }else if(this.data.an46=="相当"){
      this.setData({
        sc46:"3",
      })
    }else if(this.data.an46=="非常"){
      this.setData({
        sc46:"4",
      })
    }
    console.log(this.data.sc46);
    setTimeout(() => {
      this.setData({
        hidden67:false,
      })
    }, 1500);
  },

  onSelect7(event) {
    console.log(event.detail.name);
    this.setData({
      an47:event.detail.name,
    })
    if(event.detail.name=="一点也不"||event.detail.name== "有一点"||event.detail.name=="有些"
      ||event.detail.name== "相当"||event.detail.name=="非常"){
      this.setData({
        an7hi:false,
      })
    }
    if(this.data.an47=="一点也不"){
      this.setData({
        sc47:"0",
      })
    }else if(this.data.an47=="有一点"){
      this.setData({
        sc47:"1",
      })
    }else if(this.data.an47=="有些"){
      this.setData({
        sc47:"2",
      })
    }else if(this.data.an47=="相当"){
      this.setData({
        sc47:"3",
      })
    }else if(this.data.an47=="非常"){
      this.setData({
        sc47:"4",
      })
    }
    console.log(this.data.sc47);
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