const express=require('express')
const bodyParser =require('body-parser')
const app=express()
const mysql = require('mysql')
const IPAddress='127.0.0.1'//因为这里是要链接远程数据库，ip 地址是 mysql 的地址！！本地就是 127.0.0.1，服务器上就自己找找看
const UserName='root'
const PWD='LSD~0620'
const DBName='myapp'
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//注册
app.post('/getUser',(req,res)=>{
  console.log(req.body)	// 客户端请求的传参data数据
  const reg=req.body.reg
  const phd=req.body.phd
  var connection = mysql.createConnection({
    host:IPAddress,
    user:UserName,
    password:PWD,
    database:DBName
  });
  connection.connect();
  var addsql = 'insert into account (id,user_name,pwd) values (0,?,?)';
  var addsqlprograms = [reg,phd];
  connection.query(addsql,addsqlprograms ,function(error,results){
   if(error) console.log(error);}) 
  connection.end();
})


//登录
app.post('/configUser',(req,res)=>{  
  console.log(req.body)	
  const logname=req.body.logname
  var connection=mysql.createConnection({
    host:IPAddress,
    port: 3306,
    user:UserName,
    password:PWD,
    database:DBName
  })//配置连接的属性
  connection.connect();//尝试连接
  connection.query("select * from account where user_name = '"+logname+"'",logname,function(error,results){
   if(error) console.log(error);//执行失败的话
   res.json(results);
  })
  connection.end();//断开连接
})


