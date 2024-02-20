con_teacher = `src/database/controllers/teacher_controller.php`;

data_collections_teacher_information = {};

$(document).ready(function () {
    profile_load_information(getCookie('profile_id'))

    $('#sp_change_photo').click(function () {
        $('#md_teacher_change_photo').modal('show')
    })
})

function profile_load_information(id) {

    payload = {
        request_type: "get_application_information",
        payload_data: {
            id: id
        }
    };

    _GET(con_teacher, payload, (cb) => {

        $.each(cb, (k, v) => {

            $('#teacher_photo').attr('src', v.photo_dir)
            $('#sidebar_img').attr('src', v.photo_dir)
            $('#teacher_header_name').text(v.lastname + ', ' + v.firstname + ' ' + v.middlename)
            $('#teacher_header_email').text(v.email)

            $('#sp_lastname').val(v.lastname)
            $('#sp_firstname').val(v.firstname)
            $('#sp_middlename').val(v.middlename)
            $('#sp_birthdate').val(v.birthdate)
            $('#sp_age').val(v.age)


            if (v.gender == 'male') {
                $('#sp_male').prop('checked', true)
            } else {
                $('#sp_female').prop('checked', true)
            }

            $('#sp_email').val(v.email)
            $('#sp_contact_no').val(v.mobile_no)
            $('#sp_add_st').val(v.add_st)
            $('#sp_add_city').val(v.add_city)
            $('#sp_add_state').val(v.add_state)
            $('#sp_add_zipcode').val(v.zip_code)
            $('#sp_guardian_name').val(v.e_name)
            $('#sp_guardian_no').val(v.e_contact)
            $('#tr_info_e_relationship').val(v.e_relationship)
        })

        // output = ``;

        // $('#sp_id').val(id)

        // $.each(cb.application_information, (k, v) => {
        //     $('#sp_school_year').val(v.school_year_display)
        //     $('#sp_grade_level').val(v.grade_level)
        //     $('#sp_strand').val(v.strand)
        //     $('#sp_semester').val(v.semester)

        //     if (v.application_status == 'admitted' || v.application_status == 'cancelled') {
        //         $('#a_btn_admit_teacher').hide()
        //         $('#a_div_requirement_checklist').hide()
        //     } else {
        //         $('#a_btn_admit_teacher').show()
        //         $('#a_div_requirement_checklist').show()
        //     }
        // })

        // $.each(cb.teacher_information, (k, v) => {
        //     $('#sp_birthdate').val(v.birthdate)
        //     $('#sp_lastname').val(v.lastname)
        //     $('#sp_age').val(v.age)
        //     $('#sp_firstname').val(v.firstname)
        //     $('#sp_middlename').val(v.middlename)

        //     $('#sp_email').val(v.email)
        //     $('#sp_contact_no').val(v.mobile_no)
        //     $('#sp_add_st').val(v.add_st)
        //     $('#sp_add_city').val(v.add_city)
        //     $('#sp_add_state').val(v.add_state)
        //     $('#sp_add_zipcode').val(v.add_zipcode)
        //     $('#sp_guardian_name').val(v.guardian_name)
        //     $('#sp_guardian_no').val(v.guardian_no)

        //     if (v.gender == 'male') {
        //         $('#sp_male').prop('checked', true)
        //     } else {
        //         $('#sp_female').prop('checked', true)
        //     }

        //     $('#teacher_header_name').text(v.lastname + ', ' + v.firstname + ' ' + v.middlename)
        //     $('#teacher_header_email').text(v.email)

        // })

        // $.each(cb.attachments, (k, v) => {

        //     output += `
        //         <li>
        //             <a class="btn rounded" download="SA-`+ id + `_` + v.document_name + `" href="` + v.document_dir + `">
        //                 `+ v.document_name + `
        //             </a>
        //         </li>
        //     `;

        //     if (v.document_name == 'SF9') {
        //         $('#sp_rc_sf9').attr('attachment_id', v.id)
        //         if (v.status == 'approved') {
        //             $('#sp_rc_sf9').prop('checked', true)
        //         }
        //     } else if (v.document_name == 'SF10') {
        //         $('#sp_rc_sf10').attr('attachment_id', v.id)
        //         if (v.status == 'approved') {
        //             $('#sp_rc_sf10').prop('checked', true)
        //         }
        //     } else if (v.document_name == 'NSO') {
        //         $('#sp_rc_nso').attr('attachment_id', v.id)
        //         if (v.status == 'approved') {
        //             $('#sp_rc_nso').prop('checked', true)
        //         }
        //     } else if (v.document_name == 'Certificate of Good Moral Character') {
        //         $('#sp_rc_gmc').attr('attachment_id', v.id)
        //         if (v.status == 'approved') {
        //             $('#sp_rc_gmc').prop('checked', true)
        //         }
        //     } else if (v.document_name == '2x2 photo') {
        //         $('#sp_rc_photo').attr('attachment_id', v.id)
        //         $('#teacher_photo').attr('src', v.document_dir)

        //         if (v.status == 'approved') {
        //             $('#sp_rc_photo').prop('checked', true)
        //         }
        //     }
        // })

        // $('#ad_rc_attachments').html(output)

        // // SAVE CHANGES
        // $('#sp_btn_profile_save_changes').unbind('click').click(function () {

        //     payload = {
        //         request_type: "edit_record",
        //         edit_anchor: ['id', id],
        //         birthdate: $('#sp_birthdate').val(),
        //         lastname: $('#sp_lastname').val(),
        //         firstname: $('#sp_firstname').val(),
        //         middlename: $('#sp_middlename').val(),
        //         age: $('#sp_age').val(),
        //         gender: $('input[name=sp_gender_radio_btn]:checked').val(),
        //         email: $('#sp_email').val(),
        //         mobile_no: $('#sp_contact_no').val(),
        //         add_st: $('#sp_add_st').val(),
        //         add_city: $('#sp_add_city').val(),
        //         add_state: $('#sp_add_state').val(),
        //         add_zipcode: $('#sp_add_zipcode').val(),
        //         guardian_name: $('#sp_guardian_name').val(),
        //         guardian_no: $('#sp_guardian_no').val(),
        //     };

        //     _POST(con_teacher, payload, (cb) => {
        //         if (cb == 1) {
        //             show_toast('Update Profile', 'teacher profile updated successfully')
        //             setTimeout(() => {
        //                 profile_load_information(uncleaned_teacher_id)
        //             }, 100);
        //         } else {
        //             show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
        //         }
        //     })
        // })

        // // CHANGE PHOTO FUNCTION
        // $('#md_confirm_teacher_change_photo').attr('teacher_id', id).unbind('click').click(function () {

        //     payload = {
        //         request_type: "change_photo",
        //         photo: $('#file_teacher_change_photo').prop('files')[0],
        //         application_no: teacher_id
        //     };

        //     _POST(con_teacher, payload, (cb) => {
        //         if (cb == 1) {
        //             show_toast('Change Photo', 'Change photo successful')
        //             profile_load_information(uncleaned_teacher_id)
        //         } else {
        //             show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
        //         }
        //     })
        // })

    })

    // CHANGE PHOTO FUNCTION
    $('#md_confirm_teacher_change_photo').unbind('click').click(function () {

        payload = {
            request_type: "teacher_change_photo",
            photo: $('#file_teacher_change_photo').prop('files')[0],
            teacher_id: id
        };

        _POST(con_teacher, payload, (cb, status) => {
            if (cb == 1) {
                show_toast('Change Photo', 'Change photo successful')
                profile_load_information(id)
            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })
    })

    // CHANGE PASSWORD
    $('#md_confirm_teacher_change_password').unbind('click').click(function () {

        if ($('#sp_cp_new_password_confirm').val() == $('#sp_cp_new_password').val()) {
            payload = {
                request_type: "teacher_change_password",
                id: id,
                password: $('#sp_cp_new_password_confirm').val()
            };

            _POST(con_teacher, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Change Password', 'Change password successful')
                    $('#sp_cp_new_password_confirm').val('')
                    $('#sp_cp_new_password').val('')

                    profile_load_information(id)
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })
        } else {
            show_toast('Change Password Fail', 'Passwords doesn`t match', 'error')

        }

    })

    // // SAVE CHANGES
    // $('#sp_btn_profile_save_changes').attr('teacher_id', teacher_id).unbind('click').click(function () {

    //     payload = {
    //         request_type: "edit_record",
    //         edit_anchor: ['id', dc_si[teacher_id].id],
    //         birthdate: $('#sp_birthdate').val(),
    //         lastname: $('#sp_lastname').val(),
    //         firstname: $('#sp_firstname').val(),
    //         middlename: $('#sp_middlename').val(),
    //         age: $('#sp_age').val(),
    //         gender: teacher_gender,
    //         email: $('#sp_email').val(),
    //         mobile_no: $('#sp_contact_no').val(),
    //         add_st: $('#sp_add_st').val(),
    //         add_city: $('#sp_add_city').val(),
    //         add_state: $('#sp_add_state').val(),
    //         add_zipcode: $('#sp_add_zipcode').val(),
    //         guardian_name: $('#sp_guardian_name').val(),
    //         guardian_no: $('#sp_guardian_no').val(),
    //     };

    //     _POST(con_teacher, payload, (cb) => {
    //         if (cb == 1) {
    //             show_toast('Update Profile', 'teacher profile updated successfully')
    //             setTimeout(() => {
    //                 profile_load_information(uncleaned_teacher_id)
    //             }, 100);
    //         } else {
    //             show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
    //         }
    //     })
    // })

    // payload = {
    //     request_type: "get_application_information",
    //     payload_data: {
    //         id: teacher_id
    //     },
    // };

    // _GET(con_teacher, payload, (cb) => {

    //     console.log(cb)
    //     $.each(cb.teacher_information, (k, v) => {
    //         $('#sp_add_city').val(v.add_city)
    //         $('#sp_add_st').val(v.add_st)
    //         $('#sp_add_state').val(v.add_state)
    //         $('#sp_add_zipcode').val(v.add_zipcode)
    //         $('#sp_age').val(v.age)
    //         $('#sp_birthdate').val(v.birthdate)
    //         $('#sp_email').val(v.email)
    //         $('#sp_firstname').val(v.firstname)
    //         $('#sp_gender').val(v.gender)
    //         $('#sp_guardian_name').val(v.guardian_name)
    //         $('#sp_guardian_no').val(v.guardian_no)
    //         $('#sp_lastname').val(v.lastname)
    //         $('#sp_middlename').val(v.middlename)
    //         $('#sp_contact_no').val(v.mobile_no)
    //         $('#sp_id').val(v.id)
    //         $('#sp_school_year').val(v.school_year)
    //         $('#sp_grade_level').val(v.grade_level)
    //         $('#sp_strand').val(v.strand_code)
    //         $('#sp_semester').val(v.semester)
    //         $('#sp_header_name').text(v.lastname + ', ' + v.firstname)
    //         $('#sp_header_email').text(v.email)

    //         if (v.gender == 'male') {
    //             $('#sp_male').prop('checked', true)
    //         } else {
    //             $('#sp_female').prop('checked', true)
    //         }

    //         data_collections_teacher_information[teacher_id] = {
    //             id: v.id,
    //             birthdate: v.birthdate,
    //             lastname: v.lastname,
    //             firstname: v.firstname,
    //             middlename: v.middlename,
    //             age: v.age,
    //             gender: v.gender,
    //             email: v.email,
    //             mobile_no: v.mobile_no,
    //             add_st: v.add_st,
    //             add_city: v.add_city,
    //             add_state: v.add_state,
    //             add_zipcode: v.add_zipcode,
    //             guardian_name: v.guardian_name,
    //             guardian_no: v.guardian_no
    //         }

    //         teacher_gender = v.gender;
    //     })

    //     output = ``;
    //     attached_output = ``;

    //     $.each(cb.attachments, (k, v) => {
    //         if (v.status == 'approved') {
    //             output += `<div class="form-check me-5 mb-1">
    //                 <input class="form-check-input" document_name="SF9" type="checkbox" checked style="pointer-events:none">
    //                 <label class="form-check-label">
    //                     `+ v.document_name + `
    //                 </label>
    //             </div>`
    //         }
    //         else {
    //             output += `<div class="form-check me-5 mb-1">
    //                 <input class="form-check-input" document_name="SF9" type="checkbox"  style="pointer-events:none">
    //                 <label class="form-check-label">
    //                     `+ v.document_name + `
    //                 </label>
    //             </div>`
    //         }

    //         if (v.document_name == '2x2 photo') {
    //             $('#sp_photo').attr('src', v.document_dir)
    //         }

    //         attached_output += `
    //         <li>
    //             <a class="btn" href="`+ v.document_dir + `" download>
    //                 `+ v.document_name + `
    //             </a>
    //         </li>
    //         `;
    //     })

    //     $('#sp_requirement_list').empty().append(output)
    //     $('#ad_rc_attachments').empty().append(attached_output)
    // })

}











