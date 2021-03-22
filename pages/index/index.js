
const app = getApp()

Page({
  data: {
    theme: ''
  },
  
  onLoad() {},

  handleChange(e) {
    const { theme } = e.target.dataset
    this.setData({ theme })
  }
})
