con_sections = 'src/database/controllers/sections_controller.php';
con_subjects = 'src/database/controllers/subjects_controller.php';

s_temp_selected_time = {};

data_collections_sections = {};
data_collections_section_subjects = {};
data_collections_schedules = {};

data_input_collection_subject_days = [];
data_input_collection_schedule_monday = [];
data_input_collection_schedule_tuesday = [];
data_input_collection_schedule_wednesday = [];
data_input_collection_schedule_thursday = [];
data_input_collection_schedule_friday = [];
data_input_collection_schedule_saturday = [];

function s_reset_checkbox() {

    $('#edit_md_section_schedule_monday_from').prop('disabled', true).val('');
    $('#edit_md_section_schedule_monday_to').prop('disabled', true).val('');

    $('#edit_md_section_schedule_tuesday_from').prop('disabled', true).val('');
    $('#edit_md_section_schedule_tuesday_to').prop('disabled', true).val('');

    $('#edit_md_section_schedule_wednesday_from').prop('disabled', true).val('');
    $('#edit_md_section_schedule_wednesday_to').prop('disabled', true).val('');

    $('#edit_md_section_schedule_thursday_from').prop('disabled', true).val('');
    $('#edit_md_section_schedule_thursday_to').prop('disabled', true).val('');

    $('#edit_md_section_schedule_friday_from').prop('disabled', true).val('');
    $('#edit_md_section_schedule_friday_to').prop('disabled', true).val('');

    $('#edit_md_section_schedule_saturday_from').prop('disabled', true).val('');
    $('#edit_md_section_schedule_saturday_to').prop('disabled', true).val('');
}

function geturlparameter(name) {
    var url = new URL(window.location.href);
    return url.searchParams.get(name);
}

