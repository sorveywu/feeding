const config = {
  projectName: 'feeding',
  date: '2020-9-28',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/components/vant/wxs', to: 'dist/components/vant/wxs' },
      { from: 'src/components/vant/common/style', to: 'dist/components/vant/common/style' },
      { from: 'src/components/vant/common/index.wxss', to: 'dist/components/vant/common/index.wxss' },
      { from: 'src/components/vant/nav-bar/index.wxs', to: 'dist/components/vant/nav-bar/index.wxs' },
      { from: 'src/components/vant/field/index.wxs', to: 'dist/components/vant/field/index.wxs' },
      { from: 'src/components/vant/calendar/index.wxs', to: 'dist/components/vant/calendar/index.wxs' },
      { from: 'src/components/vant/picker-column/index.wxs', to: 'dist/components/vant/picker-column/index.wxs' },
      { from: 'src/components/vant/calendar/utils.wxs', to: 'dist/components/vant/calendar/utils.wxs' },
      { from: 'src/components/vant/calendar/calendar.wxml', to: 'dist/components/vant/calendar/calendar.wxml' },
      { from: 'src/components/vant/calendar/components/month/index.wxs', to: 'dist/components/vant/calendar/components/month/index.wxs' },
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
