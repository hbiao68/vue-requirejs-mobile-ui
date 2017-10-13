define(function () {
  var prefixs = [
    '-ms-',
    '-moz-',
    '-webkit-',
    '-o-'
  ]
  return function (style) {
    var ps = prefixs.slice(0, prefixs.length)
    var prefix = ''
    var styles = document.body.style
    do {
      if (prefix + style in styles) return prefix + style
    } while ((prefix = ps.unshift()))
  }
})