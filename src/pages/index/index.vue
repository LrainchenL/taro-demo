<template>
  <button type="primary" @tap="onArchives">跳转到archives页面</button>
  <view @tap="onTrackDeclaration">跳转到track-declaration页面</view>
  <button type="primary" @tap="onHealthyline">跳转到healthyline页面</button>
</template>

<script setup>
import { reactive, toRefs, onMounted } from 'vue';
import { Router } from "tarojs-router-next"

  const state = reactive({
    msg: '首页',
  });

  const onArchives = () => {
    Router.toArchives()
  }

  const onTrackDeclaration = () => {
    console.log("2312")
    Router.toTrackDeclaration()
  }

  const onHealthyline = () => {
    Router.toHealthyline()
  }
  
</script>

<style lang="scss">

</style>
