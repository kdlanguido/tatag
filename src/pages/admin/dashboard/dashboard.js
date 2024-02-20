con_sy = 'src/database/controllers/schoolyear_controller.php';
con_enrollment = 'src/database/controllers/enrollment_controller.php';

$(document).ready(function () {
    d_get_current_sy()
    d_get_enrollment_information()
})

function d_get_current_sy() {
    payload = {
        request_type: "get_current_schoolyear",
        payload_data: {},
    };

    _GET(con_sy, payload, (cb) => {
        setCookie('cur_sy', cb[0].school_year_start + ' - ' + cb[0].school_year_end)
        $("#d_txt_enrollment_sy").empty().append(`Active School Year :  <span style="font-weight:500">` + cb[0].school_year_start + ' - ' + cb[0].school_year_end)
    })
}

function d_get_enrollment_information() {
    payload = {
        request_type: "get_enrollment_information",
        payload_data: {},
    };

    _GET(con_enrollment, payload, (cb, status) => {
        if (status == 200) {
            $('#btn_start_enrollment').hide();
            $('#btn_stop_enrollment').show();
            $('#d_txt_enrollment_status').empty().append(`Enrollment Status :   <span class="text-success" style="font-weight:500;">Active</span>`)
        } else {
            $('#btn_start_enrollment').show();
            $('#btn_stop_enrollment').hide();
            $('#d_txt_enrollment_status').empty().append(`Enrollment Status :   <span class="text-danger" style="font-weight:500;">Inactive</span>`)

        }
    })
}

$('#btn_start_enrollment').unbind('click').click(function () {

    $('#md_se').modal('show')

    // get current sy
    payload = {
        request_type: "get_current_schoolyear",
        payload_data: {},
    };

    _GET(con_sy, payload, (cb, status) => {
        if (status == 200) {
            $('#txt_md_se_sy').val(cb[0].school_year_start + ' - ' + cb[0].school_year_end)
            sy_id = cb[0].id


            $('#btn_md_se_confirm_enrollment').unbind('click').click(function () {

                payload = {
                    request_type: "start_enrollment",
                    semester: $('#sel_md_se_sem').val(),
                    school_year: sy_id,
                };

                _POST(con_enrollment, payload, (cb) => {
                    if (cb == 1) {
                        show_toast("Start Enrollment", "Enrollment has been started successfully.")
                        $('#btn_start_enrollment').hide();
                        $('#btn_stop_enrollment').show();
                        $('#d_txt_enrollment_status').html(`Enrollment Status :   <span class="text-success" style="font-weight:500;">Active</span>`)
                    } else {
                        show_toast("Start Enrollment Failed", "Please contact admin", "error")
                    }

                })
            })
        } else {
            show_toast("No active school year", "Enrollment cannot be started without an active school year.", "error")

        }


    })




})

$('#btn_stop_enrollment').click(function () {

    $('#md_ee').modal('show')

    $('#btn_md_ee_confirm_enrollment').unbind('click').click(function () {

        payload = {
            request_type: "stop_enrollment",
        };

        _POST(con_enrollment, payload, (cb) => {
            show_toast("Stop Enrollment", "Enrollment has been stopped successfully.")

            $('#btn_start_enrollment').show();
            $('#btn_stop_enrollment').hide();
            $('#d_txt_enrollment_status').empty().append(`Enrollment Status :   <span class="text-danger" style="font-weight:500;">Inactive</span>`)
        })
    })

})
