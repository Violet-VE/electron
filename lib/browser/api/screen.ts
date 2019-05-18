import { EventEmitter } from 'events'
import { createLazyInstance } from '../utils'

const { Screen, createScreen } = process.electronBinding('screen')

// Screen is an EventEmitter.
Object.setPrototypeOf(Screen.prototype, EventEmitter.prototype)

module.exports = createLazyInstance(createScreen, Screen, true)
