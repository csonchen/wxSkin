const observer = require('./observer');
const viModel = require('./viModel');

module.exports = Behavior({
  data: {
    themeStyle: null
  },

  attached() {
    // 1. 如果接口响应过长，创建监听，回调函数中读取结果进行换肤
    observer.addNotice('kNoticeVi', function(res) {
      this.setThemeStyle(res)
    }.bind(this))

    // 2. 如果接口响应较快，modal有值，直接赋值，进行换肤
    const themeData = viModel.get()
    if (themeData.mainColor || themeData.subColor) {
      console.log('test: ', themeData)
      this.setThemeStyle(themeData)
    }
  },

  detached() {
    observer.removeNotice('kNoticeVi')
  },

  methods: {
    setThemeStyle({ mainColor, subColor }) {
      this.setData({
        themeStyle: `
          --main-color: ${mainColor};
          --sub-color: ${subColor};
        `
      })
    },
  },
})