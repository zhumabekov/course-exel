/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  toHTML(){
    return `
        <div class="info">fx</div>
        <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }
}
