<?php

session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_sections';

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
                A.*,
                B.strand as strand_name,
                B.id as strand_id
            FROM
                tbl_sections A
            LEFT JOIN
                tbl_strands B
            ON
                A.strand = B.id
            
            WHERE
                is_archived = 0
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
            A.*,
            B.strand as strand_name,
            B.id as strand_id,
            concat(D.lastname,", ",D.firstname) as adviser_name
        FROM
            tbl_sections A
        LEFT JOIN
            tbl_section_students C
        ON
            A.id = C.section_id
        LEFT JOIN
            tbl_strands B
        ON
            A.strand = B.id
        LEFT JOIN
            tbl_teachers D
        ON
            D.id = A.adviser
        WHERE
            A.is_archived = 0
        AND
            lrn = :lrn

    ';

    $d = [
        'lrn' => $_SESSION['id']
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
else if ($option == "prep_section") {

    $db = new Database();

    $q = '
            SELECT 
                CONCAT(lastname,", ",firstname) as name,
                id
            FROM
                tbl_teachers
            WHERE
                is_archived = 0
           
        ';

    $res_data['teachers'] = $db->read($q);

    $q = '
            SELECT 
                id,
                strand
            FROM
                tbl_strands
            WHERE 
                strand 
            IS NOT NULL
           
    ';

    $res_data['strands'] = $db->read($q);


    if (empty($res_data)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res_data);
    }
} else if ($option == "get_subjects") {

    $db = new Database();

    $q = '
            SELECT 
                subject
            FROM
                tbl_strands A
            LEFT JOIN
                tbl_subjects B
            ON
                A.id = B.strand
            WHERE
                B.strand = (
                            SELECT 
                                id 
                            FROM 
                                tbl_strands 
                            WHERE 
                                strand = :strand_id
                )
            AND
                semester = :semester
        ';

    $d = [
        'strand_id' => $payload_data['strand_id'],
        'semester' => $payload_data['semester']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_subjects_jhs") {

    $db = new Database();

    $q = '
            SELECT 
                subject
            FROM
                tbl_strands A
            LEFT JOIN
                tbl_subjects B
            ON
                A.id = B.strand
            WHERE
                B.strand = (
                            SELECT 
                                id 
                            FROM 
                                tbl_strands 
                            WHERE 
                                grade_level = :grade_level
                )
           
        ';

    $d = [
        'strand_id' => $payload_data['strand_id'],
        'semester' => $payload_data['semester']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_section_subjects") {

    $db = new Database();

    $q = '
            SELECT 
                A.*,
                CONCAT(B.lastname,", ",B.firstname) as teacher_name,
                C.subject as subject_name
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
        'section_id' => $payload_data['section_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "add_schedule") {

    $db = new Database();

    $q = "
            INSERT INTO 
                tbl_section_schedule(section_id,subject,teacher,day,time)
            VALUES  
                (:section_id,:subject,:teacher,:day,:time)
    ";

    $d = [
        'section_id' => $_POST['section_id'],
        'subject' => $_POST['subject'],
        'teacher' => $_POST['teacher'],
        'day' => $_POST['day'],
        'time' => $_POST['time']
    ];

    echo $db->update($q, $d);
} else if ($option == "update_schedule") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_section_schedule
            SET  
                teacher = :teacher,
                day = :day,
                time = :time
            WHERE
                id = :id
    ";

    $d = [
        'id' => $_POST['id'],
        'teacher' => $_POST['teacher'],
        'day' => $_POST['day'],
        'time' => $_POST['time'],
    ];

    echo $db->update($q, $d);
} else if ($option == "get_sections_by_strand_level_semester") {

    $db = new Database();

    $q = '
            SELECT 
                *
            FROM
                tbl_sections
            WHERE
                grade_level = :grade_level
            AND
                strand = :strand
            AND
                semester = :semester
    ';

    $d = [
        'grade_level' => $payload_data['grade_level'],
        'semester' => $payload_data['semester'],
        'strand' => $payload_data['strand'],
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_schedule_by_section_id") {

    $db = new Database();

    $d = [
        'section_id' => $payload_data['section_id']
    ];

    $q = '
        SELECT 
            *,
            CONCAT(C.firstname," ",C.lastname) as teacher_name
        FROM
            tbl_section_schedule A
        LEFT JOIN
            tbl_subjects B
        ON
            A.subject = B.id
        LEFT JOIN 
            tbl_teachers C
        ON
            C.id = A.teacher
        WHERE
            section_id = :section_id
    ';

    $res = $db->read($q, $d);


    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
}
