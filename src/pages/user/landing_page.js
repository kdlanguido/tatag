$(document).ready(function () {

    if (typeof getCookie('current_page') === "undefined") {
        $('.page').hide();
        $('#page_home').show()
        setCookie('current_page', 'page_home')
    } else {
        $('.header-link').removeClass('active')
        $('.page').hide();
        $('#' + getCookie('current_page')).show()
        $('.header-link[goto=' + getCookie('current_page') + ']').addClass('active')
    }

    $('.header-link').click(function () {
        $('.header-link').removeClass('active')
        $(this).addClass('active')
        $('.page').hide()
        $('#' + $(this).attr('goto')).fadeToggle();

        setCookie('current_page', $(this).attr('goto'))
        if (typeof getCookie('mainFunction') !== "undefined") {
            $(this).attr('mainFunction')();
        }
    })
})

