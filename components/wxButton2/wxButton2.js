const skinBehavior = require('../../js/skinBehavior');

Component({
  behaviors: [skinBehavior],

  properties: {
    // 按钮文本
    btnText: {
      type: String,
      value: ''
    },

    // 是否为辅助按钮，更换辅色皮肤
    secondary: {
      type: Boolean,
      value: false
    }
  }
})