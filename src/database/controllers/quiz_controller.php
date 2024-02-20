<?php
date_default_timezone_set('Asia/Manila');
session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_quiz';

include_once __DIR__ . "/../database.php";

$db = new Database();

$option = false;

$table_columns = [];

$db = new Database();

$q = 'SHOW COLUMNS FROM ' . $table_name;

$res = $db->read($q);

foreach ($res as $key => $value) {
    array_push($table_columns, $value['Field']);
}

if ($_GET) {
    $option = $db->VALIDATE_GET_REQUEST($_GET);
    $payload_data = $db->COLLECT_PAYLOAD($_GET);
} else if (isset($_POST)) {
    $option = $_POST['request_type'];
}

if (!$option) {
    echo json_encode(
        [
            'status' => 400,
            'msg' => 'Bad request.',
            'data' => []
        ]
    );
    exit;
} else if ($option == "get_records_all") {

    $db = new Database();

    $q = '
            SELECT 
                *
            FROM
                
        ' . $table_name . '
            WHERE
                is_archived = 0;
        ';

    $res = $db->read($q);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "archive_record") {

    $db = new Database();

    $q = '
        UPDATE
            ' . $table_name . '
        SET
            is_archived = 1
        WHERE
            id = :id
    ';

    $d = [
        'id' => $_POST['id']
    ];

    $res = $db->update($q, $d);

    echo $res;
} else if ($option == "get_record_by_id") {

    $db = new Database();

    $q = '
        SELECT 
            *
        FROM
            ' . $table_name . '
        WHERE
            id = :id
    ';

    $d = [
        'id' => $_POST['id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "delete_record") {

    $db = new Database();
    $q = '
        DELETE FROM
            ' . $table_name . '
        WHERE
            id = :id
    ';
    $d = [
        'id' => $_POST['id']
    ];
    $res = $db->update($q, $d);

    echo $res;
} else if ($option == "edit_record") {

    $db = new Database();
    $col_to_edit = '';
    $max_count = count($_POST) - 2;
    $count = 1;

    foreach ($_POST as $key => $value) {
        if ($key != 'request_type' && $key != 'edit_anchor') {

            if ($count < $max_count) {
                $col_to_edit .= $key . ' = :' . $key . ', ';
            } else {
                $col_to_edit .= $key . ' = :' . $key;
            }

            $d[$key] = $_POST[$key];
            $count++;
        }
    }

    $edit_anchor = explode(',', $_POST['edit_anchor']);

    $d[$edit_anchor[0]] = $edit_anchor[1];

    $q = '
        UPDATE
            ' . $table_name . '
        SET
            ' . $col_to_edit . '
        WHERE
            ' . $edit_anchor[0] . ' = :' . $edit_anchor[0] . ' 
    ';

    $res = $db->update($q, $d);

    echo $res;
} else if ($option == "add_record") {

    $db = new Database();

    $max_count = count($_POST) - 3;

    $count = 1;

    $col_to_insert = '';
    $col_to_insert_d = '';

    foreach ($_POST as $key => $value) {
        if ($key != 'request_type' && $key != 'subject_topic_id' && $key != 'item_category') {

            if ($count < $max_count) {
                $col_to_insert .= $key . ', ';
                $col_to_insert_d .= ':' . $key . ', ';
            } else {
                $col_to_insert .= $key;
                $col_to_insert_d .= ':' . $key;
            }

            $d[$key] = $_POST[$key];
            $count++;
        }
    }

    $q = '
        INSERT INTO
            ' . $table_name . '
            (' . $col_to_insert . ')
        VALUES
            (' . $col_to_insert_d . ')
    ';

    $x = $db->update($q, $d);

    $q = '
        SELECT 
            id
        FROM
            ' . $table_name . '
        ORDER BY 
            id 
        DESC LIMIT 1
    ';

    $y = $db->read($q);

    $q = '
        INSERT INTO
            tbl_subject_topic_items(
                item_category,
                item_parent_tbl_id,
                subject_topic_id
            )
        VALUES
            (
                :item_category, 
                :item_parent_tbl_id, 
                :subject_topic_id
            )
    ';

    $d = [
        'item_category' => $_POST['item_category'],
        'item_parent_tbl_id' =>  $y[0]['id'],
        'subject_topic_id' => $_POST['subject_topic_id'],
    ];

    $res = $db->update($q, $d);
    echo $res;
}

// CUSTOMIZED FUNCTIONS HERE
else if ($option == "customized") {
} else if ($option == "add_question") {

    $db = new Database();

    $q = "
            INSERT INTO 
                tbl_quiz_items(
                    question,
                    mark,
                    correct_answer,
                    quiz_id
                )
            VALUES  
                (
                    :question,
                    :mark,
                    :correct_answer,
                    :quiz_id
                )
    ";

    $d = [
        'question' => $_POST['question'],
        'mark' => $_POST['mark'],
        'correct_answer' => $_POST['correct_answer'],
        'quiz_id' => $_POST['quiz_id'],
    ];

    $db->update($q, $d);

    $q = '
            SELECT 
                *
            FROM
                tbl_quiz_items
            ORDER BY
                id
            DESC LIMIT 1 
        ';

    $res = $db->read($q)[0]['id'];

    $q = "
        INSERT INTO 
            tbl_quiz_options(
                option_value,
                quiz_question_id
            )
        VALUES  
            (
                :option_value,
                :quiz_question_id
            )
    ";

    foreach (explode(',', $_POST['quiz_options']) as $key => $value) {
        $d = [
            'option_value' => $value,
            'quiz_question_id' => $res,
        ];

        $db->update($q, $d);
    }

    echo 1;
} else if ($option == "get_questions") {

    $db = new Database();

    $q = '
            SELECT 
            *
            FROM
                tbl_quiz_items
            WHERE
                quiz_id = :quiz_id
        ';

    $d = [
        'quiz_id' => $payload_data['quiz_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "delete_quiz_question") {
    $db = new Database();

    $q = "
            DELETE FROM
                tbl_quiz_items
            WHERE
                id = :id
    ";

    $d = [
        'id' => $_POST['question_id'],
    ];

    echo $db->update($q, $d);
} else if ($option == "delete_quiz_answer") {
    $db = new Database();

    $q = "
            DELETE FROM
                tbl_quiz_options
            WHERE
                id = :id
    ";

    $d = [
        'id' => $_POST['quiz_answer_id'],
    ];

    echo $db->update($q, $d);
} else if ($option == "update_quiz_question") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_quiz_items
            SET  
                question = :question,
                mark = :mark,
                correct_answer = :correct_answer
            WHERE
                id = :id
    ";

    $d = [
        'question' => $_POST['question'],
        'mark' => $_POST['mark'],
        'correct_answer' => $_POST['correct_answer'],
        'id' => $_POST['id']
    ];

    echo $db->update($q, $d);
} else if ($option == "add_option") {

    $db = new Database();

    $q = "
        INSERT INTO 
            tbl_quiz_options(
                option_value,
                quiz_question_id
            )
        VALUES  
            (
                :option_value,
                :quiz_question_id
            )
    ";

    $d = [
        'option_value' => '',
        'quiz_question_id' => $_POST['quiz_question_id'],
    ];

    echo $db->update($q, $d);
} else if ($option == "load_quiz_question_options") {

    $db = new Database();

    $q = '
            SELECT 
                *
            FROM
                tbl_quiz_options
            WHERE
                quiz_question_id = :quiz_question_id
        ';

    $d = [
        'quiz_question_id' => $payload_data['quiz_question_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "option_save_changes") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_quiz_options
            SET  
                option_value = :option_value
            WHERE
                id = :id
    ";

    $d = [
        'option_value' => $_POST['option_value'],
        'id' => $_POST['quiz_answer_id'],
    ];

    echo $db->update($q, $d);
} else if ($option == "update_quiz") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_quiz
            SET  
                name = :name,
                description = :description,
                time_open = :time_open,
                time_close = :time_close,
                time_limit = :time_limit,
                attempts_allowed = :attempts_allowed
            WHERE
                id = :id
    ";

    $d = [
        'name' => $_POST['name'],
        'description' => $_POST['description'],
        'time_open' => $_POST['time_open'],
        'time_close' => $_POST['time_close'],
        'time_limit' => $_POST['time_limit'],
        'attempts_allowed' => $_POST['attempts_allowed'],
        'id' => $_POST['id']
    ];

    echo $db->update($q, $d);
} else if ($option == "hide_quiz") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_quiz
            SET  
                is_hidden = 1
            WHERE
                id = :id
    ";

    $d = [
        'id' => $_POST['id']
    ];

    echo $db->update($q, $d);
} else if ($option == "show_quiz") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_quiz
            SET  
                is_hidden = 0
            WHERE
                id = :id
    ";

    $d = [
        'id' => $_POST['id']
    ];

    echo $db->update($q, $d);
} else if ($option == "start_quiz") {

    $db = new Database();

    // GET QUIZ INFORMATION 
    $q = '
        SELECT 
            *
        FROM
            tbl_quiz
        WHERE
            id = :quiz_id
    ';

    $d = [
        'quiz_id' => $_POST['quiz_id']
    ];

    $quiz_information = $db->read($q, $d)[0];

    $q = "
        INSERT INTO
            tbl_student_quiz (
            quiz_id, 
            lrn, 
            attempts 
        )
        VALUES (
            :quiz_id, 
            :lrn, 
            :attempts
        )
    ";

    $d = [
        'quiz_id' => $_POST['quiz_id'],
        'lrn' => $_POST['lrn'],
        'attempts' => 1,
    ];

    $db->update($q, $d);

    $q = '
        SELECT 
            *
        FROM
            tbl_quiz_items
        WHERE
            quiz_id = :quiz_id
    ';

    $d = [
        'quiz_id' => $_POST['quiz_id']
    ];

    $quiz_items = $db->read($q, $d);

    $q = '
        SELECT 
            *
        FROM
            tbl_student_quiz
        WHERE
            quiz_id = :quiz_id
        AND
            lrn = :lrn
        ORDER BY
            id 
        DESC LIMIT 1 
    ';

    $d = [
        'quiz_id' => $_POST['quiz_id'],
        'lrn' => $_POST['lrn']
    ];

    $student_quiz_information = $db->read($q, $d)[0];

    $quiz = [
        "information" => $quiz_information,
        "items" => $quiz_items,
        "student_quiz_information" => $student_quiz_information,
        "time_remaining" => ($quiz_information['time_limit'] * 60),
    ];

    echo json_encode($quiz);
} else if ($option == "get_question_options") {

    $db = new Database();

    $q = '
            SELECT 
                *
            FROM
                tbl_quiz_options
            WHERE
                quiz_question_id = :quiz_question_id
        ';

    $d = [
        'quiz_question_id' => $payload_data['quiz_item_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "submit_quiz") {

    $db = new Database();

    $q = "
        SELECT
            id,
            correct_answer,
            mark
        FROM
            tbl_quiz_items
        WHERE
            quiz_id = :quiz_id
    ";

    $d = [
        'quiz_id' => $_POST['quiz_id'],
    ];

    $quiz_items_information = $db->read($q, $d);

    $quiz_items = [];

    foreach ($quiz_items_information as $key => $val) {
        $quiz_items[$val['id']] = [$val['correct_answer'], $val['mark']];
    }

    $answer_sheet = json_decode($_POST['answer_sheet']);

    $marks = 0;

    if ($answer_sheet) {
        foreach ($answer_sheet as $question_id => $student_answer) {
            if ($quiz_items[$question_id][0] == $student_answer) {
                $marks = (int) $quiz_items[$question_id][1] + $marks;
            }
        }
    }

    $q = "
        UPDATE
            tbl_student_quiz
        SET
            status = 'completed',
            date_updated = CURRENT_TIMESTAMP(),
            marks = :marks
        WHERE
            id = :id
    ";

    $d = [
        'id' => $_POST['student_quiz_id'],
        'marks' => $marks
    ];

    echo $db->update($q, $d);
} else if ($option == "student_view_quiz_information") {

    $db = new Database();

    $q = '
            SELECT 
                *,
                (   
                    SELECT 
                        SUM(mark)
                    FROM
                        tbl_quiz_items
                    WHERE
                        quiz_id = :quiz_id_1
                ) as score_all
            FROM
                tbl_quiz
            WHERE
                id = :quiz_id
        
    ';

    $d = [
        'quiz_id_1' => $payload_data['quiz_id'],
        'quiz_id' => $payload_data['quiz_id'],
    ];


    $quiz_information = $db->read($q, $d);

    $q = '
        SELECT 
            *,
            DATE_FORMAT(date_updated, "%W, %d %M %Y, %h:%i %p") as date_updated
        FROM
            tbl_student_quiz
        WHERE
            quiz_id = :quiz_id
        AND
            lrn = :lrn
    ';


    $d = [
        'quiz_id' => $payload_data['quiz_id'],
        'lrn'=>$_SESSION['profile_id']
    ];

    $quiz_summary = $db->read($q, $d);

    $res = [

        'quiz_information' =>  $quiz_information,
        'quiz_summary' =>  $quiz_summary,

    ];

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "check_running_attempt") {

    $db = new Database();

    $q = '
        SELECT 
            *
        FROM
            tbl_student_quiz
        WHERE
            quiz_id = :quiz_id
        AND
            lrn = :lrn
        AND
            status = "pending"
    ';

    $d = [
        'quiz_id' => $payload_data['quiz_id'],
        'lrn' => $payload_data['lrn']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "continue_attempt") {

    $db = new Database();

    $q1 = '
        SELECT 
            *
        FROM
            tbl_student_quiz
        WHERE
            quiz_id = :quiz_id
        AND
            lrn = :lrn
        AND
            status = "pending"
    ';

    $d1 = [
        'quiz_id' => $_POST['quiz_id'],
        'lrn' => $_POST['lrn']
    ];

    $q2 = '
        SELECT 
            *
        FROM
            tbl_quiz
        WHERE
            id = :quiz_id
    ';

    $d2 = [
        'quiz_id' => $_POST['quiz_id'],
    ];

    $quiz_attempt_information = $db->read($q1, $d1)[0];
    $quiz_information = $db->read($q2, $d2)[0];

    // COMPARE DATE NOW (date when trying to continue) and DATE OF QUIZ CLOSING
    if (date('Y-m-d') <= $quiz_information['time_close']) {

        $q = '
                SELECT 
                    *
                FROM
                    tbl_quiz_items
                WHERE
                    quiz_id = :quiz_id
            ';

        $d = [
            'quiz_id' => $_POST['quiz_id']
        ];

        $quiz_items = $db->read($q, $d);

        $q = '
                SELECT 
                    *
                FROM
                    tbl_student_quiz
                WHERE
                    quiz_id = :quiz_id
                AND
                    lrn = :lrn
                ORDER BY
                    id 
                DESC LIMIT 1 
            ';

        $d = [
            'quiz_id' => $_POST['quiz_id'],
            'lrn' => $_POST['lrn']
        ];

        $student_quiz_information = $db->read($q, $d)[0];

        /*  
            COMPUTE FOR TIME REMAINING
        
            TR - time remaining
            TU - time used | in seconds
            AS - attempt started
            TN - time now
            TL - time limit | in seconds

                                    HOURS                  MINUTES                SECONDS
            TU = TN - AS | ( (TN - AS)->h * 3600) + ( (TN - AS)->i * 60) +  ( (TN - AS)->s * 60) 
            TR = TL - TU
        */

        $TL = $quiz_information['time_limit'] * 60;

        $AS = new DateTime($student_quiz_information['attempt_started']);
        $TN = new DateTime();
        $TU = (($TN->diff($AS))->h * 3600) + (($TN->diff($AS))->i * 60) + (($TN->diff($AS))->s);
        $TR = $TL - $TU;

        $quiz = [
            "information" => $quiz_information,
            "items" => $quiz_items,
            "student_quiz_information" => $student_quiz_information,
            "time_remaining" => $TR
        ];

        if ($TR <= 0) {

            $db->update($q, $d);

            $q = "
                UPDATE
                    tbl_student_quiz
                SET
                    status = 'canceled',
                    date_updated = CURRENT_TIMESTAMP(),
                    marks = :marks
                WHERE
                    id = :id
            ";

            $d = [
                'id' => $student_quiz_information['id'],
                'marks' => 0
            ];

            $db->update($q, $d);

            echo 403;
        } else {
            echo json_encode($quiz);
        }
    } else {

        $q = "
            UPDATE
                tbl_student_quiz
            SET
                status = 'completed',
                date_updated = CURRENT_TIMESTAMP(),
                marks = :marks
            WHERE
                id = :id
        ";

        $d = [
            'id' => $student_quiz_information['id'],
            'marks' => 0
        ];

        $db->update($q, $d);

        echo 402;
    }
} else if ($option == "get_quiz_marks") {

    $db = new Database();

    $q = '
            SELECT 
                B.name,
                MAX(A.marks) as marks
            FROM
                tbl_student_quiz A
            LEFT JOIN
                tbl_quiz B
            ON
                B.id = A.quiz_id
            WHERE
                lrn = :lrn
            GROUP BY quiz_id
        ';

    $d = [
        'lrn' => $payload_data['lrn']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_quiz_results") {

    $db = new Database();

    $q = '
        SELECT 
            CONCAT(lastname," ",firstname) as name,
            MAX(A.marks) as marks,
            (
                SELECT
                    SUM(mark)
                FROM
                    tbl_quiz_items
                WHERE
                    quiz_id = :quiz_id_1
            ) as score_all
        FROM 
            tbl_student_quiz A
        LEFT JOIN 
            tbl_student_information B
        ON
            A.lrn = B.lrn
        WHERE 
            quiz_id = :quiz_id
    ';

    $d = [
        'quiz_id_1' => $payload_data['quiz_id'],
        'quiz_id' => $payload_data['quiz_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
}
