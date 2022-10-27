<template>
  <view class="fd-custom" :style="{'height': $globalData.CustomBar + 'px'}">
    <view class="fd-bar fixed" :style="{'height': $globalData.CustomBar + 'px', 'paddingTop': $globalData.StatusBar + 'px','backgroundColor': backgroundColor}">
      <view v-if="!state.isHome" class="action" @click="backTap">
        <nut-icon name="left" size="14"></nut-icon>
        {{state.backText}}
      </view>
      <view v-else class="action border-custom" style="width:{{Custom.width}}px;height:{{Custom.height}}px;margin-left:calc(750rpx - {{Custom.right}}px)" @click="toHome">
        <!-- <nut-icon name="left" size="16"></nut-icon> -->
        <nut-icon name="home"></nut-icon>
      </view>
      <view class="content" :style="{'top':$globalData.StatusBar + 'px'}">
        {{state.content}}
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive, toRefs, getCurrentInstance } from 'vue';
import Taro from "@tarojs/taro";
import { Router, NavigateType } from "tarojs-router-next"
    const props = defineProps({
      backText: {
        type: String,
        default: '返回'
      },
      content: {
        type: String,
        default: ''
      },
      backgroundColor: {
        type: String,
        default: 'rgb(48, 148, 255)'
      },
      isHome: {
        type: Boolean,
        default: false
      }
    })
    const state = reactive({
      backText: props.backText,
      content: props.content,
      backgroundColor: props.backgroundColor,
      isHome: props.isHome
    });
    const { proxy } = getCurrentInstance(); //关键代码
    const $globalData = proxy.$globalData;  //关键代码
    const $pages = proxy.$pages;  //关键代码
    console.log($pages)
    const backTap = () => {
      Router.back(undefined, { delta: 1 })
      // Taro.navigateBack({
      //   delta: 1
      // })
    }
    const toHome = () => {
      Router.toIndex({ type: NavigateType.reLaunch })
      // Taro.navigateBack({
      //   delta: 1
      // })
    }
</script>

<style lang="scss">
  page {
    background-color: rgba(247, 248, 252, 1);
  }
  .top_bg {
    width: 100%;
    height: 76px;
    border-radius: 0 0 8px 8px;
    background-color: rgba(48, 148, 255, 1);
    position: absolute;
  }
  .fd-custom {
    color: #fff;
    .fd-bar {
      display: flex;
      position: relative;
      align-items: center;
      min-height: 100rpx;
      justify-content: space-between;
      padding-right: 110px;
      z-index: 9999;
      box-sizing: border-box;
      &.fixed {
        position: fixed;
        width: 100%;
        top: 0;
      }
      .action {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        max-width: 100%;
        &:first-child {
          margin-left: 15px;
          font-size: 16px;
        }
        .nut-icon {
          margin-right: 4px;
        }
      }
      .content {
        width: calc(100% - 220px);
        position: absolute;
        text-align: center;
        width: calc(100% - 170px);
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        cursor: none;
        pointer-events: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
</style>
