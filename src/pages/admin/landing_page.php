<div class="landing_page" style="display:none">

    <div class="container-fluid mx-0 px-0 ">

        <div class="row mx-0 px-0">
            <div class="col-lg-3 col-xl-2 mx-0 px-0">
                <?php
                include 'src/pages/admin/sidebar.php';

                ?>
            </div>
            <div class="col  mx-0 px-0">
                <?php
                include 'src/pages/admin/dashboard/dashboard.php';
                include 'src/pages/admin/school_year/school_year.php';
                include 'src/pages/admin/admission/admission.php';
                include 'src/pages/admin/sections/sections.php';
                include 'src/pages/admin/employees/employees.php';
                include 'src/pages/admin/subjects/subjects.php';
                include 'src/pages/admin/students/students.php';
                include 'src/pages/admin/enrollment/enrollment.php';
                include 'src/pages/admin/student_learning/student_learning.php';

                ?>
            </div>
        </div>

    </div>






    <script src="src/pages/admin/landing_page.js"></script>
</div>