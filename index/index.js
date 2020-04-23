
const app = getApp()

// stylus('cc').set('filename', 'index.css').render(function(err, css) {
//   console.log(css)
// })

Page({
  data: {
    theme: ''
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },

  handleChange(e) {
    const { theme } = e.target.dataset
    this.setData({ theme })
  }
})
