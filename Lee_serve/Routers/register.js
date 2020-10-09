//引入express模块
const express = require("express");
let router = express.Router();
//挂载数据库连接池
let pool = require("../Pool/pool.js")

//用户注册
router.post('/register', (req, res) => {
    //获取客户端提交的用户名、密码、电话、邮箱
    let $name = req.body.user_name;
    let $password = req.body.password;
    let $phone = req.body.user_phone;
    let $email = req.body.user_email;
    //以当前获取到的用户名查找以保证用户名的唯一性
    let sql = "SELECT id,user_name FROM user_surface WHERE user_name=?;"
    pool.query(sql, [$name], (err, result) => {
        //验证加入错误抛出 err
        if (err) throw err;

        console.log('11');
        //判断用户名是否存在 来执行不同操作
        //判断长度为0说明数据库没有重名 所以插入数据
        if (result.length == 0) {
            console.log('22');

            let sql = "INSERT INTO user_surface( user_name,password,user_phone,user_email ) VALUES(?,?,?,?)";
            pool.query(sql, [$name, $password, $phone, $email], (err, result) => {
                if (err) throw err;
                console.log('33');

                res.send({ message: "注册成功", code: 1, result: result })
            })
        } else {
            console.log('11');

            res.send({ message: "注册失败", code: 1 })
        }
    })
}
)
//用户登陆
router.post('/register', (req, res) => {
    //获取客户端提交的用户名、密码
    let $name = req.body.user_name;
    let $password = req.body.password;
    //验证数据库中已有此用户名
    let sql = "SELECT id FROM user_surface WHERE user_name=? AND password=?;"
    pool.query(sql, [$name, $password], (err, result) => {
        if (err) throw err
        if (result.length > 0) {
            // 登录成功
            res.send({ message: "登录成功", code: 0 })
        }
        else {
            // 账号或密码错误
            res.send({ message: "登录失败", code: 1 })
        }
    })
})


module.exports = router