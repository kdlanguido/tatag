
$('.sidebar_btn').click(function () {
    $('.page').hide();
    $('.minipage').hide()
    $('#' + $(this).attr('goto')).fadeIn(800)
    $('#' + $(this).attr('default_page')).fadeIn(800)
    $('.sidebar_btn').removeClass('sidebar-selected')
    $(this).addClass('sidebar-selected')
})


$('.btn_logout').click(function () {

    payload = {
        "request_type": "logout",
        "payload_data": {

        }
    }

    deleteCookie('sesh_authorized')
    deleteCookie('access_level')
    deleteCookie('uid')
    setCookie('cur_page', 'login')

    setTimeout(() => {
        location.reload();
    }, 100);

    _POST(con_auth, payload, (cb, res, msg) => { })
})

function singlify_word(word) {
    return word.charAt(0).toUpperCase() + '.';
}



$('#component_id').unbind('click').click(function () {
    for (let index = 0; index < 4; index++) {
        payload = randomizer('add_data')
        // FUNCTION

    }
})
function randomizer(request) {
    names = [
        'christian',
        'mayor',
        'harri',
        'mimi',
        'jeff',
        'toni'
    ];
    strand = [
        'IT',
        'CS',
        'BSBM',
        'MARKETING',
        'LAW'
    ];
    randomx = Math.random() * (6 - 0) + 0;
    randomy = Math.random() * (6 - 0) + 0;
    x = {
        'request_type': request,
        'grade_level': names[randomx],
        'strand': strand[randomy]
    }
    return x
}