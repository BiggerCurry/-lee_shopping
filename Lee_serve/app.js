//引入express模块
const express = require('express');
//引入body-parser中间件
const bodyParse = require('body-parser');
//引入cors中间件 解决跨域
const cors =require("cors")
//加载MySQL模块
// const mysql = require('mysql');
//创建express对象
const serve = express();

//使用body-parser中间件
serve.use(bodyParse.urlencoded({
    extended:false
}))
//使用cros中间件 解决跨域 
//  你服务器解决跨域只解决了3000端口  这tm不跨域？？？
serve.use(cors({
    origin:["http://127.0.0.1:3000","http://localhost:3000","http://127.0.0.1:8080","http://localhost:8080"],
    methods:["GET","POST"],
    allowedHeaders:["Conten-Type","Authorization"]
}))
const routerRegister = require('./Routers/register.js')
const userRouter = require('./Routers/user.js')
const commodityRouter = require('./Routers/commodity.js')
serve.use('/api',routerRegister)
serve.use('/api/user',userRouter)
serve.use('/api/commodity',commodityRouter)
//创建指定的监听端口
serve.listen(8111,()=>{
    console.log("正在运行...");
})

// 接口1 : 获取所有分类
// 接口2 : 根据前端传递过来的分类查询数据库返回商品信息(若前端未传递分类则直接返回商品信息)