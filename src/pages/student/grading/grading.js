con_grading = 'src/database/controllers/grades_controller.php';


$(document).ready(function () {

    $('#sel_grading_grade_level').change(function () {
        grading_load()
        $('#grading_txt_grade_level').text($(this).val())
    })

    $('#btn_goto_grading').click(function () {
        grading_load()
        $('#grading_txt_grade_level').text($('#sel_grading_grade_level').val())
    })
})

function grading_load() {

    payload = {
        request_type: "get_student_grades",
        payload_data: {
            lrn: getCookie('profile_id'),
            grade_level: $('#sel_grading_grade_level').val()
        },
    };

    _GET(con_grading, payload, (cb, status) => {

        grading = {};
        output = ``;

        if (status == 204) {
            $('#tbl_grading tbody').html('')
            $('#grading_txt_section').text('N/A')
            $('#grading_txt_school_year').text('N/A')

        } else {
            $.each(cb, (k, v) => {
                console.log(v)
                if (v.subject in grading) {
                    temp_grades = grading[v.subject]
                    temp_grades.push([v.term, v.grade])
                    grading[v.subject] = temp_grades
                } else {
                    grading[v.subject] = [[v.term, v.grade]]
                }

                $('#grading_txt_section').text(v.section)
                $('#grading_txt_school_year').text(v.school_year)
            })

            clone_output = `
                <tr>
                    <td>subject</td>
                    <td class="text-center">grade_1</td>
                    <td class="text-center">grade_2</td>
                    <td class="text-center">grade_3</td>
                    <td class="text-center">grade_4</td>
                    <td class="text-center">grade_5</td>
                    <td class="text-center">remark</td>
                </tr>
            `;

            $.each(grading, (subject, grades) => {

                output += clone_output.replace('subject', subject)

                $.each(grades, (k, v) => {
                    if (v[0] == 1) {
                        output = output.replace('grade_1', v[1])
                    }

                    if (v[0] == 2) {
                        output = output.replace('grade_2', v[1])
                    }

                    if (v[0] == 3) {
                        output = output.replace('grade_3', v[1])
                    }

                    if (v[0] == 4) {
                        output = output.replace('grade_4', v[1])
                    }

                    if (v[0] == 5) {
                        output = output.replace('grade_5', v[1])

                        if (Math.round(parseFloat(v[1])) < 75) {
                            output = output.replace('remark', '<span class="text-danger">Failed</span>')
                        } else {
                            output = output.replace('remark', '<span class="text-success">Passed</span>')
                        }
                    }
                })

                output = output.replace('grade_1', '0')
                output = output.replace('grade_2', '0')
                output = output.replace('grade_3', '0')
                output = output.replace('grade_4', '0')
                output = output.replace('grade_5', '0')
                output = output.replace('remark', '--')

                output += `
                    </tr>
                `;
            })

            $('#tbl_grading tbody').html(output)
        }
    })
}