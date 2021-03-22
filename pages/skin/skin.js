const skinBehavior = require('../../js/skinBehavior');

Page({
  behaviors: [skinBehavior],

  onLoad() {
    console.log(this.data)
  }
})