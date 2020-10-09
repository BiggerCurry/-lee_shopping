<template>
  <div class="star">
    <div class="third">
      <div>
        <img src="../assets/second/01.gif" alt />
      </div>
      <div>
        <img src="../assets/second/02.gif" alt />
      </div>
      <div>
        <img src="../assets/second/03.gif" alt />
      </div>
      <div>
        <img src="../assets/second/04.gif" alt />
      </div>
      <div>
        <img src="../assets/second/05.gif" alt />
      </div>
      <div>
        <img src="../assets/second/06.png" alt />
      </div>
      <div>
        <img src="../assets/second/07.gif" alt />
      </div>
      <div>
        <img src="../assets/second/08.gif" alt />
      </div>
      <div>
        <img src="../assets/second/09.png" alt />
      </div>
      <div>
        <img src="../assets/second/10.gif" alt />
      </div>
      <div>
        <img src="../assets/second/11.gif" alt />
      </div>
    </div>
    <p> 
      <span class="i1">精选单品</span>
    </p>
    <denimunion></denimunion>
  </div>
</template>

<script>
import denimunion from "./denimunion";

export default {
  components: {
    denimunion,
  },
};
</script>
<style  scoped>
p {
  text-align: center;
  border-bottom: solid 2px black;
  opacity: 0.4;
  margin-top: 50px;
  margin-bottom: 60px;
}
.third {
  text-align: center;
}
.i1 {
  display: inline-block;
  padding: 0 1.5rem;
  background: #fff;
  position: absolute;
  font-size: 1.8rem;
  line-height: 76px;
  margin-top: -40px;
  right: 44.5%;
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