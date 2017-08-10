define(function(){
    
    function disableScroll() {
        $('body > .screen-page > .cs-contenter').addClass('no-scroll')
    }

    function enableScroll() {
        $('body > .screen-page > .cs-contenter').removeClass('no-scroll')
    }

    return {
        disableScroll: disableScroll,
        enableScroll: enableScroll
    }
})

