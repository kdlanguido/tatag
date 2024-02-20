<?php
session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_student_grades';

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
                B.subject, 
                A.*
            FROM
        ' . $table_name . ' A
            LEFT JOIN
                tbl_subjects B
            ON
                A.subject_id = B.id
            WHERE
                card_id = :card_id
            ';

    $d = [
        'card_id' => $payload_data['card_id']
    ];

    $res = $db->read($q, $d);

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

    $max_count = count($_POST) - 1;

    $count = 1;

    $col_to_insert = '';
    $col_to_insert_d = '';

    foreach ($_POST as $key => $value) {
        if ($key != 'request_type') {

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

    $res = $db->update($q, $d);

    echo $res;
}

// CUSTOMIZED FUNCTIONS HERE
else if ($option == "customized") {
} else if ($option == "get_student_grades") {

    $db = new Database();

    $q = '
        SELECT 
            id
        FROM
            tbl_student_cards
        WHERE
            lrn = :lrn
        AND
            grade_level = :grade_level
    ';

    $d = [
        'lrn' =>  $payload_data['lrn'],
        'grade_level' => $payload_data['grade_level'],
    ];

    if ($db->read($q, $d)) {

        $card_id = $db->read($q, $d)[0]['id'];

        $q = '
            SELECT 
                grade,
                term,
                B.subject,
                D.name as section,
                concat(H.school_year_start," - ",H.school_year_end) as school_year
            FROM
                tbl_student_grades A
            LEFT JOIN
                tbl_subjects B
            ON
                A.subject_id = B.id
            LEFT JOIN
                tbl_student_cards E
            ON
                E.id = A.card_id
            LEFT JOIN
                tbl_section_students C
            ON
                E.lrn = C.lrn
            LEFT JOIN
                tbl_sections D
            ON
                D.id = C.section_id
            LEFT JOIN
                tbl_student_enrollments F
            ON
                F.lrn = C.lrn
            LEFT JOIN
                tbl_sys_enrollment G
            ON
                G.id = F.enrollment_id
            LEFT JOIN
                tbl_sys_sy H
            ON
                H.id = G.school_year   
            WHERE
                A.card_id = :card_id
            
        ';

        $d = [
            'card_id' =>  $card_id,
        ];

        $res = $db->read($q, $d);

        if ($res) {
            $callback_data = $res;
        } else {
            $callback_data = 0;
        }

        if (empty($res)) {
            $db->err_msg_empty();
        } else {
            echo $db->suc_msg_get($res);
        }
    } else {
        $db->err_msg_empty();
    }
}
