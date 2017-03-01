define(function() {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    active: ''
                }
            },
            methods: {
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