<?php
session_start();

include_once __DIR__ . "/../database.php";

$db = new Database();

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
} else if ($option == "get_enrollment_information") {

    $db = new Database();

    $q = '
        SELECT 
            *,
            CONCAT(B.school_year_start," - ",B.school_year_end) as "school_year_display",
            A.id as enrollment_id
        FROM
            tbl_sys_enrollment A
        LEFT JOIN
            tbl_sys_sy B
        ON
            A.school_year = B.id
        WHERE
            A.status = "active"
    ';

    $res = $db->read($q);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "start_enrollment") {

    $db = new Database();

    $q = '
        INSERT INTO
            tbl_sys_enrollment(
                school_year,
                semester,
                started_by,
                status
            )
        VALUES(
            :school_year,
            :semester,
            :started_by,
            :status
        )
    ';

    $d = [
        'school_year' => $_POST['school_year'],
        'semester' => $_POST['semester'],
        'started_by' => $_SESSION['id'],
        'status' => 'active',
    ];

    $res = $db->update($q, $d);
    echo $res;
} else if ($option == "stop_enrollment") {

    $db = new Database();

    $q = '
        UPDATE
            tbl_sys_enrollment
        SET
            status = :status
    ';

    $d = [
        'status' => 'inactive',
    ];

    $db->update($q, $d);
} else if ($option == "add_enrollment") {

    $db = new Database();

    $q = "
        INSERT INTO 
            tbl_student_enrollments(
                lrn,
                enrollment_id
            )
        VALUES  
            (
                :lrn,
                :enrollment_id
            )
    ";

    $d = [
        'lrn' => $_POST['lrn'],
        'enrollment_id' => $_POST['enrollment_id']
    ];

    echo $db->update($q, $d);
} else if ($option == "get_student_enrollments") {

    $db = new Database();

    $q = '
            SELECT 
                *,
                A.status as enrollment_status
            FROM
                tbl_student_enrollments A
            LEFT JOIN
                tbl_student_information B
            ON
                A.student_id = B.application_no
            LEFT JOIN
                tbl_student_applications C
            ON
                C.id = A.student_id
            WHERE
                A.student_id = :student_id
        ';

    $d = [
        'student_id' => $payload_data['student_id']
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_all_enrollments") {

    $db = new Database();

    $q = '
            SELECT 
                *,
                A.status as enrollment_status
            FROM
                tbl_student_enrollments A
            LEFT JOIN
                tbl_student_information B
            ON
                A.lrn = B.lrn
            LEFT JOIN
                tbl_student_applications C
            ON
                C.lrn = A.lrn
        ';

    $res = $db->read($q);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_student_enrollment_information") {

    $db = new Database();

    $q = '
            SELECT 
                *,
                A.status as enrollment_status
            FROM
                tbl_student_enrollments A
            LEFT JOIN
                tbl_student_applications B
            ON
                A.lrn = B.lrn
            WHERE
                A.lrn = :lrn
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
} else if ($option == "enroll_a_student") {

    $db = new Database();

    $q = '
        SELECT 
            id
        FROM
            tbl_sys_enrollment
        WHERE
            status = "active"
    ';

    $enrollment_id = $db->read($q)[0]['id'];

    $q = '
        SELECT 
            grade_level
        FROM
            tbl_student_applications
        WHERE
            lrn = :lrn
    ';

    $d = [
        'lrn' => $_POST['lrn']
    ];

    $grade_level = $db->read($q, $d)[0]['grade_level'];

    $q = '
        UPDATE
            tbl_student_enrollments
        SET  
            status = "enrolled",
            date_enrolled = CURDATE()
        WHERE
            enrollment_id = :enrollment_id
        AND
            lrn = :lrn
        ';

    $d = [
        'lrn' => $_POST['lrn'],
        'enrollment_id' => $enrollment_id
    ];

    $db->update($q, $d);

    $q = '
        INSERT INTO
            tbl_section_students 
            (
                lrn, 
                section_id
            )
        VALUES 
            (
                :lrn,
                :section_id
            )
        ';

    $d = [
        'lrn' => $_POST['lrn'],
        'section_id' => $_POST['section_id'],
    ];

    $db->update($q, $d);

    $q = '
        INSERT INTO
            tbl_student_cards 
            (
                lrn, 
                grade_level
            )
        VALUES 
            (
                :lrn,
                :grade_level
            )
    ';

    $d = [
        'lrn' => $_POST['lrn'],
        'grade_level' => $grade_level,
    ];

    echo $db->update($q, $d);
} else if ($option == "getEnrollmentStatus") {

    $db = new Database();

    $q = '
        SELECT 
            *
        FROM
            tbl_sys_enrollment
        WHERE
            status = "active"
    ';

    $res = $db->read($q);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
}
