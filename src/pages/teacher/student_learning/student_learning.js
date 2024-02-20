

con_sections = 'src/database/controllers/sections_controller.php';
con_subjects = 'src/database/controllers/subjects_controller.php';
con_teachers = 'src/database/controllers/teacher_controller.php';
con_quiz = 'src/database/controllers/quiz_controller.php';
con_topic_files = 'src/database/controllers/topic_files_controller.php';
con_topic_pages = 'src/database/controllers/topic_pages_controller.php';

var temp_section_id = '';
var temp_subject_id = '';

var md_sl_edit_page_content = null;
var md_sl_edit_page_description = null;

var md_sl_quiz_txt_quiz_description = null;
var md_sl_et_txt_topic_description = null;
var md_sl_add_topic_description = null;
var md_sl_et_topic_id = '';

let data_collections_subject_topics = {};
let data_collections_subject_topic_resources = {};

let data_collections_quiz_list = {};
let data_collections_file_list = {};
let data_collections_sections = {};
let data_collections_page_list = {};

let data_collections_quiz = {};
let data_collections_quiz_options = {};

let data_array_subject_topic_resource_ids = []
let data_array_question_options = {
    choice1: ''
};

$(document).ready(function () {

    sl_load_sections()

    $('.sl_mini_nav_category').click(function () {
        $('.sl_mini_nav_category').removeClass('selected_sl_category');
        $(this).addClass('selected_sl_category')
    })

    $('.f_sl_quiz_options').focusout(function () {
        data_array_question_options[$(this).attr('id')] = $(this).val();
        sl_load_question_options()
    })

    $('#sl_btn_add_topic').click(function () {
        $('#md_sl_add_topic').modal('show')
    })

    f_md_sl_et_txt_topic_description()
    f_md_sl_quiz_txt_quiz_description()
    f_md_sl_quiz_edit_txt_quiz_description()
    f_md_sl_add_page_content()
    f_md_sl_edit_page_content()
    f_md_sl_add_topic_description()
    f_sl_add_question_description()
    f_sl_edit_question_description()

})

$('#f_sl_add_options').click(function () {

    data_array_question_options_new_id = 'choice' + (Object.keys(data_array_question_options).length + 1);

    data_array_question_options[data_array_question_options_new_id] = ''

    sl_load_question_options()
})

$('.f_sl_quiz_delete_option').click(function () {
    $('#' + $(this).attr('target')).remove();
})

$('#md_sl_add_activity_btn_file').click(function () {
    $('#md_sl_add_file').modal('show');
})

$('#smnc_btn_subject').click(function () {
    $('.div_sl_category').hide();
    $('#div_sl_category_subject').fadeIn();
})

$('#smnc_btn_participants').click(function () {
    $('.div_sl_category').hide();
    $('#div_sl_category_participants').fadeIn();
    sl_load_participants()
})

$('#smnc_btn_grades').click(function () {
    $('.div_sl_category').hide();
    $('#div_sl_category_grades').fadeIn();
})

$('#btn_sl_close_subjects').click(function () {
    $('.sl_minipage').hide();
    $('#minipage_sl_home').fadeIn()
})

$('#btn_sl_close_add_question').click(function () {
    $('.sl_minipage').hide()
    $('#minipage_sl_open_subject').fadeIn(800)
    $('#minipage_sl_create_quiz').hide()
})

$('#btn_sl_close_opened_subjects').click(function () {
    $('.sl_minipage').hide();
    $('#minipage_sl_subjects').fadeIn()
})

$('#btn_minipage_sl_quiz_nav_quiz_information').click(function () {
    $('.div_micropage_sl_quiz').hide()
    $('#div_minipage_sl_quiz_information').fadeIn(800)
})

$('#btn_minipage_sl_quiz_nav_quiz_questions').click(function () {
    $('.div_micropage_sl_quiz').hide()
    $('#div_minipage_sl_quiz_questions').fadeIn(800)
})

$('#btn_minipage_sl_quiz_nav_quiz_results').click(function () {

    $('.div_micropage_sl_quiz').hide()
    $('#div_minipage_sl_quiz_results').fadeIn(800)
    sl_load_quiz_results($(this).attr('quiz_id'))
})

$('#sl_quiz_btn_add_quiz').click(function () {

    $('#minipage_sl_open_subject').hide();
    $('#minipage_sl_create_quiz').fadeIn(800)

    data_array_question_options = {
        choice1: ''
    };
})

$('#btn_sl_close_edit_question').click(function () {
    $('#minipage_sl_edit_quiz').hide();
    $('#minipage_sl_open_subject').fadeIn(800)
})

$('#f_sl_add_question_save').click(function () {

    quiz_options = [];
    quiz_id = $(this).attr('quiz_id')
    quiz_question_id = $(this).attr('quiz_question_id')

    $('.f_sl_quiz_options').each(function (k, v) {
        if ($(this).val()) {
            quiz_options.push($(this).val())
        }
    })

    payload = {
        request_type: "add_question",
        question: sl_add_question_description.root.innerHTML,
        mark: $('#f_sl_add_question_mark').val(),
        correct_answer: $("#f_sl_add_question_correct").val(),
        quiz_options: quiz_options,
        quiz_id: quiz_id
    };

    _POST(con_quiz, payload, (cb) => {

        if (cb == 1) {
            show_toast('Add Question', 'Question added successfully')
            $('.sl_minipage').hide()
            $('#minipage_sl_open_subject').fadeIn(800)
            $('#minipage_sl_create_quiz').hide()
            sl_load_quiz_questions(quiz_id)
        } else {
            show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
        }
    })

})

$('#f_sl_edit_add_options').click(function () {

    payload = {
        request_type: "add_option",
        quiz_question_id: $(this).attr('quiz_question_id')
    };

    _POST(con_quiz, payload, (cb) => {
        if (cb == 1) {
            show_toast('Add Option', 'Option added successfully.')
            sl_load_quiz_question_options($(this).attr('quiz_question_id'))
        } else {
            show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
        }
    })
})

$('#btn_sl_close_view_page').click(function () {
    $('#minipage_sl_open_subject').fadeIn(800)
    $('#minipage_sl_view_page').hide();
})

data_array_quiz_question_keys = [];

$('#sl_quiz_btn_preview_quiz').click(function () {
    $('.div_minipage_quiz_maintenance').hide();
    $('#div_minipage_sl_preview_quiz').fadeIn(800);
    $('#btn_sl_close_quiz_preview').show();
    $('#btn_sl_close_quiz_div').hide()
    $('#preview_quiz_next').attr('next_index', 0)
    data_array_quiz_question_keys = Object.keys(data_collections_quiz);
    $(this).attr('next_index', 1)
    $('#preview_quiz_question').empty().append(data_collections_quiz[data_array_quiz_question_keys[0]].name)
    $('#preview_quiz_title').empty().append('Question 1')
    sl_load_quiz_question_options(data_array_quiz_question_keys[0])
    sl_preview_quiz_options(data_array_quiz_question_keys[0])
})

