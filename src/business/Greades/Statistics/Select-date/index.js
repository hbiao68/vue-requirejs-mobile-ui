define(function() {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    pickerValue1: '2017-08-08',
                    pickerValue2: '2017-05-18',
                }
            },
            computed: {
                fmDate1() {
                    var a = new Date(this.pickerValue1)
                    return a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate()
                },
                fmDate2() {
                    var a = new Date(this.pickerValue2)
                    return a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate()
                }
            },
            methods: {
                picker1: function() { this.$refs.picker1.open(); },
                picker2: function() { this.$refs.picker2.open(); },
            }
        }
    }
})