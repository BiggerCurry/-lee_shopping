<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="/danning"
          ><img src="../assets/40f0075cffc1efd348f8083a93a3ab5e2e72819b.png"
        /></a>
      </div>
      <div class="swiper-slide">
        <a href="/leexcocacola"
          ><img src="../assets/3fb166539e4cd197250040756c441e9cfdb80473.jpg"
        /></a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:"
          ><img src="../assets/be823f759b0e32414a7c94189eaec78d2c42a847.png"
        /></a>
      </div>
      <div class="swiper-slide">
        <a href="/cooling"
          ><img src="../assets/09d2ae09551b9bbbc24ef66cabae8ff1551ff018.png"
        /></a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-white"></div>
    <div class="swiper-button-white"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
      autoplay: {
        disableOnInteraction: false, //手动滑动之后不打断播放
        delay: 3000,
      },
    });
  },
  pagination: {
    //小圆点
    el: ".swiper-pagination",
  },
};
</script>
<style scoped>
.swiper-slide > img {
  width: 100%;
}
</style>