define(function () {
    return function module(moduleName) {
        return {
            data: function () {
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
                    sheet4: {
                        sheetVisible: false
                    },
                    list: [{
                        class: "2015级2班",
                        evalute: "优",
                        css: "great",
                        icon: "../../../../assets/system/lcz-icon.png"
                    },
                    {
                        class: "2015级2班",
                        evalute: "良",
                        css: "good",
                        icon: "../../../../assets/system/lcz-icon.png"
                    },
                    {
                        class: "2015级2班",
                        evalute: "中",
                        css: "passable",
                        icon: "../../../../assets/system/lcz-icon.png"
                    },
                    {
                        class: "2015级2班",
                        evalute: "差",
                        css: "bad",
                        icon: "../../../../assets/system/lcz-icon.png"
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
                show: function (msg) {
                    console.log(msg)
                    if (msg == 1) {
                        this.page_1 = true;
                        this.page_2 = false;
                    } else if (msg == 2) {
                        this.page_1 = false;
                        this.page_2 = true;
                    }
                },
                go: function () {
                    location.href="#/Main/Greades/Statistics/Today-assessment"
                },
                go_2:function(){
                    location.href="#/Main/Greades/Statistics/Detailed-3"
                },
                search:function(){
                  location.href="#/Main/Greades/Statistics/Select-date"  
                },
                itemclick: function () { console.log('itemclick'); },
                action1: function () { this.sheet1.sheetVisible = true; },
                action02: function () { this.sheet2.sheetVisible = true; },
                action03: function () { this.sheet3.sheetVisible = true; },
                action04: function () { this.sheet4.sheetVisible = true; },
                loadMore: function () {
                    this.loading = true;
                    setTimeout(function () {

                        this.loading = false;
                    }.bind(this), 2500);
                },
                loadTop: function () {
                    setTimeout(function () {
                        // page_1
                        if (this.page_1 == true) {
                            for (var i = 0; i < 2; i++) {
                                this.list.push({
                                    class: "2015级2班",
                                    evalute: "优",
                                    css: "great",
                                    icon: "../../../../assets/system/lcz-icon.png"
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

                loadBottom: function () {
                    setTimeout(function () {

                        this.$refs.loadmorebottom.onBottomLoaded();
                    }.bind(this), 2500);
                },
                menuChange: function () {
                    this.menuState = !this.menuState;
                }

            },

        } //
    }
})