define(function() {
    return {
        state: {
            source: {
                id: '0',
                name: '一级类',
                list: [{
                        id: '0',
                        name: '班级黑板清洁度',
                        items: [
                            { id: '0', name: '按时清洗', value: 2 },
                            { id: '1', name: '地面无粉笔头', value: 1 },
                            { id: '2', name: '黑板无痕迹', value: 1 },
                            { id: '3', name: '黑板损坏', value: -1 },
                            { id: '4', name: '粉笔满地', value: -2 }
                        ]
                    },
                    {
                        id: '1',
                        name: '桌面清洁度',
                        items: [
                            { id: '0', name: '无书籍摆放', value: 2 },
                            { id: '1', name: '桌面无损坏', value: 1 },
                            { id: '2', name: '桌面无涂写', value: 1 }
                        ]
                    },
                    {
                        id: '1',
                        name: '桌面清洁度',
                        items: [
                            { id: '0', name: '无书籍摆放', value: 2 },
                            { id: '1', name: '桌面无损坏', value: 1 },
                            { id: '2', name: '桌面无涂写', value: 1 }
                        ]
                    },
                    {
                        id: '1',
                        name: '桌面清洁度',
                        items: [
                            { id: '0', name: '无书籍摆放', value: 2 },
                            { id: '1', name: '桌面无损坏', value: 1 },
                            { id: '2', name: '桌面无涂写', value: 1 }
                        ]
                    },
                    {
                        id: '1',
                        name: '桌面清洁度',
                        items: [
                            { id: '0', name: '无书籍摆放', value: 2 },
                            { id: '1', name: '桌面无损坏', value: 1 },
                            { id: '2', name: '桌面无涂写', value: 1 }
                        ]
                    },
                    {
                        id: '1',
                        name: '桌面清洁度',
                        items: [
                            { id: '0', name: '无书籍摆放', value: 2 },
                            { id: '1', name: '桌面无损坏', value: 1 },
                            { id: '2', name: '桌面无涂写', value: 1 }
                        ]
                    },
                    {
                        id: '1',
                        name: '桌面清洁度',
                        items: [
                            { id: '0', name: '无书籍摆放', value: 2 },
                            { id: '1', name: '桌面无损坏', value: 1 },
                            { id: '2', name: '桌面无涂写', value: 1 }
                        ]
                    }
                ]
            }
        },
        getters: {
            EvaluateClassSource: function(state) {
                return state.source;
            }
        },
        mutations: {},
        actions: {}
    }
})