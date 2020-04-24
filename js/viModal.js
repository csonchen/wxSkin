/**
 * 主题对象：是一个单例
 * @param {*} mainColor 主色值
 * @param {*} subColor 辅色值
 */
function ViModal(mainColor, subColor) {
  if (typeof ViModal.instance == 'object') {
    return ViModal.instance
  }

  this.mainColor = mainColor
  this.subColor = subColor
  ViModal.instance = this
  return this
}

module.exports = {
  save: function(mainColor = '', subColor = '') {
    return new ViModal(mainColor, subColor)
  },

  get: function() {
    return new ViModal()
  }
}
