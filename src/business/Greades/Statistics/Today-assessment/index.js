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
                    evaluateList: [{
                            iconImg: '/assets/system/assessment-icon1.png',
                            title: '晨会',
                            typeB: 'type1',
                            status: '优',
                            open: false,
                            list: [{
                                    listText: '1、排队队列整不整起',
                                    listType: '整齐'
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    listType: '整齐'
                                }
                            ],
                            showImgList: [{
                                    showImg: '/assets/system/situation_03.png',
                                },
                                {
                                    showImg: '/assets/system/icon-student01.png',
                                },
                            ]
                        },
                        {
                            iconImg: '/assets/system/assessment-icon2.png',
                            title: '早操',
                            typeB: 'type4',
                            status: '未评价',
                            open: false,
                            list: [{
                                    listText: '1、排队队列整不整起',
                                    listType: '整齐'
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    listType: '整齐'
                                }
                            ],
                            showImgList: [{
                                    showImg: '/assets/system/situation_03.png',
                                },
                                {
                                    showImg: '/assets/system/icon-student01.png',
                                },
                            ]
                        },
                        {
                            iconImg: '/assets/system/assessment-icon3.png',
                            title: '早自习',
                            typeB: 'type2',
                            status: '差',
                            open: false,
                            list: [{
                                    listText: '1、排队队列整不整起',
                                    listType: '整齐'
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    listType: '整齐'
                                }
                            ],
                            showImgList: [{
                                    showImg: '/assets/system/situation_03.png',
                                },
                                {
                                    showImg: '/assets/system/icon-student01.png',
                                },
                            ]
                        },
                        {
                            iconImg: '/assets/system/assessment-icon4.png',
                            title: '课间操',
                            typeB: 'type3',
                            status: '中',
                            open: false,
                            list: [{
                                    listText: '1、排队队列整不整起',
                                    listType: '整齐'
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    listType: '整齐'
                                }
                            ],
                            showImgList: [{
                                    showImg: '/assets/system/situation_03.png',
                                },
                                {
                                    showImg: '/assets/system/icon-student01.png',
                                },
                            ]
                        },
                        {
                            iconImg: '/assets/system/assessment-icon5.png',
                            title: '课间操',
                            typeB: 'type4',
                            status: '未评价',
                            open: false,
                            list: [{
                                    listText: '1、排队队列整不整起',
                                    listType: '整齐'
                                },
                                {
                                    listText: '2、排队队列整不整起',
                                    listType: '整齐'
                                }
                            ],
                            showImgList: [{
                                    showImg: '/assets/system/situation_03.png',
                                },
                                {
                                    showImg: '/assets/system/icon-student01.png',
                                },
                            ]
                        },
                    ],

                }
            },
            methods: {
                itemclick: function(a) { console.log(a); },
                action1: function() { this.sheet1.sheetVisible = true; },

            }
        }
    }
})