$('#preview_quiz_next').click(function () {
    next_index = parseInt($(this).attr('next_index')) + 1;
    if (typeof data_collections_quiz[data_array_quiz_question_keys[next_index]] !== "undefined") {
        count = next_index + 1;
        $('#preview_quiz_back').attr('previous_index', $(this).attr('next_index'))
        $(this).attr('next_index', next_index)
        $('#preview_quiz_question').empty().append(data_collections_quiz[data_array_quiz_question_keys[next_index]].name)
        $('#preview_quiz_title').empty().append('Question ' + count)
        sl_load_quiz_question_options(data_array_quiz_question_keys[next_index])
        sl_preview_quiz_options(data_array_quiz_question_keys[next_index])
    }
})

$('#preview_quiz_back').click(function () {

    previous_index = parseInt($(this).attr('previous_index'));

    if (typeof data_collections_quiz[data_array_quiz_question_keys[previous_index]] !== "undefined") {
        $(this).attr('previous_index', previous_index)
        next_index = $('#preview_quiz_next').attr('next_index')
        $('#preview_quiz_title').empty().append('Question ' + next_index)
        $('#preview_quiz_question').empty().append(data_collections_quiz[data_array_quiz_question_keys[previous_index]].name)

        sl_load_quiz_question_options(data_array_quiz_question_keys[previous_index])
        sl_preview_quiz_options(data_array_quiz_question_keys[previous_index])

        next_index = $('#preview_quiz_next').attr('next_index') - 1;
        $('#preview_quiz_next').attr('next_index', next_index)
        previous_index = parseInt($(this).attr('previous_index')) - 1;
        $('#preview_quiz_back').attr('previous_index', previous_index)
    }
})

$('#btn_sl_close_quiz_preview').click(function () {
    $('#btn_sl_close_quiz_preview').hide();
    $('#btn_sl_close_quiz_div').show()
    $('.div_minipage_quiz_maintenance').hide();
    $('#div_minipage_sl_quiz').show();
})

function sl_load_quiz_results(quiz_id) {

    payload = {
        request_type: "get_quiz_results",
        payload_data: {
            quiz_id: quiz_id
        },
    };

    _GET(con_quiz, payload, (cb) => {

        output = ``;
        count = 1;

        $.each(cb, (k, v) => {

            output += `
                <tr>
                    <td class="text-center">`+ count + `</td>
                    <td>`+ v.name + `</td>
                    <td class="text-center">`+ v.marks + ` / ` + v.score_all + `</td>
                </tr>
            `;

            count = count + 1;
        })

        $('#tbl_teacher_quiz_results tbody').html(output)
    })
}

function sl_preview_quiz_options(quiz_question_id) {

    output = '';
    count = 1;
    $.each(data_collections_quiz_options[quiz_question_id].temp_array, (k, v) => {
        output += `
            <li>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault`+ count + `">
                    <label class="form-check-label" for="flexRadioDefault`+ count + `">
                        `+ v.option_value + `
                    </label>
                </div>
            </li>
        `;
    })

    $('#preview_quiz_options').empty().append(output)
}

function sl_load_participants() {

    payload = {
        request_type: "get_students_by_section_subject",
        payload_data: {
            section_id: temp_section_id,
            subject_id: temp_subject_id
        },
    };

    _GET(con_teachers, payload, (cb) => {
        output = ``;

        $.each(cb, (k, v) => {
            output += `
                <tr>
                    <td>`+ v.name + `</td>
                </tr>
            `;
        })

        $('#tbl_sl_participants tbody').html(output)
    })
}

function sl_load_quiz_questions(quiz_id) {

    payload = {
        request_type: "get_questions",
        payload_data: {
            quiz_id: quiz_id
        },
    };

    _GET(con_quiz, payload, (cb, status) => {

        if (status == 200) {

            $('.div_minipage_quiz_maintenance').hide();
            $('#sl_quiz_btn_preview_quiz').show().attr('quiz_id', quiz_id)
            $('#div_micropage_sl_quiz_alert').hide();
            $('#tbl_admin_quiz_questions').show()
            $('#div_minipage_sl_quiz').show();

            output = '';
            count = 0;

            $.each(cb, (k, v) => {
                count = count + 1;
                output += `
                    <tr>
                        <td class="text-center">`+ count + `</td>
                        <td>`+ v.question + `</td>
                        <td>
                            <button class="edit_quiz_question btn p-1" quiz_question_id="`+ v.id + `">
                                <i class="fa-solid fa-pencil"></i>
                            </button>
                            <button class="delete_quiz_question btn p-1" quiz_question_id="`+ v.id + `">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                `;

                data_collections_quiz[v.id] = {
                    name: v.question,
                    mark: v.mark,
                    correct_answer: v.correct_answer
                }
            })

            $('#tbl_admin_quiz_questions tbody').empty().append(output)

            $('.delete_quiz_question').unbind('click').click(function () {

                payload = {
                    request_type: 'delete_quiz_question',
                    question_id: $(this).attr('quiz_question_id')
                };

                _POST(con_quiz, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Delete question', 'Question deleted successfully')
                        sl_load_quiz_questions(quiz_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })

            })

            $('.edit_quiz_question').unbind('click').click(function () {
                sl_edit_question($(this).attr('quiz_question_id'))
            })

        } else {
            $('#div_micropage_sl_quiz_alert').show();
            $('#tbl_admin_quiz_questions').hide()
            $('#sl_quiz_btn_preview_quiz').hide()
        }
    })
}

function sl_edit_question(quiz_question_id) {

    $('#f_sl_edit_add_options').attr('quiz_question_id', quiz_question_id)

    $('#minipage_sl_open_subject').hide();
    $('#minipage_sl_edit_quiz').fadeIn(800)

    output_quiz_options = '';
    output_quiz_answers = '';

    sl_edit_question_description.root.innerHTML = data_collections_quiz[quiz_question_id].name
    $('#f_sl_edit_question_mark').val(data_collections_quiz[quiz_question_id].mark)

    sl_load_quiz_question_options(quiz_question_id)

    $('#f_sl_edit_question_correct').val(data_collections_quiz[quiz_question_id].correct_answer)

    $('#btn_sl_edit_question_save').unbind('click').click(function () {

        payload = {
            request_type: "update_quiz_question",
            id: quiz_question_id,
            question: sl_edit_question_description.root.innerHTML,
            mark: $('#f_sl_edit_question_mark').val(),
            correct_answer: $('#f_sl_edit_question_correct').val()
        };

        _POST(con_quiz, payload, (cb) => {
            if (cb == 1) {
                show_toast('Update Question', 'Question updated successfully.')
                sl_load_quiz_questions($('#btn_sl_edit_question_save').attr('quiz_id'))

            } else {
                show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
            }
        })

    })

}