// dc_si = {};

// teacher_gender = ""

// function profile_load_information(teacher_id) {

//     uncleaned_teacher_id = teacher_id
//     teacher_id = teacher_id.split("_")[1]

//     // CHANGE PHOTO FUNCTION
//     $('#md_confirm_teacher_change_photo').attr('teacher_id', teacher_id).unbind('click').click(function () {

//         payload = {
//             request_type: "change_photo",
//             photo: $('#file_teacher_change_photo').prop('files')[0],
//             application_no: teacher_id
//         };

//         _POST(con_teacher, payload, (cb) => {
//             if (cb == 1) {
//                 show_toast('Change Photo', 'Change photo successful')
//                 profile_load_information(uncleaned_teacher_id)
//             } else {
//                 show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
//             }
//         })
//     })




//     // SAVE CHANGES
//     $('#sp_btn_profile_save_changes').attr('teacher_id', teacher_id).unbind('click').click(function () {

//         payload = {
//             request_type: "edit_record",
//             edit_anchor: ['id', dc_si[teacher_id].id],
//             birthdate: $('#sp_birthdate').val(),
//             lastname: $('#sp_lastname').val(),
//             firstname: $('#sp_firstname').val(),
//             middlename: $('#sp_middlename').val(),
//             age: $('#sp_age').val(),
//             gender: teacher_gender,
//             email: $('#sp_email').val(),
//             mobile_no: $('#sp_contact_no').val(),
//             add_st: $('#sp_add_st').val(),
//             add_city: $('#sp_add_city').val(),
//             add_state: $('#sp_add_state').val(),
//             add_zipcode: $('#sp_add_zipcode').val(),
//             guardian_name: $('#sp_guardian_name').val(),
//             guardian_no: $('#sp_guardian_no').val(),
//         };

