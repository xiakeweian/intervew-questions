class EventEmitter {
  constructor() {
    this._events = Object.create(null)
  }

  on(type, listener) {
    if (this._events[type]) {
      this._events[type].push(listener)
    } else {
      this._events[type] = [listener]
    }
  }

  emit(type, ...args) {
    if (this._events[type]) {
      this._events[type].forEach((listener) => {
        listener(...args)
      })
    }
  }

  off(type, listener) {
    if (this._events[type]) {
      if (listener) {
        const index = this._events[type].indexOf(listener)
        this._events[type].splice(index, 1)
      } else {
        delete this._events[type]
      }
    }
  }
}

const eventEmitter = new EventEmitter()

function log(...args) {
  console.log(args)
}

eventEmitter.on('log', log)

setInterval(() => {
  eventEmitter.emit('log', 1, 2, 3, 4)
}, 1000)
