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
  const pluginSnakeName = pluginName.replace(/([A-Z])/g, "-$1").toLowerCase().slice(1)
  return `<p>Requires <a href="../plugin/${pluginSnakeName}"><code>${token.content.plugin}</code></a> plugin</p>`
}

const pluginNotice = ctx => {
  ctx.inline.ruler.push('pluginNotice', parse)
  ctx.renderer.rules['pluginNotice'] = render
}

module.exports = pluginNotice
