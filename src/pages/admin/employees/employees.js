con_teachers = 'src/database/controllers/teacher_controller.php';
con_staffs = 'src/database/controllers/staffs_controller.php';
con_accounts = 'src/database/controllers/accounts_controller.php';
sys_con_subjects = 'src/database/controllers/subjects_controller.php';

data_collections_array_subjects_to_add = {};
teacher_gender = 'male';
staff_gender = 'male';

$(document).ready(function () {

    $('#tr_info_male').click(function () {
        teacher_gender = 'male'
    })

    $('#tr_info_female').click(function () {
        teacher_gender = 'female'
    })

    $('#sr_info_male').click(function () {
        staff_gender = 'male'
    })

    $('#sr_info_female').click(function () {
        staff_gender = 'female'
    })

    $('#sp_info_male').click(function () {
        staff_gender = 'male'
    })

    $('#sp_info_female').click(function () {
        staff_gender = 'female'
    })

    $('#tr_info_dob').change(function () {
        var dob = new Date($(this).val());
        var today = new Date();
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

        if (age < 14) {
            $('#tr_info_age').val('INPUT VALID BIRTHDATE!')

        } else {
            $('#tr_info_age').val(age)

        }
    });

    $('#tp_info_dob').change(function () {
        var dob = new Date($(this).val());
        var today = new Date();
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

        if (age < 14) {
            $('#tp_info_age').val('INPUT VALID BIRTHDATE!')

        } else {
            $('#tp_info_age').val(age)

        }
    });

    $('#sr_info_dob').change(function () {
        var dob = new Date($(this).val());
        var today = new Date();
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

        if (age < 14) {
            $('#sr_info_age').val('INPUT VALID BIRTHDATE!')

        } else {
            $('#sr_info_age').val(age)

        }
    });

    $('#tp_cp_new_password_confirm').change(function () {

        if ($(this).val() != $('#tp_cp_new_password').val()) {
            $("#tp_micro_cp_prompt").fadeIn(500);
            $('.txt-password').addClass('border-danger');
        } else {
            $("#tp_micro_cp_prompt").fadeOut();
            $('.txt-password').removeClass('border-danger');
        }
    })

    $('#sp_cp_new_password_confirm').change(function () {

        if ($(this).val() != $('#sp_cp_new_password').val()) {
            $("#sp_micro_cp_prompt").fadeIn(500);
            $('.txt-password').addClass('border-danger');
        } else {
            $("#sp_micro_cp_prompt").fadeOut();
            $('.txt-password').removeClass('border-danger');
        }
    })

    $('.pe_m_nav').unbind('click').click(function () {
        $('.pe_m_nav').removeClass('active')
        $(this).addClass('active')
        $('.minipage').hide();
        $('#' + $(this).attr('show_minipage')).fadeIn(850);

        e_load_staffs()

    })

    $('.pe_micro_nav').unbind('click').click(function () {

        $('.pe_micro_nav').removeClass('active')
        $(this).addClass('active')
        $('.micropage').hide();
        $('#' + $(this).attr('show_micropage')).fadeIn(850);


    })

    e_load_teachers();

    $('#btn_add_teacher').click(function () {
        $('.minipage').hide();
        $('#emp_nav').hide();
        $('#mini_page_add_teacher').fadeIn(850)
    })

    $('#btn_add_staff').click(function () {
        $('.minipage').hide();
        $('#emp_nav').hide();
        $('#mini_page_add_staff').fadeIn(800)
    })

    $('#a_btn_register_teacher').click(function () {

        if (e_register_employees_validate_inputs()) {

            payload = {
                request_type: "add_record",
                "firstname": $('#tr_info_fname').val(),
                "lastname": $('#tr_info_lname').val(),
                "middlename": $('#tr_info_mname').val(),
                "birthdate": $('#tr_info_dob').val(),
                "age": $('#tr_info_age').val(),
                "gender": teacher_gender,
                "email": $('#tr_info_email').val(),
                "mobile_no": $('#tr_info_contact_no').val(),
                "add_st": $('#tr_info_street').val(),
                "add_city": $('#tr_info_city').val(),
                "add_state": $('#tr_info_state').val(),
                "zip_code": $('#tr_info_zipcode').val(),
                "e_name": $('#tr_info_e_fname').val(),
                "e_contact": $('#tr_info_e_contact_no').val(),
                "e_relationship": $('#tr_info_e_relationship').val(),
                "photo_dir": '',
                "subjects_teaching": JSON.stringify(data_collections_array_subjects_to_add)
            };

            _POST(con_teachers, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Add Teacher', 'Teacher added successfully.')
                    $('.minipage').hide();
                    $('#mini_page_teachers').fadeIn(850);
                    e_load_teachers();
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        }
    })

    $('#a_btn_register_staff').click(function () {

        if (e_register_employees_validate_inputs_staff()) {

            payload = {
                request_type: "add_record",
                "firstname": $('#sr_info_fname').val(),
                "lastname": $('#sr_info_lname').val(),
                "middlename": $('#sr_info_mname').val(),
                "birthdate": $('#sr_info_dob').val(),
                "age": $('#sr_info_age').val(),
                "gender": staff_gender,
                "email": $('#sr_info_email').val(),
                "mobile_no": $('#sr_info_contact_no').val(),
                "add_st": $('#sr_info_street').val(),
                "add_city": $('#sr_info_city').val(),
                "add_state": $('#sr_info_state').val(),
                "zip_code": $('#sr_info_zipcode').val(),
                "e_name": $('#sr_info_e_fname').val(),
                "e_contact": $('#sr_info_e_contact_no').val(),
                "e_relationship": $('#sr_info_e_relationship').val(),
                "role": $('#sr_info_e_role').val(),
            };

            _POST(con_staffs, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Add Staff', 'Staff added successfully.')
                    $('.minipage').hide();
                    $('#mini_page_staffs').fadeIn(850);
                    $('#emp_nav').show();

                    e_load_staffs();
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        }
    })

    $('#a_btn_close_tp').click(function () {
        $('.minipage').hide();
        $('#mini_page_teachers').fadeIn(850);
        $('#emp_nav').show();
    })

    $('#a_btn_close_sp').click(function () {
        $('.minipage').hide();
        $('#mini_page_staffs').fadeIn(850);
        $('#emp_nav').show();
    })

    $('#a_btn_close_tr').click(function () {
        $('.minipage').hide();
        $('#mini_page_teachers').fadeIn(850);
        $('#emp_nav').show();
    })

    $('#a_btn_close_sr').click(function () {
        $('.minipage').hide();
        $('#mini_page_staffs').fadeIn(850);
        $('#emp_nav').show();
    })

    $('#btn_edit_teacher_profile_change_photo').click(function () {
        $('#employee_md_tp_changephoto').modal('show')
    })

    $('#employee_md_tp_btn_confirm').click(function () {
        var photo = document.getElementById('employee_md_tp_photo')

        payload = {
            request_type: "teacher_change_photo",
            photo: photo.files[0],
            teacher_id: $(this).attr('teacher_id')
        };

        _POST(con_teachers, payload, (cb) => {
            if (cb == 1) {
                show_toast('Change Photo', 'Change photo successful.')
                e_load_teacher_information($(this).attr('teacher_id'))
            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })


    })

    e_load_subjects()

    $('#sp_btn_edit_teacher_profile_change_photo').click(function () {
        $('#sp_employee_md_tp_changephoto').modal('show')
    })

})

function e_register_employees_validate_inputs() {
    sheet_is_valid = true;

    $('#div_tr').find('.form-control-required').removeClass('border-danger')
    $('#div_tr').find('.form-control-file-required').removeClass('border-danger')

    if ($('#lrf_age').val() == 'INPUT VALID BIRTHDATE!') {
        $('#lrf_age').addClass('border-danger')
        return false;
    }

    $('#div_tr').find('.form-control-required').each(function () {
        if (!$(this).val()) {
            $(this).addClass('border-danger')
            sheet_is_valid = false;
        }
    })

    $('#div_tr').find('.form-control-file-required').each(function () {
        if (!$(this).val()) {
            $(this).addClass('border-danger')
            sheet_is_valid = false;
        }
    })

    if (!sheet_is_valid) {
        return false;
    } else {
        return true;
    }

}

function e_register_employees_validate_inputs_staff() {

    sheet_is_valid = true;

    $('#div_sr').find('.form-control-required').removeClass('border-danger')
    $('#div_sr').find('.form-control-file-required').removeClass('border-danger')

    if ($('#lrf_age').val() == 'INPUT VALID BIRTHDATE!') {
        $('#lrf_age').addClass('border-danger')
        return false;
    }

    $('#div_sr').find('.form-control-required').each(function () {
        if (!$(this).val()) {
            $(this).addClass('border-danger')
            sheet_is_valid = false;
        }
    })

    $('#div_sr').find('.form-control-file-required').each(function () {
        if (!$(this).val()) {
            $(this).addClass('border-danger')
            sheet_is_valid = false;
        }
    })

    if (!sheet_is_valid) {
        return false;
    } else {
        return true;
    }

}

function e_load_subjects() {

    payload = {
        request_type: "get_records_all",
        payload_data: {},
    };

    _GET(sys_con_subjects, payload, (cb) => {

        output = ``;

        $.each(cb, (k, v) => {
            output += `<option value="` + v.id + `">` + v.subject + `</option>`;
        })

        $('#md_sel_add_to_teacher').empty().append(output)
        e_add_subject_f()


        e_draw_teachers_subjects()
    })

}

function e_add_subject_f() {
    // $('#btn_add_subject_to_teacher').click(function () {
    //     $('#employee_md_add_subject_to_teacher').modal('show')
    //     alert('test')
    // })
    // $('#employee_md_add_subject_to_teacher_confirm').unbind('click').click(function () {
    //     if (!($('#md_sel_add_to_teacher').val() in data_collections_array_subjects_to_add)) {
    //         data_collections_array_subjects_to_add['e' + $('#md_sel_add_to_teacher').val()] = {
    //             id: $('#md_sel_add_to_teacher').val(),
    //             subject: $("#md_sel_add_to_teacher").find(":selected").text()
    //         }
    //     }

    //     e_draw_teachers_subjects()
    // })
}

function e_draw_teachers_subjects() {

    output = `
        <button class="btn btn_add_subject_to_teacher"  style="font-size:9pt;">
            <i class="fa-solid fa-plus"></i>
        </button>
    `;

    $.each(data_collections_array_subjects_to_add, (k, v) => {
        output += `
        <span class="d-inline-block my-1 px-3 py-1 rounded" style="background:#F5FAFF; color:#0A1881">
            `+ v.subject + `
            <a class="ms-2 py-0 btn_remove_subject_from_teacher" subject_id=`+ k + `>
                <i style="font-size:7.5pt;" class=" fa-solid fa-x"></i>
            </a>
        </span>
    `;
    })

    $('#div_teacher_subjects').empty().append(output)
    $('.btn_add_subject_to_teacher').click(function () {
        $('#employee_md_add_subject_to_teacher').modal('show')
    })
    $('#employee_md_add_subject_to_teacher_confirm').unbind('click').click(function () {
        if (!($('#md_sel_add_to_teacher').val() in data_collections_array_subjects_to_add)) {
            data_collections_array_subjects_to_add['e' + $('#md_sel_add_to_teacher').val()] = {
                id: $('#md_sel_add_to_teacher').val(),
                subject: $("#md_sel_add_to_teacher").find(":selected").text()
            }
        }

        e_draw_teachers_subjects()
    })
}

function e_load_teachers() {

    payload = {
        request_type: "get_records_all",
        payload_data: {},
    };

    _GET(con_teachers, payload, (cb) => {

        output = ``;
        count = 1;

        $.each(cb, (k, v) => {
            output += `
                <tr>
                    <td class="text-center">`+ count + `</td>
                    <td>`+ v.firstname + ' ' + v.lastname + `</td>
                    <td>`+ v.email + `</td>
                    <td>`+ v.mobile_no + `</td>
                    <td class="text-center">`+ v.date_joined + `</td>
                    <td class="text-center">
                        <button class="employee_btn_edit btn p-1" teacher_id="`+ v.id + `">
                        <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button class="employee_btn_archive btn p-1" teacher_id="`+ v.id + `">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;


            count = count + 1;
        })

        $('#tbl_admin_teachers tbody').empty().append(output)

        $('.employee_btn_edit').unbind('click').click(function () {

            $('.minipage').hide();
            $('#mini_page_view_teacher').fadeIn(800);
            $('#emp_nav').hide();
            $('#tp_micro_page_personal').show();

            $('#btn_edit_teacher_profile_save_changes').attr('teacher_id', $(this).attr('teacher_id')).unbind('click').click(function () {

                payload = {
                    request_type: "edit_record",
                    edit_anchor: ['id', $(this).attr('teacher_id')],
                    firstname: $('#tp_info_fname').val(),
                    lastname: $('#tp_info_lname').val(),
                    middlename: $('#tp_info_mname').val(),
                    birthdate: $('#tp_info_dob').val(),
                    age: $('#tp_info_age').val(),
                    gender: teacher_gender,
                    email: $('#tp_info_email').val(),
                    mobile_no: $('#tp_info_contact_no').val(),
                    add_st: $('#tp_info_add_street').val(),
                    add_city: $('#tp_info_add_city').val(),
                    add_state: $('#tp_info_add_state').val(),
                    zip_code: $('#tp_info_add_zipcode').val(),
                    e_name: $('#tp_info_e_fname').val(),
                    e_contact: $('#tp_info_e_contact').val(),
                    e_relationship: $('#tp_info_e_relationship').val(),
                };

                _POST(con_teachers, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Edit Teacher', 'Teacher profile has been updated successfully')
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })

            })

            $('#btn_changepass_profile_save_changes').attr('teacher_id', $(this).attr('teacher_id')).unbind('click').click(function () {

                $('#employee_md_tp_changepassword').modal('show');

                $('#employee_md_tp_changepassword_btn_confirm').attr('teacher_id', $(this).attr('teacher_id')).unbind('click').click(function () {

                    payload = {
                        request_type: "teacher_change_password",
                        id: 'T_' + $(this).attr('teacher_id'),
                        password: $('#tp_cp_new_password').val()
                    };

                    _POST(con_teachers, payload, (cb) => {
                        if (cb == 1) {
                            show_toast('Teacher Change Password', 'Change password successful')
                        } else {
                            show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                        }
                    })

                })

            })

            e_load_teacher_information($(this).attr('teacher_id'))
        })

        $('.employee_btn_archive').unbind('click').click(function () {

            $('#employee_md_teacher_confirm_archive').modal('show')
            $('#employee_btn_teacher_confirm_archive').attr('teacher_id', $(this).attr('teacher_id'))

            $('#employee_btn_teacher_confirm_archive').unbind('click').click(function () {
                payload = {
                    request_type: "archive_record",
                    id: $(this).attr('teacher_id')
                };

                _POST(con_teachers, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Archive Teacher', 'Teacher has been archived successfully.')
                        e_load_teachers()
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')

                    }
                })
            })
        })

    })

}

function e_load_teacher_information(teacher_id) {

    payload = {
        request_type: "get_teacher_information",
        payload_data: {
            teacher_id: teacher_id
        },
    };

    $('#employee_md_tp_btn_confirm').attr('teacher_id', teacher_id)

    _GET(con_teachers, payload, (cb) => {

        $.each(cb.teacher_information, (k, v) => {

            if (v.gender == 'male') {
                $('#tp_info_male').prop('checked', true)
            } else {
                $('#tp_info_female').prop('checked', true)
            }

            $('#tp_header_name').text(v.lastname + ', ' + v.firstname)
            $('#tp_header_email').text(v.email)
            $('#tp_info_lname').val(v.lastname)
            $('#tp_info_fname').val(v.firstname)
            $('#tp_info_mname').val(v.middlename)
            $('#tp_info_dob').val(v.birthdate)
            $('#tp_info_age').val(v.age)
            $('#tp_info_email').val(v.email)
            $('#tp_info_contact_no').val(v.mobile_no)
            $('#tp_info_add_street').val(v.add_st)
            $('#tp_info_add_city').val(v.add_city)
            $('#tp_info_add_state').val(v.add_state)
            $('#tp_info_add_zipcode').val(v.zip_code)
            $('#tp_info_e_fname').val(v.e_name)
            $('#tp_info_e_contact').val(v.e_contact)
            $('#tp_info_e_relationship').val(v.e_relationship)

            if (v.photo_dir) {
                $('#tp_photo').attr('src', v.photo_dir)
            }
        })


        output = `
            <button class="btn btn_add_subject_to_teacher" id="" style="font-size:9pt;">
                <i class="fa-solid fa-plus"></i>
            </button>
        `;

        $.each(cb.subjects, (k, v) => {
            output += `
                <span class="d-inline-block my-1 px-3 py-1 rounded" style="background:#F5FAFF; color:#0A1881">
                    
                    <span style="font-size:9pt;"> `+ v.subject + ` </span>
                    <a class="ms-2 py-0 btn_remove_subject_from_teacher" subject_id=`+ v.subject_id + `>
                        <i style="font-size:7.5pt;" class=" fa-solid fa-x"></i>
                    </a>
                </span>
            `;
          
        })

        $('#div_info_teacher_subjects').empty().append(output)
        $('.btn_add_subject_to_teacher').unbind('click').click(function () {
            $('#employee_md_add_subject_to_teacher').modal('show')
        })
        $('#employee_md_add_subject_to_teacher_confirm').unbind('click').click(function () {
            if (!($('#md_sel_add_to_teacher').val() in data_collections_array_subjects_to_add)) {
                data_collections_array_subjects_to_add['e' + $('#md_sel_add_to_teacher').val()] = {
                    id: $('#md_sel_add_to_teacher').val(),
                    subject: $("#md_sel_add_to_teacher").find(":selected").text()
                }
            }
    
            e_draw_teachers_subjects()
        })

        $('#tp_info_male').unbind('click').click(function () {
            teacher_gender = 'male'
        })

        $('#tp_info_female').unbind('click').click(function () {
            teacher_gender = 'female'
        })

    })
}

function e_load_staffs() {

    payload = {
        request_type: "get_records_all",
        payload_data: {},
    };

    _GET(con_staffs, payload, (cb) => {

        output = ``;
        count = 1;

        $.each(cb, (k, v) => {
            output += `
                <tr>
                    <td class="text-center">`+ count + `</td>
                    <td>`+ v.firstname + ' ' + v.lastname + `</td>
                    <td>`+ v.email + `</td>
                    <td class="text-center">`+ v.mobile_no + `</td>
                    <td class="text-center">`+ v.role + `</td>
                    <td class="text-center">`+ v.date_joined + `</td>
                    <td class="text-center">
                        <button class="staff_btn_edit btn p-1" staff_id="`+ v.id + `">
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button class="staff_btn_archive btn p-1" staff_id="`+ v.id + `">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;

            count = count + 1;
        })

        $('#tbl_admin_staffs tbody').empty().append(output)

        $('.staff_btn_archive').unbind('click').click(function () {
            $('#e_md_staff_archive').modal('show')
            $('#e_md_staff_archive_btn_confirm').attr('staff_id', $(this).attr('staff_id')).unbind('click').click(function () {

                payload = {
                    request_type: "archive_record",
                    id: $(this).attr('staff_id')
                };

                _POST(con_staffs, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Archive Success', 'Record has been archived successfully.')
                        e_load_staffs()
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })
        })

        $('.staff_btn_edit').unbind('click').click(function () {
            $('.minipage').hide();
            $('#mini_page_view_staff').fadeIn(850)
            $('#emp_nav').hide();
            e_load_staff_information($(this).attr('staff_id'))

        })


    })

}

function e_load_staff_information(staff_id) {

    payload = {
        request_type: 'get_staff_information',
        payload_data: {
            staff_id: staff_id
        }
    };

    _GET(con_staffs, payload, (cb) => {

        $('#sp_employee_md_tp_btn_confirm').attr('staff_id', staff_id).unbind('click').click(function () {

            var photo = document.getElementById('sp_employee_md_tp_photo')

            payload = {
                request_type: "staff_change_photo",
                photo: photo.files[0],
                staff_id: $(this).attr('staff_id')
            };

            _POST(con_staffs, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Change Photo', 'Change photo successful.')
                    e_load_staff_information($(this).attr('staff_id'))
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        })


        $('#sp_btn_changepass_profile_save_changes').attr('staff_id', staff_id).unbind('click').click(function () {

            $('#employee_md_tp_changepassword').modal('show');

            $('#employee_md_tp_changepassword_btn_confirm').attr('staff_id', $(this).attr('staff_id')).unbind('click').click(function () {

                payload = {
                    request_type: "change_password",
                    id: 'ST_' + $(this).attr('staff_id'),
                    password: $('#sp_cp_new_password').val()
                };

                _POST(con_accounts, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Change Password', 'Change password successful')
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })

            })

        })

        $('#btn_edit_staff_profile_save_changes').attr('staff_id', staff_id).unbind('click').click(function () {

            payload = {
                request_type: "edit_record",
                edit_anchor: ['id', $(this).attr('staff_id')],
                firstname: $('#sp_info_fname').val(),
                lastname: $('#sp_info_lname').val(),
                middlename: $('#sp_info_mname').val(),
                birthdate: $('#sp_info_dob').val(),
                age: $('#sp_info_age').val(),
                gender: staff_gender,
                email: $('#sp_info_email').val(),
                mobile_no: $('#sp_info_contact_no').val(),
                add_st: $('#sp_info_add_street').val(),
                add_city: $('#sp_info_add_city').val(),
                add_state: $('#sp_info_add_state').val(),
                zip_code: $('#sp_info_add_zipcode').val(),
                e_name: $('#sp_info_e_fname').val(),
                e_contact: $('#sp_info_e_contact').val(),
                e_relationship: $('#sp_info_e_relationship').val(),
            };

            _POST(con_staffs, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Edit Staff', 'Staff profile has been updated successfully')
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        })



        $.each(cb, (k, v) => {

            $('#sp_header_name').text(v.firstname + ' ' + v.middlename + ' ' + v.lastname)
            $('#sp_header_email').text(v.email)
            $('#sp_info_lname').val(v.lastname)
            $('#sp_info_fname').val(v.firstname)
            $('#sp_info_mname').val(v.middlename)
            $('#sp_info_dob').val(v.birthdate)
            $('#sp_info_age').val(v.age)
            $('#sp_info_email').val(v.email)
            $('#sp_info_contact_no').val(v.mobile_no)
            $('#sp_info_add_street').val(v.add_st)
            $('#sp_info_add_city').val(v.add_city)
            $('#sp_info_add_state').val(v.add_state)
            $('#sp_info_add_zipcode').val(v.zip_code)
            $('#sp_info_e_fname').val(v.e_name)
            $('#sp_info_e_contact').val(v.e_contact)
            $('#sp_info_e_relationship').val(v.e_relationship)
            $('#sp_info_e_role').val(v.role)

            staff_gender = v.gender

            if (v.gender == 'male') {
                $('#sp_info_male').prop('checked', true)

            } else {
                $('#sp_info_female').prop('checked', true)
            }

            if (v.photo_dir) {
                $('#sp_photo').attr('src', v.photo_dir)
            }

        })
    })
}