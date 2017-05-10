define([
    '__component__', 'text!./tpl.html'
], function (component, template, Vuex) {
    var InstanceResolve = null;
    var InstanceReject = null;
    return component('cs-viewer', {
        template: template,
        data: function () {
            return {
                pageIndex: 0,
                images:[],
                popupVisible: false,
                direction: 0
            }
        },
        computed:{
            size:function(){
                return this.images.length;
            },
            animate:function(){
                switch(this.direction){
                    case 1:
                        return 'cs-viewer-side-left';
                    case 2:
                        return 'cs-viewer-side-right';
                    default:
                        return 'fade'
                }
            }
        },
        methods: {
            uri:function(item){
                return {
                    'background-image':'url(' + item + ')'
                }
            },
            scroll:function(isleft){
                this.direction = isleft ? 1 : 2;
                if(isleft){
                    if(this.pageIndex == 0)
                        this.pageIndex = this.size - 1;
                    else this.pageIndex -= 1;
                }else{
                    if(this.pageIndex == this.size - 1)
                        this.pageIndex = 0;
                    else this.pageIndex += 1;
                }
            }, 
            show: function (images) {
                this.images = images;
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