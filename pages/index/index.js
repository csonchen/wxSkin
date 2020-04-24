
const app = getApp()

// stylus('cc').set('filename', 'index.css').render(function(err, css) {
//   console.log(css)
// })

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
