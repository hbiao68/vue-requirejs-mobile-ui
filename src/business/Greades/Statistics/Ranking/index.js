define(function () {
    return function module(moduleName) {
        return {
            data: function () {
                return {
                    active: 'tab-container1',
                    list: [
                        {
                            name: "李二狗",
                            all: 1,
                            add: 1,
                            reduce: 1,
                            img:"/assets/system/portrait1.png"
                        },
                        {
                            name: "李二狗",
                            all: 1,
                            add: 1,
                            reduce: 1,
                            img:"/assets/system/portrait2.png"
                        },
                        {
                            name: "李二狗",
                            all: 0,
                            add: 0,
                            reduce: 0,
                            img:"/assets/system/portrait3.png"
                        },
                        {
                            name: "李二狗",
                            all: 0,
                            add: 0,
                            reduce: 0,
                            img:"/assets/system/portrait4.png"
                        }


                    ],
                    newMessage: {
                        name: "李二狗",
                        all: 0,
                        add: 0,
                        reduce: 0,
                        img:"/assets/system/portrait5.png"
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

            }
        }//
    }
})