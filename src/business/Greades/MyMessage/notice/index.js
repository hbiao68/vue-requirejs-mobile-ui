define(function () {
    return function module(moduleName) {
        return {
            data: function () {
                return {
                    active: 'tab-container1',
                    list: [
                        {
                            title: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
                            name: "李四",
                            date: "2015-7-7",
                            read: '/assets/system/getNews.png'
                        },
                        {
                            title: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
                            name: "李四",
                            date: "2015-7-7",
                            read: "/assets/system/getNews.png"
                        },
                        {
                            title: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
                            name: "李四",
                            date: "2015-7-7",
                            read: "/assets/system/noNews.png"
                        },
                        {
                            title: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
                            name: "李四",
                            date: "2015-7-7",
                            read: "/assets/system/noNews.png"
                        },
                        {
                            title: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
                            name: "李四",
                            date: "2015-7-7",
                            read: "/assets/system/noNews.png"
                        },
                    ],
                    newMessage: {
                        title: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
                        name: "李四",
                        date: "2015-7-7",
                        read: "/assets/system/noNews.png"
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