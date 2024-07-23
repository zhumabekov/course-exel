/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
class Dom{
}

export function $(){
  return new Dom()
}
$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes){
        el.classList.add(classes)
    }
    return el
}
