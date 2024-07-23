/* eslint-disable linebreak-style */
import {$} from '@core/dom';

/* eslint-disable linebreak-style */
export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
  getRoot() {
    const $root = $.create('div', 'excel')
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.innerHTML = component.toHTML()
      $root.append($el)
    });
    return $root
  }
  render() {
    this.$el.append(this.getRoot())
  }
}
