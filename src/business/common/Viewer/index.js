define([
    '__component__',
    'text!./tpl.html',
    'common/draggable',
    'wind-dom'
], function (component, template, draggable, windDom) {
    var InstanceResolve = null;
    var InstanceReject = null;
    var once = windDom.once
    return component('cs-viewer', {
        template: template,
        data: function () {
            return {
                pageIndex: 0,
                images: [],
                popupVisible: false,
                dragInited: false,
            }
        },
        mounted: function () {
            setTimeout(function () {
                this.$refs.viewerTop.style.height = document.body.offsetHeight + 'px'
                this.$refs.csViewer.style.width = document.body.offsetWidth + 'px'
            }.bind(this));
        },
        methods: {
            initDrage: function () {
                var self = this;
                var o = {};
                var isDragging = false
                var _forEach = Array.prototype.forEach
                var forEach = function (target, fun) {
                    return _forEach.call(target, fun)
                }
                draggable(self.$refs.csViewer, {
                    start: function (e) {
                        isDragging = true
                        o.dx = 0
                        o.x = e.clientX;
                    },
                    drag: function (e) {
                        if (isDragging) {
                            o.dx = e.clientX - o.x
                            o.eles = self.$refs.viewerScroller.querySelectorAll('.viewer-container')
                            forEach(o.eles, function (el) {
                                el.style.transform = "translate3d(" + o.dx + "px, 0, 0)"
                            })
                        }
                    },
                    end: function () {
                        // 进行判断
                        isDragging = false
                        var offsetWidth = self.$refs.viewerScroller.offsetWidth
                        o.d = o.dx / Math.abs(o.dx)
                        if (o.dx) {
                            once(o.eles[0], 'webkitTransitionEnd', function () {
                                forEach(o.eles, function (el) {
                                    el.style.transitionDuration = ''
                                    el.style.transitionDuration = ''
                                    el.style.transitionProperty = ''
                                })
                                if (o.state) {
                                    if (self.pageIndex - o.d >= self.images.length) {
                                        self.pageIndex = 0
                                    } else if (self.pageIndex - o.d < 0) {
                                        self.pageIndex = self.images.length - 1
                                    } else self.pageIndex -= o.d
                                    self.$nextTick(function () {
                                        forEach(o.eles, function (el) {
                                            el.style.transform = 'translate3d(0, 0, 0)'
                                        })
                                    })
                                }
                            });
                            if (offsetWidth / 5 > Math.abs(o.dx)) {
                                o.state = false
                                forEach(o.eles, function (el) {
                                    el.style.transitionDuration = '0.2s'
                                    el.style.transitionDuration = 'ease'
                                    el.style.transitionProperty = 'transform'
                                    el.style.transform = "translate3d(0, 0, 0)";
                                })
                            } else {
                                o.state = true
                                forEach(o.eles, function (el) {
                                    el.style.transitionDuration = '0.2s'
                                    el.style.transitionDuration = 'ease'
                                    el.style.transitionProperty = 'transform'
                                    el.style.transform = "translate3d(" + (o.d * offsetWidth) + "px, 0, 0)";
                                })
                            }
                        }
                    }
                })
                self.dragInited = true
            },
            uri: function (index) {
                var item = this.images[index < 0 ? this.images.length - 1 : index % this.images.length]
                return {
                    'background-image': 'url(' + item + ')',
                    'transform': 'translate3d(0, 0, 0)'
                }
            },
            show: function (images) {
                var self = this;
                this.images = images;
                this.popupVisible = true;
                return new Promise(function (resolve, reject) {
                    if (!self.dragInited) {
                        self.initDrage()
                    }
                    InstanceResolve = resolve;
                    InstanceReject = reject;
                })
            },
            close: function (cmd) {
                this.popupVisible = false;
                cmd instanceof Event
                    ? InstanceReject()
                    : InstanceResolve(cmd);
            }
        }
    });
})