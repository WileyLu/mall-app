<template>
  <a-layout id="components-layout-demo-custom-trigger" class="home">
    <a-layout-sider
      v-model="$store.state.collapsed"
      :trigger="null"
      collapsible
      class="menu"
    >
      <!-- 侧边栏 -->
      <left-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <!-- 导航栏-->
        <top-tab class="header" />
      </a-layout-header>
      <router-view />
      <!-- <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content> -->
    </a-layout>
  </a-layout>
</template>
<script>
import leftMenu from '@/components/LeftMenu.vue';
import topTab from '@/components/TopTab.vue';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    leftMenu,
    topTab,
  },
};
</script>
<style lang="less">
@import url("~@/assets/Home.less");
</style>
