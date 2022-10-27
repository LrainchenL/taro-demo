import { createApp } from 'vue'
import Taro from "@tarojs/taro";
import { Button, Toast, Icon, Image, Swiper, SwiperItem, Checkbox, CheckboxGroup, Badge, Avatar, Cell, CellGroup, Tag, Form, FormItem, Radio, RadioGroup, NoticeBar, Steps, Step, Layout, Row, Col, Divider } from '@nutui/nutui-taro';
// import { Middleware, registerMiddlewares, registerMiddleware } from 'tarojs-router-next'
import './router'
import './assets/font/iconfont.css';
import './app.scss'

const globalData = {
  StatusBar: null,
  Custom: null,
  CustomBar: null,
}

const pages = [];

const App = createApp({
  onLaunch() {
    Taro.getSystemInfo({
      success: e => {
        globalData.StatusBar = e.statusBarHeight;
        let capsule = Taro.getMenuButtonBoundingClientRect();
        if (capsule) {
          globalData.Custom = capsule;
          globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  onShow(options) {
    let pages = Taro.getCurrentPages();
    console.log(pages)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.config.globalProperties.$globalData = globalData
App.config.globalProperties.$pages = pages


App.use(Button).use(Toast).use(Icon).use(Image).use(Swiper).use(SwiperItem).use(Checkbox).use(CheckboxGroup).use(Badge).use(Avatar).use(Cell).use(CellGroup).use(Tag).use(Form).use(FormItem).use(Radio).use(RadioGroup).use(NoticeBar).use(Steps).use(Step).use(Layout).use(Row).use(Col).use(Divider)

export default App
