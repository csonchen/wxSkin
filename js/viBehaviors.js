const observer = require('./observer');
const viModel = require('./viModel');

module.exports = Behavior({
  data: {
    vi: null
  },

  attached() {
    // 1. 如果接口响应过长，创建监听，回调函数中读取结果进行换肤
    observer.addNotice(`kNoticeVi`, function(res) {
      this.setData({ vi: res })
    }.bind(this))

    // 2. 如果接口响应较快，modal有值，直接赋值，进行换肤
    var model = viModel.get()
    if (model.mainColor || model.subColor) {
      this.setData({ vi: model })
    }
  },

  detached() {
    observer.removeNotice(`kNoticeVi`)
  }
})