/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */

import {capitalize} from '@core/utils'

/* eslint-disable linebreak-style */
export class DOMListener {
  constructor($root, listeners = []){
    if(!$root){
      throw new Error(`No $root provided for DOMListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }
  initDOMListeners(){
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if(!this[method]) {
        // eslint-disable-next-line max-len
        throw new Error(`Method ${method} is not implemented in ${this.name} component`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }
  removeDOMListeners(){
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
