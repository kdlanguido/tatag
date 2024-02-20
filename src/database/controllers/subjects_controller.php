<?php

session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_subjects';

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
} else if ($option == "get_record_by_strand_id") {

    $db = new Database();

    $q = '
        SELECT 
            *
        FROM
            ' . $table_name . '
        WHERE
            strand = :id
    ';

    $d = [
        'id' => $payload_data['strand']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_record_by_strand_id_shs") {

    $db = new Database();

    $q = '
        SELECT 
            *
        FROM
            ' . $table_name . '
        WHERE
            strand = :strand
        AND
            semester = :semester
    ';

    $d = [
        'strand' => $payload_data['strand'],
        'semester' => $payload_data['semester'],
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "delete_subject_from_strand") {

    $db = new Database();

    $q = '
        DELETE FROM
            tbl_subjects
        WHERE
            id = :id
    ';

    $d = [
        'id' => $_POST['id']
    ];

    $res = $db->update($q, $d);

    echo $res;
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
else if ($option == "get_subject_topics") {

    $db = new Database();
    $q = '
            SELECT 
                *
            FROM
                tbl_subject_topics
            WHERE
                subject_id = :subject_id
            AND
                is_archived = 0
        ';

    $d = [
        'subject_id' => $payload_data['subject_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_subject_topic_items") {

    $db = new Database();

    $quizzes = [];
    $files = [];
    $pages = [];

    $q = '
            SELECT 
                *
            FROM
                tbl_subject_topic_items
            WHERE
                subject_topic_id = :subject_topic_id
    ';

    $d = [
        'subject_topic_id' => $payload_data['subject_topic_id']
    ];

    $res = $db->read($q, $d);

    foreach ($res as $key => $value) {

        if ($value['item_category'] == 'quiz') {

            $q = '
                    SELECT 
                        *
                    FROM
                        tbl_quiz
                    WHERE
                        id = :id
                    AND
                        is_archived = 0;
            ';

            $d = [
                'id' => $value['item_parent_tbl_id']
            ];

            $quizzes[$value['item_parent_tbl_id']] = $db->read($q, $d);
        } else if ($value['item_category'] == 'file') {

            $q = '
                    SELECT 
                        *
                    FROM
                        tbl_topic_files
                    WHERE
                        id = :id
            ';

            $d = [
                'id' => $value['item_parent_tbl_id']
            ];

            $files[$value['item_parent_tbl_id']] = $db->read($q, $d);
        } else if ($value['item_category'] == 'page') {

            $q = '
                    SELECT 
                        *
                    FROM
                        tbl_topic_pages
                    WHERE
                        id = :id
            ';

            $d = [
                'id' => $value['item_parent_tbl_id']
            ];

            $pages[$value['item_parent_tbl_id']] = $db->read($q, $d);
        }
    }

    $data = [
        'quizzes' => $quizzes,
        'files' => $files,
        'pages' => $pages,
    ];

    if (empty($data)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($data);
    }
} else if ($option == "edit_subject_topics") {

    $db = new Database();

    $q = '
            UPDATE
                tbl_subject_topics
            SET  
                name = :name,
                description = :description
            WHERE
                id = :id
    ';

    $d = [
        'name' => $_POST['name'],
        'description' => $_POST['description'],
        'id' => $_POST['id']
    ];

    echo $db->update($q, $d);
} else if ($option == "upload_image") {
    $img = $_FILES["img"]["tmp_name"];
    $img_dir = "src/public/topic_imgs/id_" . $_FILES["img"]["name"];
    move_uploaded_file($img,  "../../public/topic_imgs/id_" . $_FILES["img"]["name"]);
    echo $img_dir;
} else if ($option == "get_student_subjects") {

    $db = new Database();

    $q = '
            SELECT 
                section_id
            FROM
                tbl_section_students
            WHERE
                lrn = :lrn
        ';

    $d = [
        'lrn' => $payload_data['lrn']
    ];

    $section_id = $db->read($q, $d)[0]['section_id'];

    $q = '
        SELECT 
            C.id as subject_id,
            C.subject,
            concat(firstname," ",lastname) as teacher_name
        FROM
            tbl_section_schedule A
        LEFT JOIN
            tbl_teachers B
        ON
            A.teacher = B.id
        LEFT JOIN
            tbl_subjects C
        ON
            A.subject = C.id
        WHERE
            section_id = :section_id
    ';

    $d = [
        'section_id' => $section_id
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "add_subject_topic") {

    $db = new Database();

    $q = "
            INSERT INTO 
            tbl_subject_topics(
                name,
                description,
                subject_id
            )
            VALUES(
                :name,
                :description,
                :subject_id
            )
    ";

    $d = [
        'name' => $_POST['name'],
        'description' => $_POST['description'],
        'subject_id' => $_POST['subject_id']
    ];

    echo $db->update($q, $d);
} else if ($option == "archive_subject_topic") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_subject_topics
            SET  
                is_archived = 1
            WHERE
                id = :id
    ";

    $d = [
        'id' => $_POST['id']
    ];

    echo $db->update($q, $d);
}
