<template>
  <div>
    <!-- 这里是头部 -->
    <div class="header">
      <!-- 这里是nav左侧 -->
      <ul id="nav-left">
        <li>
          <a href="/">
            <img src="../assets/log.jpg" alt />
          </a>
        </li>
        <li>
          <a href="/brand" class="one">
            关于我们
            <div class="nav_active"></div>
          </a>

          <div class="memu">
            <ul>
              <li>
                <a href="/brand" class="one">
                  <h5>故事品牌</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/four" class="one">
                  <h5>品牌动向</h5>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/leexcocacola" class="one">
            精选系列
            <div class="nav_active"></div>
          </a>

          <div class="memu" id="memu">
            <ul>
              <li>
                <a  href="/danning">
                  <h5>2020秋冬系列</h5>
                </a>
              </li>
              <li>
                <a href="/leexcocacola">Lee x Coca-Cola 系列</a>
              </li>
              <li>
                <a href="/xline">X-line 系列</a>
              </li>
              <li>
                <a href="/danning">丹宁 联盟系列</a>
              </li>
            </ul>
            <ul id="memu_list">
              <li>
                <a >
                  <h5>2020春夏系列</h5>
                </a>
              </li>
              <li>
                <a href="/leeCocacola">Lee x Coca-Cola 系列</a>
              </li>
              <li>
                <a href="/jingDian101">经典101+系列</a>
              </li>

              <li>
                <a href="/xline">X-line系列</a>
              </li>
              <li>
                <a href="/leesures">Leesures系列</a>
              </li>
              <li>
                <a href="/cooling">Cooling系列</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/clothing" class="one">
            男装
            <div class="nav_active"></div>
          </a>

          <div class="memu">
            <ul>
              <li>
                <a href="/clothing">
                  <h5>上装</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/clothing">
                  <h5>下装</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>
                  <h5>版型指南</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>
                  <h5>LOOKBOOK</h5>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/clothing" class="one">
            女装
            <div class="nav_active"></div>
          </a>

          <div class="memu">
            <ul>
              <li>
                <a href="/clothing">
                  <h5>上装</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/clothing">
                  <h5>下装</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>
                  <h5>版型指南</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>
                  <h5>LOOKBOOK</h5>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a  href="/five" class="one">
            风潮牛仔
            <div class="nav_active"></div>
          </a>

          <div class="memu">
            <ul>
              <li>
                <a href="/supper">
                  <h5>明星穿搭</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/cool">
                  <h5>街拍灵感</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/class">
                  <h5>潮流混搭</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>
                  <h5>丹宁课堂</h5>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li id="nav-left-6">
          <a href class="one">
            Lee Create
            <div class="nav_active"></div>
          </a>

          <div class="memu">
            <ul>
              <li>
                <a href>
                  <h5>背后造势</h5>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>
                  <h5>创造你的丹宁部落</h5>
                </a>
              </li>
              <li>
                <a href>DIY实验室</a>
              </li>
              <li>
                <a href>丹宁市集</a>
              </li>
              <li>
                <a href>丹宁工坊</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- 这里是nav右侧 -->
      <ul id="nav-right">
        <li class="vx">
          <a href>
            <img src="../assets/wx.png" alt />
          </a>
          <div class="vxma">
            <img src="../assets/wxma.png" alt />
          </div>
        </li>
        <li>
          <a href>
            <img src="../assets/wb.png" alt />
          </a>
        </li>
        <li class="dingwei">
          <input class="sousuo" type="text" />
          <input type="submit" value class="submit" />
        </li>
        <li>
          <a href>
            <img src="../assets/hd_fav.png" alt />
          </a>
        </li>
        <li>
          <div class="hlong">
            <a  href="/register" class="login">登录</a>
            <img src="../assets/men.png" alt />
          </div>
        </li>
      </ul>
    </div>
    <hr id="hr1" />
  </div>
</template>

<style scoped>
#hr1 {
  height: 1px;
  background-color: #cccccc;
  border: none;
}
/* 导航栏二维码 */
.vxma img {
  width: 100%;
}
.vxma {
  float: right;
  width: 10%;
  display: none;
  position: absolute;
  top: 80px;
  right: 350px;
}
.vx:hover .vxma {
  display: block;
  float: right;
  z-index: 999;
}
/* 导航栏鼠标悬浮后的下划线 */
.nav_active {
  border-bottom: solid 3px black;
  width: 0px;
  transition-duration: 1s;
  padding-bottom: 15px;
}
/* 导航栏鼠标悬浮后的下划线 */
.one:hover > div {
  width: 100%;
}

#memu ul,
.memu ul {
  float: left;
  margin-right: -320px;
  margin-left: 380px;
}
.hlong * {
  display: inline-block;
  vertical-align: middle;
}
.hlong a {
  margin-bottom: -8px;
}
.login {
  display: inline-block;
  margin-top: -10px;
}
/* 二级菜单鼠标悬浮后的样式 */
#nav-left li:hover .memu {
  display: block;
  float: left;
  top: 82px;
  left: -240px;
  background-color: #ffffff;
  z-index: 999;
}
.memu {
  width: 140%;
  height: 200px;
  display: none;
  position: absolute;
  top: 60px;
  text-align: left;
}
.memu li {
  margin-bottom: 10px;
}
/* 搜索框的父元素li定位 */
.dingwei {
  position: relative;
}
/* 搜索框里的放大镜样式 */
.submit {
  background-image: url(../assets/sou.png);
  background-repeat: no-repeat;
  width: 30px;
  position: absolute;
  right: 1px;
  top: 25px;
  border: 0px;
  background-color: #fff;
  outline: 0;
  margin-top: -5px;
}
.sousuo {
  margin-top: -5px;
  width: 140px;
  height: 27px;
  outline: 0;
  border: 1px solid black;
  padding: 0px 5px;
}
#nav-left img {
  width: 58px;
  margin-top: -5px;
}
#nav-left-6 {
  margin-top: 4px;
}
#nav-right {
  overflow: hidden;
  float: right;
  margin-right: 25px;
}
#nav-left > li {
  padding: 20px;
  display: inline-block;
}
#nav-right > li {
  float: left;
  margin-left: 30px;
  padding: 20px 0px;
}

#nav-left {
  list-style: none;
  overflow: hidden;
  float: left;
}
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
  display: inline-block;
}
.header {
  width: 1400px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 10px;
  border-top: 1px solid #cccccc;
}
/* 清除导航栏浮动造成的高度坍塌 */
.header::after {
  content: "";
  display: block;
  clear: both;
}
</style>