sys_con_strands = 'src/database/controllers/strands_controller.php';
sys_con_subjects = 'src/database/controllers/subjects_controller.php';

data_collections_strands = {};


$(document).ready(function () {

    admin_get_strands()

    $('#btn_add_strand').click(function () {

        $('#strands_md_add').modal('show')

        $('#strands_btn_confirm_add').unbind('click').click(function () {
            payload = {
                request_type: "add_record",
                grade_level: $('#add_strands_md_txt_grade_level').val(),
                strand: $('#add_strands_md_txt_strand').val()
            };

            _POST(sys_con_strands, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Add Strand', 'Strand added successfully')
                    admin_get_strands();
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })
        })

    })

    $('#btn_add_subject').click(function () {

        semester = '';

        $('#subjects_md_add').modal('show')

        if ($(this).attr('is_jhs') == 0) {
            $('#div_subjects_md_sel_semester').show();
            semester = $('#subjects_md_sel_semester').val();
        } else {
            $('#div_subjects_md_sel_semester').hide();
            semester = '';
        }

        $('#subjects_btn_confirm_add').unbind('click').click(function () {

            if ($('#subjects_md_sel_semester').val() == '1st') {
                $('#subjects_sem_1').trigger('click')
            } else {
                $('#subjects_sem_2').trigger('click')
            }

            strand_id = $(this).attr('strand_id');

            payload = {
                request_type: "add_record",
                subject: $('#subjects_md_txt_subject').val(),
                strand: strand_id,
                semester: $('#subjects_md_sel_semester').val()
            };

            _POST(sys_con_subjects, payload, (cb) => {
                if (cb == 1) {
                    admin_get_subjects(strand_id, $('#subjects_md_sel_semester').val());
                    show_toast('Add Subject', 'Subject has been added successfully')
                    $('#subjects_md_txt_subject').val('')

                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })
        })
    })

    $('#btn_strand_subject_back').click(function () {
        $('.minipage').hide();
        $('#strand_home').show();
    })


})

$('#subjects_sem_1').click(function () {
    $('#strand_txt_grade_level').text($('#strand_txt_grade_level').text().replace('2nd', '1st'))
    admin_get_subjects($(this).attr('strand_id'), 1)
})

$('#subjects_sem_2').click(function () {
    $('#strand_txt_grade_level').text($('#strand_txt_grade_level').text().replace('1st', '2nd'))
    admin_get_subjects($(this).attr('strand_id'), 2)
})

function admin_get_subjects(id, level = null) {

    if (level == null) {

        payload = {
            request_type: "get_record_by_strand_id",
            payload_data: {
                strand: id
            },
        };

        _GET(sys_con_subjects, payload, (cb) => {

            output = ``;

            $.each(cb, (k, v) => {
                output += `
                <tr>
                    <td >
                        `+ v.subject + `
                    </td>
                    <td class="text-end">
                        <button class="strands_btn_subject_delete btn p-1" subject_id="`+ v.id + `">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;
            })

            $('#tbl_grade_level_subjects tbody').empty().append(output)

            $('.strands_btn_subject_delete').unbind('click').click(function () {

                $('#subjects_md_remove_subject').modal('show')
                $('#btn_subjects_md_removeconfirm').attr('subject_id', $(this).attr('subject_id')).unbind('click').click(function () {

                    payload = {
                        request_type: "delete_subject_from_strand",
                        id: $(this).attr('subject_id')
                    };

                    _POST(sys_con_subjects, payload, (cb) => {
                        if (cb == 1) {
                            show_toast('Remove Subject', 'Subject has been removed from the strand')
                            admin_get_subjects(id)
                        } else {
                            show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                        }
                    })

                })


            })

        })
    } else {

        payload = {
            request_type: "get_record_by_strand_id_shs",
            payload_data: {
                strand: id,
                semester: level
            },
        };

        _GET(sys_con_subjects, payload, (cb) => {

            output = ``;

            $.each(cb, (k, v) => {
                output += `
                <tr>
                    <td >
                        `+ v.subject + `
                    </td>
                    <td class="text-end">
                        <button class="strands_btn_subject_delete btn p-1" subject_id="`+ v.id + `" strand_id="` + id + `">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;
            })

            $('#tbl_grade_level_subjects tbody').empty().append(output)

            $('.strands_btn_subject_delete').unbind('click').click(function () {

                strand_id = $(this).attr('strand_id')
                subject_id = $(this).attr('subject_id')

                $('#subjects_md_remove_subject').modal('show')
                $('#btn_subjects_md_removeconfirm').attr('subject_id', $(this).attr('subject_id')).unbind('click').click(function () {

                    payload = {
                        request_type: "delete_subject_from_strand",
                        id: subject_id
                    };

                    _POST(sys_con_subjects, payload, (cb) => {
                        if (cb == 1) {
                            show_toast('Remove Subject', 'Subject has been removed from the strand')
                            admin_get_subjects(strand_id, level)
                        } else {
                            show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                        }
                    })

                })


            })
        })

    }

}

