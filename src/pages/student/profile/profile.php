<!-- PAGE PROFILE -->
<div class="page text-dark vh-100 p-4" id="page_profile">

    <div class="d-flex justify-content-between align-items-center mb-2">
        <p class="lead my-auto" style="font-weight:500">Profile</p>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-4 px-0">
                <div class="bg-white p-4">

                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <img src="src/img/1.jpg" id="student_photo" class="my-3 border p-1" style="height:205px; width:205px;" alt="">
                        <label id="student_header_name" style="font-size:15pt; font-weight:500">Gonzales, Miguel Sebastian</label>
                        <label id="student_header_email" class="text-muted" style="font-size:10pt;font-weight:400">gonzalesmiguel@gmail.com</label>
                    </div>

                    <div class="container-fluid mt-2">

                        <div class="row" style="font-weight:500">
                            <div class="col d-grid">
                                <button class="btn text-light mt-2" style="background:#0A1881; font-size:10pt" id="sp_change_photo">
                                    <i class="fa-solid fa-camera"></i> Change Photo
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-8 pe-0">
                <div class="bg-white border rounded ">

                    <ul class="nav nav-underline border-bottom px-4" id="emp_nav_sp_profile">
                        <li class="nav-item">
                            <a class="nav-link active sp_micro_nav" style="font-size:10pt" show_micropage="sp_micro_page_personal" aria-current="page" href="#">Personal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sp_micro_nav" style="font-size:10pt" show_micropage="sp_micro_page_change_password" href="#">Change Password</a>
                        </li>
                    </ul>

                    <!-- MICRO PAGE 1 -->
                    <div class="micropage mt-3  p-2 px-4" id="sp_micro_page_personal" style="max-height:80vh; overflow-y:auto">

                        <div class="d-flex justify-content-between align-items-center">
                            <p class="my-auto" style="font-weight:500">GRADE LEVEL AND SCHOOL INFORMATION</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">School Year <span class="text-danger">*</span></label>
                        <input type="text" disabled class="form-control form-control-required mb-1" id="sp_school_year">

                        <label class="mt-2" style="font-size:10pt">Grade Level <span class="text-danger">*</span></label>
                        <input type="text" disabled class="form-control form-control-required mb-1" id="sp_grade_level">

                        <label class="mt-2" style="font-size:10pt">Strand <span class="text-danger">*</span></label>
                        <input type="text" disabled class="form-control form-control-required mb-1" id="sp_strand">

                        <label class="mt-2" style="font-size:10pt">Semester <span class="text-danger">*</span></label>
                        <input type="text" disabled class="form-control form-control-required mb-1" id="sp_semester">

                        <div class="mt-3 d-flex justify-content-between align-items-center">
                            <p class="my-auto" style="font-weight:500">STUDENT INFORMATION</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Learner Reference Number: <span class="text-danger">*</span></label>
                        <input type="text" disabled class="form-control form-control-required mb-1" id="sp_lrn">

                        <label class="mt-2" style="font-size:10pt">Last Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_lastname">

                        <label class="mt-2" style="font-size:10pt">First Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_firstname">

                        <label class="mt-2" style="font-size:10pt">Middle Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_middlename">

                        <div class="row">
                            <div class="col-6 col-lg-10">
                                <label class="mt-2" style="font-size:10pt">Date of Birth </label>
                                <input type="date" class="form-control form-control-required mb-1" id="sp_birthdate">
                            </div>
                            <div class="col-6 col-lg-2">
                                <label class="mt-2" style="font-size:10pt">Age </label>
                                <input type="text" class="form-control form-control-required mb-1" id="sp_age" disabled>
                            </div>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Sex </label>
                        <div class="d-flex mb-2">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" value="male" name="sp_gender_radio_btn" id="sp_male">
                                <label class="form-check-label me-2" for="sp_male">
                                    Male
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" value="female" name="sp_gender_radio_btn" id="sp_female">
                                <label class="form-check-label" for="sp_female">
                                    Female
                                </label>
                            </div>
                        </div>

                        <div class="mt-4 d-flex justify-content-between align-items-center">
                            <p class="my-auto" style="font-weight:500">CONTACT INFORMATION</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Email Address </label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_email">

                        <label class="mt-2" style="font-size:10pt">Contact No</label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_contact_no">

                        <div class="mt-4 d-flex justify-content-between align-items-center">
                            <p class="my-auto" style="font-weight:500">ADDRESS</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Street</label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_add_st">

                        <label class="mt-2" style="font-size:10pt">City</label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_add_city">

                        <label class="mt-2" style="font-size:10pt">State</label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_add_state">

                        <label class="mt-2" style="font-size:10pt">Zip Code</label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_add_zipcode">

                        <div class="mt-4 d-flex justify-content-between align-items-center">
                            <p class="my-auto" style="font-weight:500">GUARDIAN'S INFORMATION</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Full Name</label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_guardian_name">

                        <label class="mt-2" style="font-size:10pt">Contact No</label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_guardian_no">

                        <div class="row mt-4">
                            <div class="col">
                                <h6>REQUIREMENT CHECKLIST</h6>

                                <div class="d-flex flex-column" id="sp_requirement_list">
                                    <div class="form-check me-5 mb-1">
                                        <input class="a_approve_requirement form-check-input" document_name="SF9" type="checkbox" value="" id="sp_rc_sf9">
                                        <label class="form-check-label" for="sp_rc_sf9">
                                            SF9
                                        </label>
                                    </div>

                                    <div class="form-check me-5 mb-1">
                                        <input class="sp_rc_requirement form-check-input" document_name="SF10" type="checkbox" value="" id="sp_rc_sf10">
                                        <label class="form-check-label" for="sp_rc_sf10">
                                            SF10
                                        </label>
                                    </div>

                                    <div class="form-check me-5 mb-1">
                                        <input class="sp_rc_requirement form-check-input" document_name="NSO" type="checkbox" value="" id="sp_rc_nso">
                                        <label class="form-check-label" for="sp_rc_nso">
                                            PSA/NSO Birth Certificate
                                        </label>
                                    </div>

                                    <div class="form-check me-5 mb-1">
                                        <input class="sp_rc_requirement form-check-input" document_name="GMC" type="checkbox" value="" id="sp_rc_gmc">
                                        <label class="form-check-label" for="sp_rc_gmc">
                                            Good Moral Character
                                        </label>
                                    </div>

                                    <div class="form-check me-5 mb-1">
                                        <input class="sp_rc_requirement form-check-input" document_name="PHOTO" type="checkbox" value="" id="sp_rc_photo">
                                        <label class="form-check-label" for="sp_rc_photo">
                                            2x2 Photo
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col">
                                <h6>ATTACHED DOCUMENTS</h6>
                                <ul id="ad_rc_attachments" style="list-style-type:'&#128194;';border:1px dashed #DEE2E6"></ul>
                            </div>
                        </div>

                        <button class="btn text-light mt-3" style="background:#0A1881; font-size:10pt" id="sp_btn_profile_save_changes">
                            <i class="fa-solid fa-floppy-disk"></i> Save Changes
                        </button>

                    </div>

                    <!-- MICRO PAGE 2 -->
                    <div class="micropage mt-3  p-2 px-4" id="sp_micro_page_change_password" style="display:none;">
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="my-auto" style="font-weight:500">CHANGE PASSWORD</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">New Password <span class="text-danger">*</span></label>
                        <input type="text" class="form-control txt-password mb-1" id="sp_cp_new_password">

                        <label class="mt-2" style="font-size:10pt">Confirm New Password <span class="text-danger">*</span></label>
                        <input type="text" class="form-control txt-password" id="sp_cp_new_password_confirm">
                        <div class="text-end" style="display:none;" id="sp_micro_cp_prompt">
                            <small class="text-danger py-0 my-0">Passwords doesn't match</small>
                        </div>
                        <button class="btn text-light mt-4" style="background:#0A1881; font-size:10pt" id="btn_changepass_profile_save_changes">
                            Change Password
                        </button>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<script src="src/pages/student/profile/profile.js"></script>

<!-- CHANGE PHOTO -->
<div class="modal fade" tabindex="-1" id="md_student_change_photo">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Change Student Photo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="file" name="" id="file_student_change_photo" class="form-control">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_confirm_student_change_photo">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- CHANGE PASS -->
<div class="modal fade" tabindex="-1" id="md_student_change_password">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Change Password</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to change password?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_confirm_student_change_password">Confirm</button>
            </div>
        </div>
    </div>
</div>