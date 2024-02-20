<?php
session_start();

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
} else if ($option == "login") {

    $q = '
        SELECT 
            *
        FROM
            tbl_users 
        WHERE
            username = :username
        AND
            password = :password
    ';

    $db = new Database();

    $d = [
        "username" => $payload_data['username'],
        "password" => $payload_data['password'],
    ];

    $res = $db->read($q, $d);

    if (empty($res)) {
        echo json_encode(
            [
                'status' => 403,
                'msg' => 'invalid username/password',
                'data' => []
            ]
        );
    } else {

        $data = [];

        if ($res[0]['access_level'] == 3) {

            $q = '
                SELECT 
                    *
                FROM
                    tbl_sys_administrators
                WHERE
                    id = :id
            ';

            $db = new Database();

            $d = [
                "id" => $res[0]['profile_id'],
            ];

            $data['user_information'] = $res;

            $user_information = $db->read($q, $d);

            $data['profile'] = $user_information;

            $_SESSION['sesh_user_firstname'] = $user_information[0]['firstname'] . ' ' . $user_information[0]['lastname'];
        } else if ($res[0]['access_level'] == 2) {

            $q = '
                SELECT 
                    *
                FROM
                    tbl_student_information
                WHERE
                    lrn = :lrn
            ';

            $db = new Database();

            $d = [
                "lrn" => $res[0]['profile_id'],
            ];

            $data['user_information'] = $res;

            $user_information = $db->read($q, $d);

            $data['profile'] = $user_information;

            $_SESSION['sesh_user_firstname'] = $user_information[0]['firstname'] . ' ' . $user_information[0]['lastname'];
        } else if ($res[0]['access_level'] == 4) {

            $q = '
                SELECT 
                    *
                FROM
                    tbl_teachers
                WHERE
                    id = :id
            ';

            $db = new Database();

            $d = [
                "id" => $res[0]['profile_id'],
            ];

            $data['user_information'] = $res;

            $user_information = $db->read($q, $d);

            $data['profile'] = $user_information;

            $_SESSION['sesh_user_firstname'] = $user_information[0]['firstname'] . ' ' . $user_information[0]['lastname'];
        }

        $_SESSION['id'] =  $res[0]['profile_id'];
        $_SESSION['sesh_access_level'] = $res[0]['access_level'];

        echo json_encode(
            [
                'status' => 200,
                'msg' => 'login success',
                'data' => base64_encode(json_encode($data))
            ]
        );
    }
} else if ($option == "logout") {
    session_destroy();
    session_start();
}
