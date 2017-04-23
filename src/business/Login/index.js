define(['vue', 'vuex'], function(Vue, Vuex) {
    return function module(moduleName) {
        return {
            data: function() {
                return {
                    username: '',
                    password: ''
                }
            },
            methods: Object.assign(
                Vuex.mapActions([
                    'verify'
                ]), {
                    sign: function() {
                        this.$root.$refs.animate.show('张青龙','积极回答问题',2).then(function(){
                            alert(1);
                        });
                        return;
                        var that = this;
                        this.verify({ username: this.username, password: this.password }).then(function() {
                            that.$router.push('/Main');
                        }, function(mes) {
                            Vue.$toast({
                                message: mes || '帐号或者密码错误',
                                iconClass: 'fa fa-close'
                            });
                        });
                    }
                })
        }
    }
})