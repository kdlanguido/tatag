$('.ecommerce_navlink').click(function () {
    $('.ecommerce_navlink').css('color', '#b6b5b5')
    $(this).css('color', '#fff')
})

$('.btn_login').click(function () {
    $('.page').hide();
    $('#page_login').fadeToggle();
    setCookie('cur_page','login')
})

