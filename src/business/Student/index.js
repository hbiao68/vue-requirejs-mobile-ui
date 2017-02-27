define(function() {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    sheet1: {
                        sheetVisible: false
                    }
                }
            },
            methods: {
                itemclick: function() { console.log('itemclick'); },
                action1: function() { this.sheet1.sheetVisible = true; },
                showModal: function() {
                    this.$refs.modal.show().then(
                        function(data) { console.log(data); },
                        function() {}
                    );
                }
            }

        }
    }
})