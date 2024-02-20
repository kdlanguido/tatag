
con_sy = 'src/database/controllers/schoolyear_controller.php';
con_enrollment = 'src/database/controllers/enrollment_controller.php';
con_student = 'src/database/controllers/student_controller.php';

$(document).ready(function () {

    a_get_applications()

    $('.a_approve_requirement').click(function (e) {
        e.preventDefault();

        console.log($(this).prop('checked'))

        if (!$(this).prop('checked')) {

            $('#btn_confirm_disapprove_requirement').attr('attachment_id', $(this).attr('attachment_id')).attr('document_name', $(this).attr('id'))
            $('#a_md_confirm_disapprove_requirement').modal('show')

            $('#btn_confirm_disapprove_requirement').unbind('click').click(function () {

                document_name = $(this).attr('document_name')

                payload = {
                    request_type: "disapprove_requirement",
                    id: $(this).attr('attachment_id')

                };

                _POST(con_student, payload, (cb) => {
                    if (cb == 1) {
                        $('#' + document_name).prop('checked', false)
                    }
                })
            })
        } else {
            $('#btn_confirm_approve_requirement').attr('attachment_id', $(this).attr('attachment_id')).attr('document_name', $(this).attr('id'))
            $('#a_md_confirm_approve_requirement').modal('show')

            $('#btn_confirm_approve_requirement').unbind('click').click(function () {

                document_name = $(this).attr('document_name')

                payload = {
                    request_type: "approve_requirement",
                    id: $(this).attr('attachment_id')

                };

                _POST(con_student, payload, (cb) => {
                    if (cb == 1) {
                        $('#' + document_name).prop('checked', true)
                    }
                })
            })
        }


    })

    $('#a_btn_back_to_home').click(function () {
        $('.minipage').hide();
        $('#mini_page_admission_home').show()
    })


})

function a_draw_status(status) {
    if (status == 'pending') {
        return `
            <span class="p-1 mx-auto" style="display:block;width:100px !important; background:#FFF8EB;color:#EEA23E;border-radius:5px">Pending</span>
        `
    }
    else if (status == 'cancelled') {
        return `
            <span class="p-1 mx-auto" style="display:block;width:100px !important;  background:#FFF2F0; color:#E2341D;border-radius:5px">Cancelled</span>
        `
    }
    else if (status == 'admitted') {
        return `
            <span class="p-1 mx-auto" style="display:block;width:100px !important;  background:#F0FAF0; color:#2D8A39;border-radius:5px">Admitted</span>
        `
    }
}

function a_get_applications() {

    $('.minipage').hide();
    $('#mini_page_admission_home').show()

    payload = {
        request_type: "get_applications",
        payload_data: {},
    };

    _GET(con_student, payload, (cb) => {

        output = ``;
        badge = ``;

        $.each(cb, (k, v) => {

            if (v.status == 'pending') {
                badge = `
                    <button class="btn p-1 a_edit" lrn="`+ v.lrn + `"><i class="fa-solid fa-eye"></i></button>
                    <button class="btn p-1 a_cancel" lrn="`+ v.lrn + `"><i class="fa-regular fa-trash-can"></i></button>
                `;
            } else if (v.status == 'cancelled') {
                badge = `
                    <button class="btn p-1 a_edit" lrn="`+ v.lrn + `"><i class="fa-solid fa-eye"></i></button>
                `;
            } else if (v.status == 'admitted') {
                badge = `
                    <button class="btn p-1 a_edit" lrn="`+ v.lrn + `"><i class="fa-solid fa-eye"></i></button>
                `;
            }

            output += ` 
            
            <tr >
            
                <td class="text-center ">`+ v.lrn + `</td>
                <td class="">`+ v.name + `</td>
                <td class="text-center ">`+ v.grade_level + `</td>
                <td class="text-center ">`+ a_draw_status(v.status) + `</td>
                <td class="text-start ">
                   `+ badge + `
                </td>
            
            </tr>
            
            `;

        })

        $('#tbl_admin_admissions tbody').empty().append(output)

        $('.a_cancel').unbind('click').click(function () {

            lrn = $(this).attr('lrn');

            $('#a_md_confirm_cancel').modal('show')

            $('#btn_cancel_application_confirm').unbind('click').click(function () {
                payload = {
                    request_type: "cancel_applications",
                    lrn: lrn
                };

                _POST(con_student, payload, (cb) => {
                    show_toast("Application Cancelled", "Studen application has been cancelled successfully.")
                    a_get_applications();
                })
            })
        })

        $('.a_edit').unbind('click').click(function () {
            $('#mini_page_admission_home').hide();
            $('#mini_page_admission_view_application').fadeToggle()
            a_load_application($(this).attr('lrn'))
        })


    })

}

