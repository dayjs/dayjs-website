const translate = require(process.cwd() + '/node_modules/docusaurus/lib/server/translate.js').translate;

const parse = md => {
  if (md.src.charCodeAt(md.pos) !== 64) { // @
    return false
  }

  const match = /@>>?([\S]+)/.exec(md.src)
  if (!match) return false
  
  md.pos += match[0].length

  const token = {
    type: 'pluginNotice',
    level: md.level,
    content: {
      inline: md.src.indexOf('>>') > -1,
      plugin: match[1],
      match: match,
    },
  }

  md.push(token)
  return true
}

const render = (tokens, idx) => {
  const token = tokens[idx]
  const pluginName = token.content.plugin
  let pluginSnakeName
  if (['UTC'].indexOf(pluginName) === -1) {
    pluginSnakeName = pluginName.replace(/([A-Z])/g, "-$1").toLowerCase().slice(1)
  } else {
    pluginSnakeName = pluginName.toLowerCase()
  }
  const isInline = token.content.inline
  if (isInline) {
    return `(
    ${translate("dependent|plugin")}
    <a href="../plugin/${pluginSnakeName}">
      <code>${token.content.plugin}</code>
    </a>
    ${translate("plugin|plugin")}
    )`
  }
  return `<blockquote>
  ${translate("This requires the|plugin")}
  <a href="../plugin/${pluginSnakeName}">
    <code>${token.content.plugin}</code>
  </a>
  ${translate("plugin to work|plugin")} 
  </blockquote>`
}

const pluginNotice = ctx => {
  ctx.inline.ruler.push('pluginNotice', parse)
  ctx.renderer.rules['pluginNotice'] = render
}

module.exports = pluginNotice
