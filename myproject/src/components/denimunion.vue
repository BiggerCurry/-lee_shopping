<template>
  <!--轮播图  -->
  <div class="first">
    <!-- Swiper -->
    <!-- left箭头 -->
    <button class="swiper-button-prev"></button>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/second.jpg" alt />
          </div>
          <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>女装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/third.jpg" alt />
          </div>
                    <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>男装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/four.jpg" alt />
          </div>          <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>女装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/five.jpg" alt />
          </div>          <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>女装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/six.jpg" alt />
          </div>          <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>男装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/seven.jpg" alt />
          </div>          <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>女装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/eight.jpg" alt />
          </div>          <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>女装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/nine.jpg" alt />
          </div>          <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>男装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="../assets/second/ten.jpg" alt />
          </div>          <ul class="ul">
            <li>20秋冬 丹宁联盟</li>
            <li>男装外套</li>
            <li>L4188345GJ97F</li>
            <a href>
              <img src="../assets/second/like_icon.png" alt />
            </a>
            <a href>
              <img src="../assets/second/shop_icon.png" alt />
            </a>
          </ul>
        </div>
      </div>
    </div>

    <!-- right的箭头 -->
    <button class="swiper-button-next"></button>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";
export default {
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 18,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>>
<style scoped>
/* 轮播图下的介绍 */
li {
  margin: 5px 0;
  list-style: none;
}
.ul > a {
  float: right;
  margin-top: -20%;
}
.ul > a > img {
  width: 42px;
  height: 42px;
  margin: 10px 10px;
}

.first {
  position: relative;
}
/* 轮播图的左右箭头 */
button {
  display: inline-block;
  width: 80px;
  height: 80px;
  border: solid 1px black;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.01);
}
button:hover {
  background-color: black;
}
.swiper-button-prev {
  left: 50px;
}
.swiper-button-next {
  right: 50px;
}
/* swiper-button-disabled 例无法继续向左继续滑动时swiper会自动为按钮添加该类选择器， 所以我这边判断如果该按钮有该选择器对其透明度设置 0.35 */
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}

.swiper-container {
  margin: 0 100px;
  overflow: hidden;
}

.swiper-slide > div {
  border: solid 1px #b2b2b2;
}
.swiper-slide > div > img {
  max-width: 100%;
}
</style>