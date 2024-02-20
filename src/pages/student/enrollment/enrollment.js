con_enrollment = `src/database/controllers/enrollment_controller.php`;
con_student = `src/database/controllers/student_controller.php`;


$(document).ready(function () {

    se_load_enrollments(getCookie('profile_id'))

    global_load_strands((strands) => {
        output = '';
        $.each(strands, (k, v) => {
            output += `<option value ="` + v.id + `">` + v.strand + `</option>`;
        })
        $('#md_new_enrollment_strand').html(output)
    })

    // global_load_enrollment_information((enrollment_info) => {
    //     if (enrollment_info) {
    //         payload = {
    //             request_type: "add_enrollment",
    //             lrn: getCookie('profile_id'),
    //             enrollment_id: enrollment_info[0].enrollment_id,
    //         };

    //         _POST(con_enrollment, payload, (cb) => {
    //             if (cb == 1) {
    //                 show_toast('Enrollment successful', 'Registration has been successfully submitted!')
    //             } else {
    //                 show_toast('Enrollment failed', 'Please contact administrator', 'error')
    //             }
    //         })
    //     } else {
    //         show_toast('Enrollment not open', 'Please wait for enrollment to open', 'warning')
    //     }
    // })

    $('#md_new_enrollment_btn_confirm').click(function () {
        global_load_enrollment_information((enrollment_info) => {
            if (enrollment_info) {
                payload = {
                    request_type: "add_enrollment",
                    lrn: getCookie('profile_id'),
                    enrollment_id: enrollment_info[0].enrollment_id,
                };

                _POST(con_enrollment, payload, (cb) => {
                    if (cb == 1) {
                        se_load_enrollments(getCookie('profile_id'))
                        show_toast('Enrollment successful', 'Registration has been successfully submitted!')
                    } else {
                        show_toast('Enrollment failed', 'Please contact administrator', 'error')
                    }
                })
            } else {
                show_toast('Enrollment not open', 'Please wait for enrollment to open', 'warning')
            }
        })


    })
})

function enrollment_get_student_information(lrn) {

    payload = {
        request_type: "get_student_information_by_lrn",
        payload_data: {
            lrn: lrn
        },
    }; 0

    _GET(con_student, payload, (cb) => {


        console.log(cb)
        $.each(cb, (k, v) => {
            $('#md_new_enrollment_grade_level').val(v.grade_level)
            $('#md_new_enrollment_strand').val(v.strand_code)
            $('#md_new_enrollment_semester').val(v.semester)
        })
    })
}

function se_load_enrollments(lrn) {

    payload = {
        request_type: "get_student_enrollment_information",
        payload_data: {
            lrn: lrn
        },
    };

    _GET(con_enrollment, payload, (cb) => {

        output = '';
        count = 1;

        $.each(cb, (k, v) => {
            output += `
            <tr>
                <td class="text-center">`+ count + `</td>
                <td>`+ v.lrn + `</td>
                <td class="text-center">`+ v.grade_level + `</td>
                <td class="text-center">`+ se_write_output(v.enrollment_status) + `</td>
                <td></td>
            </tr>
            `;
        })

        $('#tbl_se_enrollments tbody').html(output)
    })

}

function se_write_output(output) {
    if (output == 'pending') {
        return `<span class="py-1 p-2" style="border-radius:5px;background:#FFF8EB;color:#EEA23E">Pending</span>`;
    }
    if (output == 'approved') {
        return `<span class="py-1 p-2" style="border-radius:5px;background:#F0FAF0;color:#2D8A39">Enrolled</span>`;
    }
    if (output == 'rejected') {
        return `<span class="py-1 p-2" style="border-radius:5px;background:#FFF2F0;color:#E64C37">Rejected</span>`;
    }
    if (output == 'enrolled') {
        return `<span class="py-1 p-2" style="border-radius:5px;background:#F0FAF0;color:#2D8A39">Enrolled</span>`;
    }
}

$('#btn_new_enrollment').click(function () {

    $('#md_new_enrollment').modal('show')
    enrollment_get_student_information(getCookie('profile_id'))
    // console.log(data_collections_student_information)
    // $('#md_new_enrollment_strand').val(data_collections_student_information['information'].strand_code)
})


