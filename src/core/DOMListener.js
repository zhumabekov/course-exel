/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
export class DOMListener {
  constructor($root){
    if(!$root){
      throw new Error(`No $root provided for DOMListener!`)
    }
    this.$root = $root
  }
}
