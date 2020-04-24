const { getSkinSettings } = require('./js/service');
const observer = require('./js/observer');
const viModel = require('./js/viModel');

App({
  onLaunch: function () {
    // 页面启动，请求接口
    getSkinSettings().then(res => {
      // 获取色值，保存到modal对象中
      const { mainColor, subColor } = res.data
      viModel.save(mainColor, subColor)

      // 发送通知，变更色值
      observer.postNotice('kNoticeVi', res.data)
    }).catch(err => {
      console.log(err)
    })
  }
})