function sl_load_quiz_question_options(quiz_question_id) {

    payload = {
        request_type: "load_quiz_question_options",
        payload_data: {
            quiz_question_id: quiz_question_id
        },
    };

    _GET(con_quiz, payload, (cb) => {

        count = 1;

        correct_answer = '';
        output_quiz_options = '';
        output_quiz_answers = '';
        temp_array = [];

        $.each(cb, (k, v) => {
            temp_array.push({
                option_value: v.option_value,
                id: v.id
            })

            output_quiz_options += `
                <div id="f_sl_quiz_options`+ count + `">
                    <div class="d-flex justify-content-between">
                        <label for="">Choice `+ count + `</label> 
                        <div>
                            <button target="edit_choice`+ count + `" quiz_answer_id="` + v.id + `"  class="btn p-0 f_sl_quiz_save_option_edit">
                                <i class="fa-solid fa-floppy-disk"></i>
                            </button>
                            <button target="f_sl_quiz_options`+ count + `" quiz_answer_id="` + v.id + `" class="btn p-0  f_sl_quiz_delete_option_edit">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                    <textarea rows="2" class="form-control mb-2 f_sl_quiz_options_edit" id="edit_choice`+ count + `">` + v.option_value + `</textarea>
                </div>
            `;

            output_quiz_answers += `
                <option value="`+ v.id + `">Choice ` + count + `</option>
            `;

            count = count + 1;
        })

        data_collections_quiz_options[quiz_question_id] = {
            temp_array
        }

        $('#f_sl_edit_question_answers').html(output_quiz_options)
        $('#f_sl_edit_question_correct').html(output_quiz_answers)

        $('.f_sl_quiz_delete_option_edit').unbind('click').click(function () {

            target = $(this).attr('target')

            $('#md_sl_delete_quiz_answer').modal('show')

            $('#md_sl_delete_quiz_answer_btn_confirm').attr('quiz_answer_id', $(this).attr('quiz_answer_id')).unbind('click').click(function () {

                payload = {
                    request_type: "delete_quiz_answer",
                    quiz_answer_id: $(this).attr('quiz_answer_id')
                };

                _POST(con_quiz, payload, (cb) => {
                    if (cb == 1) {
                        count = 1;
                        show_toast('Delete Option', 'Option deleted successfully.')
                        $('#' + target).remove();
                        sl_load_quiz_question_options(quiz_question_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })

            })
        })

        $('.f_sl_quiz_save_option_edit').unbind('click').click(function () {

            payload = {
                request_type: "option_save_changes",
                quiz_answer_id: $(this).attr('quiz_answer_id'),
                option_value: $('#' + $(this).attr('target')).val()
            };

            _POST(con_quiz, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Update Option', 'Option changed successfully.')
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        })

    })

}

function sl_load_question_options() {

    output_correct = '';
    output = '';
    count = 0;

    $.each(data_array_question_options, (k, v) => {

        count = count + 1;

        output += `
            <div id="div`+ k + `">
                <div class="d-flex justify-content-between">
                    <label for="">Choice `+ count + `</label>
                    <button target="div`+ k + `" target_key="` + k + `" class="btn p-0 text-danger f_sl_quiz_delete_option"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <textarea rows="2" class="form-control mb-2 f_sl_quiz_options" id="`+ k + `">` + v + `</textarea>
            </div>
        `
        output_correct += `
            <option value="`+ v + `">` + k.toUpperCase() + `</option>
        `;
    })

    $('#f_sl_add_question_answers').empty().append(output);
    $('#f_sl_add_question_correct').empty().append(output_correct)

    $('.f_sl_quiz_delete_option').click(function () {
        delete data_array_question_options[$(this).attr('target_key')]
        $('#' + $(this).attr('target')).remove();
        sl_load_question_options()
    })

    $('.f_sl_quiz_options').focusout(function () {
        data_array_question_options[$(this).attr('id')] = $(this).val();
        sl_load_question_options()
    })
}

function f_md_sl_et_txt_topic_description() {

    var md_sl_et_txt_topic_description_toolbarOptions = [
        // [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'test': 'test' }],
    ];

    md_sl_et_txt_topic_description = new Quill('#md_sl_et_txt_topic_description', {
        theme: 'snow',
        modules: {
            toolbar: md_sl_et_txt_topic_description_toolbarOptions
        },
    });

    var md_sl_et_txt_topic_description_toolbar = md_sl_et_txt_topic_description.getModule('toolbar');
    md_sl_et_txt_topic_description_toolbar.addHandler('image', img_et_upload);

    function img_et_upload() {

        let input = document.createElement("input");
        input.type = "file";
        input.setAttribute("multiple", true);
        input.setAttribute("accept", "image/*");
        input.onchange = function (event) {

            var file = this.files[0]

            payload = {
                request_type: "upload_image",
                img: file,
                topic_id: md_sl_et_topic_id
            };

            _POST(con_subjects, payload, (cb) => {
                if (cb) {
                    var selection = md_sl_et_txt_topic_description.getSelection(true);
                    md_sl_et_txt_topic_description.insertEmbed(selection.index, 'image', cb);
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        };
        input.click();
    }
}

function f_md_sl_quiz_txt_quiz_description() {

    var md_sl_quiz_txt_quiz_description_toolbarOptions = [
        // [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'test': 'test' }],
    ];

    md_sl_quiz_txt_quiz_description = new Quill('#md_sl_quiz_txt_quiz_description', {
        theme: 'snow',
        modules: {
            toolbar: md_sl_quiz_txt_quiz_description_toolbarOptions
        },
    });

    var md_sl_quiz_txt_quiz_description_toolbar = md_sl_quiz_txt_quiz_description.getModule('toolbar');
    md_sl_quiz_txt_quiz_description_toolbar.addHandler('image', img_et_upload);

    function img_et_upload() {

        let input = document.createElement("input");
        input.type = "file";
        input.setAttribute("multiple", true);
        input.setAttribute("accept", "image/*");
        input.onchange = function (event) {

            var file = this.files[0]

            payload = {
                request_type: "upload_image",
                img: file,
                topic_id: md_sl_et_topic_id
            };

            _POST(con_subjects, payload, (cb) => {
                if (cb) {
                    var selection = md_sl_quiz_txt_quiz_description.getSelection(true);
                    md_sl_quiz_txt_quiz_description.insertEmbed(selection.index, 'image', cb);
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        };
        input.click();
    }
}

function f_md_sl_quiz_edit_txt_quiz_description() {

    var md_sl_quiz_edit_txt_quiz_description_toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

    ];

    md_sl_quiz_edit_txt_quiz_description = new Quill('#md_sl_quiz_edit_txt_quiz_description', {
        theme: 'snow',
        modules: {
            toolbar: md_sl_quiz_edit_txt_quiz_description_toolbarOptions
        },
    });

    var md_sl_quiz_edit_txt_quiz_description_toolbar = md_sl_quiz_edit_txt_quiz_description.getModule('toolbar');
    md_sl_quiz_edit_txt_quiz_description_toolbar.addHandler('image', img_et_upload);

    function img_et_upload() {

        let input = document.createElement("input");
        input.type = "file";
        input.setAttribute("multiple", true);
        input.setAttribute("accept", "image/*");
        input.onchange = function (event) {

            var file = this.files[0]

            payload = {
                request_type: "upload_image",
                img: file,
                topic_id: md_sl_et_topic_id
            };

            _POST(con_subjects, payload, (cb) => {
                if (cb) {
                    var selection = md_sl_quiz_edit_txt_quiz_description.getSelection(true);
                    md_sl_quiz_edit_txt_quiz_description.insertEmbed(selection.index, 'image', cb);
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        };
        input.click();
    }
}

function f_md_sl_add_topic_description() {

    var md_sl_add_topic_description_toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

    ];

    md_sl_add_topic_description = new Quill('#md_sl_add_topic_description', {
        theme: 'snow',
        modules: {
            toolbar: md_sl_add_topic_description_toolbarOptions
        },
    });

    var md_sl_add_topic_description_toolbar = md_sl_add_topic_description.getModule('toolbar');
    md_sl_add_topic_description_toolbar.addHandler('image', img_et_upload);

    function img_et_upload() {

        let input = document.createElement("input");
        input.type = "file";
        input.setAttribute("multiple", true);
        input.setAttribute("accept", "image/*");
        input.onchange = function (event) {

            var file = this.files[0]

            payload = {
                request_type: "upload_image",
                img: file,
                topic_id: md_sl_et_topic_id
            };

            _POST(con_subjects, payload, (cb) => {
                if (cb) {
                    var selection = md_sl_add_topic_description.getSelection(true);
                    md_sl_add_topic_description.insertEmbed(selection.index, 'image', cb);
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        };
        input.click();
    }
}

function f_md_sl_add_file_description() {

    var md_sl_add_file_description_toolbarOptions = [
        [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
    ];

    md_sl_add_file_description = new Quill('#md_sl_add_file_description', {
        theme: 'snow',
        modules: {
            toolbar: md_sl_add_file_description_toolbarOptions
        },
    });
}

function f_md_sl_add_page_content() {

    var md_sl_add_page_content_toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'image'],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ];

    md_sl_add_page_content = new Quill('#md_sl_add_page_content', {
        theme: 'snow',
        modules: {
            toolbar: md_sl_add_page_content_toolbarOptions
        },
    });

    var md_sl_add_page_content_toolbar = md_sl_add_page_content.getModule('toolbar');
    md_sl_add_page_content_toolbar.addHandler('image', f_md_sl_add_page_content_upload);

    function f_md_sl_add_page_content_upload() {

        let input = document.createElement("input");
        input.type = "file";
        input.setAttribute("multiple", true);
        input.setAttribute("accept", "image/*");
        input.onchange = function (event) {

            var file = this.files[0]

            payload = {
                request_type: "upload_image",
                img: file,
                topic_id: $('#md_sl_add_page_btn_confirm').attr('subject_topic_id')
            };

            _POST(con_subjects, payload, (cb) => {
                if (cb) {
                    var selection = md_sl_add_page_content.getSelection(true);
                    md_sl_add_page_content.insertEmbed(selection.index, 'image', cb);
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        };
        input.click();
    }
}

function f_md_sl_edit_page_content() {

    var md_sl_edit_page_content_toolbarOptions = [
        [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'test': 'test' }, 'image']
    ];

    md_sl_edit_page_content = new Quill('#md_sl_edit_page_content', {
        theme: 'snow',
        modules: {
            toolbar: md_sl_edit_page_content_toolbarOptions
        },
    });

    var md_sl_edit_page_content_toolbar = md_sl_edit_page_content.getModule('toolbar');
    md_sl_edit_page_content_toolbar.addHandler('image', f_md_sl_edit_page_content_upload);

    function f_md_sl_edit_page_content_upload() {

        let input = document.createElement("input");
        input.type = "file";
        input.setAttribute("multiple", true);
        input.setAttribute("accept", "image/*");
        input.onchange = function (event) {

            var file = this.files[0]

            payload = {
                request_type: "upload_image",
                img: file,
                topic_id: $('#md_sl_edit_page_btn_confirm').attr('subject_topic_id')
            };

            _POST(con_subjects, payload, (cb) => {
                if (cb) {
                    var selection = md_sl_edit_page_content.getSelection(true);
                    md_sl_edit_page_content.insertEmbed(selection.index, 'image', cb);
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        };
        input.click();
    }
}

function f_sl_add_question_description() {

    var f_sl_add_question_description_toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'test': 'test' }],
    ];

    sl_add_question_description = new Quill('#f_sl_add_question_description', {
        theme: 'snow',
        modules: {
            toolbar: f_sl_add_question_description_toolbarOptions
        },
    });
}

function f_sl_edit_question_description() {

    var f_sl_edit_question_description_toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'test': 'test' }],
    ];

    sl_edit_question_description = new Quill('#f_sl_edit_question_description', {
        theme: 'snow',
        modules: {
            toolbar: f_sl_edit_question_description_toolbarOptions
        },
    });
}

function sl_load_sections() {

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
                        <button class="sl_view_section_subjects btn p-1" section_id="`+ v.id + `" >
                        <i class="fa-solid fa-gear"></i>
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

        $('#tbl_sl_sections tbody').empty().append(output)

        $('.sl_view_section_subjects').unbind('click').click(function () {
            $('.sl_minipage').hide();
            $('#minipage_sl_subjects').fadeIn();
            temp_section_id = $(this).attr('section_id')

            view_section_subjects($(this).attr('section_id'))
        })
    })
}

function sl_load_subject_topic_resources(subject_topic_id) {

    payload = {
        request_type: "get_subject_topic_items",
        payload_data: {
            subject_topic_id: subject_topic_id
        }
    };

    _GET(con_subjects, payload, (cb) => {

        quiz_output = '';
        file_output = '';
        page_output = '';

        $.each(cb, (k, v) => {

            if (k == 'quizzes') {

                $.each(v, (quiz_id, quiz_info) => {

                    if (quiz_info.length > 0) {

                        quiz_output += `
                        <div class="border p-3 rounded d-flex flex-row justify-content-between mb-1" quiz_name="`+ quiz_info[0].name + `">
                            <div class="d-flex justify-content-center align-items-center quiz_card" quiz_id="`+ quiz_info[0].id + `">
                                <div class=" d-flex justify-content-center align-items-center text-center border rounded me-3" style="background:#9564F6; color:#fff; height:40px; width:40px; font-size:10pt;">
                                   <i class="fa-solid fa-pen-to-square"></i>
                                </div>

                                  `+ quiz_info[0].name + `
                             
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn pe-0 text-muted" style="border:none!important;" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_edit_topic_quiz" quiz_id="` + quiz_info[0].id + `"><i class="fa-solid fa-pencil fa-fw pe-1"></i> Edit</a>
                                        </li>
                                        <li>`
                        if (quiz_info[0].is_hidden == 1) {
                            quiz_output += `
                                                <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_show_topic_quiz" quiz_id="` + quiz_info[0].id + `">
                                                <i class="fa-regular fa-eye fa-fw pe-1"></i> Show
                                                </a>    
                                            `
                        } else {
                            quiz_output += `
                                                <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_hide_topic_quiz" quiz_id="` + quiz_info[0].id + `">
                                                <i class="fa-regular fa-eye-slash fa-fw pe-1"></i> Hide
                                                </a>    
                                            `
                        }

                        quiz_output += `
                                        </li>
                                        <li>
                                            <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_delete_topic_quiz" quiz_id="` + quiz_info[0].id + `"><i class="fa-solid fa-trash-can fa-fw pe-1"></i> Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;

                        data_collections_quiz_list[quiz_info[0].id] = {
                            attempts_allowed: quiz_info[0].attempts_allowed,
                            description: quiz_info[0].description,
                            name: quiz_info[0].name,
                            time_close: quiz_info[0].time_close,
                            time_limit: quiz_info[0].time_limit,
                            time_open: quiz_info[0].time_open
                        }
                    }
                })
            }

            if (k == 'files') {
                $.each(v, (file_id, file_info) => {
                    if (file_info.length > 0) {
                        file_output += `
                            <div class="border rounded p-3 mb-1">
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="d-flex flex-row justify-content-between">
                                        <a class="d-flex justify-content-center align-items-center text-center border rounded me-3 file_card" href="`+ file_info[0].file_dir + `" download="` + file_info[0].filename + `" file_id="` + file_info[0].id + `" style="background:#F25F6E; color:#fff; height:40px; width:40px; font-size:10pt;">
                                            <i class="fa-regular fa-file"></i> 
                                        </a>
                                        <div class="d-flex flex-column justify-content-between mb-2">
                                            <span>`+ file_info[0].filename + `</span>
                                            <small class="text-muted">`+ file_info[0].description + `</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="dropdown">
                                            <button class="btn pe-0 text-muted" style="border:none!important;" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_edit_topic_file" file_id="` + file_id + `"><i class="fa-solid fa-pencil fa-fw pe-1"></i> Edit</a>
                                                </li>
                                                <li>
                                                    <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_hide_topic_file" file_id="` + file_id + `"><i class="fa-regular fa-eye fa-fw pe-1"></i> Hide</a>
                                                </li>
                                                <li>
                                                    <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn  ct_delete_topic_file" file_id="` + file_id + `"><i class="fa-solid fa-trash-can fa-fw pe-1"></i> Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;

                        data_collections_file_list[file_id] = {
                            name: file_info[0].filename,
                            description: file_info[0].description,
                        }
                    }
                })
            }

            if (k == 'pages') {

                $.each(v, (page_id, page_info) => {
                    if (page_info.length > 0) {
                        page_output += `
                            <div class="border rounded p-3  mb-1">
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="d-flex flex-row justify-content-between">
                                        <div class="d-flex justify-content-center align-items-center text-center border rounded me-3 page_card" page_id="`+ page_info[0].id + `" style="background:#437EF7; color:#fff; height:40px; width:40px; font-size:10pt;">
                                            <i class="fa-regular fa-file-lines"></i>
                                        </div>
                                        <div class="d-flex flex-column justify-content-between">
                                            <span>`+ page_info[0].name + `</span>
                                            <small class="text-muted">`+ page_info[0].description + `</small>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="dropdown">
                                            <button class="btn pe-0 text-muted" style="border:none!important;" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_edit_page_topic" subject_topic_page_id="` + page_id + `"><i class="fa-solid fa-pencil fa-fw pe-1"></i> Edit</a>
                                                </li>
                                                <li>
                                                    <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_hide_page_topic" subject_topic_page_id="` + page_id + `"><i class="fa-regular fa-eye fa-fw pe-1"></i> Hide</a>
                                                </li>
                                                <li>
                                                    <a subject_topic_id="`+ subject_topic_id + `" class="dropdown-item btn ct_delete_page_topic" subject_topic_page_id="` + page_id + `"><i class="fa-solid fa-trash-can fa-fw pe-1"></i> Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;

                        data_collections_page_list[page_info[0].id] = {
                            name: page_info[0].name,
                            description: page_info[0].description,
                            content: page_info[0].page_content,
                        }
                    }
                })
            }
        })

        if (quiz_output == '') {
            quiz_output = '<div class="div_add_rsc p-2 my-1 " style="border:1px solid #5F6D7E; border-radius:5px; background:#FAFBFC; font-weight:400; font-size:10pt;">No quizzes available yet.</div>';
        }

        if (file_output == '') {
            file_output = '<div class="div_add_rsc p-2 my-1 " style="border:1px solid #5F6D7E; border-radius:5px; background:#FAFBFC; font-weight:400; font-size:10pt;">No files available yet.</div>';
        }

        if (page_output == '') {
            page_output = '<div class="div_add_rsc p-2 my-1 " style="border:1px solid #5F6D7E; border-radius:5px; background:#FAFBFC; font-weight:400; font-size:10pt;">No pages available yet.</div>';
        }

        $('#d_' + subject_topic_id + '_rsc').empty().append('<h6 class="mt-1 text-muted">Quizzes</h6>' + quiz_output + '<h6 class="mt-3 text-muted">Files</h6>' + file_output + '<h6 class="mt-3 text-muted">Pages</h6>' + page_output)

        $('.quiz_card').unbind('click').click(function () {

            $('.div_sl_category').hide()
            $('#div_minipage_sl_opened_subject_nav').hide()
            $('#btn_sl_close_opened_subjects').hide();
            $('#btn_sl_close_quiz_div').fadeIn(800)
            $('#div_minipage_sl_quiz').fadeIn(800)
            $('#div_sl_view_quiz').fadeIn(800)

            $('#f_sl_add_question_save').attr('quiz_id', $(this).attr('quiz_id'))
            $('#btn_sl_edit_question_save').attr('quiz_id', $(this).attr('quiz_id'))

            $('#txt_sl_quiz_attempts').text(data_collections_quiz_list[$(this).attr('quiz_id')].attempts_allowed)
            $('#txt_sl_quiz_time_limit').text(data_collections_quiz_list[$(this).attr('quiz_id')].time_limit + " min/s")

            $('#btn_sl_close_quiz_div').attr('subject_name', $('#minipage_sl_subject_name').text()).unbind('click').click(function () {
                $('.sl_minipage').hide()
                $('#minipage_sl_open_subject').fadeIn(800)

                $('.div_sl_category').show();
                $('#div_minipage_sl_opened_subject_nav').fadeIn(800)
                $('#btn_sl_close_opened_subjects').fadeIn(800);

                $('#btn_sl_close_quiz_div').hide()
                $('#div_minipage_sl_quiz').hide()
                $('#div_sl_view_quiz').hide()

                $('#minipage_sl_subject_name').text($(this).attr('subject_name'))
                view_subject_topics($(this).attr('subject_id'))
            })

            $('#minipage_sl_subject_name').text($(this).attr('quiz_name'))

            $('#btn_minipage_sl_quiz_nav_quiz_results').attr('quiz_id', $(this).attr('quiz_id'))

            $('#btn_sl_edit_quiz_detail').attr('quiz_id', $(this).attr('quiz_id')).unbind('click').click(function () {
                $('#md_sl_edit_quiz_detail').modal('show')
            })


            sl_load_quiz_questions($('#f_sl_add_question_save').attr('quiz_id'))
        })

        // QUIZ
        $('.ct_edit_topic_quiz').unbind('click').click(function () {

            $('#md_sl_edit_quiz').modal('show')

            md_sl_quiz_edit_txt_quiz_description.root.innerHTML = data_collections_quiz_list[$(this).attr('quiz_id')].description

            $('#md_sl_quiz_edit_txt_quiz_name').val(data_collections_quiz_list[$(this).attr('quiz_id')].name)
            $('#md_sl_quiz_edit_open_quiz').val(data_collections_quiz_list[$(this).attr('quiz_id')].time_open)
            $('#md_sl_quiz_edit_close_quiz').val(data_collections_quiz_list[$(this).attr('quiz_id')].time_close)
            $('#md_sl_quiz_edit_time_limit').val(data_collections_quiz_list[$(this).attr('quiz_id')].time_limit)
            $('#md_sl_quiz_edit_txt_attempts_allowed').val(data_collections_quiz_list[$(this).attr('quiz_id')].attempts_allowed)

            $('#md_sl_quiz_edit_btn_confirm').attr('quiz_id', $(this).attr('quiz_id')).unbind('click').click(function () {

                payload = {
                    request_type: "update_quiz",
                    name: $('#md_sl_quiz_edit_txt_quiz_name').val(),
                    description: md_sl_quiz_edit_txt_quiz_description.root.innerHTML,
                    time_open: $('#md_sl_quiz_edit_open_quiz').val(),
                    time_close: $('#md_sl_quiz_edit_close_quiz').val(),
                    time_limit: $('#md_sl_quiz_edit_time_limit').val(),
                    attempts_allowed: $('#md_sl_quiz_edit_txt_attempts_allowed').val(),
                    id: $('#md_sl_quiz_edit_btn_confirm').attr('quiz_id')
                };

                _POST(con_quiz, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Update Quiz', 'Quiz updated successfully.')
                        sl_load_subject_topic_resources(subject_topic_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })

            })


        })

        $('.ct_hide_topic_quiz').unbind('click').click(function () {

            payload = {
                request_type: "hide_quiz",
                id: $(this).attr('quiz_id')
            };

            _POST(con_quiz, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Hide Quiz', 'Quiz hidden successfully.')
                    sl_load_subject_topic_resources(subject_topic_id)

                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })

        })

        $('.ct_show_topic_quiz').unbind('click').click(function () {
            payload = {
                request_type: "show_quiz",
                id: $(this).attr('quiz_id')
            };

            _POST(con_quiz, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Show Quiz', 'Quiz shown successfully.')
                    sl_load_subject_topic_resources(subject_topic_id)

                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })
        })

        $('.ct_delete_topic_quiz').unbind('click').click(function () {
            $('#md_sl_delete_quiz').modal('show')
            $('#md_sl_delete_quiz_btn_confirm').attr('quiz_id', $(this).attr('quiz_id')).unbind('click').click(function () {

                payload = {
                    request_type: "archive_record",
                    id: $(this).attr('quiz_id')
                };

                _POST(con_quiz, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Archive Quiz', 'Quiz deleted successfully.')
                        sl_load_subject_topic_resources(subject_topic_id)

                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })
        })

        // FILE
        $('.ct_edit_topic_file').unbind('click').click(function () {
            $('#md_sl_edit_file').modal('show')
            $('#md_sl_edit_file_name').val(data_collections_file_list[$(this).attr('file_id')].name)
            $('#md_sl_edit_file_description').val(data_collections_file_list[$(this).attr('file_id')].description)

            file_id = $(this).attr('file_id')

            $('#md_sl_edit_file_btn_confirm').unbind('click').click(function () {

                payload = {
                    request_type: "update_file",
                    file_id: file_id,
                    filename: $('#md_sl_edit_file_name').val(),
                    description: $('#md_sl_edit_file_description').val(),
                    file: $('#md_sl_edit_file_uploaded_file')[0].files[0]
                };

                _POST(con_topic_files, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Update File', 'File has been updated successfully')
                        sl_load_subject_topic_resources(subject_topic_id)

                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })



        })

        $('.ct_hide_topic_file').unbind('click').click(function () { })

        $('.ct_delete_topic_file').unbind('click').click(function () {
            subject_topic_id = $(this).attr('subject_topic_id')

            $('#md_sl_delete_file').modal('show')
            $('#md_sl_delete_file_btn_confirm').attr('file_id', $(this).attr('file_id')).unbind('click').click(function () {

                payload = {
                    request_type: "delete_file",
                    file_id: $(this).attr('file_id')
                };

                _POST(con_topic_pages, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Delete File', 'File deleted successfully')
                        sl_load_subject_topic_resources(subject_topic_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })
        })

        // PAGE
        $('.page_card').unbind('click').click(function () {

            page_id = $(this).attr('page_id');

            $('#minipage_sl_open_subject').hide()
            $('#minipage_sl_view_page').fadeIn(800)
            $('#minipage_sl_view_page_name').text(data_collections_page_list[page_id].name)
            $('#minipage_sl_view_page_content').empty().append(data_collections_page_list[page_id].content)

            get_page_videos(page_id)

            $('#btn_sl_page_add_video').attr('page_id', page_id).unbind('click').click(function () {
                $('#md_sl_add_video_to_page').modal('show')
            })

            // SAVE UPLOAD VIDEO
            $('#md_sl_add_video_to_page_btn_confirm').unbind('click').click(function () {

                payload = {
                    request_type: "upload_video",
                    title: $('#avtp_title').val(),
                    video: $('#avtp_video')[0].files[0],
                    subject_topic_page_id: page_id,
                };

                _POST(con_topic_pages, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Upload Video ', 'Video has been uploaded successfully.')
                        get_page_videos(page_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })

            // PREVIEW IMAGE
            $('#minipage_sl_view_page_content').find('img').click(function () {
                $('#md_sl_preview_image').modal('show')
                $('#img_preview').attr('src', $(this).attr('src'))
            })
        })

        // GO BACK HERE LATER 
        $('.ct_edit_page_topic').unbind('click').click(function () {
            page_id = $(this).attr('subject_topic_page_id');
            subject_topic_id = $(this).attr('subject_topic_id');

            $('#md_sl_edit_page').modal('show')
            $('#md_sl_edit_page_file_name').val(data_collections_page_list[$(this).attr('subject_topic_page_id')].name)
            $('#md_sl_edit_page_description').val(data_collections_page_list[$(this).attr('subject_topic_page_id')].description)
            md_sl_edit_page_content.root.innerHTML = data_collections_page_list[$(this).attr('subject_topic_page_id')].content

            $('#md_sl_edit_page_btn_confirm').unbind('click').click(function () {

                payload = {
                    request_type: "edit_record",
                    edit_anchor: ['id', page_id],
                    name: $('#md_sl_edit_page_file_name').val(),
                    description: $('#md_sl_edit_page_description').val(),
                    page_content: md_sl_edit_page_content.root.innerHTML
                };

                _POST(con_topic_pages, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Edit Page', 'Page updated successfully.')
                        sl_load_subject_topic_resources(subject_topic_id)

                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })
        })

        $('.ct_delete_page_topic').unbind('click').click(function () {

            page_id = $(this).attr('subject_topic_page_id');
            topic_id = $(this).attr('subject_topic_id');

            $('#md_sl_delete_page').modal('show')
            $('#md_sl_delete_page_btn_confirm').unbind('click').click(function () {
                payload = {
                    request_type: "delete_page",
                    page_id: page_id
                };

                _POST(con_topic_pages, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Delete Page', 'Page has been deleted successfully')
                        sl_load_subject_topic_resources(topic_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })
        })
    })
}

function view_section_subjects(section_id) {

    payload = {
        request_type: "get_section_subjects",
        payload_data: {
            section_id: section_id
        },
    };

    _GET(con_sections, payload, (cb) => {
        output = '';
        $.each(cb, (k, v) => {
            output += `
            <tr>
                <td>`+ v.teacher_name + `</td>
                <td>`+ v.subject_name + `</td>
                <td class="text-center">
                    <button class="sl_open_subject btn p-1" subject_id="`+ v.subject + `" subject_name="` + v.subject_name + `" section_id="` + v.id + `" >
                        <i class="fa-solid fa-gear"></i>
                    </button>
                </td>
            </tr>
            `;
        })

        $('#minipage_sl_subjects tbody').empty().append(output)
        $('.sl_open_subject').unbind('click').click(function () {
            $('.sl_minipage').hide()
            $('#minipage_sl_open_subject').fadeIn()
            $('#minipage_sl_subject_name').text($(this).attr('subject_name'))
            $('#btn_sl_close_quiz_div').attr('subject_id', $(this).attr('subject_id'))
            $('#sl_btn_add_topic').attr('subject_id', $(this).attr('subject_id'))
            data_array_subject_topic_resource_ids = []
            temp_subject_id = $(this).attr('subject_id')
            view_subject_topics($(this).attr('subject_id'))
            sl_load_participants()
        })
    })
}

function get_page_videos(subject_topic_page_id) {

    payload = {
        request_type: "get_page_videos",
        payload_data: {
            subject_topic_page_id: subject_topic_page_id
        },
    };

    _GET(con_topic_pages, payload, (cb) => {
        output = ``;
        $.each(cb, (k, v) => {
            output += `

                <div class="col mb-2 px-0 pe-3">
                    <div class="d-flex justify-content-between mb-1">
                        <label class="" style="font-weight:600; font-size:10pt; color:#444549">`+ v.title + `</label>
                        <a class="text-danger page_delete_video" style="font-size:11pt;" video_id="`+ v.id + `"><i class="fa-regular fa-trash-can"></i></a>
                    </div>
                    <video width="100%" controls>
                        <source src="`+ v.vid_dir + `" type="video/mp4">
                    </video>
                </div>
            `
        })

        if (output == '') {
            output = `
                <div class="col p-2" style="border:1px solid #5F6D7E; border-radius:5px; background:#FAFBFC; font-weight:400; font-size:10pt; width:100%">No resources available yet.</div>
            `;
        }

        $('#minipage_sl_view_page_videos').html(output)

        $('.page_delete_video').unbind('click').click(function () {
            $('#md_sl_delete_video').modal('show')
            $('#md_sl_delete_video_btn_confirm').attr('video_id', $(this).attr('video_id')).unbind('click').click(function () {

                payload = {
                    request_type: "delete_video",
                    video_id: $(this).attr('video_id')
                };

                _POST(con_topic_pages, payload, (cb) => {
                    if (cb == 1) {
                        get_page_videos(subject_topic_page_id)
                        show_toast('Delete Video', 'Video deleted successfully')
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })

            })
        })
    })

}

function view_subject_topics(subject_id) {

    payload = {
        request_type: "get_subject_topics",
        payload_data: {
            subject_id: subject_id
        }
    };

    _GET(con_subjects, payload, (cb, status) => {

        output = ``;

        $.each(cb, (k, v) => {

            data_collections_subject_topics[v.id] = v;

            output += `
                <div class="d-flex justify-content-between pt-2 border-top">
                    <div class="mb-3">
                        <h4>`+ v.name + `</h4>
                        <small class="text-muted">`+ v.description + `</small>
                    </div>
                   
                    <div class="dropdown">
                        <button class="btn text-muted" style="border:none!important;" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item btn ct_edit_topic" subject_topic_id="`+ v.id + `"><i class="fa-solid fa-pencil fa-fw pe-1"></i> Edit</a>
                            </li>
                            <li>
                                <a class="dropdown-item btn ct_hide_topic" subject_topic_id="`+ v.id + `"><i class="fa-regular fa-eye fa-fw pe-1"></i> Hide</a>
                            </li>
                            <li>
                                <a class="dropdown-item btn ct_delete_topic" subject_topic_id="`+ v.id + `"><i class="fa-solid fa-trash-can fa-fw pe-1"></i> Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
 
                <div id="d_`+ v.id + `_rsc"></div>
               
                <div class="div_add_rsc p-3 my-1 mb-5" style="border:1px solid #0A1881; border-radius:5px; background:#F3F9FE; font-weight:400">
                    <button class="me-2 ct_btn_add_rsc" style="background:transparent; border:1px solid #0A1881;" subject_topic_id="`+ v.id + `"><i class="fa-solid fa-plus"></i></button>
                    Add an activity or resource
                </div>

            `;

            data_array_subject_topic_resource_ids.push(v.id)
        })

        if (status == 200) {

            $('#div_card_topic').empty().append(output)

            for (var c = 0; c < data_array_subject_topic_resource_ids.length; c++) {
                sl_load_subject_topic_resources(data_array_subject_topic_resource_ids[c])
            }

            $('.ct_edit_topic').unbind('click').click(function () {

                if (data_collections_subject_topics[$(this).attr('subject_topic_id')].description) {
                    md_sl_et_txt_topic_description.root.innerHTML = data_collections_subject_topics[$(this).attr('subject_topic_id')].description
                } else {
                    md_sl_et_txt_topic_description.root.innerHTML = '';
                }

                md_sl_et_topic_id = $(this).attr('subject_topic_id')

                $('#md_sl_edit_topic_btn_confirm').attr('subject_topic_id', $(this).attr('subject_topic_id'))
                $('#md_sl_et_txt_topic_name').val(data_collections_subject_topics[$(this).attr('subject_topic_id')].name)
                $('#md_sl_edit_topic').modal('show')
            })

            $('.ct_hide_topic').unbind('click').click(function () {
                $('#md_sl_edit_topic').modal('show')
            })

            $('.ct_delete_topic').unbind('click').click(function () {
                $('#md_sl_delete_topic').modal('show')
                $('#md_sl_delete_topic_btn_confirm').attr('subject_topic_id', $(this).attr('subject_topic_id')).unbind('click').click(function () {

                    payload = {
                        request_type: "archive_subject_topic",
                        id: $(this).attr('subject_topic_id')
                    };

                    _POST(con_subjects, payload, (cb) => {
                        if (cb == 1) {
                            show_toast('Delete Topic', 'Topic deleted successfully')
                            view_subject_topics(subject_id)

                        } else {
                            show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                        }
                    })

                })
            })

            $('.ct_btn_add_rsc').unbind('click').click(function () {
                $('#md_sl_add_activity').modal('show')
                $('#md_sl_quiz_btn_confirm').attr('subject_topic_id', $(this).attr('subject_topic_id'))
                $('#md_sl_add_file_btn_confirm').attr('subject_topic_id', $(this).attr('subject_topic_id'))
                $('#md_sl_add_page_btn_confirm').attr('subject_topic_id', $(this).attr('subject_topic_id'))
            })

            $('#md_sl_edit_topic_btn_confirm').unbind('click').click(function () {
                payload = {
                    request_type: "edit_subject_topics",
                    id: $(this).attr('subject_topic_id'),
                    name: $('#md_sl_et_txt_topic_name').val(),
                    description: md_sl_et_txt_topic_description.root.innerHTML,
                };

                _POST(con_subjects, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Update Successful', 'Topic updated successfully.')
                        view_subject_topics(subject_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected | student_learning.js@218', 'error')
                    }
                })
            })

            $('#md_sl_add_activity_btn_quiz').unbind('click').click(function () {
                $('#md_sl_add_quiz').modal('show')
            })

            $('#md_sl_add_activity_btn_page').unbind('click').click(function () {
                $('#md_sl_add_page').modal('show')
            })

            // SAVE QUIZ
            $('#md_sl_quiz_btn_confirm').unbind('click').click(function () {

                payload = {
                    request_type: "add_record",
                    name: $('#md_sl_quiz_txt_quiz_name').val(),
                    description: md_sl_quiz_txt_quiz_description.root.innerHTML,
                    time_open: $('#md_sl_quiz_open_quiz').val(),
                    time_close: $('#md_sl_quiz_close_quiz').val(),
                    time_limit: $('#md_sl_quiz_time_limit').val(),
                    attempts_allowed: $('#md_sl_quiz_txt_attempts_allowed').val(),
                    item_category: 'quiz',
                    subject_topic_id: $(this).attr('subject_topic_id')
                };

                _POST(con_quiz, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Add quiz', 'Quiz added successfully.')
                        view_subject_topics(subject_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })

            // SAVE FILE
            $('#md_sl_add_file_btn_confirm').unbind('click').click(function () {
                payload = {
                    request_type: "add_record",
                    description: $('#md_sl_add_file_description').val(),
                    // description: md_sl_add_file_description.root.innerHTML,
                    filename: $('#md_sl_add_file_name').val(),
                    file_uploaded: $('#md_sl_add_file_uploaded_file').prop('files')[0],
                    subject_topic_id: $(this).attr('subject_topic_id'),
                };

                _POST(con_topic_files, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Add File', 'File added successfully.')
                        sl_load_subject_topic_resources($(this).attr('subject_topic_id'))
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })

            // SAVE PAGE
            $('#md_sl_add_page_btn_confirm').unbind('click').click(function () {

                subject_topic_id = $(this).attr('subject_topic_id')
                payload = {
                    request_type: "add_record",
                    name: $('#md_sl_add_page_file_name').val(),
                    page_content: md_sl_add_page_content.root.innerHTML,
                    description: $('#md_sl_add_page_description').val(),
                    subject_topic_id: subject_topic_id,
                };

                _POST(con_topic_pages, payload, (cb) => {
                    if (cb == 1) {
                        show_toast('Add Page', 'Page added successfully.')
                        sl_load_subject_topic_resources(subject_topic_id)
                    } else {
                        show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                    }
                })
            })



        } else {
            $('#div_card_topic').empty().append(`
                <div class="div_add_rsc p-3 my-1" style="border:1px solid #DEE2E6; border-radius:10px; background:#FAFBFC; font-weight:400">
                    No topics in this subject yet.
                </div>
            `)
        }

        $('#md_sl_add_topic_btn_confirm').unbind('click').click(function () {

            payload = {
                request_type: "add_subject_topic",
                name: $('#md_sl_add_topic_file_name').val(),
                description: md_sl_add_topic_description.root.innerHTML,
                subject_id: subject_id
            };

            _POST(con_subjects, payload, (cb) => {
                if (cb == 1) {
                    show_toast('Add subject topic', 'Subject topic added successfully.')
                    view_subject_topics(subject_id)
                } else {
                    show_toast('Contact Administrator', 'Post Failed : No rows affected', 'error')
                }
            })
        })
    })

}
