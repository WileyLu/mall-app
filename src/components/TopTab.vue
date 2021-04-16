<template>
  <a-breadcrumb separator="">
    <a-breadcrumb-item class="item">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
    </a-breadcrumb-item>
    <a-breadcrumb-item class="item">
      <router-link :to="{ name: 'HomePage' }">首页</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item class="item">
      <router-link :to="{ name: 'statistics' }">统计</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item class="user"
      >欢迎,wiley
      <a-menu slot="overlay">
        <a-menu-item>退出</a-menu-item>
      </a-menu>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState({ collapsed: (state) => state.collapsed }),
  },
  methods: {
    ...mapActions(['changeCollapsed']),
    toggleCollapsed() {
      this.changeCollapsed();
    },
  },

};
</script>
