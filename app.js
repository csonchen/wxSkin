const { getSkinSettings } = require('./js/service');

App({
  onLaunch: function () {
    // 页面启动，请求接口
    getSkinSettings().catch(err => {
      console.log(err)
    })
  }
})
