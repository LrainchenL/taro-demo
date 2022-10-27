<template>
  <fd-custom :content="state.content">
  </fd-custom>
  <view class="heathyLine">
    heathyLine页面
  </view>
</template>

<script>
import { reactive } from 'vue';
import Taro from "@tarojs/taro";
import fdCustom from "../../components/fd-custom/index.vue";

  export default {
    components: {
      fdCustom
    },
    onLoad () {
      console.log("onLoad")
    },
    setup () {
      const state = reactive({
        msg: '导航名称',
        content: '导航名称',
      });
      return {
        state,
      }
    }
  }
</script>

<style lang="scss">

</style>
