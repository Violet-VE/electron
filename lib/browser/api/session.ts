import { EventEmitter } from 'events'
import { app } from 'electron'

const { fromPartition, Session, Cookies } = process.electronBinding('session')

// Public API.
Object.defineProperties(exports, {
  defaultSession: {
    enumerable: true,
    get () { return fromPartition('') }
  },
  fromPartition: {
    enumerable: true,
    value: fromPartition
  }
})

// Session is an EventEmitter.
Object.setPrototypeOf(Session.prototype, EventEmitter.prototype)

// Cookies is an EventEmitter.
Object.setPrototypeOf(Cookies.prototype, EventEmitter.prototype)

Session.prototype._init = function () {
  app.emit('session-created', this)
}
