//引入mysql中间件
const mysql = require("mysql");
//创建mysql连接池
const pool = mysql.createPool({
    host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'lee_shopping',
	charset:'utf8',
	connectionLimit:20
})
module.exports = pool;