<?php

session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_strands';

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
        ORDER BY
            grade_level
        ASC
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

    $db->update($q, $d);
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
else if ($option == "get_strand_by_grade_level") {

    $db = new Database();

    $q = '
            SELECT 
            *
            FROM
                tbl_strands
            WHERE
                grade_level = :grade_level
        ';

    $d = [
        'grade_level' => $payload_data['grade_level']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "customized") {
}
