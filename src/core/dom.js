/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
class Dom{
  constructor(selector){
    this.$el = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector
  }
  html(html){
    if (typeof html === 'string'){
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }
  clear() {
    this.html('')
    return this
  }
  append(node) {
    if (node instanceof Dom){
      node = node.$el
    }
    if (Element.prototype.append){
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
  on(eventType, callback){
    this.$el.addEventListener(eventType, callback)
  }
  off(eventType, callback){
    this.$el.removeEventListener(eventType, callback)
  }
  closest(selector){
    return $(this.$el.closest(selector))
  }
  getCoords(){
    return this.$el.getBoundingClientRect()
  }
  css(styles = {}){
    Object.keys(styles).forEach(key => {
      this.$el.style[key] = styles[key]
    })
  }
  get data() {
    return this.$el.dataset
  }
  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }
  find(selector) {
    return $(this.$el.querySelector(selector))
  }
  addClass(className) {
    this.$el.classList.add(className)
  }
  removeClass(className) {
    this.$el.classList.remove(className)
  }
  id(parse) {
    if (parse) {
      const parsed = this.id().split(':')
      return {
        row: +parsed[0],
        col: +parsed[1]
      }
    }
    return this.data.id
  }
}

export function $(selector){
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes){
        el.classList.add(classes)
    }
    return $(el)
}
