define(function () {
    return function module(moduleName) {
        return {
            data: function () {
                return {
                    active: 'tab-container1',
                    list: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur ea sapiente ducimus cupiditate, esse aliquid maxime facilis dolorem itaque? Libero, ex vitae in quisquam, non nostrum quam facere doloribus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur ea sapiente ducimus cupiditate, esse aliquid maxime facilis dolorem itaque? Libero, ex vitae in quisquam, non nostrum quam facere doloribus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur ea sapiente ducimus cupiditate, esse aliquid maxime facilis dolorem itaque? Libero, ex vitae in quisquam, non nostrum quam facere doloribus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur ea sapiente ducimus cupiditate, esse aliquid maxime facilis dolorem itaque? Libero, ex vitae in quisquam, non nostrum quam facere doloribus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur ea sapiente ducimus cupiditate, esse aliquid maxime facilis dolorem itaque? Libero, ex vitae in quisquam, non nostrum quam facere doloribus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur ea sapiente ducimus cupiditate, esse aliquid maxime facilis dolorem itaque? Libero, ex vitae in quisquam, non nostrum quam facere doloribus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur ea sapiente ducimus cupiditate, esse aliquid maxime facilis dolorem itaque? Libero, ex vitae in quisquam, non nostrum quam facere doloribus!
                    `,
                    list2:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur ea sapiente ducimus cupiditate, esse aliquid maxime facilis dolorem itaque? Libero, ex vitae in quisquam, non nostrum quam facere doloribus!`,
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
                        this.list+=this.list2;
                        this.$refs.loadmorebottom.onBottomLoaded();
                    }.bind(this), 2500);
                },

            }
        }//
    }
})