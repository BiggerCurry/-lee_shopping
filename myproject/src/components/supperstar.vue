<template>
  <div class="hehe">
    <p>
      <span class="i1">牛仔风潮</span>
    </p>
    <div class="begin">
      <ul>
        <li>
          <div class="one">
            <img src="../assets/five/03.jpg" alt />
          </div>
          <div>明星穿搭</div>
          <a href="/supper">探索更多</a>
        </li>
        <li>
          <div class="one">
            <img src="../assets/five/02.jpg" alt />
          </div>
          <div>街拍灵感</div>
          <a href>探索更多</a>
        </li>
      </ul>
    </div>
    <div class="begin">
      <ul>
        <li>
          <div class="one">
            <img src="../assets/five/01.jpg" alt />
          </div>
          <div>潮流搭配</div>
          <a href="/cool">探索更多</a>
        </li>
        <li>
          <div class="one">
            <img src="../assets/five/04.jpg" alt />
          </div>
          <div>丹宁课堂</div>
          <a href="/class">探索更多</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style  scoped>
.one + div {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}
/* 图片下a里面内容设置 */
.one ~ a {
  margin: 15px 0;
  margin-left: 35%;
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: solid 1px black;
  width: 30%;
  text-align: center;
  color: black;
}
.one ~ a:hover {
  background-color: black;
  color: #fff;
}
.begin {
  margin: 0 115.5px;
  display: flex;
}
/* 设置下边框的距离 */
.hehe{
    margin-bottom: 10%;
}
li {
  list-style: none;
  text-align: center;
}
/* 图片的大小 */
.begin > ul > li > div > img {
  width: 96%;
}
ul {
  display: flex;
}

/* 页头横线部分 */
p {
  text-align: center;
  border-bottom: solid 1px black;
  margin-top: 30px;
  margin-bottom: 45px;
}
.i1 {
  display: inline-block;
  padding: 0 1.5rem;
  background: #fff;
  position: absolute;
  font-size: 20px;
  line-height: 76px;
  margin-top: -40px;
  right: 50%;
}

.i1::before {
  content: "";
  width: 1.6rem;
  height: 1.4rem;
  position: absolute;
  left: -0.7rem;
  top: 2rem;
  background: url(../assets/second/icons.png) no-repeat 36% 0;
  background-size: 1150%;
}

.i1::after {
  content: "";
  width: 1.6rem;
  height: 1.4rem;
  position: absolute;
  right: -0.6rem;
  top: 2rem;
  background: url(../assets/second/icons.png) no-repeat 35% 0;
  background-size: 1150%;
}
</style>