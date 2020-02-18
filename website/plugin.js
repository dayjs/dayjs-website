const parse = md => {
  if (md.src.charCodeAt(md.pos) !== 64) { // @
    return false
  }

  const match = /@>([\S]+)/.exec(md.src)
  if (!match) return false
  
  md.pos += match[0].length

  const token = {
    type: 'pluginNotice',
    level: md.level,
    content: {
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
  return `<blockquote>
  This dependent on 
  <a href="../plugin/${pluginSnakeName}">
    <code>${token.content.plugin}</code>
  </a>
  plugin to work
  </blockquote>`
}

const pluginNotice = ctx => {
  ctx.inline.ruler.push('pluginNotice', parse)
  ctx.renderer.rules['pluginNotice'] = render
}

module.exports = pluginNotice
