define(['__component__', 'text!./tpl.html', 'components/Cell/index'], function (component, template, csCell) {
    return component('cs-search', {
        template: template,
        data: function () {
            return {
                visible: true,
                currentValue: this.value
            };
        },

        components: { csCell: csCell },

        watch: {
            currentValue: function (val) {
                this.$emit('input', val);
            },

            value: function (val) {
                this.currentValue = val;
            },

            show: function (nv, ov) {
                if (nv) this.$nextTick(function () {
                    this.currentValue = ''
                    this.autofocus && this.$refs.input.focus();
                })
            }
        },

        computed: {
            isEmpty: function () {
                return this.currentValue === '' || this.currentValue === undefined
            }
        },
        props: {
            value: String,
            autofocus: Boolean,
            show: Boolean,
            cancelText: {
                default: '取消'
            },
            placeholder: {
                default: '搜索'
            },
            result: Array
        },
        methods: {
            cancel: function () {
                // this.visible = false;
                if (this.canceled) this.canceled();
            }
        }
    })
})