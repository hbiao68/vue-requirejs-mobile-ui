/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(window):"function"==typeof define&&define.amd?define([],function(){n(window)}):n(window)}(this,function(e){for(var n=0,t=["webkit","moz"],i=e.requestAnimationFrame,o=e.cancelAnimationFrame,a=t.length;--a>=0&&!i;)i=e[t[a]+"RequestAnimationFrame"],o=e[t[a]+"CancelAnimationFrame"];i&&o||(i=function(e){var t=+new Date,i=Math.max(n+16,t);return setTimeout(function(){e(n=i)},i-t)},o=clearTimeout),e.requestAnimationFrame=i,e.cancelAnimationFrame=o});