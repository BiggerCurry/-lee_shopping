<template>
  <div class="collection">
    <div class="atc">
     <div class="bg">
       <a href="javascript">
         <img src="../../assets/IMG/image3/01.png" alt="">
       </a>
     </div>
    </div>
    <div class="container">
      <div class="post">
        <div class="rich">
          <div class="bg">
            <div class="item">
              <div class="two">
                <img src="../../assets/IMG/image3/02.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="rich">
          <div class="bg">
            <div class="item">
              <div class="two">
                <img src="../../assets/IMG/image3/03.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="rich">
          <div class="bg">
            <div class="item">
              <div class="two">
                <img src="../../assets/IMG/image3/04.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="rich">
          <div class="bg">
            <div class="item">
              <div class="two">
                <img src="../../assets/IMG/image3/05.jpg" alt="">
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>
<style scoped>
  .collection{
    margin-bottom: 80px;
  }
  .atc .bg{
    position: relative;
    background-position: top;
  }
  .atc .bg img{
    width: 100%;
  }
  .collection .container{
    width: 100%;
    text-align: center;
  }
 .collection .container .post{
   margin: -30px 0;
 }
 .collection .rich .bg{
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 20px;

 }
 .container .rich .item{
   overflow: hidden;
 }
 .two img{
   margin-top: 30px;
   max-width: 70%;
   max-height: 100%;
 }
</style>