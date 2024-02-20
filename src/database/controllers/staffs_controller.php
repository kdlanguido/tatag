<?php

session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_staffs';

include_once __DIR__ . "/../database.php";

$db = new Database();

$option = false;

$table_columns = [];

$q = 'SHOW COLUMNS FROM ' . $table_name;

$res = $db->read($q);

foreach ($res as $key => $value) {
    array_push($table_columns, $value['Field']);
}

function generate_password()
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';

    for ($i = 0; $i < 10; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomString .= $characters[$index];
    }

    return $randomString;
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

    $db->update($q, $d);

    $q = '
            SELECT 
            id
            FROM
                tbl_staffs
            ORDER BY
                id
            DESC LIMIT 1
        ';


    $staff_id = $db->read($q)[0]['id'];

    $q = '
        INSERT INTO
            tbl_users
            (
                username,
                password,
                access_level,
                profile_id
            )
        VALUES
            (
                :username,
                :password,
                :access_level,
                :profile_id
            )
    ';

    $d = [
        'username' => $_POST['email'],
        'password' => generate_password(),
        'access_level' => 2,
        'profile_id' => 'ST_' . $staff_id,
    ];

    echo $db->update($q, $d);
}

// CUSTOMIZED FUNCTIONS HERE
else if ($option == "customized") {
} else if ($option == "get_staff_information") {

    $db = new Database();

    $q = '
            SELECT 
                *
            FROM
                tbl_staffs
            WHERE
                id = :id
        ';

    $d = [
        'id' => $payload_data['staff_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "staff_change_photo") {

    $db = new Database();

    $q = "
        UPDATE
            tbl_staffs
        SET
            photo_dir = :photo_dir
        WHERE
            id=:id
    ";

    $rand_uniq = rand(1111, 9889);
    $staff_photo = $_FILES["photo"]["tmp_name"];
    $staff_photo_dir = "src/public/user_pics/us_" . $rand_uniq .  $_FILES["photo"]["name"];
    move_uploaded_file($staff_photo,  "../../public/user_pics/us_" . $rand_uniq .  $_FILES["photo"]["name"]);

    $d = [
        'photo_dir' => $staff_photo_dir,
        'id' => $_POST['staff_id'],
    ];

    $res = $db->update($q, $d);
    echo $res;
}
