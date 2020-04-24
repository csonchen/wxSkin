const viBehaviors = require('../../js/viBehaviors');

Component({
  behaviors: [viBehaviors],

  properties: {
    btnText: {
      type: String,
      value: ''
    },

    secondary: {
      type: Boolean,
      value: false
    }
  }
})