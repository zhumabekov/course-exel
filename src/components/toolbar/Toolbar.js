/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  constructor($root, options){
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    })
  }
  static className = 'excel__toolbar'
  toHTML(){
    return `
        <div class="button">
            <i class="material-icons">format_align_left</i>
        </div>
        <div class="button">
            <i class="material-icons">format_align_center</i>
        </div>
        <div class="button">
            <i class="material-icons">format_align_right</i>
        </div>
        <div class="button">
            <i class="material-icons">format_bold</i>
        </div>
        <div class="button">
            <i class="material-icons">format_italic</i>
        </div>
        <div class="button">
            <i class="material-icons">format_underlined</i>
        </div>
    `
  }
  onClick(event) {
    console.log(event.target)
  }
}
