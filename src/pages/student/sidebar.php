    <div class="d-flex flex-column pt-4 justify-content-between  vh-100 border-end bg-white">
        <div>
            <div class="d-flex align-items-center ms-4">
                <img src="src/img/sc_logo.png" style="height:60px; width:60px" alt="">
                <h5 style="font-size:11pt" class="ms-3">St. Vincent Institute <br>of Technology</h5>
            </div>
            <ul class="sidebar mt-4 mx-0 px-0">
                <li style="font-weight:400" goto="page_profile" class="sidebar_btn">
                    <i class="fa-regular fa-user fa-fw pe-2"></i> Profile
                </li>
                <li style="font-weight:400" goto="page_enrollment" class="sidebar_btn">
                    <i class="fa-regular fa-rectangle-list fa-fw pe-2"></i> Enrollment
                </li>
                <li style="font-weight:400" goto="page_grading" id="btn_goto_grading" class="sidebar_btn">
                    <i class="fa-solid fa-chart-column fa-fw pe-2"></i> Grading
                </li>
                <li style="font-weight:400" goto="page_student_learning" class="sidebar_btn">
                    <i class="fa-solid fa-desktop fa-fw pe-2"></i> Student Learning
                </li>
            </ul>
        </div>

        <div class="mt-auto">
            <ul class=" sidebar mt-4 mx-0 px-0" style="list-style-type:none">
                <li style="font-weight:400" class="btn_logout">
                    <i class="fa-solid fa-arrow-right-from-bracket fa-fw pe-2"></i> Logout
                </li>
            </ul>

            <div class="row my-2">
                <div class="col-3 p-0 text-end pe-2">
                    <img src="src/public/user_pics/user.jpeg" style="height:40px; width:40px; border-radius:50%; " id="sidebar_photo">
                </div>
                <div class="col d-flex flex-column">
                    <label class="" style="font-size:500" id="sidebar_name"></label>
                    <label class="text-muted" style="font-size:9pt">Student</label>
                </div>
            </div>
        </div>

    </div>