const express=require('express')
const bodyParser =require('body-parser')
const app=express()
const mysql = require('mysql')
const IPAddress='127.0.0.1'//因为这里是要链接远程数据库，ip 地址是 mysql 的地址！！本地就是 127.0.0.1，服务器上就自己找找看
const UserName='root'
const PWD='123456'
const DBName='myapp'
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//这上面一段固定的，[] 的部分需要根据自己数据库的信息修改


app.post('/getUser',(req,res)=>{
  console.log(req.body)	// 客户端请求的传参data数据
  const reg=req.body.reg
  const phd=req.body.phd
  var connection = mysql.createConnection({
    host:'localhost',
    user:UserName,
    password:PWD,
    database:DBName
  });
  connection.connect();
  var addsql = 'INSERT INTO account (id,user_name,pwd) VALUES (0,?,?)';
  var addsqlprograms = [reg,phd];
  connection.query(addsql,addsqlprograms ,function(error,results){
   if(error) console.log(error);
   //res.json(results);
   //console.log('--------------------------INSERT----------------------------');
   //console.log('INSERT ID:',result.insertId);        
   //console.log('INSERT ID:',results);        
   //console.log('-----------------------------------------------------------------\n\n');     
  }) 
  
  connection.end();
})
app.post('/configUser',(req,res)=>{ 
  console.log(req.body)	
  const logname=req.body.logname
  var connection=mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:UserName,
    password:PWD,
    database:DBName
  })//配置连接的属性
  connection.connect();//尝试连接
  connection.query("select pwd from account where user_name = '"+logname+"'",logname,function(error,results){
    if(error) console.log(error);//执行失败的话
    res.json(results);
    
  })

  connection.end();//断开连接
  
})
app.listen(3000,()=>{
  console.log('server running at http://'+IPAddress+':3000')
})

