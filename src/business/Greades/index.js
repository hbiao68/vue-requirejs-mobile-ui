define(function() {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    search: '',
                    searchState: false,
                    active: ''
                }
            },
            mounted: function() {
                var that = this;
                //这里要对取消操作设置效果
                this.$refs.search.canceled = function() {
                    that.searchState = false;
                }
            }
        }
    }
})