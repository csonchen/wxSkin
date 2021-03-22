const viModel = require('./viModel');
const observer = require('./observer');

const getSkinSettings = () => {
  return new Promise((resolve, reject) => {
    // 模拟后端接口访问，暂时用500ms作为延时处理请求
    setTimeout(() => {
      const resData = {
        code: 200,
        data: {
          mainColor: '#ff9e00',
          subColor: '#454545'
        }
      }

      // 判断状态码是否为200
      if (resData.code == 200) {
        resolve(resData)
        
        // 发送通知，变更色值
        observer.postNotice('kNoticeVi', resData.data)

        // 将色值存储到model对象中，便于后期使用
        const { mainColor, subColor } = resData.data
        viModel.save(mainColor, subColor)
      } else {
        reject({ code: resData.code, message: '网络出错了' })
      }
    }, 5000)
  })
}

module.exports = {
  getSkinSettings,
}