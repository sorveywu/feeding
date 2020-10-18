export default {
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/setting/index',
    'pages/addBaby/index',
    'pages/addRecord/index'
  ],
  tabBar: {
    list: [{
      iconPath: 'assets/images/tab/pen_o.png',
      selectedIconPath: 'assets/images/tab/pen.png',
      pagePath: 'pages/setting/index',
      text: '记录'
    }, {
      iconPath: 'assets/images/tab/list_o.png',
      selectedIconPath: 'assets/images/tab/list.png',
      pagePath: 'pages/setting/index',
      text: '列表'
    }, {
      iconPath: 'assets/images/tab/stat_o.png',
      selectedIconPath: 'assets/images/tab/stat.png',
      pagePath: 'pages/index/index',
      text: '统计'
    }, {
      iconPath: 'assets/images/tab/setting_o.png',
      selectedIconPath: 'assets/images/tab/setting.png',
      pagePath: 'pages/setting/index',
      text: '设置'
    }],
    'color': '#000',
    'selectedColor': '#638cc4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  },
  window: {
    backgroundColor: '#ffffff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '喂养记',
    navigationBarTextStyle: 'black'
  }
}
