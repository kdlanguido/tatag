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
                        <img src="src/img/1.jpg" id="teacher_photo" class="my-3 border p-1" style="height:205px; width:205px;" alt="">
                        <label id="teacher_header_name" style="font-size:15pt; font-weight:500">Gonzales, Miguel Sebastian</label>
                        <label id="teacher_header_email" class="text-muted" style="font-size:10pt;font-weight:400">gonzalesmiguel@gmail.com</label>
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
                            <p class="my-auto" style="font-weight:500">TEACHER INFORMATION</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Last Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_lastname">

                        <label class="mt-2" style="font-size:10pt">First Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_firstname">

                        <label class="mt-2" style="font-size:10pt">Middle Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_middlename">

                        <div class="row">
                            <div class="col-6 col-lg-10">
                                <label class="mt-2" style="font-size:10pt">Date of Birth <span class="text-danger">*</span></label>
                                <input type="date" class="form-control form-control-required mb-1" id="sp_birthdate">
                            </div>
                            <div class="col-6 col-lg-2">
                                <label class="mt-2" style="font-size:10pt">Age <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-required mb-1" id="sp_age" disabled>
                            </div>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Sex <span class="text-danger">*</span></label>
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

                        <label class="mt-2" style="font-size:10pt">Email Address <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_email">

                        <label class="mt-2" style="font-size:10pt">Contact No <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_contact_no">

                        <div class="mt-4 d-flex justify-content-between align-items-center">
                            <p class="my-auto" style="font-weight:500">ADDRESS</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Street <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_add_st">

                        <label class="mt-2" style="font-size:10pt">City <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_add_city">

                        <label class="mt-2" style="font-size:10pt">State <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_add_state">

                        <label class="mt-2" style="font-size:10pt">Zip Code <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_add_zipcode">

                        <div class="mt-4 d-flex justify-content-between align-items-center">
                            <p class="my-auto" style="font-weight:500">EMERGENCY CONTACT</p>
                        </div>

                        <label class="mt-2" style="font-size:10pt">Full Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_guardian_name">

                        <label class="mt-2" style="font-size:10pt">Contact No <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required mb-1" id="sp_guardian_no">

                        <div class="row mt-1">
                            <div class="col-12 col-lg-4" style="font-size:10pt">
                                <label class="mt-2">Relationship: <span class="text-danger">*</span></label>
                                <select name="" id="tr_info_e_relationship" class="form-select form-control-required" style="font-size:10pt">
                                    <option value="Spouse">Spouse</option>
                                    <option value="Parent">Parent</option>
                                    <option value="Child">Child</option>
                                    <option value="Sibling">Sibling</option>
                                    <option value="Grandparent">Grandparent</option>
                                    <option value="Grandchild">Grandchild</option>
                                    <option value="Aunt/Uncle">Aunt/Uncle</option>
                                    <option value="Niece/Nephew">Niece/Nephew</option>
                                    <option value="Cousin">Cousin</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col-12 col-lg-6">
                                <h6>SUBJECTS </h6>
                                <div class="mt-1 border rounded px-1 py-0 " id="div_teacher_subjects">
                                    <a class="btn " id="btn_add_subject_to_teacher" style="font-size:9pt;">
                                        <i class="fa-solid fa-plus"></i>
                                    </a>
                                </div>
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

<script src="src/pages/teacher/profile/profile.js"></script>

<!-- CHANGE PHOTO -->
<div class="modal fade" tabindex="-1" id="md_teacher_change_photo">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Change teacher Photo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="file" name="" id="file_teacher_change_photo" class="form-control">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_confirm_teacher_change_photo">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- CHANGE PASS -->
<div class="modal fade" tabindex="-1" id="md_teacher_change_password">
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
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_confirm_teacher_change_password">Confirm</button>
            </div>
        </div>
    </div>
</div>