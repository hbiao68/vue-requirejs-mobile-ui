;
require.config({
  // urlArgs: "bust=" + (new Date()).getTime(),
  baseUrl: '/',
  paths: {
    'libs': 'libs',
    'vue': 'libs/vue/vue',
    'vuex': 'libs/vuex/vuex',
    'vue-router': 'libs/vue-router/vue-router',
    'vue-popup': 'libs/vue-popup/index',
    'jquery': 'libs/jquery/jquery',
    'fastclick': 'libs/fastclick/fastclick',
    'wind-dom': 'libs/wind-dom/index',
    '__module__': 'common/__module__',
    '__component__': 'common/__component__',
    '__install__': 'common/__install__',
    '__store__factory__': 'common/__store__factory__',
    'detector': 'common/detector',
    'calc': 'common/calculate',
    'emitter': 'common/mixins/emitter',
    'clickoutside': 'common/utils/clickoutside',
    'isvisible': 'common/utils/isvisible',
    'install': 'components/install'
  },
  map: {
    '*': {
      'text': 'libs/require-text/text'
    }
  },
  deps: [
    'libs/es6-promise/promise',
    'jquery',
    'vue',
    'vue-router',
    'detector',
    'calc',
    'fastclick',
    'libs/require-text/text',
    'libs/raf/index'
  ]
})
require([
  'fastclick', 'application', 'libs/raf/index'
], function (FastClick, application) {
  var docEl = document.documentElement
  var resizeEvt = 'orientationchange' in window
    ? 'orientationchange'
    : 'resize'
  var recalc = (function recalc () {
    var clientWidth = docEl.clientWidth > 750
      ? 750
      : docEl.clientWidth
    if (!clientWidth) {
      return
    }
    docEl.style.fontSize = 12 * clientWidth / 320 + 'px'
    return recalc
  })()
  if (!document.addEventListener) {
    return
  }
  window.addEventListener(resizeEvt, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)
  FastClick.attach(document.body)
  application.run()
})
