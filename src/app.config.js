export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/archives/index',
    'pages/healthyline/index',
    'pages/track-declaration/index',
  ],
  tabBar: {
    list: [{
      'iconPath': './assets/icon/tabbar/home.png',
      'selectedIconPath': './assets/icon/tabbar/home-fill.png',
      pagePath: 'pages/index/index',
      text: '首页'
    },{
      'iconPath': './assets/icon/tabbar/my.png',
      'selectedIconPath': './assets/icon/tabbar/my-fill.png',
      pagePath: 'pages/my/index',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  lazyCodeLoading: "requiredComponents",
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColorTop: '#f7f8fc',
    backgroundColorBottom: '#f7f8fc',
  }
})
