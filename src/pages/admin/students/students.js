
con_sy = 'src/database/controllers/schoolyear_controller.php';
con_enrollment = 'src/database/controllers/enrollment_controller.php';
con_student = 'src/database/controllers/student_controller.php';
con_strand = 'src/database/controllers/strands_controller.php';

// DATA COLLECTION STUDENT INFORMATION
data_collection_student_information = {};
data_collections_enrolled_students = {};

lrn = '';

$(document).ready(function () {
    s_get_enrolled_students();
    s_get_students()

    $('#btn_close_student_profile').unbind('click').click(function () {
        $('.minipage').hide()
        $('#mini_page_students_home').fadeIn(800);
    })

    // BUTTONS
    $('#btn_edit_student_profile_save_changes').unbind('click').click(function () {
        payload = {
            request_type: "edit_record",
            edit_anchor: ['lrn', lrn],
            birthdate: $('#student_info_dob').val(),
            lastname: $('#student_info_lname').val(),
            firstname: $('#student_info_fname').val(),
            middlename: $('#student_info_mname').val(),
            age: $('#student_info_age').val(),
            gender: student_gender,
            email: $('#student_info_email').val(),
            mobile_no: $('#student_info_contact_no').val(),
            add_st: $('#student_info_add_street').val(),
            add_city: $('#student_info_add_city').val(),
            add_state: $('#student_info_add_state').val(),
            add_zipcode: $('#student_info_add_zipcode').val(),
            guardian_name: $('#student_info_e_fname').val(),
            guardian_no: $('#student_info_e_contact').val(),
        };

        _POST(con_student, payload, (cb) => {
            if (cb == 1) {
                show_toast('Update Profile', 'Student profile updated successfully')
                s_get_students()
                setTimeout(() => {
                    students_view_profile()
                }, 100);
            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })
    })

    $('#btn_edit_student_profile_change_photo').unbind('click').click(function () {

        $('#md_confirm_student_change_photo').modal('show')
        $('#md_confirm_student_change_photo_btn_confirm').attr('lrn', lrn).unbind('click').click(function () {

            payload = {
                request_type: "change_photo",
                photo: $('#md_student_change_photo').prop('files')[0],
                application_no: data_collection_student_information[lrn].application_no
            };

            _POST(con_student, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Change Photo', 'Change photo successful')
                    students_view_profile()
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })
        })
    })

    $('#student_btn_changepass_save_changes').unbind('click').click(function () {

        payload = {
            request_type: "change_password",
            password: $('#student_cp_new_password_confirm').val(),
            profile_id: $(this).attr('lrn')
        };

        _POST(con_student, payload, (cb) => {
            if (cb == 1) {
                show_toast('Change Password', 'Change password successful')

            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })

    })

    $('#student_info_dob').change(function () {
        var dob = new Date($(this).val());
        var today = new Date();
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

        if (age < 14) {
            $('#student_info_age').val('INPUT VALID BIRTHDATE!')

        } else {
            $('#student_info_age').val(age)

        }
    });

    $('#sp_micro_page_change_password').click(function () {
        $('#micropage').hide();
        $('#sp_micro_page_change_password').show();
    })
})


function s_load_strands(cbf = null) {

    payload = {
        request_type: "get_records_all",
        payload_data: {},
    };

    _GET(con_strand, payload, (cb) => {
        cbf(cb)
    })

}

function s_get_students() {

    $('.minipage').hide();
    $('#mini_page_students_home').show()

    payload = {
        request_type: "get_admitted_students_list",
        payload_data: {},
    };

    _GET(con_student, payload, (cb) => {

        output = ``;

        $.each(cb, (k, v) => {

            output += `
                <tr>
                    <td class="text-center">`+ v.lrn + `</td>
                    <td>`+ v.firstname + ' ' + v.lastname + `</td>
                    <td class="text-center">`+ v.grade_level + `</td>
                    <td class="text-center">`+ check_if_enrolled(v.lrn) + `</td>
                    <td class="text-center">`+ v.gender + `</td>
                    <td class="text-center">
                        <button class="students_edit btn p-1" lrn="`+ v.lrn + `">
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button class="students_archive btn p-1" lrn="`+ v.lrn + `">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;

            data_collection_student_information[v.lrn] = v
        })

        $('#tbl_admin_students tbody').empty().append(output)

        $('.students_edit').unbind('click').click(function () {

            lrn = $(this).attr('lrn');

            $('#btn_edit_student_profile_save_changes').attr('lrn', lrn)
            $('#student_btn_changepass_save_changes').attr('lrn', lrn)

            students_view_profile()
        })

    })
}

function check_if_enrolled(lrn) {
    if (lrn in data_collections_enrolled_students) {
        return data_collections_enrolled_students[lrn][1]
    } else {
        return '<span class="p-1" style="display:block; width:200px; background:#FFF8EB;color:#EEA23E;border-radius:5px">Not Enrolled</span>'
    }
}

function s_get_enrolled_students() {

    payload = {
        request_type: "get_enrolled_students",
        payload_data: {},
    };

    _GET(con_student, payload, (cb) => {
        $.each(cb, (k, v) => {
            data_collections_enrolled_students[v.lrn] = [v.section_id, v.name]
        })
    })

}

function students_view_profile() {

    student_gender = '';

    $('.minipage').hide()
    $('#mini_page_view_student').fadeIn(800);

    payload = {
        request_type: "get_application_attachments",
        payload_data: {
            'lrn': lrn
        },
    };

    _GET(con_student, payload, (cb) => {
        $.each(cb, (k, v) => {
            if (v.document_name == '2x2 photo') {
                $('#student_photo').attr('src', v.document_dir)
            }
        })
    })

    student_strand = '';

    s_load_strands((strands) => {
        $.each(strands, (k, v) => {
            if (v.id == data_collection_student_information[lrn].strand_code) {

                student_strand = v.strand
            }
        })
    })

    // HEADER
    $('#student_header_name').text(data_collection_student_information[lrn].lastname + ', ' + data_collection_student_information[lrn].firstname + ' ' + singlify_word(data_collection_student_information[lrn].middlename))
    $('#student_header_email').text(data_collection_student_information[lrn].email)
    $('#student_header_lrn').text(data_collection_student_information[lrn].lrn)
    $('#student_header_grade_level').text(data_collection_student_information[lrn].grade_level)
    $('#student_header_section').html(check_if_enrolled(lrn))
    $('#student_header_strand').text(student_strand)
    $('#student_header_semester').text(data_collection_student_information[lrn].semester)
    $('#student_header_sex').text(data_collection_student_information[lrn].gender)

    student_gender = data_collection_student_information[lrn].gender;

    // INFO
    $('#student_info_lname').val(data_collection_student_information[lrn].lastname);
    $('#student_info_fname').val(data_collection_student_information[lrn].firstname);
    $('#student_info_mname').val(data_collection_student_information[lrn].middlename);
    $('#student_info_dob').val(data_collection_student_information[lrn].birthdate);
    $('#student_info_age').val(data_collection_student_information[lrn].age);
    $('#student_info_email').val(data_collection_student_information[lrn].email);
    $('#student_info_contact_no').val(data_collection_student_information[lrn].mobile_no);
    $('#student_info_add_street').val(data_collection_student_information[lrn].add_st);
    $('#student_info_add_city').val(data_collection_student_information[lrn].add_city);
    $('#student_info_add_state').val(data_collection_student_information[lrn].add_state);
    $('#student_info_add_zipcode').val(data_collection_student_information[lrn].add_zipcode);
    $('#student_info_e_fname').val(data_collection_student_information[lrn].guardian_name);
    $('#student_info_e_contact').val(data_collection_student_information[lrn].guardian_no);

    $('#student_info_male').unbind('click').click(function () {
        student_gender = 'male'
    })

    $('#student_info_female').unbind('click').click(function () {
        student_gender = 'female'
    })

    if (data_collection_student_information[lrn].gender == 'male') {
        $('#student_info_male').prop('checked', true)
    } else {
        $('#student_info_female').prop('checked', true)
    }
}