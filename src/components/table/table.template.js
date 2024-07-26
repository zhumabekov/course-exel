/* eslint-disable linebreak-style */
const CODES = {
  A: 65,
  Z: 90
}
function createRow(index, content) {
  return `
    <div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">${content}</div>
    </div>
  `
}

function toCell() {
  return `<div class="cell" contenteditable></div>`
}

function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx)
}

function toColumn(col) {
  return `<div class="column">${col}</div>`
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  rows.push(createRow('', cols))

  const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i+1, cells))
  }
  return rows.join('')
}
