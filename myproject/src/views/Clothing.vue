<template>
  <div class="maxwNarrow">
    <!-- 头部-->
    <div class="maxpathbox">
      <div class="maxPath">
        <a href="javascript:">
          <span>首页</span>
        </a>&gt;
        <span>男装</span>
      </div>
    </div>
    <!-- 页面主体 -->
    <div id="main">
      <!-- 商品列表 -->
      <div class="gallery-main">
        <!-- 左侧列表 -->
        <div class="filter-container">
          <ul>
            <span>按产品类别</span>
            <li v-for="(item,index) of LeeMan " :key="index">
              <a href="javascript:">
                <label>
                  <input type="checkbox" />
                  <span>{{item}}</span>
                </label>
              </a>
            </li>
          </ul>
          <ul>
            <span>精选系列</span>
            <li v-for="(item,index) of LeeClass" :key="index">
              <a href="javascript:">
                <label>
                  <input type="checkbox" @click="selectValue($event,item.class_id)" />
                  <span>{{item.commodity_category}}</span>
                </label>
              </a>
            </li>
          </ul>
        </div>
        <!-- 右侧图片展示区域 -->
        <div class="ptList-main">
          <div class="gallery_sortbar">
            <div class="gallery-select-sort">
              <select name="orderBy" class="action_orderby">
                <option value>最近</option>
                <option value>最热</option>
              </select>
            </div>
          </div>
           <!-- <img v-lazy="img.src" > -->
          <div class="gallery-show">
            <div class="gallery-grid">
              <ul>
                <li class="goods-item" v-for="(item,index) of products" :key="index">
                  <div class="goods-pic">
                    <a href="javascript:">
                      <img v-lazy="item.commodity_img" alt />
                    </a>
                  </div>
                  <div class="info-wrap">
                    <div class="goods-info">
                      <a href="javascript:">{{item.commodity_titile}}</a>
                      <h3>
                        <a href="javascript:">{{item.commodity_class}}</a>
                      </h3>
                      <div class="intr">{{item.commodity_number}}</div>
                    </div>
                    <div class="btn-group">
                      <a href="javascript:" class="shop">
                        <img src="../assets/btn_groupHover/shop_icon.png" alt />
                      </a>
                      <a href="javascript:" class="fav">
                        <img src="../assets/btn_groupHover/like_icon.png" alt />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      LeeMan: ["男装", "女装", "上装", "下装"],
      LeeClass: [],
      products: [],
      selecteds: [], // 选择列表
    };
  },
  mounted() {
    //请求数据库服装系列的表
    this.$axios.get("/api/commodity/getclassify").then((res) => {
      console.log(res.data.data);
      if (res.data.code == 0) {
        this.LeeClass = res.data.data;
          console.log(this.LeeClass);

      }
    });
          //获取数据库中
    this.$axios
      .get(`api/commodity/getlist?selecteds=${JSON.stringify(this.selecteds)}`)
      .then((res) => {
        this.products = res.data.data;
        this.products.forEach((item) => {
          item.commodity_img = require(`../assets/leeimg/${item.commodity_img}`);
        });
      });
  },
  methods: {
    selectValue(event, cid) {
      // 判断元素是否选中状态，并且数组中没有添加过该元素
      if (event.target.checked && this.selecteds.indexOf(cid) == -1) {
        this.selecteds.push(cid);
      }
      // 不选中则本次点击是取消,判断一下该元素是否在数组
      else if (this.selecteds.indexOf(cid) >= 0) {
        this.selecteds.splice(this.selecteds.indexOf(cid), 1);
      }
      // 当前选中的分类

      this.$axios
        .get(
          `api/commodity/getlist?selecteds=${JSON.stringify(this.selecteds)}`
        )
        .then((res) => {
          this.products = res.data.data;
          this.products.forEach((item) => {
            item.commodity_img = require(`../assets/leeimg/${item.commodity_img}`);
          });
        });
    },
  },
};
</script>
<style scoped>
* {
  text-decoration: none;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
/* 解决高度坍塌问题 */
#mian {
  overflow: hidden;
}
.gallery-main::after {
  clear: both;
  content: "";
  display: block;
}
#main::after {
  clear: both;
  content: "";
  display: block;
}
.maxwNarrow {
  margin: 0 auto;
  max-width: 1360px;
}
.maxpathbox {
  position: relative;
  width: 1360px;
  max-width: 100%;
  margin: 0 auto;
}
.maxPath {
  font-size: 16px;
  line-height: 5rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1360px;
}
.maxPath a {
  color: #000;
}
/* 商品区域 */
.gallery-main {
  position: relative;
}
/* 左侧筛选区域 */
.filter-container {
  border: 1px solid #000;
  width: 220px;
  float: left;
  padding: 19px 0 0 25px;
}
.filter-container > ul > li {
  margin-top: 5px;
}
.filter-container > ul > li > a {
  color: #000;
  font-size: 14px;
  display: flex;
  align-items: center;
}
/* 产品类别 */
.filter-container > ul > li > a > label > input {
  padding-top: 2px;
}
.filter-container > ul > li > a > label > span {
  margin-left: 8px;
}
.filter-container > ul > span {
  font-weight: bold;
  font-size: 14px;
}
/* 精选系列 */
.filter-container > ul > li > a > label > input {
  padding-top: 2px;
}
.filter-container > ul > li > a > label > span {
  margin-left: 8px;
}
/* 右侧图片展示区域 */
.ptList-main {
  margin-left: 265px;
}
.gallery_sortbar {
  margin-bottom: 15px;
}
.gallery-select-sort .action_orderby {
  width: 243px;
  height: 34px;
  border: 1px solid #000;
  font-size: 15px;
  font-weight: bold;
  padding-top: 0 8px;
}
/* 商品图片展示区域 */
.gallery-grid .goods-item {
  width: 29.681%;
  padding: 0;
  margin-right: 20px;
  float: left;
}
.goods-pic {
  width: 325px;
  border: 1px solid #b2b2b2;
}
.goods-pic > a > img {
  width: 100%;
}
/* 商品文本展示区域 */
.info-wrap {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.goods-info > a {
  font-size: 14px;
  color: #000;
  font-weight: bold;
}
.goods-info > h3 > a {
  font-size: 15px;
  color: #000;
}
.goods-info > div {
  color: #58585a;
  font-size: 14px;
}
.btn-group {
  display: -webkit-flex;
}
.btn-group .shop {
  margin-right: 6px;
}
.btn-group .fav {
  margin-left: 6px;
}
.btn-group a > img {
  width: 100%;
}
.btn-group a {
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
}
/* 鼠标悬浮区域 */
</style>