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
                    sheet1: {
                        sheetVisible: false
                    },
                    sheet2: {
                        sheetVisible: false
                    },
                    sheet3: {
                        sheetVisible: false
                    },
                    list: [{
                            date: "2017-08-05",
                            evalute: "优",
                            css: "great"
                        }, {
                            date: "2017-08-05",
                            evalute: "良",
                            css: "good"
                        },
                        {
                            date: "2017-08-05",
                            evalute: "中",
                            css: "passable"
                        },
                        {
                            date: "2017-08-05",
                            evalute: "差",
                            css: "bad"
                        }
                    ],
                    list_2: [{
                            class: "晨会",
                            great: 12,
                            good: 12,
                            passable: 12,
                            bad: 13,
                            icon: "../../../../assets/system/dataSta-icon1.png"
                        },
                        {
                            class: "早操",
                            great: 12,
                            good: 12,
                            passable: 12,
                            bad: 13,
                            icon: "../../../../assets/system/dataSta-icon2.png"
                        },
                        {
                            class: "早自习",
                            great: 12,
                            good: 12,
                            passable: 12,
                            bad: 13,
                            icon: "../../../../assets/system/dataSta-icon3.png"
                        },
                        {
                            class: "课间操",
                            great: 12,
                            good: 12,
                            passable: 12,
                            bad: 13,
                            icon: "../../../../assets/system/dataSta-icon4.png"
                        },
                        {
                            class: "课间操",
                            great: 12,
                            good: 12,
                            passable: 12,
                            bad: 13,
                            icon: "../../../../assets/system/dataSta-icon5.png"
                        }
                    ]
                }
            },
            methods: {
                show: function(msg) {
                    console.log(msg)
                    if (msg == 1) {
                        this.page_1 = true;
                        this.page_2 = false;
                    } else if (msg == 2) {
                        this.page_1 = false;
                        this.page_2 = true;
                    }
                },
                itemclick: function() { console.log('itemclick'); },
                action1: function() { this.sheet1.sheetVisible = true; },
                action02: function() { this.sheet2.sheetVisible = true; },
                action03: function() { this.sheet3.sheetVisible = true; },
                loadMore: function() {
                    this.loading = true;
                    setTimeout(function() {

                        this.loading = false;
                    }.bind(this), 2500);
                },
                loadTop: function() {
                    setTimeout(function() {
                        // page_1
                        if (this.page_1 == true) {
                            for (var i = 0; i < 2; i++) {
                                this.list.push({
                                    date: "2017-08-05",
                                    evalute: "差",
                                    css: "bad"
                                })
                            }
                        }

                        // page_2
                        if (this.page_2 == true) {
                            for (var i = 0; i < 2; i++) {
                                this.list_2.push({
                                    class: "晨会",
                                    great: 12,
                                    good: 12,
                                    passable: 12,
                                    bad: 13,
                                    icon: "../../../../assets/system/dataSta-icon1.png"
                                })
                            }
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