<template>
  <div>
    <p>
      <span class="i1">丹宁课堂</span>
    </p>

    <ul class="one">
      <li>
        <ul class="two">
          <li>
            <img src="../assets/class/01.png" alt />
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
            <img src="../assets/class/02.png" alt />
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
            <img src="../assets/class/03.png" alt />
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
            <img src="../assets/class/04.jpg" alt />
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
            <img src="../assets/class/05.png" alt />
          </li>
          <li>
            <a href>Lee X POPEYE | 潮男大力水手为 Lee 130!</a>
          </li>
          <a href>阅读更多</a>
        </ul>
      </li>
    </ul>
    <p class="style">上拉加载更多</p>
  </div>
</template>
<style scoped>
.style {
  border: 0;
  margin-bottom: 8%;
}

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