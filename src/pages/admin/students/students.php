<!-- PAGE STUDENTS -->
<section class="page text-dark vh-100 p-5" style="display:none; background:#FAFBFC" id="page_students">

    <!-- MINI PAGE STUDENTS HOME -->
    <div class="minipage" id="mini_page_students_home">
        <p class="lead" style="font-weight:500">Students</p>

        <div class="text-end">

            <div style="width:250px; position:relative;">
                <i class="fa-solid fa-magnifying-glass" style="position:absolute; top:10px; left:10px; color:#A6AEB8"></i>
                <input type="text" class="form-control" style="padding-left:2rem;" placeholder="Search">
            </div>

        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">List of Students</h6>

            <table class="table border-top" style="font-size:10pt; " id="tbl_admin_students">
                <thead>
                    <th class="py-2 text-center" width="10%" style="color:#5F6D7E; font-weight:500">
                        LRN
                    </th>

                    <th class="py-2" style="color:#5F6D7E; font-weight:500">
                        Name
                    </th>

                    <th class="py-2 text-center" width="10%" style=" color:#5F6D7E; font-weight:500">
                        Grade Level
                    </th>

                    <th class="py-2 text-center" width="10%" style=" color:#5F6D7E; font-weight:500">
                        Section
                    </th>

                    <th class="py-2 text-center" width="10%" style="color:#5F6D7E; font-weight:500">
                        Sex
                    </th>

                    <th class="py-2" width="8%" style="color:#5F6D7E; font-weight:500">

                    </th>
                </thead>

                <tbody></tbody>
            </table>
        </div>
    </div>

    <!-- MINI PAGE VIEW STUDENT -->
    <div class="minipage" style="display:none;" id="mini_page_view_student">

        <div class="d-flex justify-content-between align-items-center mb-2">
            <p class="lead my-auto" style="font-weight:500">Student Profile</p>
            <button class="btn border rounded" id="btn_close_student_profile"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                    <div class="bg-white p-4">

                        <div class="d-flex justify-content-center align-items-center flex-column">
                            <img src="src/img/1.jpg" id="student_photo" class="my-3 border" style="height:200px; width:185px;" alt="">
                            <label id="student_header_name" style="font-size:15pt; font-weight:500">Gonzales, Miguel Sebastian</label>
                            <label id="student_header_email" class="text-muted" style="font-size:10pt;font-weight:400">gonzalesmiguel@gmail.com</label>
                        </div>

                        <div class="container-fluid " style="margin-top:2em; font-size:10pt">

                            <div class="row mt-2">
                                <div class="col-4" style="font-weight:500">LRN: </div>
                                <div class="col" id="student_header_lrn">20230002</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-4" style="font-weight:500">Grade Level: </div>
                                <div class="col" id="student_header_grade_level">20230002</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-4" style="font-weight:500">Strand: </div>
                                <div class="col" id="student_header_strand">20230002</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-4" style="font-weight:500">Semester: </div>
                                <div class="col" id="student_header_semester">20230002</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-4" style="font-weight:500">Sex: </div>
                                <div class="col" id="student_header_sex">20230002</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-4" style="font-weight:500">Section: </div>
                                <div class="col" id="student_header_section">20230002</div>
                            </div>

                            <div class="row mt-2" style="font-weight:500">
                                <div class="col d-grid">
                                    <button class="btn text-light mt-2" style="background:#0A1881; font-size:10pt" id="btn_edit_student_profile_change_photo">
                                        <i class="fa-solid fa-camera"></i> Change Photo
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-8 pe-0">
                    <div class="bg-white border rounded ">

                        <ul class="nav nav-underline border-bottom px-4" id="emp_nav_student_profile">
                            <li class="nav-item">
                                <a class="nav-link active pe_micro_nav" style="font-size:10pt" show_micropage="student_micro_page_personal" aria-current="page">Personal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe_micro_nav" style="font-size:10pt" show_micropage="student_micro_page_change_password">Change Password</a>
                            </li>
                        </ul>

                        <!-- MICRO PAGE 1 -->
                        <div class="micropage mt-3  p-2 px-4" id="student_micro_page_personal">
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">STUDENT INFORMATION</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Last Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_lname">

                            <label class="mt-2" style="font-size:10pt">First Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_fname">

                            <label class="mt-2" style="font-size:10pt">Middle Name </label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_mname">

                            <div class="row">
                                <div class="col-6 col-lg-10">
                                    <label class="mt-2" style="font-size:10pt">Date of Birth </label>
                                    <input type="date" class="form-control form-control-required mb-1" id="student_info_dob">
                                </div>
                                <div class="col-6 col-lg-2">
                                    <label class="mt-2" style="font-size:10pt">Age </label>
                                    <input type="text" class="form-control form-control-required mb-1" id="student_info_age" disabled>
                                </div>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Sex </label>
                            <div class="d-flex mb-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender_rb" id="student_info_male">
                                    <label class="form-check-label me-2" for="student_info_male">
                                        Male
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender_rb" id="student_info_female">
                                    <label class="form-check-label" for="student_info_female">
                                        Female
                                    </label>
                                </div>
                            </div>

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">CONTACT INFORMATION</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Email Address </label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_email">

                            <label class="mt-2" style="font-size:10pt">Contact No</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_contact_no">

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">ADDRESS</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Street</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_add_street">

                            <label class="mt-2" style="font-size:10pt">City</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_add_city">

                            <label class="mt-2" style="font-size:10pt">State</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_add_state">

                            <label class="mt-2" style="font-size:10pt">Zip Code</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_add_zipcode">

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">EMERGENCY CONTACT</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Full Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_e_fname">

                            <label class="mt-2" style="font-size:10pt">Contact No</label>
                            <input type="text" class="form-control form-control-required mb-1" id="student_info_e_contact">

                            <button class="btn text-light mt-3" style="background:#0A1881; font-size:10pt" id="btn_edit_student_profile_save_changes">
                                <i class="fa-solid fa-floppy-disk"></i> Save Changes
                            </button>

                        </div>

                        <!-- MICRO PAGE 2 -->
                        <div class="micropage mt-3  p-2 px-4" id="student_micro_page_change_password" style="display:none;">
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">CHANGE PASSWORD</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">New Password <span class="text-danger">*</span></label>
                            <input type="text" class="form-control txt-password mb-1" id="student_cp_new_password">

                            <label class="mt-2" style="font-size:10pt">Confirm New Password <span class="text-danger">*</span></label>
                            <input type="text" class="form-control txt-password" id="student_cp_new_password_confirm">
                            <div class="text-end" style="display:none;" id="student_micro_cp_prompt">
                                <small class="text-danger py-0 my-0">Passwords doesn't match</small>
                            </div>
                            <button class="btn text-light mt-4" style="background:#0A1881; font-size:10pt" id="student_btn_changepass_save_changes">
                                Change Password
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>


</section>

<script src="src/pages/admin/students/students.js"></script>

<!-- CHANGE PHOTO -->
<div class="modal fade" tabindex="-1" id="md_confirm_student_change_photo">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Change Photo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="file" name="" id="md_student_change_photo" class="form-control">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_confirm_student_change_photo_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>