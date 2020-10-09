<template>
  <div class="hehe">
    <p>
      <span class="i1">明星穿搭</span>
    </p>
    <button class="swiper-button-prev"></button>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/01.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/02.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/03.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/04.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/05.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/06.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/07.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/08.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/09.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/10.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/11.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/12.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/13.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="../assets/supperone/14.jpg" alt />
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
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
      spaceBetween: 100,
      pagination: {
        //  小圆点
        // el: '.swiper-pagination',
        clickable: true,
        
      }, 
      autoplay: {
                  disableOnInteraction: false, //手动滑动之后不打断播放
                  delay: 1000
                },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>


<style scoped>
/* 按钮的样式 */
.swiper-button-prev,
.swiper-button-next {
  display: block;
  width: 68px;
  height: 68px;
  z-index: 2;
  /* position: absolute; */
  margin-top: -10%;
}
.swiper-button-prev {
  margin-left: 5%;
}
.swiper-button-next {
  margin-right: 5%;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: black;
}

/* 两边的间距 */
.swiper-container {
  margin: 0 10%;
}
/* 图片的大小 */
img {
  width: 324.5px;
  height: 434.6px;
}
li {
  display: none;
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