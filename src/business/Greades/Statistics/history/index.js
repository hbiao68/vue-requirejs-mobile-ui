define(function() {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    active: 'tab-container1',
                    menuState: false,
                    loading: false,
                    page_1: true,
                    page_2: false,
                    loadingTop: false,
                    loadingTop2: false,
                    sheet1: {
                        sheetVisible: false
                    },
                    list: [{
                            class: "2015级2班",
                            css: "great",
                            icon: "../../../../assets/system/lcz-icon.png",
                            count1: 30,
                            count2: 31,
                            count3: 33,
                            count4: 34,
                        },
                        {
                            class: "2015级2班",
                            css: "great",
                            icon: "../../../../assets/system/lcz-icon.png",
                            count1: 30,
                            count2: 31,
                            count3: 33,
                            count4: 34,
                        },
                        {
                            class: "2015级2班",
                            css: "great",
                            icon: "../../../../assets/system/lcz-icon.png",
                            count1: 30,
                            count2: 31,
                            count3: 33,
                            count4: 34,
                        }
                    ],
                    list2:[
                        {
                            class: "2015级2班",
                            icon: "../../../../assets/system/lcz-icon.png",
                            cj:85
                        }
                    ]
                }
            },
            methods: {
                itemclick: function() { console.log('itemclick'); },
                action1: function() { this.sheet1.sheetVisible = true; },
                loadMore: function() {
                    this.loading = true;
                    setTimeout(function() {

                        this.loading = false;
                    }.bind(this), 2500);
                },
                go:function(){
                     location.href="#/Main/Greades/Statistics/Detailed"
                },
                search:function(){
                     location.href="#/Main/Greades/Statistics/Select-date"
                }
                ,
                loadTop: function() {
                    setTimeout(function() {
                        for (var i = 0; i < 2; i++) {
                            this.list.push({
                                class: "2015级2班",
                                css: "great",
                                icon: "../../../../assets/system/lcz-icon.png",
                                count1: 30,
                                count2: 31,
                                count3: 33,
                                count4: 35,
                            })
                        }
                        this.$refs.loadmoretop.onTopLoaded();
                    }.bind(this), 2500);
                },
                 loadTop2: function() {
                    setTimeout(function() {
                        for (var i = 0; i < 2; i++) {
                            this.list2.push({
                                class: "2015级2班",
                                css: "great",
                                icon: "../../../../assets/system/lcz-icon.png",
                                cj:84
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

            },

        } //
    }
})