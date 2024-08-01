/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {shouldResize, isCell, matrix} from './table.function';
import {TableSelection} from './TableSelection';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table'
  constructor($root){
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }
  prepare() {
    this.selection = new TableSelection()
  }
  init() {
    super.init()
    const cell = this.$root.find('[data-id="0:0"]')
    this.selection.select(cell)
  }
  toHTML(){
    return createTable()
  }
  onMousedown(event) {
    if (shouldResize(event)){
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        const $cells = matrix(this.selection.current, $target)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }
}

