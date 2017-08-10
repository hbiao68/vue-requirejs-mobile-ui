;
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ?
        module.exports = factory() :
        (global.__config__ = factory())
})(this, function() {
    var __config__ = {
        // 规则说明
        /**
         * route : 路由名称
         * name : 模块名称
         * *path: 模块路径
         */
        modules: [{
                route: '/',
                path: 'Login',
                store: true,
                sync: true
            }, {
                route: '/Main',
                path: 'Main'
            }, {
                route: '/Main/Student',
                path: 'Student'
            }, {
                route: '/Main/Student/StudentMul',
                path: 'Student/StudentMul'
            }, {
                route: '/Main/Student/chooseAnnouncementObject',
                path: 'Student/chooseAnnouncementObject'
            }, {
                route: '/Main/Student/announcement',
                path: 'Student/announcement'
            }, {
                route: '/Main/Student/Statistics',
                path: 'Student/Statistics'
            }, {
                route: '/Main/Student/Statistics/Ranking',
                path: 'Student/Statistics/Ranking'
            }, {
                route: '/Main/Student/MyMessage',
                path: 'Student/MyMessage'
            }, {
                route: '/Main/Student/MyMessage/identity',
                path: 'Student/MyMessage/identity'
            }, {
                route: '/Main/Student/MyMessage/Name',
                path: 'Student/MyMessage/Name'
            }, {
                route: '/Main/Student/MyMessage/notice',
                path: 'Student/MyMessage/notice'
            }, {
                route: '/Main/Student/MyMessage/notice/Detail',
                path: 'Student/MyMessage/notice/Detail'
            }, {
                route: '/Main/Bedroom',
                path: 'Bedroom'
            }, {
                route: '/Main/Bedroom/bedroomMul',
                path: 'Bedroom/bedroomMul'
            }, {
                route: '/Main/Bedroom/Statistics',
                path: 'Bedroom/Statistics'
            }, {
                route: '/Main/Bedroom/Statistics/Ranking',
                path: 'Bedroom/Statistics/Ranking'
            }, {
                route: '/Main/Bedroom/MyMessage',
                path: 'Bedroom/MyMessage'
            }, {
                route: '/Main/Bedroom/MyMessage/identity',
                path: 'Bedroom/MyMessage/identity'
            }, {
                route: '/Main/Bedroom/MyMessage/Name',
                path: 'Bedroom/MyMessage/Name'
            }, {
                route: '/Main/Bedroom/MyMessage/notice',
                path: 'Bedroom/MyMessage/notice'
            }, {
                route: '/Main/Bedroom/MyMessage/notice/Detail',
                path: 'Bedroom/MyMessage/notice/Detail'
            }, {
                route: '/Main/Greades',
                path: 'Greades'
            }, {
                route: '/Main/Greades/greadesMul',
                path: 'Greades/greadesMul'
            }, {
                route: '/Main/Greades/school',
                path: 'Greades/school'
            }, {
                route: '/Main/Greades/chooseAnnouncementObject',
                path: 'Greades/chooseAnnouncementObject'
            }, {
                route: '/Main/Greades/announcement',
                path: 'Greades/announcement'
            }, {
                route: '/Main/Greades/class',
                path: 'Greades/class'
            }, {
                route: '/Main/Greades/Statistics',
                path: 'Greades/Statistics'
            }, {
                route: '/Main/Greades/Statistics/Ranking',
                path: 'Greades/Statistics/Ranking'
            }, {
                route: '/Main/Greades/MyMessage',
                path: 'Greades/MyMessage'
            }, {
                route: '/Main/Greades/MyMessage/identity',
                path: 'Greades/MyMessage/identity'
            }, {
                route: '/Main/Greades/MyMessage/Name',
                path: 'Greades/MyMessage/Name'
            }, {
                route: '/Main/Greades/MyMessage/notice',
                path: 'Greades/MyMessage/notice'
            }, {
                route: '/Main/Greades/MyMessage/notice/Detail',
                path: 'Greades/MyMessage/notice/Detail'
            },
            // new
            {
                route: '/Main/Greades/Statistics/Detailed',
                path: 'Greades/Statistics/Detailed'
            },
            {
                route: '/Main/Greades/Statistics/Detailed-2',
                path: 'Greades/Statistics/Detailed-2'
            },
            {
                route: '/Main/Greades/Statistics/evaluteRecord',
                path: 'Greades/Statistics/evaluteRecord'
            }
        ],
        map: function(dispose) {
            return this
                .modules
                .map(dispose)
        },
        each: function(dispose) {
            return this
                .modules
                .forEach(dispose)
        },
        dynamic: function(store) {
            (new Function(store)).apply(window)
        }
    }

    /* 以下为 ES5 补充方法 及公用方法 */
    var firstChart = /^[\w]/
        /** 设置字符串手字母大写 */
    String.prototype.toUpperFirstCase = function() {
        return this.replace(firstChart, function(m) {
            return m.toLocaleUpperCase()
        })
    }

    if (typeof Object.assign !== 'function') {
        Object.assign = function(target) {
            'use strict'
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object')
            }

            target = Object(target)
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index]
                if (source != null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key]
                        }
                    }
                }
            }
            return target
        }
        Object.defineProperties ?
            Object.defineProperties(Object, {
                assign: {
                    enumerable: false
                }
            }) :
            undefined
    }

    return __config__
})