<?php
session_start();

include_once __DIR__ . "/../models/clubs_model.php";
include_once __DIR__ . "/../database.php";

$db = new Database();

$option = false;

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
} else if ($option == "submit_registration") {

    $db = new Database();

    $q = "
        INSERT INTO 
            tbl_tanat(
                fullname,
                weight,
                mobile_no,
                shirt_size,
                league,
                category,
                payment_dir,
                payment_name,
                payment_ref_no
            )
        VALUES  
            (
                :fullname,
                :weight,
                :mobile_no,
                :shirt_size,
                :league,
                :category,
                :payment_dir,
                :payment_name,
                :payment_ref_no
            )
    ";

    $rand_uniq = rand(1111, 9889);

    $payment_proof = $_FILES["payment_proof"]["tmp_name"];
    $payment_proof_dir = "src/public/students_payment_proof/" . $rand_uniq .  $_FILES["payment_proof"]["name"];
    move_uploaded_file($payment_proof,  "../../public/payments/" . $rand_uniq .  $_FILES["payment_proof"]["name"]);


    $d = [
        'fullname' => $_POST['fullname'],
        'weight' => $_POST['weight'],
        'mobile_no' => $_POST['mobile_no'],
        'shirt_size' => $_POST['shirt_size'],
        'league' => $_POST['league'],
        'category' => $_POST['category'],
        'payment_dir' => $payment_proof_dir,
        'payment_name' => $_POST['payment_name'],
        'payment_ref_no' => $_POST['payment_ref_no']
    ];

    echo $db->update($q, $d);
} else if ($option == "check_username_availability") {

    $db = new Database();

    $q = "
        SELECT
            *
        FROM
            tbl_users
        WHERE
            username = :username
    ";

    $d = [
        'username' => $payload_data['username'],
    ];

    $res = $db->read($q, $d);

    if (!empty($res)) {
        echo json_encode(
            [
                'status' => 403,
                'msg' => 'Username already exists',
                'data' => []
            ]
        );
        exit;
    } else {

        echo json_encode(
            [
                'status' => 200,
                'msg' => 'Username can use',
                'data' => []
            ]
        );
        exit;
    }
} else if ($option == "check_nickname_availability") {

    $db = new Database();

    $q = "
        SELECT
            *
        FROM
            tbl_profile
        WHERE
            nickname = :nickname
    ";

    $d = [
        'nickname' => $payload_data['nickname'],
    ];

    $res = $db->read($q, $d);

    if (!empty($res)) {
        echo json_encode(
            [
                'status' => 403,
                'msg' => 'Nickname already exists',
                'data' => []
            ]
        );
        exit;
    } else {

        echo json_encode(
            [
                'status' => 200,
                'msg' => 'Nickname can use',
                'data' => []
            ]
        );
        exit;
    }
} else if ($option == "check_email_availability") {

    $db = new Database();

    $q = "
        SELECT
            *
        FROM
            tbl_users
        WHERE
            email = :email
    ";

    $d = [
        'email' => $payload_data['email'],
    ];

    $res = $db->read($q, $d);

    if (!empty($res)) {
        echo json_encode(
            [
                'status' => 403,
                'msg' => 'Email already exists',
                'data' => []
            ]
        );
        exit;
    } else {

        echo json_encode(
            [
                'status' => 200,
                'msg' => 'Email can use',
                'data' => []
            ]
        );
        exit;
    }
} else if ($option == "get_pullerdata") {
    $q = '
            SELECT 
                A.id as user_id,
                username,
                password,
                access_level,
                email,
                B.name as fullname,
                nickname,
                weight,
                category,
                member_type,
                position as club_position,
                is_approved,
                approved_date,
                D.name as club_name,
                D.img as club_logo,
                B.img as profile_picture,
                C.club_id


            FROM
                tbl_users A
            LEFT JOIN
                tbl_profile B
            ON
                A.id = B.user_id
            LEFT JOIN
                tbl_club_members C
            ON
                A.id = C.user_id
            LEFT JOIN
                tbl_clubs D
            ON
                C.club_id = D.id
            WHERE
                A.id = :id    
            
        ';

    $db = new Database();
    $d = [
        "id" => $payload_data['uid']
    ];
    $res = $db->read($q, $d);

    if (empty($res)) {
        $db->err_msg_empty();
    } else {
        echo $db->suc_msg_get($res);
    }
} else if ($option == "update_profilepic") {
    $q = '
            UPDATE
                tbl_profile
            SET
                img = :img
            WHERE
                user_id = :id
        ';

    $tempname = $_FILES["file"]["tmp_name"];

    $folder = "src/public/user_pics/u_" . $_POST['uid'] .  $_FILES["file"]["name"];

    move_uploaded_file($tempname,  "../../../src/public/user_pics/u_" . $_POST['uid'] .  $_FILES["file"]["name"]);

    $db = new Database();
    $d = [
        "id" => $_POST['uid'],
        "img" => $folder
    ];
    $res = $db->update($q, $d);
} else if ($option == "update_account_information") {
    $q = '
            UPDATE
                tbl_profile
            SET
                name = :name,
                nickname = :nickname,
                weight = :weight,
                category = :category

            WHERE
                user_id = :id
        ';

    $db = new Database();
    $d = [
        "id" => $_POST['uid'],
        "name" => $_POST['name'],
        "nickname" => $_POST['nickname'],
        "weight" => $_POST['weight'],
        "category" => $_POST['category']
    ];
    $res = $db->update($q, $d);
} else if ($option == "change_password") {

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
}