$(document).ready(function () {


    var url = window.location.href;
    var arr = url.split('?');
    arr.pop();
    if (arr[0]) {
        window.location.href = arr[0]
    }

    s_load_sections()
    s_reset_checkbox()

    $('#edit_md_section_schedule_chk_monday').click(function () {
        if ($(this).prop('checked')) {
            $('#edit_md_section_schedule_monday_from').prop('disabled', false).val('');
            $('#edit_md_section_schedule_monday_to').prop('disabled', false).val('');
        } else {
            $('#edit_md_section_schedule_monday_from').prop('disabled', true).val('');
            $('#edit_md_section_schedule_monday_to').prop('disabled', true).val('');
        }
    })

    $('#edit_md_section_schedule_chk_tuesday').click(function () {
        if ($(this).prop('checked')) {
            $('#edit_md_section_schedule_tuesday_from').prop('disabled', false).val('');
            $('#edit_md_section_schedule_tuesday_to').prop('disabled', false).val('');
        } else {
            $('#edit_md_section_schedule_tuesday_from').prop('disabled', true).val('');
            $('#edit_md_section_schedule_tuesday_to').prop('disabled', true).val('');
        }
    })

    $('#edit_md_section_schedule_chk_wednesday').click(function () {
        if ($(this).prop('checked')) {
            $('#edit_md_section_schedule_wednesday_from').prop('disabled', false).val('');
            $('#edit_md_section_schedule_wednesday_to').prop('disabled', false).val('');
        } else {
            $('#edit_md_section_schedule_wednesday_from').prop('disabled', true).val('');
            $('#edit_md_section_schedule_wednesday_to').prop('disabled', true).val('');
        }
    })

    $('#edit_md_section_schedule_chk_thursday').click(function () {
        if ($(this).prop('checked')) {
            $('#edit_md_section_schedule_thursday_from').prop('disabled', false).val('');
            $('#edit_md_section_schedule_thursday_to').prop('disabled', false).val('');
        } else {
            $('#edit_md_section_schedule_thursday_from').prop('disabled', true).val('');
            $('#edit_md_section_schedule_thursday_to').prop('disabled', true).val('');
        }
    })

    $('#edit_md_section_schedule_chk_friday').click(function () {
        if ($(this).prop('checked')) {
            $('#edit_md_section_schedule_friday_from').prop('disabled', false).val('');
            $('#edit_md_section_schedule_friday_to').prop('disabled', false).val('');
        } else {
            $('#edit_md_section_schedule_friday_from').prop('disabled', true).val('');
            $('#edit_md_section_schedule_friday_to').prop('disabled', true).val('');
        }
    })

    $('#edit_md_section_schedule_chk_saturday').click(function () {
        if ($(this).prop('checked')) {
            $('#edit_md_section_schedule_saturday_from').prop('disabled', false).val('');
            $('#edit_md_section_schedule_saturday_to').prop('disabled', false).val('');
        } else {
            $('#edit_md_section_schedule_saturday_from').prop('disabled', true).val('');
            $('#edit_md_section_schedule_saturday_to').prop('disabled', true).val('');
        }
    })



    $('#md_sections_sel_grade').change(function () {
        if ($(this).val() > 10) {
            $('#md_sections_sel_strand').prop('disabled', false)
            $('#md_sections_sel_semester').prop('disabled', false)
        } else {
            $('#md_sections_sel_strand').prop('disabled', true)
            $('#md_sections_sel_semester').prop('disabled', true)
        }
    })

    $('#md_sections_edit_sel_grade').change(function () {
        if ($(this).val() > 10) {
            $('#md_sections_edit_sel_strand').prop('disabled', false)
            $('#md_sections_edit_sel_semester').prop('disabled', false)
        } else {
            $('#md_sections_edit_sel_strand').prop('disabled', true)
            $('#md_sections_edit_sel_semester').prop('disabled', true)
        }
    })

    $('#a_btn_close_sections_schedule').click(function () {
        $('.minipage').hide();
        $('#mini_page_section_home').show();
    })

    $('#btn_add_section').click(function () {
        s_prep()
        $('#md_sections_add').modal('show')
    })

    $('#md_sections_add_btn_confirm').click(function () {

        if ($('#md_sections_sel_grade').val() > 10) {
            payload = {
                request_type: "add_record",
                adviser: $('#md_sections_sel_adviser').val(),
                name: $('#md_sections_txt_name').val(),
                grade_level: $('#md_sections_sel_grade').val(),
                strand: $('#md_sections_sel_strand').val(),
                semester: $('#md_sections_sel_semester').val(),
            };
        }

        else {
            payload = {
                request_type: "add_record",
                adviser: $('#md_sections_sel_adviser').val(),
                name: $('#md_sections_txt_name').val(),
                grade_level: $('#md_sections_sel_grade').val(),
                strand: '',
                semester: '',
            };
        }

        _POST(con_sections, payload, (cb) => {
            if (cb == 1) {
                show_toast('Add Section', 'Section added successfully')
                s_load_sections()
            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })

    })

    $('#md_sections_edit_add_btn_confirm').click(function () {

        payload = {
            request_type: "edit_record",
            edit_anchor: ['id', $(this).attr('section_id')],
            adviser: $('#md_sections_edit_sel_adviser').val(),
            name: $('#md_sections_edit_txt_name').val(),
            grade_level: $('#md_sections_edit_sel_grade').val(),
            strand: $('#md_sections_edit_sel_strand').val(),
            semester: $('#md_sections_edit_sel_semester').val()
        };

        _POST(con_sections, payload, (cb) => {
            if (cb == 1) {
                show_toast('Update Section', 'Section has been updated successfully.')
                s_load_sections()

            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })

    })

    $('.chk_subject_schedule_day').click(function () {

        data_input_collection_subject_days = [];

        $('.chk_subject_schedule_day:checkbox:checked').each((k, v) => {
            data_input_collection_subject_days.push($(v).val())
        })
    })

    $('#md_section_schedule_monday_from').change(function () {
        data_input_collection_schedule_monday[0] = $(this).val()
    })

    $('#md_section_schedule_monday_to').change(function () {
        data_input_collection_schedule_monday[1] = $(this).val()
    })

    $('#md_section_schedule_tuesday_from').change(function () {
        data_input_collection_schedule_tuesday[0] = $(this).val()
    })

    $('#md_section_schedule_tuesday_to').change(function () {
        data_input_collection_schedule_tuesday[1] = $(this).val()
    })

    $('#md_section_schedule_wednesday_from').change(function () {
        data_input_collection_schedule_wednesday[0] = $(this).val()
    })

    $('#md_section_schedule_wednesday_to').change(function () {
        data_input_collection_schedule_wednesday[1] = $(this).val()
    })

    $('#md_section_schedule_thursday_from').change(function () {
        data_input_collection_schedule_thursday[0] = $(this).val()
    })

    $('#md_section_schedule_thursday_to').change(function () {
        data_input_collection_schedule_thursday[1] = $(this).val()
    })

    $('#md_section_schedule_friday_from').change(function () {
        data_input_collection_schedule_friday[0] = $(this).val()
    })

    $('#md_section_schedule_friday_to').change(function () {
        data_input_collection_schedule_friday[1] = $(this).val()
    })

    $('#md_section_schedule_saturday_from').change(function () {
        data_input_collection_schedule_saturday[0] = $(this).val()
    })

    $('#md_section_schedule_saturday_to').change(function () {
        data_input_collection_schedule_saturday[1] = $(this).val()
    })

})

function c_comma_to_br(str) {
    return str.replace(',', '<br>')
}

function s_load_sections() {

    payload = {
        request_type: "get_records_all",
        payload_data: {},
    };

    _GET(con_sections, payload, (cb) => {

        output = ``;

        $.each(cb, (k, v) => {

            if (v.grade_level > 10) {
                strand_name = v.strand_name
                semester = v.semester
            } else {
                strand_name = '--'
                semester = '--'
            }

            output += `
                <tr>
                    <td>`+ v.adviser + `</td>
                    <td>`+ v.name + `</td>
                    <td>`+ v.grade_level + `</td>
                    <td>`+ strand_name + `</td>
                    <td>`+ semester + `</td>
                    <td class="text-center">
                        <button class="section_btn_edit btn p-1" section_id="`+ v.id + `">
                        <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button class="section_btn_schedule btn p-1" section_id="`+ v.id + `" >
                        <i class="fa-regular fa-calendar-days"></i>
                        </button>
                        <button class="section_btn_archive btn p-1" section_id="`+ v.id + `">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;

            data_collections_sections[v.id] = {
                adviser: v.adviser,
                name: v.name,
                grade_level: v.grade_level,
                strand: strand_name,
                semester: semester,
                strand_id: v.strand_id
            };
        })

        $('#tbl_admin_sections tbody').empty().append(output)

        $('.section_btn_edit').unbind('click').click(function () {
            $('#md_sections_edit').modal('show')
            s_prep();

            setTimeout(() => {
                $('#md_sections_edit_sel_adviser').val(data_collections_sections[$(this).attr('section_id')].adviser)
                $('#md_sections_edit_txt_name').val(data_collections_sections[$(this).attr('section_id')].name)
                $('#md_sections_edit_sel_grade').val(data_collections_sections[$(this).attr('section_id')].grade_level)
                $('#md_sections_edit_sel_strand').val(data_collections_sections[$(this).attr('section_id')].strand_id)
                $('#md_sections_edit_sel_semester').val(data_collections_sections[$(this).attr('section_id')].semester)
                $('#md_sections_edit_add_btn_confirm').attr('section_id', $(this).attr('section_id'))

                if (data_collections_sections[$(this).attr('section_id')].grade_level > 10) {
                    $('#md_sections_edit_sel_strand').prop('disabled', false)
                    $('#md_sections_edit_sel_semester').prop('disabled', false)
                } else {
                    $('#md_sections_edit_sel_strand').prop('disabled', true)
                    $('#md_sections_edit_sel_semester').prop('disabled', true)
                }
            }, 120);
        })

        $('.section_btn_schedule').unbind('click').click(function () {
            $('.minipage').hide()
            $('#mini_page_section_schedule').show();
            $('#tbl_admin_section_subjects tbody').empty()
            s_load_section_schedules($(this).attr('section_id'))
        })

        $('.section_btn_archive').unbind('click').click(function () {
            $('#md_archive_section').modal('show')

            $('#md_archive_section_btn_confirm').attr('section_id', $(this).attr('section_id')).unbind('click').click(function () {

                payload = {
                    request_type: "archive_record",
                    id: $(this).attr('section_id')
                };

                _POST(con_sections, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Archive Record', 'Section has been archived successfully.')
                        s_load_sections()
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })

            })
        })
    })

}

function s_load_section_schedules(section_id) {

    data_collections_section_subjects = {};
    data_collections_schedules = {};

    payload = {
        request_type: "get_section_subjects",
        payload_data: {
            'section_id': section_id
        },
    };

    _GET(con_sections, payload, (cb) => {

        $.each(cb, (k, v) => {
            data_collections_section_subjects[v.subject_name] = {
                day: v.day,
                teacher_name: v.teacher_name,
                time: v.time,
                subject_id: v.subject,
                teacher_id: v.teacher,
                schedule_id: v.id
            }
        })
    })

    grade_level = data_collections_sections[section_id].grade_level

    setTimeout(() => {
        if (grade_level > 10) {
            payload = {
                request_type: "get_record_by_strand_id_shs",
                payload_data: {
                    strand: data_collections_sections[section_id].strand_id,
                    semester: data_collections_sections[section_id].semester
                },
            };

            _GET(con_subjects, payload, (cb) => {
                output = ``;
                count = 0;

                $.each(cb, (k, v) => {

                    if (v.subject in data_collections_section_subjects) {
                        output += `
                            <tr>
                                <td>`+ v.subject + `</td>
                                <td>`+ c_comma_to_br(data_collections_section_subjects[v.subject].day) + `</td>
                                <td>`+ c_comma_to_br(data_collections_section_subjects[v.subject].time) + `</td>
                                <td>`+ data_collections_section_subjects[v.subject].teacher_name + `</td>
                                <td class="text-center">
                                    <button class="section_update_schedule btn p-1" section_id="`+ section_id + `" subject="` + v.subject + `"  schedule_id="` + data_collections_section_subjects[v.subject].schedule_id + `">
                                        <i class="fa-solid fa-calendar-days"></i>
                                    </button>
                                </td>
                            </tr>
    
                        `;
                    } else {
                        output += `
                            <tr>
                                <td>`+ v.subject + `</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="text-center">
                                    <button class="section_add_schedule btn p-1" section_id="`+ section_id + `" subject_id="` + v.id + `">
                                        <i class="fa-solid fa-calendar-days"></i>
                                    </button>
                                </td>
                            </tr>
                        `;
                    }

                })

                $('#tbl_admin_section_subjects tbody').empty().append(output)
                s_schedule_click_functions()
            })

        } else {

            payload = {
                request_type: "get_record_by_strand_id",
                payload_data: {
                    strand: data_collections_sections[section_id].strand_id
                },
            };

            _GET(con_subjects, payload, (cb) => {

                // console.log(s_temp_selected_time)

                // if (s_temp_selected_time) {
                //     temp = (moment(s_temp_selected_time[i].split('-')[0], "HH:mm").toDate()).toTimeString().split(' ')[0];
                // }


                output = ``;
                count = 0;

                $.each(cb, (k, v) => {

                    if (v.subject in data_collections_section_subjects) {
                        output += `
                        <tr>
                            <td>`+ v.subject + `</td>
                            <td>`+ c_comma_to_br(data_collections_section_subjects[v.subject].day) + `</td>
                            <td>`+ c_comma_to_br(data_collections_section_subjects[v.subject].time) + `</td>
                            <td>`+ data_collections_section_subjects[v.subject].teacher_name + `</td>
                            <td class="text-center">
                                <button class="section_update_schedule btn p-1" section_id="`+ section_id + `" subject="` + v.subject + `" subject_id="` + v.id + `" schedule_id="` + data_collections_section_subjects[v.subject].schedule_id + `">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </button>
                            </td>
                        </tr>
    
                    `;
                    } else {
                        output += `
                        <tr>
                            <td>`+ v.subject + `</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-center">
                                <button class="section_add_schedule btn p-1" section_id="`+ section_id + `" subject_id="` + v.id + `">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </button>
                            </td>
                        </tr>
                    `;
                    }

                })

                $('#tbl_admin_section_subjects tbody').empty().append(output)
                s_schedule_click_functions()
            })
        }
    }, 200);
}

function getDateFromHours(time) {
    time = time.split(':');
    let now = new Date();
    let x = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
    return x.getHours() + ':' + (x.getMinutes() < 10 ? '0' : '') + x.getMinutes();
}

function s_schedule_click_functions() {

    $('.section_add_schedule').unbind('click').click(function () {
        input_time_string = '';
        $('#md_section_add_schedule').modal('show')
        $('#md_section_add_schedule_btn_confirm').attr('section_id', $(this).attr('section_id')).attr('subject_id', $(this).attr('subject_id'))
        s_prep()
    })

    $('.section_update_schedule').unbind('click').click(function () {

        s_reset_checkbox()
        s_prep()

        input_time_string = '';
        subject = $(this).attr('subject')

        s_draw_schedule(subject)

        $('#md_section_edit_schedule').modal('show')
        $('#md_section_edit_schedule_btn_confirm').attr('schedule_id', $(this).attr('schedule_id')).attr('section_id', $(this).attr('section_id')).unbind('click').click(function () {

            input_time_string = '';
            input_day_string = '';

            s_temp_day_holder = {};
            s_temp_day_holder['M'] = 'monday'
            s_temp_day_holder['T'] = 'tuesday'
            s_temp_day_holder['W'] = 'wednesday'
            s_temp_day_holder['TH'] = 'thursday'
            s_temp_day_holder['F'] = 'friday'
            s_temp_day_holder['S'] = 'saturday'

            $('.chk_subject_schedule_day').each(function () {

                if ($(this).prop('checked')) {
                    s_t_from = getDateFromHours($('#edit_md_section_schedule_' + s_temp_day_holder[$(this).val()] + '_from').val())
                    s_t_to = getDateFromHours($('#edit_md_section_schedule_' + s_temp_day_holder[$(this).val()] + '_to').val())
                    input_time_string += s_t_from + ' - ' + s_t_to + ','
                    input_day_string += $(this).val() + ','
                }

            })

            input_day_string = input_day_string.substr(0, input_day_string.length - 1)
            input_time_string = input_time_string.substr(0, input_time_string.length - 1)

            payload = {
                request_type: "update_schedule",
                id: $(this).attr('schedule_id'),
                time: input_time_string,
                day: input_day_string,
                teacher: $('#edit_md_section_schedule_teacher').val(),
            };

            _POST(con_sections, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Update Schedule', 'Schedule has been updated successfully')
                    s_load_section_schedules($(this).attr('section_id'))

                    $('.chk_subject_schedule_day').prop('checked', false);
                    input_time_string = '';
                    input_day_string = '';
                    s_temp_day_holder = null;
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        })

    })

    $('#md_section_add_schedule_btn_confirm').unbind('click').click(function () {

        input_time_string = '';
        input_day_string = '';

        s_temp_day_holder = {};
        s_temp_day_holder['M'] = 'monday'
        s_temp_day_holder['T'] = 'tuesday'
        s_temp_day_holder['W'] = 'wednesday'
        s_temp_day_holder['TH'] = 'thursday'
        s_temp_day_holder['F'] = 'friday'
        s_temp_day_holder['S'] = 'saturday'

        $('.chk_subject_schedule_day').each(function () {

            if ($(this).prop('checked')) {
                s_t_from = getDateFromHours($('#md_section_schedule_' + s_temp_day_holder[$(this).val()] + '_from').val())
                s_t_to = getDateFromHours($('#md_section_schedule_' + s_temp_day_holder[$(this).val()] + '_to').val())
                input_time_string += s_t_from + ' - ' + s_t_to + ','
                input_day_string += $(this).val() + ','
            }
        })

        input_day_string = input_day_string.substr(0, input_day_string.length - 1)
        input_time_string = input_time_string.substr(0, input_time_string.length - 1)

        payload = {
            request_type: "add_schedule",
            section_id: $(this).attr('section_id'),
            subject: $(this).attr('subject_id'),
            teacher: $('#md_section_schedule_teacher').val(),
            day: data_input_collection_subject_days.toString(),
            time: input_time_string.split(',').filter(n => n).toString()
        };

        _POST(con_sections, payload, (cb) => {
            if (cb == 1) {
                show_toast('Add Schedule', 'Schedule added successfully.')
                s_load_section_schedules($(this).attr('section_id'))
                $('.chk_subject_schedule_day').prop('checked', false);
                data_input_collection_subject_days = '';
                input_time_string = '';
                input_day_string = '';
            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })

    })
}

function s_draw_schedule(subject) {
    if (data_collections_section_subjects[subject].time) {
        s_temp_selected_days = '';
        s_temp_selected_time = '';

        s_temp_selected_days = (data_collections_section_subjects[subject].day).split(',');
        s_temp_selected_time = (data_collections_section_subjects[subject].time).split(',');
        $('.schedule_edit_day').val('')
        $('#edit_md_section_schedule_teacher').val(data_collections_section_subjects[subject].teacher_id)

        $('.chk_subject_schedule_day').prop('checked', false)

        for (let i = 0; i < s_temp_selected_days.length; i++) {

            var time_from = (moment(s_temp_selected_time[i].split('-')[0], "HH:mm").toDate()).toTimeString().split(' ')[0];
            var time_to = (moment(s_temp_selected_time[i].split('-')[1], "HH:mm").toDate()).toTimeString().split(' ')[0];

            if (s_temp_selected_days[i] == 'M') {
                $('#edit_md_section_schedule_chk_monday').prop('checked', true)
                $('#edit_md_section_schedule_monday_from').val(time_from).prop('disabled', false)
                $('#edit_md_section_schedule_monday_to').val(time_to).prop('disabled', false)
            }

            if (s_temp_selected_days[i] == 'T') {
                $('#edit_md_section_schedule_chk_tuesday').prop('checked', true)
                $('#edit_md_section_schedule_tuesday_from').val(time_from).prop('disabled', false)
                $('#edit_md_section_schedule_tuesday_to').val(time_to).prop('disabled', false)
            }

            if (s_temp_selected_days[i] == 'W') {
                $('#edit_md_section_schedule_chk_wednesday').prop('checked', true)
                $('#edit_md_section_schedule_wednesday_from').val(time_from).prop('disabled', false)
                $('#edit_md_section_schedule_wednesday_to').val(time_to).prop('disabled', false)
            }

            if (s_temp_selected_days[i] == 'TH') {
                $('#edit_md_section_schedule_chk_thursday').prop('checked', true)
                $('#edit_md_section_schedule_thursday_from').val(time_from).prop('disabled', false)
                $('#edit_md_section_schedule_thursday_to').val(time_to).prop('disabled', false)
            }

            if (s_temp_selected_days[i] == 'F') {
                $('#edit_md_section_schedule_chk_friday').prop('checked', true)
                $('#edit_md_section_schedule_friday_from').val(time_from).prop('disabled', false)
                $('#edit_md_section_schedule_friday_to').val(time_to).prop('disabled', false)
            }

            if (s_temp_selected_days[i] == 'S') {
                $('#edit_md_section_schedule_chk_saturday').prop('checked', true)
                $('#edit_md_section_schedule_saturday_from').val(time_from).prop('disabled', false)
                $('#edit_md_section_schedule_saturday_to').val(time_to).prop('disabled', false)
            }
        }
    }

}

function s_prep() {

    payload = {
        request_type: "prep_section",
        payload_data: {},
    };

    _GET(con_sections, payload, (cb) => {

        output = ``;
        $.each(cb.teachers, (k, v) => {
            output += `
                <option value="`+ v.id + `">` + v.name + `</option>
            `;
        })
        $('#md_sections_sel_adviser').empty().append(output)
        $('#md_sections_edit_sel_adviser').empty().append(output)
        $('#md_section_schedule_teacher').empty().append(output)
        $('#edit_md_section_schedule_teacher').empty().append(output)

        output = ``;
        $.each(cb.strands, (k, v) => {
            output += `
                <option value="`+ v.id + `">` + v.strand + `</option>
            `;
        })
        $('#md_sections_sel_strand').empty().append(output)
        $('#md_sections_edit_sel_strand').empty().append(output)
    })

}
