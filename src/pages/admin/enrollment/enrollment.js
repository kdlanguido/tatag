con_enrollment = `src/database/controllers/enrollment_controller.php`;
con_section = `src/database/controllers/sections_controller.php`;
con_teacher = `src/database/controllers/teacher_controller.php`;

data_collection_student_enrollments = {}
data_collection_school_year = {}
data_collection_strand = {}
data_collection_teacher = {}

$(document).ready(function () {

    e_load_enrollments();
    e_collect_load_teachers();

    $('#mes_lrn').text();

    $("#mes_btn_enroll_student").click(function () {

        $('.micropage').hide();
        $('#mp_choose_section').fadeIn(800)
        $('#e_btn_proceed_enrollment').attr('lrn', $(this).attr('lrn'))

        payload = {
            request_type: "get_sections_by_strand_level_semester",
            payload_data: {
                grade_level: data_collection_student_enrollments[$(this).attr('lrn')].grade_level,
                strand: data_collection_student_enrollments[$(this).attr('lrn')].strand_code,
                semester: parseInt(data_collection_student_enrollments[$(this).attr('lrn')].semester),
            },
        };

        _GET(con_section, payload, (cb) => {

            output = '';
            $.each(cb, (k, v) => {
                output += `
                    <option value="`+ v.id + `">` + v.name + `</option>
                `;
            })

            $('#sel_choose_section').html(output)

            e_load_schedule_by_section_id($('#sel_choose_section').val())
        })
    })

    $('#a_mp_btn_back_to_student_information').click(function () {
        $('.micropage').hide();
        $('#mp_student_information').fadeIn(800);
    })

    $('#e_btn_proceed_enrollment').click(function () {
        payload = {
            request_type: "enroll_a_student",
            section_id: $('#sel_choose_section').val(),
            lrn: $('#mes_lrn').text()
        };
        _POST(con_enrollment, payload, (cb) => {
            if (cb == 1) {
                e_load_enrollments();
                show_toast('Enrollment Successful', 'The enrollment process has been successfully completed.');
            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })
    })
})

function e_collect_load_teachers() {
    payload = {
        request_type: "get_records_all",
        payload_data: {},
    };

    _GET(con_teacher, payload, (cb) => {
        output = '';
    })
}

// function e_l
function e_load_schedule_by_section_id(section_id) {

    payload = {
        request_type: "get_schedule_by_section_id",
        payload_data: {
            section_id: section_id
        },
    };

    _GET(con_section, payload, (cb) => {
        output = '';

        $.each(cb, (k, v) => {
            output += `
                <tr>
                    <td>`+ v.subject + `</td>
                    <td>`+ (v.day).replace(',', '<br>') + `</td>
                    <td>`+ (v.time).replace(',', '<br>') + `</td>
                    <td>`+ v.teacher_name + `</td>
                </tr>
            `;
        })

        $('#tbl_admin_section_subjects tbody').html(output)

    })

}

function e_load_draw_time(time) {
    return time.replace(',', '<br>')
}

function e_load_enrollments() {

    payload = {
        request_type: "get_all_enrollments",
        payload_data: {},
    };

    _GET(con_enrollment, payload, (cb) => {

        output = '';

        $.each(cb, (k, v) => {

            data_collection_student_enrollments[v.lrn] = v;

            output += `
                <tr>
                    <td class="text-center">`+ v.lrn + `</td>
                    <td>`+ v.firstname + ` ` + v.lastname + `</td>
                    <td class="text-center">`+ v.grade_level + `</td>
                    <td class="text-center">`+ e_draw_status(v.enrollment_status) + `</td>
                    <td class="text-center">
                        <button class="btn p-1 e_view" lrn="`+ v.lrn + `"><i class="fa-solid fa-eye"></i></button>
                        <button class="btn p-1 e_cancel" lrn="`+ v.lrn + `"><i class="fa-regular fa-trash-can"></i></button>
                    </td>
                </tr>
            `;
        })

        $('#tbl_admin_enrollments tbody').html(output)

        $('.e_view').click(function () {
            $('.minipage').hide();
            $('#minipage_enroll_student').fadeIn(800)

            lrn = $(this).attr('lrn')

            $("#mes_btn_enroll_student").attr('lrn', $(this).attr('lrn'))

            global_load_strands((strands) => {

                $.each(strands, (k, v) => {
                    data_collection_strand[v.id] = v;
                })

                $('#mes_strand').text(data_collection_strand[data_collection_student_enrollments[lrn].strand_code].strand)
            })


            $('#mes_lrn').text(data_collection_student_enrollments[$(this).attr('lrn')].lrn)
            $('#mes_name').text(data_collection_student_enrollments[$(this).attr('lrn')].firstname + ' ' + data_collection_student_enrollments[$(this).attr('lrn')].lastname)
            $('#mes_grade_level').text(data_collection_student_enrollments[$(this).attr('lrn')].grade_level)
            $('#mes_school_year').text(data_collection_student_enrollments[$(this).attr('lrn')].school_year)
            $('#mes_sex').text(data_collection_student_enrollments[$(this).attr('lrn')].gender)
            $('#mes_semester').text(data_collection_student_enrollments[$(this).attr('lrn')].semester)

            if (data_collection_student_enrollments[$(this).attr('lrn')].enrollment_status == 'pending') {
                $('#mes_status').html(`<span class="p-1 ps-2" style="display:block;width:100px !important; background:#FFF8EB;color:#EEA23E;border-radius:5px; font-weight:500">Pending</span>`)
                $('#mes_btn_enroll_student').show();
            }
            else if (data_collection_student_enrollments[$(this).attr('lrn')].enrollment_status == 'enrolled') {
                $('#mes_status').html(`<span class="p-1 ps-2" style="display:block;width:100px !important; background:#F0FAF0;color:#2D8A39;border-radius:5px; font-weight:500">Enrolled</span>`)
                $('#mes_btn_enroll_student').hide();
            }
        })

    })

}

function e_load_section(grade_level, strand) {

    payload = {
        request_type: "con_function",
        payload_data: {},
    };

    _GET(con_name, payload, (cb) => {
        $.each(cb, (k, v) => {

        })
    })

}

function e_draw_status(status) {
    if (status == 'pending') {
        return `
            <span class="p-1 mx-auto" style="display:block;width:100px !important; background:#FFF8EB;color:#EEA23E;border-radius:5px; ">Pending</span>
        `
    }
    else if (status == 'cancelled') {
        return `
            <span class="p-1 mx-auto" style="display:block;width:100px !important;  background:#FFF2F0; color:#E2341D;border-radius:5px; ">Cancelled</span>
        `
    }
    else if (status == 'admitted' || status == 'enrolled') {
        return `
            <span class="p-1 mx-auto" style="display:block;width:100px !important;  background:#F0FAF0; color:#2D8A39;border-radius:5px; ">`+ status.charAt(0).toUpperCase() + status.slice(1, status.length) + `</span>
        `
    }
}