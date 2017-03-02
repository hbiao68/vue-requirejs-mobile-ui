;
(function() {
    var storeModules = [
        'vue',
        'vuex',
        './transition',
        'store/modules/common/Evaluate/store',
        'store/modules/common/EvaluateClass/store'
    ].concat(__config__.map(function(o) {
        var module = o.route.replace(/\//g, '_');
        var func = ";define('store/modules/base/" + module + "',['__store__factory__','store/modules/" + o.path + "/store'],function(factory,storeModule){ var mb = factory('" + module + "'); var m = new storeModule('" + module + "'); var c = $.extend(true,{},mb, m);  return c; });";
        __config__.dynamic(func);
        return 'store/modules/base/' + module;
    }));

    define(storeModules, function(Vue, Vuex, transition, Evaluate, EvaluateClass) {
        Vue.use(Vuex);
        var m = [].slice.call(arguments, 5);
        var modules = {
            Evaluate: Evaluate,
            EvaluateClass: EvaluateClass,
        };
        __config__.each(function(o, i) {
            modules[o.route.replace(/\//g, '_')] = m[i];
        });
        return new Vuex.Store({
            state: {},
            mutations: {},
            actions: {
                transition: transition
            },
            modules: modules
        })
    })
})();