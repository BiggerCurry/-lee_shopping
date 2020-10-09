//引入express模块
const express = require("express");
let router = express.Router();
let pool = require("../Pool/pool.js")

// 添加购物车接口
router.get('/addcart', (req, res) => {

    // 接收前端发送过来的用户id和要收藏的商品id
    let uid = req.query.uid;
    let pid = req.query.pid;

    // 1. 先查询用户是否存在
    // 2. 再查询商品是否存在
    // 3. 更新用户数据
    new Promise((resolve, reject) => {
        pool.query('SELECT cart_ids FROM user_surface WHERE id=?', [uid], (err, result) => {
            if (err) reject(err);
            // 如果大于0 则表示存在该用户
            if (result.length > 0) {
                // res.send({ message: "查询到该用户", code: 0 })
                resolve(result[0]);
            }
            else {
                // 不存在用户直接返回错误
                res.send({ message: "未查询到该用户", code: 1 })
            }

        })
    })
        .then(user => {
            return new Promise((resolve, reject) => {
                // 2. 再查询商品是否存在
                pool.query('SELECT commodity_id FROM commodity_list WHERE commodity_id=?', [pid], (err, result) => {
                    if (err) reject(err);
                    console.log(result);
                    // 如果大于0 则表示存在该商品
                    if (result.length > 0) {
                        resolve(user)
                        //res.send({ message: "查询到该商品", code: 0 })
                    }
                    else {
                        // 不存在用户直接返回错误
                        res.send({ message: "未查询到该商品", code: 1 })
                    }
                })
            })
        })
        .then(user => {
            // 进入到该步骤则表示有商品有用户
            // 需要插入到数组中

            // 判断如果为空的话就初始化为数组
            if (user.cart_ids == null || user.cart_ids == '') { user.cart_ids = []; }
            // 否则不为空的话就转换成对象
            else { user.cart_ids = JSON.parse(user.cart_ids); }

            if (user.cart_ids.indexOf(pid) == -1) {
                user.cart_ids.push(pid);
                return new Promise((resolve, reject) => {
                    pool.query('UPDATE user_surface SET cart_ids=? WHERE id=?', [JSON.stringify(user.cart_ids), uid], (err, result) => {
                        if (err) reject(err);
                        // result.affectedRows 更新的行数，判断影响的行数大于0则表示更新成功!
                        if (result.affectedRows > 0) {
                            res.send({ message: "收藏成功!", code: 1, data: result });
                        }
                        else {
                            res.send({ message: "收藏失败!", code: 0, data: null });
                        }
                    })
                })
            }
            else {
                res.send({ message: "商品已收藏无法继续收藏", code: 0, data: null });
            }
            console.log(user);
        })
        .catch((err) => {
            // 如果上面的promise有调用reject就会进入到catch里面
            console.log(err);
        })
})

// 查询购物车
router.get('/getcart', (req, res) => {
    let uid = req.query.uid;
    // 1. 查询用户是否存在
    // 2. 拿着数组去查询商品    
    new Promise((resolve, reject) => {
        // 1. 查询用户
        pool.query('SELECT cart_ids FROM user_surface WHERE id=?', [uid], (err, result) => {
            if (err) reject(err);
            // 如果大于0 则表示存在该用户
            if (result.length > 0) {
                // res.send({ message: "查询到该用户", code: 0 })
                resolve(result[0]);
            }
            else {
                // 不存在用户直接返回错误
                res.send({ message: "未查询到该用户", code: 1 })
            }
        })
    })
        .then(user => {
            // 拿着数组去查询商品
            //判断是否有收藏，无收藏直接跳出 
            if (user.cart_ids == null || user.cart_ids == '') {
                res.send({ message: "查询成功", code: 0, data: [] });
                return;
            }
            let cart_ids = JSON.parse(user.cart_ids);
            //判断是否有收藏，无收藏直接跳出 
            if (cart_ids.length <= 0) {
                res.send({ message: "查询成功", code: 0, data: [] });
                return;
            }

            // 定义一个promise的任务数组
            let promises = [];
            // 定义一个局部的查询函数
            let query = function (id) {
                return new Promise((resolve, reject) => {
                    pool.query('SELECT * From commodity_list WHERE commodity_id=?', [id], (err, result) => {
                        if (err) reject(err);
                        if (result.length > 0)
                            resolve(result[0]);
                    })
                })
            }

            // 可能收藏的不只有一个商品
            for (const id of cart_ids) {
                promises.push(query(id));
            }

            Promise.all(promises).then(values => {
                res.send({ message: "查询成功", code: 0, data: values });
            })
        })

})

module.exports = router