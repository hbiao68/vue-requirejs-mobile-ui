define(function() {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    page: 0,
                    sheet1: {
                        sheetVisible: false
                    },
                    btnName: [{
                            name: '班级评价',
                            method: function() {
                                this.$router.push('/Main/Greades');
                            }
                        },
                        {
                            name: '学生评价',
                            method: function() {
                                this.$router.push('/Main/Student');
                            }
                        },
                        {
                            name: '寝室评价',
                            method: function() {
                                this.$router.push('/Main/Bedroom');
                            }
                        }
                    ],
                    StatisticsList: [{
                            time: '2017-08-05',
                            status: '优',
                            typeB: 'type1',
                        },
                        {
                            time: '2017-08-05',
                            status: '良',
                            typeB: 'type2',
                        },
                        {
                            time: '2017-08-05',
                            status: '中',
                            typeB: 'type3',
                        },
                        {
                            time: '2017-08-05',
                            status: '差',
                            typeB: 'type4',
                        },
                    ],
                    evaluateList: [{
                            iconImg: '/assets/system/assessment-icon1.png',
                            title: '晨会',
                            open: false,
                            detailslist: [{
                                    listText: '1、排队队列整不整起',
                                    numberA: '10',
                                    numberB: '20',
                                    numberC: '30',
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    numberA: '40',
                                    numberB: '50',
                                    numberC: '60',
                                }
                            ],
                        },
                        {
                            iconImg: '/assets/system/assessment-icon2.png',
                            title: '早操',
                            open: false,
                            detailslist: [{
                                    listText: '1、排队队列整不整起',
                                    numberA: '10',
                                    numberB: '20',
                                    numberC: '30',
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    numberA: '40',
                                    numberB: '50',
                                    numberC: '60',
                                }
                            ],
                        },
                        {
                            iconImg: '/assets/system/assessment-icon3.png',
                            title: '早自习',
                            open: false,
                            detailslist: [{
                                    listText: '1、排队队列整不整起',
                                    numberA: '10',
                                    numberB: '20',
                                    numberC: '30',
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    numberA: '40',
                                    numberB: '50',
                                    numberC: '60',
                                }
                            ],
                        },
                        {
                            iconImg: '/assets/system/assessment-icon4.png',
                            title: '课间操',
                            open: false,
                            detailslist: [{
                                    listText: '1、排队队列整不整起',
                                    numberA: '10',
                                    numberB: '20',
                                    numberC: '30',
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    numberA: '40',
                                    numberB: '50',
                                    numberC: '60',
                                }
                            ],
                        },
                        {
                            iconImg: '/assets/system/assessment-icon5.png',
                            title: '课间操',
                            open: false,
                            detailslist: [{
                                    listText: '1、排队队列整不整起',
                                    numberA: '10',
                                    numberB: '20',
                                    numberC: '30',
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    numberA: '40',
                                    numberB: '50',
                                    numberC: '60',
                                }
                            ],
                        },
                    ],
                }
            },
            methods: {
                itemclick: function(a) { console.log(a); },
                action1: function() { this.sheet1.sheetVisible = true; },
                changePage: function(index) {
                    this.page = index;
                }

            }
        }
    }
})