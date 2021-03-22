function Observer() {
  this.actions = new Map()
}

// 监听事件
Observer.prototype.addNotice = function(key, action) {
  if (this.actions.has(key)) {
    const handlers = this.actions.get(key)
    this.actions.set(key, [...handlers, action])
  } else {
    this.actions.set(key, [action])
  }
}

// 删除监听事件
Observer.prototype.removeNotice = function(key) {
  this.actions.delete(key)
}

// 发送事件
Observer.prototype.postNotice = function(key, params) {
  if (this.actions.has(key)) {
    const handlers = this.actions.get(key)
    handlers.forEach(handler => handler(params))
  }
}


module.exports = new Observer()