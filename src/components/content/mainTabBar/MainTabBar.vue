<script>
import TabBarItem from "components/tabbar/TabBarItem";
import TabBar from "components/tabbar/TabBar";

export default {
  name: "MainTabBar",
  components: {TabBar, TabBarItem}
}
</script>

<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="blue">
      <template #image>
        <img src="~assets/img/tabbar/home.svg" alt="首页">
      </template>
      <template #image-active>
        <img src="~assets/img/tabbar/home-active.svg" alt="首页">
      </template>
      <template #text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template #image>
        <img src="~assets/img/tabbar/category.svg" alt="分类">
      </template>
      <template #image-active>
        <img src="~assets/img/tabbar/category-active.svg" alt="首页">
      </template>
      <template #text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="green">
      <template #image>
        <img src="~assets/img/tabbar/shopcart.svg" alt="购物车">
      </template>
      <template #image-active>
        <img src="~assets/img/tabbar/shopcart-active.svg" alt="首页">
      </template>
      <template #text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template #image>
        <img src="~assets/img/tabbar/profile.svg" alt="我的">
      </template>
      <template #image-active>
        <img src="~assets/img/tabbar/profile-active.svg" alt="首页">
      </template>
      <template #text>
        <div>我的</div>
      </template>
    </tab-bar-item>
    <!--      <div class="tab-bar-item">-->
    <!--        <img src="./assets/img/tabbar/home.svg" alt="首页">-->
    <!--        首页-->
    <!--      </div>-->
    <!--      <div class="tab-bar-item">-->
    <!--        <img src="./assets/img/tabbar/category.svg" alt="分类">-->
    <!--        分类-->
    <!--      </div>-->
    <!--      <div class="tab-bar-item">-->
    <!--        <img src="./assets/img/tabbar/shopcart.svg" alt="购物车">-->
    <!--        购物车-->
    <!--      </div>-->
    <!--      <div class="tab-bar-item">-->
    <!--        <img src="./assets/img/tabbar/profile.svg" alt="我的">-->
    <!--        我的-->
    <!--      </div>-->
  </tab-bar>
</template>

<style scoped>

</style>
