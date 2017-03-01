define(['__component__', 'text!./tpl.html', 'vuex', 'vue'], function(component, template, Vuex, Vue) {
    var InstanceResolve = null;
    var InstanceReject = null;
    return component('cs-evaluate-class', {
        template: template,
        props: {
            height: { type: Number, default: 29 }
        },
        data: function() {
            return {
                title: '',
                popupVisible: false,
                result: [],
            }
        },
        computed: Object.assign(Vuex.mapGetters(['EvaluateClassSource']), {
            score: function() {
                var score = 0;
                if (this.result.length == 0) return score;
                this.result.forEach(function(o) {
                    score += (o.value ? o.value.value : 0);
                })
                return score;
            }
        }),
        created: function() {
            //初始化返回数据
            this.reset();
        },
        methods: {
            //初始化返回数据
            reset: function() {
                var that = this;
                var result = [];
                this.EvaluateClassSource.list.forEach(function(o) {
                    result.push(o.items.length > 0 ? {
                        id: o.id,
                        value: $.extend(true, {}, o.items[0]),
                        images: []
                    } : {
                        id: o.id,
                        images: []
                    });
                })
                this.result = result;
            },
            show: function(params) {
                this.reset();
                params = params || {};
                this.title = params.title || '班级评价';
                this.popupVisible = true;
                this.$nextTick(function() {
                    this.$refs.rowContainer.scrollTop = 0;
                    if (this.$refs.columnContainer) this.$refs.columnContainer.forEach(function(o) { o.scrollLeft = 0; });
                }.bind(this))
                return new Promise(function(resolve, reject) {
                    InstanceResolve = resolve;
                    InstanceReject = reject;
                })
            },
            close: function(cmd) {
                this.popupVisible = false;
                cmd instanceof Event ? InstanceReject() : InstanceResolve($.extend(true, {}, cmd));
            },
            addfile: function(cacheRow) {
                if (cacheRow.images.length < 5) {
                    this.$indicator.open('加载中...');
                    setTimeout(function() {
                        this.plusfile(cacheRow);
                        this.$indicator.close();
                    }.bind(this), 200);
                }
            },
            plusfile: function(cacheRow) {
                cacheRow.images.push({ id: new Date().getTime(), src: '/assets/system/phoneImage.png' });
            },
            removefile: function(index, cacheRow) {
                cacheRow.images.splice(index, 1);
            }
        }
    });
})