con_teacher = "src/database/controllers/teacher_controller.php";

tm_dc_information = {};

$(document).ready(function () {
    tm_load_students(getCookie('profile_id'))
})

function tm_load_students(adviser_id) {

    payload = {
        request_type: "get_my_sections",
        payload_data: {
            id: adviser_id
        }
    };

    _GET(con_teacher, payload, (cb) => {

        output = ``;

        $.each(cb, (k, v) => {
            output += `
                <tr>
                    <td>`+ v.subject + `</td>
                    <td class="text-center">`+ v.name + `</td>
                    <td class="text-center">`+ v.grade_level + `</td>
                    <td>
                        <button class="btn_get_section_students btn p-1" subject_id="`+ v.subject_id + `" grade_level="` + v.grade_level + `" section_id="` + v.id + `">
                            <i class="fa-solid fa-gear"></i>
                        </button>
                    </td>
                </tr>
            `;

            tm_dc_information[v.id] = {
                name: v.name,
                grade_level: v.grade_level,
                subject: v.subject
            }
        })

        $('#tm_tbl_teachers_sections tbody').html(output)

        $('.btn_get_section_students').unbind('click').click(function () {
            $('.students_minipage').hide()
            $('#minipage_students_section_students').fadeIn(800)
            tm_load_section_students($(this))
        })

    })
}

function tm_load_section_students(section) {

    $('#sag_subject').text(tm_dc_information[$(section).attr('section_id')].subject)

    payload = {
        request_type: "get_my_sections_student",
        payload_data: {
            section_id: $(section).attr('section_id'),
            adviser_id: getCookie('profile_id'),
            grade_level: $(section).attr('grade_level'),
            subject_id: $(section).attr('subject_id')
        }
    };

    _GET(con_teacher, payload, (cb) => {

        output = ``;
        temp_card_ids = {};
        temp_grade_collection = {};
        card_id = '';
        lrn = '';

        $.each(cb.students, (student_k, student) => {

            output += `
                <tr>
                    <td>`+ student.student_name + `</td>
                    <td class="text-center" style="font-size:9pt; font-weight:600">grade_1</td>
                    <td class="text-center" style="font-size:9pt; font-weight:600">grade_2</td>
                    <td class="text-center" style="font-size:9pt; font-weight:600">grade_3</td>
                    <td class="text-center" style="font-size:9pt; font-weight:600">grade_4</td>
                    <td class="text-center" style="font-size:9pt; font-weight:600">grade_5</td>
                    <td class="text-center" style="font-size:9pt; font-weight:600">remark</td>
                    <td class="text-center" style="font-size:9pt; font-weight:600">
                        <button class="edit_student_grade btn p-1" lrn="`+ student.lrn + `">
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                    </td>
                </tr>
                  
            `;

            $.each(cb.card_data[student['lrn']], (card_data_k, card_data) => {

                grade_1 = ''
                grade_2 = ''
                grade_3 = ''
                grade_4 = ''
                grade_5 = ''

                $.each(card_data, (grade_k, grade) => {

                    if (grade['term'] == '1') {
                        output = output.replace('grade_1', grade['grade'])
                        grade_1 = grade['grade']
                    }

                    if (grade['term'] == '2') {
                        output = output.replace('grade_2', grade['grade'])
                        grade_2 = grade['grade']
                    }

                    if (grade['term'] == '3') {
                        output = output.replace('grade_3', grade['grade'])
                        grade_3 = grade['grade']
                    }

                    if (grade['term'] == '4') {
                        output = output.replace('grade_4', grade['grade'])
                        grade_4 = grade['grade']
                    }

                    if (grade['term'] == '5') {
                        output = output.replace('grade_5', grade['grade'])
                        grade_5 = grade['grade']

                        if (Math.round(parseFloat(grade['grade'])) < 75) {
                            output = output.replace('remark', '<span class="text-danger">Failed</span>')
                        } else {
                            output = output.replace('remark', '<span class="text-success">Passed</span>')
                        }
                    }
                })

                temp_grade_collection[student['lrn']] = {
                    grade_1: grade_1,
                    grade_2: grade_2,
                    grade_3: grade_3,
                    grade_4: grade_4,
                    grade_5: grade_5,
                }
            })

            output = output.replace('grade_1', '0')
            output = output.replace('grade_2', '0')
            output = output.replace('grade_3', '0')
            output = output.replace('grade_4', '0')
            output = output.replace('grade_5', '0')
            output = output.replace('final_grade', '0')
            output = output.replace('remark', '-')

            temp_card_ids = cb.card_ids;
        })

        $('#tbl_section_students tbody').html(output)

        $('.edit_student_grade').unbind('click').click(function () {

            lrn = $(this).attr('lrn')

            $('#students_add_grade').modal('show')

            if (temp_grade_collection[lrn]) {
                $('#sag_grade_1').val(temp_grade_collection[$(this).attr('lrn')].grade_1)
                $('#sag_grade_2').val(temp_grade_collection[$(this).attr('lrn')].grade_2)
                $('#sag_grade_3').val(temp_grade_collection[$(this).attr('lrn')].grade_3)
                $('#sag_grade_4').val(temp_grade_collection[$(this).attr('lrn')].grade_4)
                $('#sag_grade_f').val(temp_grade_collection[$(this).attr('lrn')].grade_5)
            } else {
                $('#sag_grade_1').val(0)
                $('#sag_grade_2').val(0)
                $('#sag_grade_3').val(0)
                $('#sag_grade_4').val(0)
                $('#sag_grade_f').val(0)
            }

            $('#sag_subject_btn_confirm').unbind('click').click(function () {

                payload = {
                    request_type: "add_grade",
                    card_id: temp_card_ids[lrn].id,
                    subject_id: $(section).attr('subject_id'),
                    grades: JSON.stringify([{
                        1: $('#sag_grade_1').val(),
                        2: $('#sag_grade_2').val(),
                        3: $('#sag_grade_3').val(),
                        4: $('#sag_grade_4').val(),
                        5: $('#sag_grade_f').val()
                    }])
                };

                _POST(con_teacher, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Add Grade', 'Grade added successfully')
                        tm_load_section_students(section)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })

        })

        $('.grade_input').keyup(function (k) {

            try {
                grade = parseFloat($(this).val())
                final_grade = 0;
                grading_1 = parseFloat($('#sag_grade_1').val()) * .2;
                grading_2 = parseFloat($('#sag_grade_2').val()) * .2;
                grading_3 = parseFloat($('#sag_grade_3').val()) * .2;
                grading_4 = parseFloat($('#sag_grade_4').val()) * .4;
                final_grade = grading_1 + grading_2 + grading_3 + grading_4
                $('#sag_grade_f').val(final_grade)

            } catch (error) {
                // final_grade = 0;
                // $('#sag_grade_f').val(final_grade)
                // show_toast('Grade Input Warning', 'Grade should be a valid number', 'warning')
                console.log(error)
            }

        })


    })
}



















