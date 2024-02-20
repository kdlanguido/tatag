<?php
session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_sys_sy';

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
                
        ' . $table_name;

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

    $rand_uniq = rand(1111, 9889);
    $file = $_FILES["file_uploaded"]["tmp_name"];
    $file_dir = "src/public/topic_files/u_" . $rand_uniq .  $_FILES["file_uploaded"]["name"];
    move_uploaded_file($file,  "../../public/topic_files/u_" . $rand_uniq .  $_FILES["file_uploaded"]["name"]);

    $db = new Database();

    $q = "
        INSERT INTO 
            tbl_topic_files(
                file_dir,
                filename,
                description
            )
        VALUES  
            (
                :file_dir,
                :filename,
                :description
            )
    ";

    $d = [
        "file_dir" => $file_dir,
        "filename" => $_POST['filename'],
        "description" => $_POST['description']
    ];

    $db->update($q, $d);

    $q = '
        SELECT 
            id
        FROM
            tbl_topic_files
        ORDER BY
            id 
        DESC LIMIT 1
    ';

    $id = $db->read($q)[0]['id'];

    $q = "
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
    ";

    $d = [
        "item_category" => "file",
        "item_parent_tbl_id" => $id,
        "subject_topic_id" => $_POST['subject_topic_id'],
    ];

    $res = $db->update($q, $d);
    echo $res;
} else if ($option == "update_file") {

    $rand_uniq = rand(1111, 9889);
    $file = $_FILES["file"]["tmp_name"];
    $file_dir = "src/public/topic_files/f_" . $rand_uniq .  $_FILES["file"]["name"];
    move_uploaded_file($file,  "../../public/topic_files/f_" . $rand_uniq .  $_FILES["file"]["name"]);

    $db = new Database();

    $q = "
            UPDATE  
                tbl_topic_files
            SET
                file_dir = :file_dir,
                description = :description,
                filename = :filename
            WHERE
                id = :id
    ";

    $d = [
        'file_dir' => $file_dir,
        'description' => $_POST['description'],
        'filename' => $_POST['filename'],
        'id'=>$_POST['file_id']
    ];

    echo $db->update($q, $d);
}
// CUSTOMIZED FUNCTIONS HERE
else if ($option == "customized") {
}
