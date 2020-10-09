<template>
  <div>
    <p>
      <span class="i1">品牌动向</span>
    </p>
    <ul class="one">
      <li>
        <ul class="two">
          <li>
            <img src="../assets/four/01.png" alt />
          </li>
          <li>
            <a href>Lee X-LINE丨不好意思，我才是全场MVP</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
      <li class="center">
        <ul class="two">
          <li>
            <img src="../assets/four/02.png" alt />
          </li>
          <li>
            <a href>Lee X POPEYE | 潮男大力水手为 Lee 130!</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
      <li>
        <ul class="two">
          <li>
            <img src="../assets/four/03.png" alt />
          </li>
          <li>
            <a href>Lee X Edw | 彭于晏带来新作,为百年精湛丹宁!</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
    </ul>

    <ul class="one">
      <li>
        <ul class="two">
          <li>
            <img src="../assets/four/04.png" alt />
          </li>
          <li>
            <a href>Lee x 曼秀雷敦｜牛仔很涼</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
      <li class="center">
        <ul class="two">
          <li>
            <img src="../assets/four/05.png" alt />
          </li>
          <li>
            <a href>女王节 | 没时间选择了，快开“购物车”</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
      <li>
        <ul class="two">
          <li>
            <img src="../assets/four/06.png" alt />
          </li>
          <li>
            <a href>X-Line｜爱cloud·“云”式情人节系统更新完</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
    </ul>

    <ul class="one">
      <li>
        <ul class="two">
          <li>
            <img src="../assets/four/07.png" alt />
          </li>
          <li>
            <a href>X-Line｜春节开运潮着，就要红红火火!</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
      <li class="center">
        <ul class="two">
          <li>
            <img src="../assets/four/08.png" alt />
          </li>
          <li>
            <a href>Lee x Timberland 重磅炸出城市机能风</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
      <li>
        <ul class="two">
          <li>
            <img src="../assets/four/09.png" alt />
          </li>
          <li>
            <a href>彭于晏来了！Lee 130岁生日派对见！</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
    </ul>

    <p class="p">上拉加载更多</p>
  </div>
</template>
<style scoped>
/*外边的大的ul */
.one {
  display: flex;
  margin: 0 90px;
}
.p {
  margin-bottom: 10%;
  border: 0px;
  opacity: 0.3;
}

/* 内部的ul */
.two {
  width: 426.7px;
  height: 399.5px;
}
.two > li {
  text-align: center;
}
.two > li > a {
  font-size: 20px;
  font-weight: bold;
}
a {
  width: 100%;
  text-decoration: none;
  color: #1f2020;
}
.two > a {
  display: block;
  padding: 0 3rem;
  width: 17%;
  border: solid 1px black;
  margin-left: 30%;
  margin-top: 5%;
  font-size: 18px;
  font-weight: bold;
}
.two > a:hover {
  color: white;
  background-color: black;
}

/* 第二层ul的第二个li */
.center {
  margin: 0 30px;
}

/* 所有的图片尺寸 */
img {
  width: 426.7px;
  height: 284.5px;
}
li {
  list-style: none;
}

/* 页头横线部分 */
p {
  text-align: center;
  border-bottom: solid 1px black;
  margin-top: 30px;
  margin-bottom: 60px;
}
.i1 {
  display: inline-block;
  padding: 0 1.5rem;
  background: #fff;
  position: absolute;
  font-size: 22px;
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