//作答
app.get('/getUser',(req,res)=>{ //这里的是 get 方法 getUser，对应了刚才的页面发来的请求。就会执行这个方法。
  console.log(req.query)	// 客户端请求的传参data数据
  const id=req.query.id
  const Y=req.query.Y
  const M=req.query.M
  const D=req.query.D
  const t1=req.query.t1
  const t2=req.query.t2
  const t3=req.query.t3
  const t4=req.query.t4
  const t5=req.query.t5
  const an11=req.query.an11
  const an12=req.query.an12
  const an13=req.query.an13
  const an14=req.query.an14
  const an15=req.query.an15
  const an16=req.query.an16
  const an17=req.query.an17
  const sc11=req.query.sc11
  const sc12=req.query.sc12
  const sc13=req.query.sc13
  const sc14=req.query.sc14
  const sc15=req.query.sc15
  const sc16=req.query.sc16
  const sc17=req.query.sc17
  const an21=req.query.an21
  const an22=req.query.an22
  const an23=req.query.an23
  const an24=req.query.an24
  const an25=req.query.an25
  const an26=req.query.an26
  const an27=req.query.an27
  const sc21=req.query.sc21
  const sc22=req.query.sc22
  const sc23=req.query.sc23
  const sc24=req.query.sc24
  const sc25=req.query.sc25
  const sc26=req.query.sc26
  const sc27=req.query.sc27
  const an31=req.query.an31
  const an32=req.query.an32
  const an33=req.query.an33
  const an34=req.query.an34
  const an35=req.query.an35
  const an36=req.query.an36
  const sc31=req.query.sc31
  const sc32=req.query.sc32
  const sc33=req.query.sc33
  const sc34=req.query.sc34
  const sc35=req.query.sc35
  const sc36=req.query.sc36
  const an41=req.query.an41
  const an42=req.query.an42
  const an43=req.query.an43
  const an44=req.query.an44
  const an45=req.query.an45
  const an46=req.query.an46
  const an47=req.query.an47
  const sc41=req.query.sc41
  const sc42=req.query.sc42
  const sc43=req.query.sc43
  const sc44=req.query.sc44
  const sc45=req.query.sc45
  const sc46=req.query.sc46
  const sc47=req.query.sc47
  const an51=req.query.an51
  const an52=req.query.an52
  const an53=req.query.an53
  const an54=req.query.an54
  const an55=req.query.an55
  const an56=req.query.an56
  const an57=req.query.an57
  const an58=req.query.an58
  const an59=req.query.an59
  const an510=req.query.an510
  const sc51=req.query.sc51
  const sc52=req.query.sc52
  const sc53=req.query.sc53
  const sc54=req.query.sc54
  const sc55=req.query.sc55
  const sc56=req.query.sc56
  const sc57=req.query.sc57
  const sc58=req.query.sc58
  const sc59=req.query.sc59
  const sc510=req.query.sc510
  var connection=mysql.createConnection({
    host:IPAddress,
    port: 3306,		//端口号
    user:UserName,
    password:PWD,
    database:DBName,
    multipleStatements:true,
  })//配置连接的属性
  if(t1=="1"){
connection.connect();//尝试连接
connection.query("insert into follow_up_info values('1-1',?,'生理状况',?'+'?'+'?,'我精力不济',?,?)",[id,Y,M,D,an11,sc11],function(error11){//执行查找语句
  if(error11){
    console.log(error11);
  }else{
connection.query("insert into follow_up_info values('1-2',?,'生理状况',?'+'?'+'?,'我感到恶心',?,?)",[id,Y,M,D,an12,sc12],function(error12){//执行查找语句
  if(error12){
    console.log(error12);
  }else{
connection.query("insert into follow_up_info values('1-3',?,'生理状况',?'+'?'+'?,'因为我身体不好，我满足不了家庭的需要',?,?)",[id,Y,M,D,an13,sc13],function(error13){//执行查找语句
  if(error13){
    console.log(error13);
  }else{
connection.query("insert into follow_up_info values('1-4',?,'生理状况',?'+'?'+'?,'我感到疼痛',?,?)",[id,Y,M,D,an14,sc14],function(error14){//执行查找语句
  if(error14){
    console.log(error14);
  }else{
connection.query("insert into follow_up_info values('1-5',?,'生理状况',?'+'?'+'?,'治疗的副作用让我觉得不舒服',?,?)",[id,Y,M,D,an15,sc15],function(error15){//执行查找语句
  if(error15){
    console.log(error15);
  }else{
connection.query("insert into follow_up_info values('1-6',?,'生理状况',?'+'?'+'?,'我觉得病了',?,?)",[id,Y,M,D,an16,sc16],function(error16){//执行查找语句
  if(error16){
    console.log(error16);
  }else{
connection.query("insert into follow_up_info values('1-7',?,'生理状况',?'+'?'+'?,'我不得不卧床',?,?)",[id,Y,M,D,an17,sc17],function(error17){//执行查找语句
  if(error17){
    console.log(error17);
  }else{
    connection.end();//断开连接
  }
  })
  }
  })   
  }
  })
  }
  })
  }
  })
  }
  })
  }
  })
 }else if(t2=="1"){
    connection.connect();//尝试连接
  connection.query("insert into follow_up_info values('2-1',?,'社会/家庭状况',?'+'?'+'?,'我和朋友们很接近',?,?)",[id,Y,M,D,an21,sc21],function(error21){//执行查找语句
    if(error21){
      console.log(error21);
    }else{
  connection.query("insert into follow_up_info values('2-2',?,'社会/家庭状况',?'+'?'+'?,'我在感情上得到了家人的支持',?,?)",[id,Y,M,D,an22,sc22],function(error22){//执行查找语句
    if(error22){
      console.log(error22);
    }else{
  connection.query("insert into follow_up_info values('2-3',?,'社会/家庭状况',?'+'?'+'?,'我得到朋友的支持',?,?)",[id,Y,M,D,an23,sc23],function(error23){//执行查找语句
    if(error23){
      console.log(error23);
    }else{
  connection.query("insert into follow_up_info values('2-4',?,'社会/家庭状况',?'+'?'+'?,'我的家人已能正视我患病这一事实',?,?)",[id,Y,M,D,an24,sc24],function(error24){//执行查找语句
    if(error24){
      console.log(error24);
    }else{
  connection.query("insert into follow_up_info values('2-5',?,'社会/家庭状况',?'+'?'+'?,'我高兴和家里人谈论我的病情',?,?)",[id,Y,M,D,an25,sc25],function(error25){//执行查找语句
    if(error25){
      console.log(error25);
    }else{
  connection.query("insert into follow_up_info values('2-6',?,'社会/家庭状况',?'+'?'+'?,'我与自己的配偶（或给我主要支持的人）很亲近',?,?)",[id,Y,M,D,an26,sc26],function(error26){//执行查找语句
    if(error26){
      console.log(error26);
    }else{
  connection.query("insert into follow_up_info values('2-7',?,'社会/家庭状况',?'+'?'+'?,'我对自己的性生活感到满意',?,?)",[id,Y,M,D,an27,sc27],function(error27){//执行查找语句
    if(error27){
      console.log(error27);
    }else{
    connection.end();//断开连接
    }
    })
    }
    })   
    }
    })
    }
    })
    }
    })
    }
    })
    }
    }) 
 }else if(t3=="1"){
  connection.connect();//尝试连接
connection.query("insert into follow_up_info values('3-1',?,'情感状况',?'+'?'+'?,'我感到悲伤',?,?)",[id,Y,M,D,an31,sc31],function(error31){//执行查找语句
  if(error31){
    console.log(error31);
  }else{
connection.query("insert into follow_up_info values('3-2',?,'情感状况',?'+'?'+'?,'我为自己这样对待疾病感到自豪',?,?)",[id,Y,M,D,an32,sc32],function(error32){//执行查找语句
  if(error32){
    console.log(error32);
  }else{
connection.query("insert into follow_up_info values('3-3',?,'情感状况',?'+'?'+'?,'在与疾病的抗争中，我越来越感到失望',?,?)",[id,Y,M,D,an33,sc33],function(error33){//执行查找语句
  if(error33){
    console.log(error33);
  }else{
connection.query("insert into follow_up_info values('3-4',?,'情感状况',?'+'?'+'?,'我感到紧张',?,?)",[id,Y,M,D,an34,sc34],function(error34){//执行查找语句
  if(error34){
    console.log(error34);
  }else{
connection.query("insert into follow_up_info values('3-5',?,'情感状况',?'+'?'+'?,'我担心可能会去世',?,?)",[id,Y,M,D,an35,sc35],function(error35){//执行查找语句
  if(error35){
    console.log(error35);
  }else{
connection.query("insert into follow_up_info values('3-6',?,'情感状况',?'+'?'+'?,'我担心自己的病情会更糟',?,?)",[id,Y,M,D,an36,sc36],function(error36){//执行查找语句
  if(error36){
    console.log(error36);
  }else{
    connection.end();//断开连接
  }
  })   
  }
  })
  }
  })
  }
  })
  }
  })
  }
  }) 
}else if(t4=="1"){
  connection.connect();//尝试连接
connection.query("insert into follow_up_info values('4-1',?,'功能状况',?'+'?'+'?,'我能够工作（包括家里的工作）',?,?)",[id,Y,M,D,an41,sc41],function(error41){//执行查找语句
  if(error41){
    console.log(error41);
  }else{
connection.query("insert into follow_up_info values('4-2',?,'功能状况',?'+'?'+'?,'我的工作（包括家里的工作）令我有成就感',?,?)",[id,Y,M,D,an42,sc42],function(error42){//执行查找语句
  if(error42){
    console.log(error42);
  }else{
connection.query("insert into follow_up_info values('4-3',?,'功能状况',?'+'?'+'?,'我能够享受生活',?,?)",[id,Y,M,D,an43,sc43],function(error43){//执行查找语句
  if(error43){
    console.log(error43);
  }else{
connection.query("insert into follow_up_info values('4-4',?,'功能状况',?'+'?'+'?,'我已能面对自己的疾病',?,?)",[id,Y,M,D,an44,sc44],function(error44){//执行查找语句
  if(error44){
    console.log(error44);
  }else{
connection.query("insert into follow_up_info values('4-5',?,'功能状况',?'+'?'+'?,'我睡得很好',?,?)",[id,Y,M,D,an45,sc45],function(error45){//执行查找语句
  if(error45){
    console.log(error45);
  }else{
connection.query("insert into follow_up_info values('4-6',?,'功能状况',?'+'?'+'?,'我在享受我过去常做的娱乐活动',?,?)",[id,Y,M,D,an46,sc46],function(error46){//执行查找语句
  if(error46){
    console.log(error46);
  }else{
connection.query("insert into follow_up_info values('4-7',?,'功能状况',?'+'?'+'?,'我对现在的生活质量感到满意',?,?)",[id,Y,M,D,an47,sc47],function(error47){//执行查找语句
  if(error47){
    console.log(error47);
  }else{
  connection.end();//断开连接
  }
  })
  }
  })   
  }
  })
  }
  })
  }
  })
  }
  })
  }
  }) 
}else if(t5=="1"){
  connection.connect();//尝试连接
connection.query("insert into follow_up_info values('5-1',?,'附加关注',?'+'?'+'?,'我一直气促',?,?)",[id,Y,M,D,an51,sc51],function(error51){//执行查找语句
  if(error51){
    console.log(error51);
  }else{
connection.query("insert into follow_up_info values('5-2',?,'附加关注',?'+'?'+'?,'（由于疾病）我在意自己的穿着打扮',?,?)",[id,Y,M,D,an52,sc52],function(error52){//执行查找语句
  if(error52){
    console.log(error52);
  }else{
connection.query("insert into follow_up_info values('5-3',?,'附加关注',?'+'?'+'?,'我的一只或两只胳膊肿胀或无力',?,?)",[id,Y,M,D,an53,sc53],function(error53){//执行查找语句
  if(error53){
    console.log(error53);
  }else{
connection.query("insert into follow_up_info values('5-4',?,'附加关注',?'+'?'+'?,'我感到在性方面有吸引力',?,?)",[id,Y,M,D,an54,sc54],function(error54){//执行查找语句
  if(error54){
    console.log(error54);
  }else{
connection.query("insert into follow_up_info values('5-5',?,'附加关注',?'+'?'+'?,'脱发使我烦恼',?,?)",[id,Y,M,D,an55,sc55],function(error55){//执行查找语句
  if(error55){
    console.log(error55);
  }else{
connection.query("insert into follow_up_info values('5-6',?,'附加关注',?'+'?'+'?,'我担心家里其他人有一天会得和我一样的疾病',?,?)",[id,Y,M,D,an56,sc56],function(error56){//执行查找语句
  if(error56){
    console.log(error56);
  }else{
connection.query("insert into follow_up_info values('5-7',?,'附加关注',?'+'?'+'?,'我担心紧张对我的疾病造成的影响',?,?)",[id,Y,M,D,an57,sc57],function(error57){//执行查找语句
  if(error57){
    console.log(error57);
  }else{
connection.query("insert into follow_up_info values('5-8',?,'附加关注',?'+'?'+'?,'体重的变化使我烦恼',?,?)",[id,Y,M,D,an58,sc58],function(error58){//执行查找语句
  if(error58){
    console.log(error58);
  }else{
connection.query("insert into follow_up_info values('5-9',?,'附加关注',?'+'?'+'?,'我仍能感到像一个女人',?,?)",[id,Y,M,D,an59,sc59],function(error59){//执行查找语句
  if(error59){
    console.log(error59);
  }else{
connection.query("insert into follow_up_info values('5-10',?,'附加关注',?'+'?'+'?,'我的身体的一部分很明显能感到疼痛',?,?)",[id,Y,M,D,an510,sc510],function(error510){//执行查找语句
  if(error510){
    console.log(error510);
  }else{
    connection.end();//断开连接
  }
  })
  }
  })
  }
  })
  }
  })
  }
  })   
  }
  })
  }
  })
  }
  })
  }
  })
  }
  }) 
}
})


//总览
app.post('/getAns',(req,res)=>{
  //数据库获取连接
  console.log(req.body);
  const myfid=req.body.myfid;
  const myid=req.body.myid;
  const mydate=req.body.mydate;
  var connection=mysql.createConnection({
    host:IPAddress,
    port: 3306,		//端口号，mysql 固定3306
    user:UserName,
    password:PWD,
    database:DBName
  })//配置连接的属性
  connection.connect();//尝试连接
  //第一个参数为需要执行的mysql语句，在这里我假想需要传入的参数有
  //f_id,id,f_date
  //获取到的需要的东西有answer与之对应的score
  //第二个参数是一个奇怪的函数
  let sql="select ans,score from follow_up_info where f_id=? and id=? and f_date=?";
  connection.query(sql,[myfid,myid,mydate],function(error,results,fields){
    if(error) {
      console.log(error);//执行失败的话
    }
    res.json(results);
    console.log(results);
  })
  connection.end();//断开连接
})

app.listen(3000,()=>{//这是一个监听端口，会输出监听到的信息。上面的 console.log 就会在这里输出
  console.log('server running at http://'+IPAddress+':3000')
})
