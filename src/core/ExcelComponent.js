/* eslint-disable linebreak-style */
import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name

    this.prepare()
  }
  toHTML() {
    return '';
  }
  prepare() {}
  init() {
    this.initDOMListeners()
  }
  destroy() {
    this.removeDOMListeners()
  }
}
