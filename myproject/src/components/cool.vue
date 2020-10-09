<template>
  <div>
    <p>
      <span class="i1">潮流混搭</span>
    </p>
    <div class="swiper-button-prev"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/cool/01.jpg" alt />
        </div>
        <p>
          <span class="i1">模特同款</span>
        </p>
        <div class="swiper-slide">
          <img src="../assets/cool/02.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/cool/03.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/cool/04.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/cool/05.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/cool/06.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/cool/07.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/cool/08.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/cool/09.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/cool/02.jpg" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
    <div class="swiper-button-next"></div>
    <p>
      <span class="i1">模特同款</span>
    </p>
      <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style="background-image:url(./images/nature-1.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(./images/nature-2.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(./images/nature-3.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(./images/nature-4.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(./images/nature-5.jpg)"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </div>
  </div>
</template>
    <script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";
export default {
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 40,
        stretch: -100,
        depth: 20,
        modifier: 2, //3D 轮播的样式
        slideShadows: true,
      },
      autoplay: {
        disableOnInteraction: false, //手动滑动之后不打断播放
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        //小圆点
        // el: ".swiper-pagination" ,
      },
    });
  },
};
</script>
<style  scoped>
/* 按钮的样式 */
.swiper-button-prev,
.swiper-button-next {
  display: block;
  width: 68px;
  height: 68px;
  border: solid 1px white;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  width: 500px;
}

.swiper-slide > img {
  width: 480px;
  height: 720px;
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