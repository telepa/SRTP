const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

//overview 新增
const myrequest=(_url,_data,_method,_callcomplete)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: _url,
      data:_data,
      method:_method,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success:(res)=>{
        if(res.statusCode=200){
          // console.log("wx.request() is success:200 ok");
          // console.log(_data);
          resolve(res);
        }
        else{
          console.log("fail");
          reject(res);
        }
      },
      fail:(res)=>{
        console.log("fail"+res.errMsg);
        reject(res);
      },
      complete:function(res){
        // console.log("wx.request is complete.");
        if(_callcomplete){
          _callcomplete(res);
        }
      }
    })
  })
}

//overview 新增
const getDate=()=>{
  var date=new Date();
  var nowMonth=date.getMonth()+1;
  var strDate=date.getDate();
  var seperator="-";
  if(nowMonth>=1&&nowMonth<=9){
    nowMonth="0"+nowMonth;
  }
  if(strDate>=0&&strDate<=9){
    strDate="0"+strDate;
  }
  var nowDate=date.getFullYear()+seperator+nowMonth+seperator+strDate;
  return nowDate;
}

// module.exports=myrequest

module.exports = {
  formatTime,
  //overview新增
  myrequest:myrequest,
  getDate:getDate
}