function admin_get_strands() {

    payload = {
        request_type: "get_records_all",
        payload_data: {},
    };

    _GET(sys_con_strands, payload, (cb) => {

        output = ``;
        count = 1;

        $.each(cb, (k, v) => {
            output += `
                <tr>
                    <td class="text-center">`+ v.grade_level + `</td>
                    <td>`+ if_null(v.strand) + `</td>
                    <td class="text-end">
                        <button class="strands_btn_edit btn p-1" strand_id="`+ v.id + `">
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button class="strands_btn_add_subjects btn p-1" strand_id="`+ v.id + `">
                            <i class="fa-solid fa-gear"></i>
                        </button>
                        <button class="strands_btn_delete btn p-1" strand_id="`+ v.id + `">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;
            count = count + 1;

            data_collections_strands[v.id] = {
                grade_level: v.grade_level,
                strand: v.strand
            }
        })

        $('#tbl_admin_strands tbody').empty().append(output)

        $('.strands_btn_edit').unbind('click').click(function () {
            $('#strands_md_edit').modal('show')
            $('#strands_md_txt_grade_level').val(data_collections_strands[$(this).attr('strand_id')].grade_level)
            $('#strands_md_txt_strand').val(data_collections_strands[$(this).attr('strand_id')].strand)
            $('#strands_btn_confirm_edit').attr('strand_id', $(this).attr('strand_id')).unbind('click').click(function () {
                payload = {
                    request_type: "edit_record",
                    edit_anchor: ['id', $(this).attr("strand_id")],
                    grade_level: $('#strands_md_txt_grade_level').val(),
                    strand: $('#strands_md_txt_strand').val(),
                };

                _POST(sys_con_strands, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Edit Strand', 'Strand has been updated successfully.')
                        admin_get_strands()
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })
        })

        $('.strands_btn_delete').unbind('click').click(function () {
            $('#strands_md_delete').modal('show')
            $('#strands_btn_confirm_delete').attr('strand_id', $(this).attr('strand_id')).unbind('click').click(function () {
                payload = {
                    request_type: "delete_record",
                    id: $(this).attr("strand_id")
                };

                _POST(sys_con_strands, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Delete Strand', 'Strand has been deleted successfully.')
                        admin_get_strands()
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })
        })

        $('.strands_btn_add_subjects').unbind('click').click(function () {

            $('.minipage').hide();
            $('#strand_subjects').show();


            if (data_collections_strands[$(this).attr('strand_id')].grade_level < 11) {
                $('#strand_txt_grade_level').text('Grade ' + data_collections_strands[$(this).attr('strand_id')].grade_level)
                $('#subjects_div_semester').hide()
                $('#btn_add_subject').attr('is_jhs', '1')

                admin_get_subjects($(this).attr('strand_id'))


            } else {
                $('#strand_txt_grade_level').text('Grade ' + data_collections_strands[$(this).attr('strand_id')].grade_level + ' - ' + data_collections_strands[$(this).attr('strand_id')].strand + ' - ' + ' 1st')
                $('#subjects_div_semester').show()
                $('#subjects_sem_1').prop('checked', true)
                $('#btn_add_subject').attr('is_jhs', '0')

                $('#subjects_sem_2').attr('strand_id', $(this).attr('strand_id'))
                $('#subjects_sem_1').attr('strand_id', $(this).attr('strand_id'))
                // SET DEFAULT 1st SEM 
                admin_get_subjects($(this).attr('strand_id'), 1)

            }

            $('#subjects_btn_confirm_add').attr('strand_id', $(this).attr('strand_id'))
        })

    })
}

function if_null(value) {
    if (value == null) {
        return '';
    } else {
        return value;
    }
}