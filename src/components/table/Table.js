/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '@core/dom';

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
    if (event.target.dataset.resize){
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      const type = $resizer.data.resize
      const sideProp = type === 'col' ? 'bottom' : 'right'
      $resizer.css({
        opacity: 1,
        [sideProp]: '-2000px'
      })
      let value;

      document.onmousemove = (e) => {
        if (type === 'col') {
          const delta = e.pageX - coords.right
          value = coords.width + delta
          $resizer.css({right: -delta + 'px'})
        } else {
          const delta = e.pageY - coords.bottom
          value = coords.height + delta
          $resizer.css({bottom: -delta + 'px'})
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        if (type === 'col') {
          this.$root.findAll(`[data-col="${$parent.data.col}"]`)
              .forEach(el => el.style.width = value + 'px')
        } else {
          $parent.css({'height': value + 'px'})
        }

        $resizer.css({
          opacity: 0,
          bottom: 0,
          right: 0
        })
      }
    }
  }
}
