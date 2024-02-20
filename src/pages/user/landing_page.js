$(document).ready(function () {
    $('.header-link').click(function () {
        $('.header-link').removeClass('active')
        $(this).addClass('active')
        
        $('.page').hide()
        $('#' + $(this).attr('goto')).fadeToggle();
    })
})

