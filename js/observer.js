function Observer() {
  this.actions = new Map()
}

// 监听事件
Observer.prototype.addNotice = function(key, action) {
  this.actions.set(key, action)
}

// 删除监听事件
Observer.prototype.removeNotice = function(key) {
  this.actions.delete(key)
}

// 发送事件
Observer.prototype.postNotice = function(key, params) {
  if (this.actions.has(key)) {
    this.actions.get(key)(params)
  }
}


module.exports = new Observer()