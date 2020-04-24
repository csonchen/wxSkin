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
      } else {
        reject({ code: resData.code, message: '网络出错了' })
      }
    }, 500)
  })
}

module.exports = {
  getSkinSettings,
}