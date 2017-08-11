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
                            date: "2015级2班",
                            evalute: "优",
                            icon: "../../../../assets/system/lcz-icon.png",
                            css: "great"
                        },
                        {
                            date: "2015级2班",
                            evalute: "优",
                            icon: "../../../../assets/system/lcz-icon.png",
                            css: "great"
                        },
                        {
                            date: "2015级2班",
                            evalute: "优",
                            icon: "../../../../assets/system/lcz-icon.png",
                            css: "great"
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
                go:function(){
                     location.href="#/Main/Greades/Statistics/Today-assessment"
                },
                loadTop: function() {
                    setTimeout(function() {
                        for (var i = 0; i < 2; i++) {
                            this.list.push({
                                date: "2015级2班",
                                evalute: "优",
                                icon: "../../../../assets/system/lcz-icon.png",
                                css: "great"
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