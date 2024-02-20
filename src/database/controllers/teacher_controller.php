<?php

session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_teachers';

include_once __DIR__ . "/../database.php";

$db = new Database();

$option = false;

$table_columns = [];

$db = new Database();

$q = 'SHOW COLUMNS FROM ' . $table_name;

$res = $db->read($q);

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
} else if ($option == "edit_record") {

    $db = new Database();

    $col_to_edit = '';

    $max_count = count($_POST) - 2;

    $count = 1;

    foreach ($_POST as $key => $value) {
        if ($key != 'request_type' && $key != 'edit_anchor' && $key != 'photo_dir' && $key != 'date_joined' && $key != 'is_archived') {

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

    $max_count = count($_POST) - 2;

    $count = 1;

    $col_to_insert = '';
    $col_to_insert_d = '';

    foreach ($_POST as $key => $value) {
        if ($key != 'request_type' && $key != 'subjects_teaching') {

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

    $r = $db->update($q, $d);

    $q = '
            SELECT 
            id
            FROM
                tbl_teachers
            ORDER BY
                id
            DESC LIMIT 1
        ';


    $teacher_id = $db->read($q)[0]['id'];

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
        'profile_id' => 'T_' . $teacher_id,
    ];

    $db->update($q, $d);

    $q = '
        INSERT INTO
            tbl_teacher_subjects
            (
                teacher_id,
                subject_id
            )
        VALUES
            (
                :teacher_id,
                :subject_id
            )
    ';

    $subjects = json_decode($_POST['subjects_teaching'], true);


    foreach ($subjects as $key => $value) {
        $d = [
            'teacher_id' => $teacher_id,
            'subject_id' => $value['id'],
        ];


        $db->update($q, $d);
    }

    echo 1;
}

// CUSTOMIZED FUNCTIONS HERE
else if ($option == "customized") {
} else if ($option == "get_teacher_information") {

    $db = new Database();

    $q = '
            SELECT 
            *
            FROM
                tbl_teachers
            WHERE
                id = :id
        ';

    $d = [
        'id' => $payload_data['teacher_id']
    ];

    $teacher_information = $db->read($q, $d);

    $q = '
        SELECT 
        *
        FROM
            tbl_teacher_subjects A
        LEFT JOIN 
            tbl_subjects B
        ON
            A.subject_id = B.id
        WHERE
            teacher_id = :id
    ';

    $d = [
        'id' => $payload_data['teacher_id']
    ];

    $subjects = $db->read($q, $d);

    $data = [
        'teacher_information' => $teacher_information,
        'subjects' => $subjects,
    ];

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo json_encode(
            [
                'status' => 200,
                'msg' => 'Get Success...',
                'data' => base64_encode(json_encode($data))
            ]
        );
    }
} else if ($option == "teacher_change_photo") {

    $db = new Database();

    $q = "
        UPDATE
            tbl_teachers
        SET
            photo_dir = :photo_dir
        WHERE
            id=:id
    ";

    $rand_uniq = rand(1111, 9889);
    $teacher_photo = $_FILES["photo"]["tmp_name"];
    $teacher_photo_dir = "src/public/user_pics/u_" . $rand_uniq .  $_FILES["photo"]["name"];
    move_uploaded_file($teacher_photo,  "../../public/user_pics/u_" . $rand_uniq .  $_FILES["photo"]["name"]);

    $d = [
        'photo_dir' => $teacher_photo_dir,
        'id' => $_POST['teacher_id'],
    ];

    $res = $db->update($q, $d);
    echo $res;
} else if ($option == "teacher_change_password") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_users
            SET  
                password = :password
            WHERE
                profile_id = :id
    ";

    $d = [
        'password' => $_POST['password'],
        'id' => $_POST['id'],
    ];
    echo $db->update($q, $d);
} else if ($option == "get_application_information") {

    $db = new Database();

    $q = '
            SELECT 
                *
            FROM
                tbl_teachers
            WHERE
                id = :id
        ';

    $d = [
        'id' => $payload_data['id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_my_sections") {

    $db = new Database();

    $q = '
        SELECT 
            B.name,
            C.subject,
            C.id as subject_id,
            B.grade_level,
            day,
            time,
            B.id
        FROM 
            tbl_section_schedule A 
        LEFT JOIN
            tbl_sections B
        ON
            A.section_id = B.id
        LEFT JOIN 
            tbl_subjects C
        ON
            A.subject = C.id
        WHERE 
            adviser = :id
    ';

    $d = [
        'id' => $payload_data['id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_my_sections_student") {

    $db = new Database();

    $student_card_data = [];
    $student_card_ids = [];

    $q = '
        SELECT 
            CONCAT(C.lastname," ",C.firstname," ",C.middlename) as student_name,
            C.lrn
        FROM 
            tbl_section_students A 
        LEFT JOIN
            tbl_sections B
        ON
            A.section_id = B.id
        LEFT JOIN
            tbl_student_information C
        ON
            C.lrn = A.lrn
        WHERE 
            A.section_id = :section_id
        AND
            B.adviser = :adviser_id
    ';

    $d = [
        'section_id' => $payload_data['section_id'],
        'adviser_id' => $payload_data['adviser_id']
    ];

    $students = $db->read($q, $d);

    $q = '
        SELECT
            id,
            lrn
        FROM
            tbl_student_cards
        WHERE
            lrn = :lrn
        AND
            grade_level = :grade_level
    ';

    foreach ($students as $key => $value) {

        $d = [
            'lrn' => $value['lrn'],
            'grade_level' => $payload_data['grade_level'],
        ];

        if ($db->read($q, $d)) {
            $student_card_ids[$value['lrn']] = $db->read($q, $d)[0];
        }
    }

    $q = '
        SELECT 
            *
        FROM
            tbl_student_grades
        WHERE
            card_id = :card_id
        AND
            subject_id = :subject_id
    ';

    foreach ($student_card_ids as $key => $value) {

        $d = [
            'card_id' => $value['id'],
            'subject_id' => $payload_data['subject_id'],
        ];

        if ($db->read($q, $d)) {

            if (array_key_exists($value['lrn'], $student_card_data)) {
                $temp = $student_card_data[$value['lrn']];
                array_push($temp, $db->read($q, $d));
                $student_card_data[$value['lrn']] = $temp;
            } else {
                $temp = [];
                array_push($temp, $db->read($q, $d));
                $student_card_data[$value['lrn']] = $temp;
            }
        }
    }

    $callback_data = [
        'students' => $students,
        'card_data' => $student_card_data,
        'card_ids' => $student_card_ids,
    ];

    if (empty($callback_data)) {
        $db->err_msg_empty($callback_data);
    } else {
        echo $db->suc_msg_get($callback_data);
    }
} else if ($option == "add_grade") {

    $db = new Database();

    foreach (json_decode($_POST['grades'])[0] as $term => $grade) {

        $q = '
            SELECT 
                *
            FROM
                tbl_student_grades
            WHERE
                card_id = :card_id
            AND
                subject_id = :subject_id
            AND
                term = :term
        ';

        $d = [
            'card_id' => $_POST['card_id'],
            'subject_id' => $_POST['subject_id'],
            'term' => $term,
        ];

        $res = $db->read($q, $d);

        if (count($res)) {
            $q = '
                UPDATE
                    tbl_student_grades
                SET  
                    grade = :grade
                WHERE
                    card_id = :card_id
                AND
                    subject_id = :subject_id
                AND
                    term = :term
            ';
        } else {

            $q = '
                INSERT INTO 
                    tbl_student_grades(
                        card_id,
                        subject_id,
                        term,
                        grade
                    )
                VALUES  
                    (
                        :card_id,
                        :subject_id,
                        :term,
                        :grade
                    )
            ';
        }

        $d = [
            'card_id' => $_POST['card_id'],
            'subject_id' => $_POST['subject_id'],
            'term' => $term,
            'grade' => $grade,
        ];

        $db->update($q, $d);
    }

    echo 1;
} else if ($option == "get_students_by_section_subject") {

    $db = new Database();

    $q = '
            SELECT 
                concat(lastname," ",firstname) as name
            FROM
                tbl_student_information A
            LEFT JOIN
                tbl_section_students B
            ON
                A.lrn = B.lrn
            LEFT JOIN
                tbl_section_schedule C
            ON
                C.section_id = B.section_id
            WHERE
                C.section_id = :section_id
            AND
                C.subject = :subject_id
        ';

    $d = [
        'section_id' => $payload_data['section_id'],
        'subject_id' => $payload_data['subject_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
}
