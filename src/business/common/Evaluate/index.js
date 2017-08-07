define(['__component__', 'text!./tpl.html', 'vuex'], function(component, template, Vuex) {
    var InstanceResolve = null;
    var InstanceReject = null;
    return component('cs-evaluate', {
        template: template,
        props: {
            height: { type: Number, default: 28.44 }
        },
        data: function() {
            return {
                title: '',
                selectIndex: 0,
                popupVisible: false,
                textVal: ""
            }
        },
        computed: Vuex.mapGetters(['EvaluateSource']),
        methods: {
            toggle: function(index) {
                this.selectIndex = index;
            },
            show: function(params) {
                params = params || {};
                this.title = params.title || '评价';
                this.selectIndex = 0;
                this.textVal = "";
                this.popupVisible = true;
                var stopPropagation = function(e) {
                    e = e || window.event;
                    if (e.stopPropagation)
                        e.stopPropagation();
                    if(e.preventDefault){
                        e.preventDefault();
                    }
                }
                this.$el.ontouchmove = stopPropagation;
                this.$el.onmousewheel = stopPropagation;
                this.$el.onwheel = stopPropagation;
                return new Promise(function(resolve, reject) {
                    InstanceResolve = resolve;
                    InstanceReject = reject;
                })
            },
            close: function(cmd) {
                this.popupVisible = false;
                cmd instanceof Event ? InstanceReject() : InstanceResolve(cmd);
            }
        }
    });
})