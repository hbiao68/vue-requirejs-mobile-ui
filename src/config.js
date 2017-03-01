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
            { route: '/Main/Student/Statistics', name: 'Main_Student_Statistics', path: 'Student/Statistics' },
            { route: '/Main/Student/Statistics/Ranking', name: 'Main_Student_Statistics_Ranking', path: 'Student/Statistics/Ranking' },

            { route: '/Main/Student/MyMessage', name: 'Main_Student_MyMessage', path: 'Student/MyMessage' },
            { route: '/Main/Student/MyMessage/identity', name: 'Main_Student_MyMessage_identity', path: 'Student/MyMessage/identity' },
            { route: '/Main/Student/MyMessage/Name', name: 'Main_Student_MyMessage_Name', path: 'Student/MyMessage/Name' },
            { route: '/Main/Student/MyMessage/notice', name: 'Main_Student_MyMessage_notice', path: 'Student/MyMessage/notice' },
            { route: '/Main/Student/MyMessage/notice/Detail', name: 'Main_Student_MyMessage_notice_Detail', path: 'Student/MyMessage/notice/Detail' },

            { route: '/Main/Bedroom', name: 'Main_Bedroom', path: 'Bedroom' },
            { route: '/Main/Bedroom/bedroomMul', name: 'Main_Bedroom_bedroomMul', path: 'Bedroom/bedroomMul' },
            { route: '/Main/Bedroom/Statistics', name: 'Main_Bedroom_Statistics', path: 'Bedroom/Statistics' },
            { route: '/Main/Bedroom/Statistics/Ranking', name: 'Main_Bedroom_Statistics_Ranking', path: 'Bedroom/Statistics/Ranking' },

            { route: '/Main/Bedroom/MyMessage', name: 'Main_Bedroom_MyMessage', path: 'Bedroom/MyMessage' },
            { route: '/Main/Bedroom/MyMessage/identity', name: 'Main_Bedroom_MyMessage_identity', path: 'Bedroom/MyMessage/identity' },
            { route: '/Main/Bedroom/MyMessage/Name', name: 'Main_Bedroom_MyMessage_Name', path: 'Bedroom/MyMessage/Name' },
            { route: '/Main/Bedroom/MyMessage/notice', name: 'Main_Bedroom_MyMessage_notice', path: 'Bedroom/MyMessage/notice' },
            { route: '/Main/Bedroom/MyMessage/notice/Detail', name: 'Main_Bedroom_MyMessage_notice_Detail', path: 'Bedroom/MyMessage/notice/Detail' },



            { route: '/Main/Greades', name: 'Main_Greades', path: 'Greades' },
            { route: '/Main/Greades/greadesMul', name: 'Main_Greades_greadesMul', path: 'Greades/greadesMul' },
            { route: '/Main/Greades/school', name: 'Main_Greades_school', path: 'Greades/school' },
            { route: '/Main/Greades/chooseAnnouncementObject', name: 'Main_Greades_chooseAnnouncementObject', path: 'Greades/chooseAnnouncementObject' },
            { route: '/Main/Greades/announcement', name: 'Main_Greades_announcement', path: 'Greades/announcement' },
            { route: '/Main/Greades/class', name: 'Main_Greades_class', path: 'Greades/class' },
            { route: '/Main/Greades/Statistics', name: 'Main_Greades_Statistics', path: 'Greades/Statistics' },
            { route: '/Main/Greades/Statistics/Ranking', name: 'Main_Greades_Statistics_Ranking', path: 'Greades/Statistics/Ranking' },

            { route: '/Main/Greades/MyMessage', name: 'Main_Greades_MyMessage', path: 'Greades/MyMessage' },
            { route: '/Main/Greades/MyMessage/identity', name: 'Main_Greades_MyMessage_identity', path: 'Greades/MyMessage/identity' },
            { route: '/Main/Greades/MyMessage/Name', name: 'Main_Greades_MyMessage_Name', path: 'Greades/MyMessage/Name' },
            { route: '/Main/Greades/MyMessage/notice', name: 'Main_Greades_MyMessage_notice', path: 'Greades/MyMessage/notice' },
            { route: '/Main/Greades/MyMessage/notice/Detail', name: 'Main_Greades_MyMessage_notice_Detail', path: 'Greades/MyMessage/notice/Detail' },



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