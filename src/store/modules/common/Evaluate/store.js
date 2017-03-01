define(function() {
    return {
        state: {
            source: [{
                    id: '0',
                    name: '纪律类',
                    commend: [
                        { id: '0', name: '按时到校', value: 1 },
                        { id: '1', name: '积极发言', value: 2 },
                        { id: '2', name: '完成作业', value: 1 },
                    ],
                    improve: [
                        { id: '0', name: '迟到', value: -1 },
                        { id: '1', name: '早退', value: -2 },
                        { id: '2', name: '未完成作业', value: -1 },
                    ]
                },
                {
                    id: '1',
                    name: '学习类',
                    commend: [
                        { id: '0', name: '按时到校', value: 1 },
                        { id: '1', name: '积极发言', value: 2 },
                        { id: '2', name: '完成作业', value: 1 },
                    ],
                    improve: [
                        { id: '0', name: '迟到', value: -1 },
                        { id: '1', name: '早退', value: -2 },
                        { id: '2', name: '未完成作业', value: -1 },
                    ]
                },
                {
                    id: '2',
                    name: '活动类',
                    commend: [
                        { id: '0', name: '按时到校', value: '1' },
                        { id: '1', name: '积极发言', value: '2' },
                        { id: '2', name: '完成作业', value: '1' },
                    ],
                    improve: [
                        { id: '0', name: '迟到', value: '-1' },
                        { id: '1', name: '早退', value: '-2' },
                        { id: '2', name: '未完成作业', value: '-1' },
                    ]
                }
            ]
        },
        getters: {
            EvaluateSource: function(state) {
                return state.source;
            }
        },
        mutations: {},
        actions: {}
    }
})