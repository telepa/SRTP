const express=require('express')
const bodyParser =require('body-parser')
const app=express()
const mysql = require('mysql')
const IPAddress='127.0.0.1'//因为这里是要链接远程数据库，ip 地址是 mysql 的地址！！本地就是 127.0.0.1，服务器上就自己找找看
const UserName='zxy'
const PWD='********'
const DBName='myapp'
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//这上面一段固定的，[] 的部分需要根据自己数据库的信息修改



//处理get请求。这里是一个 get 请求的方法演示，作用是查询 table1 表中的所有数据并返回。
app.get('/hello',(req,res)=>{ //这里的是 get 方法 getUser，对应了刚才的页面发来的请求。就会执行这个方法。
  //参数传入是在 req.body 对象里面。比如上面的语句是获取传入的 openid 变量，并且我们新定义一个叫 openid 的变量存储传入的 openid 变量
  console.log(req.body);
  var connection=mysql.createConnection({
    host:IPAddress,
    port: 3306,		//端口号，mysql 固定3306
    user:UserName,
    password:PWD,
    database:DBName
  })//配置连接的属性
  connection.connect();//尝试连接
  connection.query("select * from account",function(error,results,fields){//执行查找语句
    if(error) console.log(error);//执行失败的话
    res.json(results);
    console.log(results);
  })
  connection.end();//断开连接
})

app.listen(3000,()=>{//这是一个监听端口，会输出监听到的信息。上面的 console.log 就会在这里输出
  console.log('server running at http://'+IPAddress+':3000')
})

//function of overview: only one API
//getPhysical
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