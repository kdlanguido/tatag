
con_student = `src/database/controllers/student_controller.php`;
con_strand = `src/database/controllers/strands_controller.php`;
con_enrollment = `src/database/controllers/enrollment_controller.php`;


var data_collections_student_information = {};
var data_collections_strands = {};

$(document).ready(function () {
    // load_student_information()
    // load_grade_level_strands('12')
})

$('.sidebar_btn').click(function () {
    $('.page').hide();
    $('.minipage').hide()
    $('#' + $(this).attr('goto')).fadeIn(800)
    $('#' + $(this).attr('default_page')).fadeIn(800)
    $('.sidebar_btn').removeClass('sidebar-selected')
    $(this).addClass('sidebar-selected')

    if ($(this).attr('fnc') == 'sys_load_school_year') {
        sys_load_school_year()
    }

})

$('#component_id').unbind('click').click(function () {
    for (let index = 0; index < 4; index++) {
        payload = randomizer('add_data')
        // FUNCTION
    }
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

function load_student_information() {
    payload = {
        request_type: "get_application_information",
        payload_data: {
            lrn: getCookie('profile_id')
        },
    };
    _GET(con_student, payload, (cb) => {

        console.log(cb)
        // data_collections_student_information['information'] = cb.information[0]
        // data_collections_student_information['attachments'] = cb.attachments[0]
    })
}


function global_load_strands(cbf = null) {

    payload = {
        request_type: "get_records_all",
        payload_data: {},
    };

    _GET(con_strand, payload, (cb) => {
        cbf(cb)
    })

}

function global_load_enrollment_information(cbf = null) {

    payload = {
        request_type: "get_enrollment_information",
        payload_data: {},
    };

    _GET(con_enrollment, payload, (cb) => {
        console.log(cb)
        cbf(cb)
    })

}
