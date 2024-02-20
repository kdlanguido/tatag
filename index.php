<?php
session_start();

$_SESSION['csrf'] = rand(1000000000, 9999999999);

if (!array_key_exists('sesh_access_level', $_SESSION)) {
    $_SESSION['sesh_access_level'] = 1;
}

$_SESSION['SYS_TYPE'] = "ecommerce";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titan Arms Taguig</title>
    <link rel="stylesheet" href="src/lib/bootstrap/bs5/bs.css">
    <link rel="stylesheet" href="src/lib/fontawesome/css/all.css">
    <link rel="stylesheet" href="src/lib/quilljs/quill.snow.css">
    <link rel="stylesheet" href="src/lib/quilljs/quill.bubble.css">
    <link rel="stylesheet" href="src/lib/loader/style.css">
    <link rel="icon" type="image/x-icon" href="src/img/tatag_logo.ico">
    <?php include 'css.php' ?>
</head>

<body>

    <?php include 'src/components/toast/index.php' ?>

    <script src="src/lib/bootstrap/bs5/bs.js"></script>
    <script src="src/lib/jquery/jquery-3.7.0.js"></script>
    <script src="src/lib/jquery/jqueryui-1.13.2.js"></script>
    <script src="src/lib/jquery/moment.js"></script>
    <script src="src/lib/fontawesome/js/all.js"></script>
    <script src="src/lib/tagsinput/bootstrap-tagsinput.js"></script>
    <script src="src/lib/quilljs/quilljs.js"></script>
    <script src="src/lib/moment.js"></script>
    <script src="src/lib/es6-promise/dist/es6-promise.auto.js"></script>
    <script src="src/lib/jspdf/dist/jspdf.min.js"></script>
    <script src="src/lib/html2canvas/dist/html2canvas.min.js"></script>
    <script src="src/lib/html2pdf.js/dist/html2pdf.js"></script>
    <script src="src/func/system.js"></script>
    <script src="src/func/controllers.js"></script>

    <?php include 'src/auth/login.php'; ?>

    <div id="content">

        <?php

        include 'src/auth/login.php';

        if ($_SESSION['sesh_access_level'] == '4') {
            include 'src/pages/teacher/landing_page.php';
        } else if ($_SESSION['sesh_access_level'] == '3') {
            include 'src/pages/admin/landing_page.php';
        } else if ($_SESSION['sesh_access_level'] == '2') {
            include 'src/pages/student/landing_page.php';
        } else if ($_SESSION['sesh_access_level'] == '1') {
            include 'src/pages/user/landing_page.php';
        }

        ?>

    </div>

    <?php include 'src/components/loader/index.php' ?>

</body>

</html>