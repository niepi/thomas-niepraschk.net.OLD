(function($) {

    if ((/iPhone|Android/i).test(navigator.userAgent)) {
        addEventListener("load", function() {
            setTimeout(function() {
                window.scrollTo(0, 0);
            }, 0);
        }, false);
    }

    $('.background').cover({
        src: '/images/niepi.jpg',
        position: 'left top'
    });

})(this.jQuery);






















