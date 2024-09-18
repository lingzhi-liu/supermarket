<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path) //通过比较当前路由和props路由的异同，判断props路由是不是激活的路由
    },
    styleObject() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="image"></slot>
    <slot v-else name="image-active"></slot>
    <div :style="styleObject">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
