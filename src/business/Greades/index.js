define(function() {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    sheet1: {
                        sheetVisible: false
                    },
                    btnName: [{
                        name: '班级评价',
                        method: function() {
                            this.$router.push('/Main/Greades/class');
                        }
                    }, {
                        name: '学生评价',
                        method: function() {
                            this.$router.push('/Main/Student');
                        }
                    }, {
                        name: '寝室评价',
                        method: function() {
                            this.$router.push('/Main/Bedroom');
                        }
                    }]
                }
            },
            methods: {
                itemclick: function(a) { console.log(a); },
                action1: function() { this.sheet1.sheetVisible = true; }
            }
        }
    }
})