<template>
  <div>
    <!-- 页脚 -->
    <div class="footer">
      <div class="footere">
        <div class="foot-one">
          <h2>企业咨询</h2>
          <ul>
            <li>
              <a href="javascript">寻找门店</a>
            </li>
            <li>
              <a href="javascript">使用条款</a>
            </li>
            <li>
              <a href="javascript">隐私政策</a>
            </li>
            <li>
              <a href="javascript">联系我们</a>
            </li>
            <li>
              <a href="javascript">全球可持续发展</a>
            </li>
          </ul>
        </div>
        <div class="foot-two">
          <h2>国家及地区</h2>
          <ul>
            <li>
              <a href="javascript">Australia</a>
            </li>
            <li>
              <a href="javascript">中国大陆</a>
            </li>
            <li>
              <a href="javascript">中国香港</a>
            </li>
            <li>
              <a href="javascript">India</a>
            </li>
            <li>
              <a href="javascript">Indonesia (EN)</a>
            </li>
            <li>
              <a href="javascript">Indonesia (ID)</a>
            </li>
            <li>
              <a href="javascript">Japan</a>
            </li>
            <li>
              <a href="javascript">Malaysia</a>
            </li>
          </ul>
        </div>
        <div class="foot-three">
          <h2>一</h2>
          <ul>
            <li>
              <a href="javascript">New Zealand</a>
            </li>
            <li>
              <a href="javascript">Philippines</a>
            </li>
            <li>
              <a href="javascript">South Africa</a>
            </li>
            <li>
              <a href="javascript">中國台灣</a>
            </li>
            <li>
              <a href="javascript">Thailand</a>
            </li>
            <li>
              <a href="javascript">ประเทศไทย</a>
            </li>
            <li>
              <a href="javascript">Vietnam</a>
            </li>
            <li>
              <a href="javascript">Việt Nam</a>
            </li>
          </ul>
        </div>
        <div class="four"></div>
        <div class="five">
          <span>关注Lee牛仔部落官方微信</span>
          <div>
            <img src="../assets/9090c725a2377f708003a1ca8245134a735bdbe4.jpg" alt />
          </div>
        </div>
        <!-- 页脚底部 -->
        <footer>
          <div class="theme-footer">
            <p>
              <a href="javascript">
                <font>沪ICP备19007238号</font>
              </a>
              &nbsp;
              <a>
                <font color="#ffffff">工信部网站</font>
              </a>
            </p>
            <p>
              <font color="#ffffff">李威格服饰（上海）有限公司</font>
            </p>
            <p>©LEE All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 样式部分 */
/* 给每个ul去掉原点 */
ul {
  list-style: none;
  padding-left: 38px;
}
/* 给父级设置黑色背景,字体白色,上外边距50px,内边距左0,右20px */
.footer {
  background: black;
  color: white;
  margin-top: 50px;
  padding: 0 20px;
}
/* 父级下的h2设置字体大小为16px,左内边距为38px */
.footer h2 {
  font-size: 16px;
  padding-left: 38px;
}
/* 父级下的a设置去掉下划线,字体大小为14px,字体颜色为灰色 */
.footer a {
  text-decoration: none;
  font-size: 14px;
  color: #bbbbbb;
}
/* 父级下的footere设置溢出隐藏,水平居中,上内边距为30px */
.footer .footere {
  overflow: hidden;
  margin: 0 auto;
  padding-top: 30px;
}
/* 父级下的footere下的foot-one设置左浮动 */
.footer .footere .foot-one {
  float: left;
}
/* 父级下的div下的div设置左浮动,做内边距为100px */
.footer > div > div {
  padding-left: 100px;
}
/* threeul下的h2设置字体颜色为黑色 */
.foot-three h2 {
  color: black;
}
/* 父级下的five的span设置做内边距为400px */
/* .footer{
  padding-left: 400px;
} */
/* 页脚底部样式 */
/* 父级样式 */
.theme-footer {
  text-align: center;
  line-height: 1.5;
  margin-top: 200px;
}
/* a链接字体颜色为灰色 */
a {
  color: #1f2020;
}
/* 父级下的p标签设置字体大小为12px */
.theme-footer p {
  font-size: 12px;
}
.foot-three {
  float: left;
}
.foot-two {
  float: left;
}
/* 底部官方二维码 */
.five>div{
  text-align: center;
  margin-top: 15px;
}
.five >div> img {
  width: 150px;
}
.five > span {
  display: block;
}
.five {
  float: right;
  padding-right: 100px;
}
</style>