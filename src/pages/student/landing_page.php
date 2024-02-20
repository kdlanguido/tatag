<div class="landing_page" style="display:none; background:#FAFBFC;">

    <div class="container-fluid mx-0 px-0 ">
        <div class="row mx-0 px-0">
            <div class="col-lg-3 col-xl-2 mx-0 px-0">
                <?php
                include 'src/pages/student/sidebar.php';
                ?>
            </div>
            <div class="col  mx-0 px-0">
                <?php
                include 'src/pages/student/profile/profile.php';
                include 'src/pages/student/enrollment/enrollment.php';
                include 'src/pages/student/grading/grading.php';
                include 'src/pages/student/student_learning/student_learning.php';
                ?>
            </div>
        </div>
    </div>
</div>

<script src="src/pages/student/landing_page.js"></script>