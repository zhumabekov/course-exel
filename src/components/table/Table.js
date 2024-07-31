/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {shouldResize} from './table.function';

export class Table extends ExcelComponent {
  constructor($root){
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }
  static className = 'excel__table'
  toHTML(){
    return createTable()
  }
  onMousedown(event){
    if (shouldResize(event)){
      resizeHandler(this.$root, event)
    }
  }
}
