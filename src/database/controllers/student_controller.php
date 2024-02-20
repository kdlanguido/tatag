<?php


session_start();

// CHANGE TABLE NAME HERE
$table_name = 'tbl_student_information';

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

    // QUERY TO GET ALL THE ENROLLED STUDENTS ONLY
    $q = '
        SELECT 
            C.*,
            B.*,
            B.id as student_id,
            D.grade_level as section_grade_level,
            D.name as section,
            A.status as status
        FROM
            tbl_student_enrollments A
        LEFT JOIN  
            tbl_student_information B 
        ON 
            A.student_id = B.id
        LEFT JOIN 
            tbl_student_applications C
        ON
            B.application_no = C.id
        LEFT JOIN
            tbl_sections D
        ON
            D.id = A.section_id
        WHERE
            A.id in ( SELECT max(id) FROM tbl_student_enrollments WHERE status = "enrolled" group by student_id )
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
                application_no = :id
        ';
    $d = [
        'id' => explode('_', $payload_data['id'])[1]
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
} else if ($option == "apply_student") {

    $db = new Database();

    $rand_uniq = rand(1111, 9889);

    $q = '
        INSERT INTO
            tbl_student_applications(
                lrn,
                school_year,
                strand_code,
                grade_level,
                semester
            )
        VALUES
            (
                :lrn,
                :school_year,
                :strand_code,
                :grade_level,
                :semester
            )
    ';

    $d = [
        'lrn' => $_POST['lrn'],
        'school_year' => $_POST['school_year'],
        'strand_code' => $_POST['strand_code'],
        'grade_level' => $_POST['grade_level'],
        'semester' => $_POST['semester']
    ];

    $db->update($q, $d);

    $lrn = $_POST['lrn'];

    $q = '
        INSERT INTO
            tbl_student_information(
                lrn,
                birthdate,
                lastname,
                firstname,
                middlename,
                age,
                gender,
                email,
                mobile_no,
                add_st,
                add_city,
                add_state,
                add_zipcode,
                guardian_name,
                guardian_no
            )
        VALUES
            (
                :lrn,
                :birthdate,
                :lastname,
                :firstname,
                :middlename,
                :age,
                :gender,
                :email,
                :mobile_no,
                :add_st,
                :add_city,
                :add_state,
                :add_zipcode,
                :guardian_name,
                :guardian_no
            )
    ';

    $d = [
        'lrn' => $lrn,
        'birthdate' => $_POST['birthdate'],
        'lastname' => $_POST['lastname'],
        'firstname' => $_POST['firstname'],
        'middlename' => $_POST['middlename'],
        'age' => $_POST['age'],
        'gender' => $_POST['gender'],
        'email' => $_POST['email'],
        'mobile_no' => $_POST['mobile_no'],
        'add_st' => $_POST['add_st'],
        'add_city' => $_POST['add_city'],
        'add_state' => $_POST['add_state'],
        'add_zipcode' => $_POST['add_zipcode'],
        'guardian_name' => $_POST['guardian_name'],
        'guardian_no' => $_POST['guardian_no']
    ];

    $r = $db->update($q, $d);

    $q = '
        INSERT INTO
            tbl_student_attachments(
                lrn,
                document_name,
                document_dir,
                status
            )
        VALUES
            (
                :lrn,
                :document_name,
                :document_dir,
                :status
            )
    ';

    $sf9 = $_FILES["sf9"]["tmp_name"];
    $sf9_dir = "src/public/students_sf9/u_" . $rand_uniq .  $_FILES["sf9"]["name"];
    move_uploaded_file($sf9,  "../../public/students_sf9/u_" . $rand_uniq .  $_FILES["sf9"]["name"]);

    $d = [
        'lrn' => $lrn,
        'document_name' => 'SF9',
        'document_dir' => $sf9_dir,
        'status' => 'for_approval'
    ];

    $db->update($q, $d);


    $sf10 = $_FILES["sf10"]["tmp_name"];
    $sf10_dir = "src/public/students_sf10/u_" . $rand_uniq .  $_FILES["sf10"]["name"];
    move_uploaded_file($sf10,  "../../public/students_sf10/u_" . $rand_uniq .  $_FILES["sf10"]["name"]);

    $d = [
        'lrn' => $lrn,
        'document_name' => 'SF10',
        'document_dir' => $sf10_dir,
        'status' => 'for_approval'
    ];

    $db->update($q, $d);


    $nso = $_FILES["nso"]["tmp_name"];
    $nso_dir = "src/public/students_nso/u_" . $rand_uniq .  $_FILES["nso"]["name"];
    move_uploaded_file($nso,  "../../public/students_nso/u_" . $rand_uniq .  $_FILES["nso"]["name"]);

    $d = [
        'lrn' => $lrn,
        'document_name' => 'NSO',
        'document_dir' => $nso_dir,
        'status' => 'for_approval'
    ];

    $db->update($q, $d);


    $gmc = $_FILES["gmc"]["tmp_name"];
    $gmc_dir = "src/public/students_gmc/u_" . $rand_uniq .  $_FILES["gmc"]["name"];
    move_uploaded_file($gmc,  "../../public/students_gmc/u_" . $rand_uniq .  $_FILES["gmc"]["name"]);

    $d = [
        'lrn' => $lrn,
        'document_name' => 'Certificate of Good Moral Character',
        'document_dir' => $gmc_dir,
        'status' => 'for_approval'
    ];

    $db->update($q, $d);


    $photo = $_FILES["photo"]["tmp_name"];
    $photo_dir = "src/public/students_photo/u_" . $rand_uniq .  $_FILES["photo"]["name"];
    move_uploaded_file($photo,  "../../public/students_photo/u_" . $rand_uniq .  $_FILES["photo"]["name"]);

    $d = [
        'lrn' => $lrn,
        'document_name' => '2x2 photo',
        'document_dir' => $photo_dir,
        'status' => 'for_approval'
    ];

    $db->update($q, $d);

    echo 1;
} else if ($option == "get_applications") {

    $db = new Database();

    $q = '
        SELECT 
            A.status,
            A.lrn,
            CONCAT(firstname," ",lastname) as name,
            grade_level,
            A.id
        FROM
            tbl_student_applications A
        LEFT JOIN
            tbl_student_information B
        ON
            A.lrn = B.lrn
    ';

    $res = $db->read($q);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "cancel_applications") {

    $db = new Database();

    $q = "
        UPDATE 
            tbl_student_applications
        SET
            status = 'cancelled'
        WHERE
            lrn = :lrn


    ";

    $d = [
        'lrn' => $_POST['lrn']
    ];

    var_dump($d);

    echo $db->update($q, $d);
} else if ($option == "admit_student") {

    $lrn =  $_POST['lrn'];

    $db = new Database();

    $q_get_email = '
            SELECT 
                email
            FROM
                tbl_student_information
            WHERE
                lrn = :lrn
        ';

    $d_get_email = [
        'lrn' => $lrn
    ];

    $q = '
            INSERT INTO 
                tbl_users(
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
        'username' => $db->read($q_get_email, $d_get_email)[0]['email'],
        'password' =>  generate_password(),
        'access_level' => '2',
        'profile_id' => $lrn,
    ];

    $res = $db->update($q, $d);

    $q = "
        UPDATE 
            tbl_student_applications
        SET
            status = 'admitted'
        WHERE
            lrn = :lrn
    ";

    $d = [
        'lrn' =>  $lrn
    ];

    $res = $db->update($q, $d);

    echo $res;
} else if ($option == "get_application_information") {

    $db = new Database();

    $q = '
    SELECT 
            *,
            CONCAT(school_year_start," - ",school_year_end) as school_year_display,
            A.status as application_status
    FROM
        tbl_student_applications A
    LEFT JOIN
        tbl_strands B
    ON
        B.id = A.strand_code
    LEFT JOIN
        tbl_sys_sy C
    ON
        C.id = A.school_year
    WHERE
        A.lrn = :lrn
    ';

    $d = [
        'lrn' => $payload_data['lrn']
    ];

    $application_info = $db->read($q, $d);

    $q = '
        SELECT 
            *
        FROM
            tbl_student_information
        WHERE
            lrn = :lrn
    ';

    $d = [
        'lrn' => $payload_data['lrn']
    ];

    $student_info = $db->read($q, $d);

    $q = '
        SELECT 
            *
        FROM
            tbl_student_attachments
        WHERE
            lrn = :lrn
    ';

    $attach = $db->read($q, $d);

    $information = [
        "application_information" => $application_info,
        "student_information" => $student_info,
        "attachments" => $attach
    ];

    if (empty($information)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($information);
    }
} else if ($option == "approve_requirement") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_student_attachments
            SET 
                status = :status
            WHERE
                id = :id
    ";

    $d = [
        'status' => "approved",
        'id' => $_POST['id']
    ];

    $affected = $db->update($q, $d);

    echo $affected;
} else if ($option == "disapprove_requirement") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_student_attachments
            SET 
                status = :status
            WHERE
                id = :id
    ";

    $d = [
        'status' => "for_approval",
        'id' => $_POST['id']
    ];

    $affected = $db->update($q, $d);

    echo $affected;
} else if ($option == "get_application_attachments") {

    $db = new Database();

    $q = '
            SELECT 
                *
            FROM
                tbl_student_attachments
            WHERE
                lrn = :lrn
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
} else if ($option == "change_photo") {

    if (isset($_FILES) && $_FILES != null) {

        $rand_uniq = rand(1111, 9889);
        $photo = $_FILES["photo"]["tmp_name"];
        $photo_dir = "src/public/students_photo/u_" . $rand_uniq .  $_FILES["photo"]["name"];
        move_uploaded_file($photo,  "../../public/students_photo/u_" . $rand_uniq .  $_FILES["photo"]["name"]);

        $db = new Database();

        $q = "
        UPDATE
            tbl_student_attachments
        SET 
            document_dir = :document_dir
        WHERE
            document_name = :document_name
        AND
            lrn = :lrn
    ";


        $d = [
            'document_dir' =>  $photo_dir,
            'document_name' => '2x2 photo',
            'lrn' => $_POST['lrn']
        ];
        echo $db->update($q, $d);
    } else {
        echo 0;
    }
} else if ($option == "change_password") {

    $db = new Database();

    $q = "
            UPDATE
                tbl_users
            SET
                password = :password
            WHERE
                profile_id = :profile_id
    ";

    $d = [
        'password' => $_POST['password'],
        'profile_id' => $_POST['profile_id'],
    ];

    echo $db->update($q, $d);
} else if ($option == "get_section_information") {

    $db = new Database();

    $q = '
        SELECT 
            B.grade_level,
            B.name
        FROM
            tbl_student_enrollments A 
        LEFT JOIN
            tbl_sections B 
        ON 
            A.section_id = B.id
        LEFT JOIN 
            tbl_student_applications C
        ON
            C.id = A.student_id
        WHERE 
            B.grade_level = :grade_level 
        AND 
            student_id = :student_id
    ';

    $d = [
        'grade_level' => $payload_data['grade_level'],
        'student_id' => $payload_data['student_id'],
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_admitted_students_list") {

    $db = new Database();

    // GET ADMITTED STUDENTS
    $q = '
        SELECT 
            *
        FROM
            tbl_student_applications A
        LEFT JOIN
            tbl_student_information B
        ON
            B.lrn = A.lrn
        WHERE
            A.status = "admitted"
        ';

    $res = $db->read($q);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_enrolled_students") {

    $db = new Database();

    $q = '
        SELECT 
            *
        FROM
            tbl_section_students B
        LEFT JOIN
            tbl_student_applications A
        ON
            B.lrn = A.lrn
        LEFT JOIN
            tbl_sections C
        ON
            C.id = B.section_id
    ';

    $res = $db->read($q);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "get_student_information_by_lrn") {

    $db = new Database();

    $q = '
            SELECT 
                *
            FROM
                tbl_student_information A
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
} else if ($option == "get_my_cards") {

    $db = new Database();

    $q = '
            SELECT 
            *
            FROM
                tbl_student_cards
            WHERE
                lrn = :lrn
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
}