//         _POST(con_teacher, payload, (cb) => {
//             if (cb == 1) {
//                 show_toast('Update Profile', 'teacher profile updated successfully')
//                 setTimeout(() => {
//                     profile_load_information(uncleaned_teacher_id)
//                 }, 100);
//             } else {
//                 show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
//             }
//         })
//     })

//     payload = {
//         request_type: "get_application_information",
//         payload_data: {
//             application_no: teacher_id
//         },
//     };

//     _GET(con_teacher, payload, (cb) => {
//         $.each(cb.information, (k, v) => {
//             $('#sp_add_city').val(v.add_city)
//             $('#sp_add_st').val(v.add_st)
//             $('#sp_add_state').val(v.add_state)
//             $('#sp_add_zipcode').val(v.add_zipcode)
//             $('#sp_age').val(v.age)
//             $('#sp_birthdate').val(v.birthdate)
//             $('#sp_email').val(v.email)
//             $('#sp_firstname').val(v.firstname)
//             $('#sp_gender').val(v.gender)
//             $('#sp_guardian_name').val(v.guardian_name)
//             $('#sp_guardian_no').val(v.guardian_no)
//             $('#sp_lastname').val(v.lastname)
//             $('#sp_middlename').val(v.middlename)
//             $('#sp_contact_no').val(v.mobile_no)
//             $('#sp_id').val(v.id)
//             $('#sp_school_year').val(v.school_year)
//             $('#sp_grade_level').val(v.grade_level)
//             $('#sp_strand').val(v.strand_code)
//             $('#sp_semester').val(v.semester)
//             $('#sp_header_name').text(v.lastname + ', ' + v.firstname)
//             $('#sp_header_email').text(v.email)

