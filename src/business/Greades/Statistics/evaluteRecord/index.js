define(function() {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    active: 'tab-container1',
                    menuState: false,
                    loading: false,
                    loadingTop: false,
                    list: [{
                            pic: "../../../../assets/system/set_0.png",
                            msg_1: "2019级2班，寝室检查 床铺规范 好",
                            msg_2: "2017-07-06 14:14:15由教师001发送"
                        }, {
                            pic: "../../../../assets/system/set_0.png",
                            msg_1: "2019级2班，寝室检查 床铺规范 好",
                            msg_2: "2017-07-06 14:14:15由教师001发送"
                        },
                        {
                            pic: "../../../../assets/system/set_0.png",
                            msg_1: "2019级2班，寝室检查 床铺规范 好",
                            msg_2: "2017-07-06 14:14:15由教师001发送"
                        }
                    ]
                }
            },
            methods: {
                loadMore: function() {
                    this.loading = true;
                    setTimeout(function() {

                        this.loading = false;
                    }.bind(this), 2500);
                },
                loadTop: function() {
                    setTimeout(function() {
                        for (var i = 0; i < 2; i++) {
                            this.list.push({
                                pic: "../../../../assets/system/set_0.png",
                                msg_1: "2019级2班，寝室检查 床铺规范 好",
                                msg_2: "2017-07-06 14:14:15由教师001发送"
                            })
                        }
                        this.$refs.loadmoretop.onTopLoaded();
                    }.bind(this), 2500);
                },

                loadBottom: function() {
                    setTimeout(function() {

                        this.$refs.loadmorebottom.onBottomLoaded();
                    }.bind(this), 2500);
                },
                menuChange: function() {
                    this.menuState = !this.menuState;
                }

            }
        } //
    }
})