    <div class="d-flex flex-column pt-4 justify-content-between  vh-100 border-end">
        <div>
            <div class="d-flex align-items-center ms-4">
                <img src="src/img/sc_logo.png" style="height:60px; width:60px" alt="">
                <h5 style="font-size:11pt" class="ms-3">St. Vincent Institute <br>of Technology</h5>
            </div>

            <ul class="sidebar mt-4 mx-0 px-0">
                <li style="font-weight:400" goto="page_dashboard" default_page="page_dashboard" class="sidebar_btn">
                    <i class="fa-solid fa-house fa-fw pe-2"></i> Dashboard
                </li>

                <li style="font-weight:400" goto="page_schoolyear" default_page="page_schoolyear" fnc="sys_load_school_year" class="sidebar_btn">
                    <i class="fa-solid fa-calendar-days fa-fw pe-2"></i> School Year
                </li>

                <li style="font-weight:400" goto="page_admission" default_page="mini_page_admission_home" onclick="a_get_applications()" class="sidebar_btn">
                    <i class="fa-solid fa-table-list fa-fw pe-2"></i> Admissions
                </li>

                <li style="font-weight:400" goto="page_enrollment" default_page="mini_page_enrollment_home" class="sidebar_btn">
                    <i class="fa-regular fa-rectangle-list fa-fw pe-2"></i> Enrollment
                </li>

                <li style="font-weight:400" goto="page_students" default_page="mini_page_students_home" class="sidebar_btn">
                    <i class="fa-solid fa-users  fa-fw pe-2"></i> Students
                </li>

                <li style="font-weight:400" goto="page_employees" default_page="mini_page_teachers" class="sidebar_btn">
                    <i class="fa-solid fa-users-gear fa-fw pe-2"></i> Employees
                </li>

                <li style="font-weight:400" goto="page_sections" default_page="mini_page_section_home" class="sidebar_btn">
                    <i class="fa-solid fa-people-arrows  fa-fw pe-2"></i> Sections
                </li>

                <li style="font-weight:400" goto="page_subjects" default_page="strand_home" class="sidebar_btn">
                    <i class="fa-solid fa-book fa-fw pe-2"></i> Subjects
                </li>

                <li style="font-weight:400" goto="page_student_learning" default_page="strand_home" class="sidebar_btn">
                    <i class="fa-solid fa-desktop fa-fw pe-2"></i> Student Learning
                </li>
            </ul>
        </div>

        <div class="mt-auto">
            <ul class=" sidebar mt-4 mx-0 px-0" style="list-style-type:none">
                <li style="font-weight:400" goto="page_dashboard" class="sidebar_btn">
                    <i class="fa-solid fa-id-card-clip fa-fw pe-2"></i> Profile
                </li>

                <li style="font-weight:400" class="btn_logout">
                    <i class="fa-solid fa-arrow-right-from-bracket fa-fw pe-2"></i> Logout
                </li>

            </ul>

            <div class="row my-2">
                <div class="col-3 p-0 text-end pe-2">
                    <img src="src/public/user_pics/user.jpeg" style="height:40px; width:40px; border-radius:50%; ">
                </div>
                <div class="col d-flex flex-column">
                    <label class="" style="font-size:500" id="sidebar_name"><?php echo $_SESSION['sesh_user_firstname']; ?></label>
                    <label class="text-muted" style="font-size:9pt">Administrator</label>
                </div>
            </div>
        </div>

    </div>