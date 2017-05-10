define([
    '__component__', 'text!./tpl.html'
], function (component, template, Vuex) {
    var InstanceResolve = null;
    var InstanceReject = null;
    var timer;
    return component('cs-animate', {
        template: template,
        data: function () {
            return {
                popupVisible: false,
                playIndex: 0,
                interval: 400,
                plus:[
                    'assets/system/1.png',
                    'assets/system/2.png',
                    'assets/system/3.png'
                ],
                sub:[
                    'assets/system/11.png',
                    'assets/system/22.png',
                    'assets/system/33.png'
                ],
                params: {
                    name: '',
                    content: '',
                    score: 0
                }
            }
        },
        computed:{
            images:function(){
                return this.isPlus ? this.plus : this.sub;
            },
            isPlus:function(){
                return this.params.score >= 0;
            }
        },
        watch:{
            popupVisible:function(newVal,oldVal){
                if(newVal === true){
                    this.start();
                }
            }
        },
        methods: {
            start:function(){
                timer = window.setTimeout(function(){this.animate()}.bind(this),this.interval);
            },
            stop:function(){
                window.clearTimeout(timer);
                timer = null;
                this.close();
            },
            animate:function(){
                if(this.playIndex < this.images.length - 1){
                    this.playIndex += 1;
                    this.start();
                }else this.stop();
            },
            show: function (name,content,score) {
                this.params.name = name || "";
                this.params.content = content || '';
                this.params.score = score || 0;
                this.playIndex = 0;
                this.popupVisible = true;
                return new Promise(function (resolve, reject) {
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