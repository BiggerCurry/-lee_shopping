//引入express模块
const express = require("express");
let router = express.Router();
//挂载数据库连接池
let pool = require("../Pool/pool.js");

// 接口  获取所有分类
router.get('/getclassify', (req, res) => {
    pool.query('SELECT * FROM commpdity_class', (err, result) => {
        if (err) {
            console.log(err);
            res.send({ message: "查询失败", code: 1 });
            return;
        }
        res.send({ message: "查询成功", code: 0, data: result });
    })
})


router.get('/getlist', (req, res) => {

    let selecteds = JSON.parse(req.query.selecteds);

    // 判断是否传递参数
    
    if (selecteds == null || selecteds.length == 0) {
        pool.query('SELECT * FROM commodity_list', [], (err, result) => {
            if (err) throw err;
            res.send({ message: "查询成功", code: 0, data: result });
        })
    }
    else {  
        // 因为可能要执行N次数据查询，但是每次查询的返回时间不确定。
        let query = function (cid) {
            return new Promise((resolve, reject) => {
                pool.query('SELECT * FROM commodity_list WHERE class_id=?', [cid], (err, result) => {
                    if (err) throw err;
                    resolve(result);
                })
            })
        }

        // 定义一个数组来保存所有的异步方法
        let promises = [];
        for (const cid of selecteds) {
            promises.push(query(cid));
        }
        // Promise.all 会保证所有查询结束后才会进入到.then
        Promise.all(promises).then(values => {
            let arr = [];
            for (const item of values) {
                arr.push(...item);
            }
            // then 就是所有的promise任务结束后会进入到函数
            res.send({ message: "查询成功", code: 0, data: arr });
        })
    }


})





module.exports = router