function a_load_application(lrn) {

    payload = {
        request_type: "get_application_information",
        payload_data: {
            lrn: lrn
        },
    };

    _GET(con_student, payload, (cb) => {

        $('#a_si_lrn').val(lrn)

        output = ``;

        $.each(cb.application_information, (k, v) => {
            $('#a_si_sy').val(v.school_year_display)
            $('#a_si_gl').val(v.grade_level)
            $('#a_si_strand').val(v.strand)
            $('#a_si_semester').val(v.semester)

            if (v.application_status == 'admitted' || v.application_status == 'cancelled') {
                $('#a_btn_admit_student').hide()
                $('#a_div_requirement_checklist').hide()
            } else {
                $('#a_btn_admit_student').show()
                $('#a_div_requirement_checklist').show()
            }
        })

        $.each(cb.student_information, (k, v) => {
            $('#a_si_dob').val(v.birthdate)
            $('#a_si_ln').val(v.lastname)
            $('#a_si_age').val(v.age)
            $('#a_si_fn').val(v.firstname)
            $('#a_si_email').val(v.email)
            $('#a_si_contact_no').val(v.mobile_no)
            $('#a_si_street').val(v.add_st)
            $('#a_si_city').val(v.add_city)
            $('#a_si_state').val(v.add_state)
            $('#a_si_zipcode').val(v.add_zipcode)
            $('#a_si_g_fullname').val(v.guardian_name)
            $('#a_si_g_contact_no').val(v.guardian_no)

            if (v.gender == 'male') {
                $('#a_si_male').prop('checked', true)
            } else {
                $('#a_si_female').prop('checked', true)
            }

           
        })

        $.each(cb.attachments, (k, v) => {

            output += `
                <li>
                    <a class="btn rounded" download="SA-`+ lrn + `_` + v.document_name + `" href="` + v.document_dir + `">
                        `+ v.document_name + `
                    </a>
                </li>
            `;

            if (v.document_name == 'SF9') {
                $('#a_approve_sf9').attr('attachment_id', v.id)
                if (v.status == 'approved') {
                    $('#a_approve_sf9').prop('checked', true)
                }
            } else if (v.document_name == 'SF10') {
                $('#a_approve_sf10').attr('attachment_id', v.id)
                if (v.status == 'approved') {
                    $('#a_approve_sf10').prop('checked', true)
                }
            } else if (v.document_name == 'NSO') {
                $('#a_approve_nso').attr('attachment_id', v.id)
                if (v.status == 'approved') {
                    $('#a_approve_nso').prop('checked', true)
                }
            } else if (v.document_name == 'Certificate of Good Moral Character') {
                $('#a_approve_gmc').attr('attachment_id', v.id)
                if (v.status == 'approved') {
                    $('#a_approve_gmc').prop('checked', true)
                }
            } else if (v.document_name == '2x2 photo') {
                $('#a_approve_photo').attr('attachment_id', v.id)
                if (v.status == 'approved') {
                    $('#a_approve_photo').prop('checked', true)
                }
            }
        })

        $('#a_list_attachments').html(output)

        $('#a_btn_admit_student').click(function () {
            $('#a_md_confirm_admit_student').modal('show')
            $('#btn_confirm_admit_student').unbind('click').click(function () {

                payload = {
                    request_type: "admit_student",
                    lrn: lrn
                };

                _POST(con_student, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Admit Student', 'Student has been admitted successfully')
                        console.log('EMAIL SENDER : admission confirmation email sent!')
                    } else {
                        show_toast('POST ERROR', 'NO ROWS AFFECTED', 'error')
                    }

                })

            })

        })
    })

}