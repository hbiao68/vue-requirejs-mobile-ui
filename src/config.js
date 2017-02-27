;
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        (global.__config__ = factory());
})(this, function() {
    var __config__ = {
        //规则说明
        /**
         * route : 路由名称
         * name : 模块名称
         * *path: 模块路径
         */
        modules: [
            { route: '/', name: 'Login', path: 'Login' },
            { route: '/Main', name: 'Main', path: 'Main' },
            { route: '/Main/Student', name: 'Main_Student', path: 'Student' },
            { route: '/Main/Student/StudentMul', name: 'Main_Student_StudentMul', path: 'Student/StudentMul' },
            { route: '/Main/Student/chooseAnnouncementObject', name: 'Main_Student_chooseAnnouncementObject', path: 'Student/chooseAnnouncementObject' },
            { route: '/Main/Student/announcement', name: 'Main_Student_announcement', path: 'Student/announcement' },

            { route: '/Main/Bedroom', name: 'Main_Bedroom', path: 'Bedroom' },
            { route: '/Main/Greades', name: 'Main_Greades', path: 'Greades' }
        ],
        map: function(dispose) {
            return this.modules.map(dispose);
        },
        each: function(dispose) {
            return this.modules.forEach(dispose);
        },
        dynamic: function(store) {
            (new Function(store)).apply(window);
        }
    }

    /*以下为 ES5 补充方法 及公用方法*/
    var firstChart = /^[\w]/;
    /**设置字符串手字母大写 */
    String.prototype.toUpperFirstCase = function() {
        return this.replace(firstChart, function(m) { return m.toLocaleUpperCase() })
    }

    if (typeof Object.assign != 'function') {
        Object.assign = function(target) {
            'use strict';
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            target = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source != null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
            }
            return target;
        };
        Object.defineProperties ?
            Object.defineProperties(Object, {
                assign: {
                    enumerable: false
                }
            }) : undefined
    }

    return __config__;
})