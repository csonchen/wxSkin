/**
 * 主题对象：是一个单例
 * @param {*} mainColor 主色值
 * @param {*} subColor 辅色值
 */

function ViModel(mainColor, subColor, reset = false) {
  if (typeof ViModel.instance == 'object' && !reset) {
    return ViModel.instance
  }

  this.mainColor = mainColor
  this.subColor = subColor
  if (this.mainColor || this.subColor) {
    ViModel.instance = this
  }
  return this
}

module.exports = {
  save: function(mainColor = '', subColor = '') {
    return new ViModel(mainColor, subColor, true)
  },

  get: function() {
    return new ViModel()
  }
}
