9.18更新/实现登录、注册界面与数据库的连接
index界面添加：
1.wxml 登录按钮的 新加了login的bindtap
2.js文件里 添加login函数（url记得修改ip）
register界面添加：
js文件里 添加register函数（url记得修改ip）
server.js
应需添加app.post两个函数（getUser,configUser），数据库相关配置做对应调整
