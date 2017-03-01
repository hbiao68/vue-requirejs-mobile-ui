define(function () {
    return function module(moduleName) {
        return {
            data: function () {
                return {
                    active: 'tab-container1',
                    list: [
                        {
                            point: "-1",
                            reason: "-1分  因为上课走神",
                            action: "昨天14:20陈老师发给刘二狗"
                        },
                        {
                            point: "+1",
                            reason: "+1分  因为上课走神",
                            action: "昨天14:20陈老师发给刘二狗"
                        }

                    ],
                    newMessage: {
                        point: "+1",
                        reason: "+1分  因为上课走神",
                        action: "昨天14:20陈老师发给刘二狗"
                    },
                    loading: false,
                    loadingBottom: false,
                }
            },
            methods: {
                loadMore: function () {
                    this.loading = true;
                    setTimeout(function () {
                        var last = this.list[this.list.length - 1];
                        for (var i = 1; i <= 2; i++) {
                            this.list.push(last + i);
                        }
                        this.loading = false;
                    }.bind(this), 2500);
                },
                loadTop: function () {
                    setTimeout(function () {
                        var last = this.list[this.list.length - 1];
                        for (var i = 1; i <= 2; i++) {
                            this.list.push(last + i);
                        }
                        this.$refs.loadmoretop.onTopLoaded();
                    }.bind(this), 2500);
                },

                loadBottom: function () {
                    setTimeout(function () {
                        this.list.push(this.newMessage);
                        this.$refs.loadmorebottom.onBottomLoaded();
                    }.bind(this), 2500);
                },
                menuChange:function(){
                    var dis=$(".menu").css("display");
                    if(dis=="block"){
                        $(".menu").css("display","none");
                    }else{
                        $(".menu").css("display","block");
                    }
                }

            }
        }//
    }
})