const all = require('../all')
module.exports = notes

const defaultMacro = (identifier, text) => `\\footnote{\\label{${identifier}}${text}}`

function notes (ctx, node) {
  const macro = ctx.footnoteDefinition || defaultMacro
  return macro(node.identifier, all(ctx, node))
}