//             if (v.gender == 'male') {
//                 $('#sp_male').prop('checked', true)
//             } else {
//                 $('#sp_female').prop('checked', true)
//             }

//             dc_si[teacher_id] = {
//                 id: v.id,
//                 birthdate: v.birthdate,
//                 lastname: v.lastname,
//                 firstname: v.firstname,
//                 middlename: v.middlename,
//                 age: v.age,
//                 gender: v.gender,
//                 email: v.email,
//                 mobile_no: v.mobile_no,
//                 add_st: v.add_st,
//                 add_city: v.add_city,
//                 add_state: v.add_state,
//                 add_zipcode: v.add_zipcode,
//                 guardian_name: v.guardian_name,
//                 guardian_no: v.guardian_no
//             }

//             teacher_gender = v.gender;
//         })

//         output = ``;
//         attached_output = ``;

//         $.each(cb.attachments, (k, v) => {
//             if (v.status == 'approved') {
//                 output += `<div class="form-check me-5 mb-1">
//                     <input class="form-check-input" document_name="SF9" type="checkbox" checked style="pointer-events:none">
//                     <label class="form-check-label">
//                         `+ v.document_name + `
//                     </label>
//                 </div>`
//             }
//             else {
//                 output += `<div class="form-check me-5 mb-1">
//                     <input class="form-check-input" document_name="SF9" type="checkbox"  style="pointer-events:none">
//                     <label class="form-check-label">
//                         `+ v.document_name + `
//                     </label>
//                 </div>`
//             }

//             if (v.document_name == '2x2 photo') {
//                 $('#sp_photo').attr('src', v.document_dir)
//             }

//             attached_output += `
//             <li>
//                 <a class="btn" href="`+ v.document_dir + `" download>
//                     `+ v.document_name + `
//                 </a>
//             </li>
//             `;
//         })

//         $('#sp_requirement_list').empty().append(output)
//         $('#ad_rc_attachments').empty().append(attached_output)
//     })
// }

$('#btn_changepass_profile_save_changes').click(function () {
    $('#md_teacher_change_password').modal('show')
})

// $('#sp_change_photo').click(function () {
//     $('#md_teacher_change_photo').modal('show')
// })

// $("input[name=sp_gender_radio_btn]:radio").unbind('click').click(function () {
//     teacher_gender = $(this).val()
// })

$('.sp_micro_nav').click(function () {
    $('.sp_micro_nav').removeClass('active')
    $('.micropage').hide()

    $('#' + $(this).attr('show_micropage')).show()
    $(this).addClass('active')
})
