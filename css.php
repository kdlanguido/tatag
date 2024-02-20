<?php
echo ' 
    <link rel="stylesheet" href="src/pages/user/user_landing_style.css">
    <link rel="stylesheet" href="src/pages/user/page_component/headers/index.css">
    <link rel="stylesheet" href="src/pages/user/sections/home/home.css">
    <link rel="stylesheet" href="src/pages/user/sections/register/register.css">
    <link rel="stylesheet" href="src/pages/user/sections/events/events.css">
';
if ($_SESSION['sesh_access_level'] == '4') {
    echo '
    <link rel="stylesheet" href="src/pages/teacher/landing_page.css">
    <link rel="stylesheet" href="src/pages/teacher/profile/profile.css">
    <link rel="stylesheet" href="src/pages/teacher/student_learning/student_learning.css">
';
} else if ($_SESSION['sesh_access_level'] == '3') {
    echo '
   <link rel="stylesheet" href="src/pages/admin/admin_landing_page.css">
   <link rel="stylesheet" href="src/pages/admin/school_year/school_year.css">
   <link rel="stylesheet" href="src/pages/admin/dashboard/dashboard.css">
   <link rel="stylesheet" href="src/pages/admin/admission/admission.css">
   <link rel="stylesheet" href="src/pages/admin/employees/employees.css">
   <link rel="stylesheet" href="src/pages/admin/enrollment/enrollment.css">
   <link rel="stylesheet" href="src/pages/admin/subjects/subjects.css">
   <link rel="stylesheet" href="src/pages/admin/sections/sections.css">
   <link rel="stylesheet" href="src/pages/admin/students/students.css">
   <link rel="stylesheet" href="src/pages/admin/student_learning/student_learning.css">
';
} else if ($_SESSION['sesh_access_level'] == '2') {
    echo '
   <link rel="stylesheet" href="src/pages/student/landing_page.css">
   <link rel="stylesheet" href="src/pages/student/profile/profile.css">
   <link rel="stylesheet" href="src/pages/student/student_learning/student_learning.css">
';
}
