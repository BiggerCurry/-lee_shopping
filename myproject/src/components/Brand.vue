<template>
  <div>
    <div class="first">
      <div>源于1889年的牛仔传奇</div>
      <div>
        <div>
                自从Henry David Lee先生
          <br />在1889年成立了H.D. Lee Mercantile公司开始,
          <br />Lee就注定是开创历史的传奇品牌。
          <br />从推出第一款具有保护性的Lee Bib Overall背带工装裤；
          <br />到13盎司重磅丹宁布制作的经典101系列；
          <br />再到荣获爱迪生奖 (Edison Awards) 铜奖的精玉透凉牛仔系列，
          <br />
        </div>
        <br><br>
        <div>
          130年Lee始终保持创新与变革。
          <br />好动不停，行动不止，这就是Lee。
        </div>
      </div>
      <img src="../assets/aboutour/first.jpg" alt />
    </div>
    <Second></Second>
  </div>
</template>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
/* 背景图的最大宽度 */
.first > img {
  max-width: 100%;
}
/* 让所有的文字居中 */
.first {
  border: 0px;
  text-align: center;
}
/* 给所有的子级元素绝对定位 并让宽100%*/
.first > div {
  position: absolute;
  color: aliceblue;
  width: 100%;
}
/* 1889文字 */
.first > div:nth-child(1) {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 3%;
}
.first > div:nth-child(2) {
  margin-top: 10%;
}
</style>
<script>
import Second from './two'
export default {
  components:{
    Second
  }
}
</script>