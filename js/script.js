$(window).on('load', function() {

    $('body').addClass('loaded_hiding');
    $('body').addClass('body_hidden');
    window.setTimeout(function () {
        $('body').addClass('loaded');
        $('body').removeClass('body_hidden');
        $('body').removeClass('loaded_hiding');
        $('.preloader').fadeOut(300)
    }, 3000);
})
