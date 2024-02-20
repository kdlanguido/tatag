<!-- PAGE EMPLOYEES -->
<section class="page text-dark vh-100 p-4" id="page_employees" style="display:none;background:#FAFBFC">

    <ul class="nav nav-underline" id="emp_nav">
        <li class="nav-item">
            <a class="nav-link active pe_m_nav" show_minipage="mini_page_teachers" aria-current="page" href="#">Teachers</a>
        </li>
        <li class="nav-item">
            <a class="nav-link pe_m_nav" show_minipage="mini_page_staffs" href="#">Staffs</a>
        </li>
    </ul>

    <!-- TEACHERS -->
    <div class="minipage" id="mini_page_teachers">

        <div class="text-end">
            <button class="btn" style="background:#0A1881; color:#fff; font-size:10pt" id="btn_add_teacher">Add Teacher <i class="fa-solid fa-plus ms-2"></i></button>
        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">List of Teachers</h6>

            <table class="table border-top" style="font-size:10pt; " id="tbl_admin_teachers">
                <thead>
                    <th class="py-2 text-center" width="10%" style="color:#5F6D7E; font-weight:500">
                        No
                    </th>

                    <th class="py-2 " style="color:#5F6D7E; font-weight:500">
                        Name
                    </th>

                    <th class="py-2" width="25%" style="color:#5F6D7E; font-weight:500">
                        Email Address
                    </th>

                    <th class="py-2" width="10%" style=" color:#5F6D7E; font-weight:500">
                        Contact No
                    </th>

                    <th class="py-2 text-center" width="10%" style="color:#5F6D7E; font-weight:500">
                        Joining Date
                    </th>

                    <th class="py-2 text-center" width="8%" style="color:#5F6D7E; font-weight:500">

                    </th>

                </thead>

                <tbody></tbody>
            </table>
        </div>

    </div>

    <div class="minipage" id="mini_page_add_teacher" style="display:none">

        <div class="d-flex justify-content-between align-items-center">
            <p class="lead my-auto" style="font-weight:500">Teacher Registration</p>
            <button class="btn border rounded" id="a_btn_close_tr"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="card mt-4 p-1" id="div_tr" style="border-radius:10px; border: 1px solid #EAEBF0;max-height:90vh; overflow-y:auto">
            <div class="container-fluid px-5" style="margin-top:2em;">

                <div class="row">
                    <div class="col">
                        <h6>TEACHER INFORMATION</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Last Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_lname">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Date of Birth: <span class="text-danger">*</span></label>
                        <input type="date" name="" id="tr_info_dob" class="form-control form-control-required">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">First Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_fname">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Age: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_age" disabled>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Middle Name: </label>
                        <input type="text" class="form-control" id="tr_info_mname">
                    </div>
                    <div class="col-12 col-lg-6">

                        <label class="mt-2">Sex: <span class="text-danger">*</span></label>

                        <div class="d-flex">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender_rb" id="tr_info_male" checked>
                                <label class="form-check-label me-2" for="tr_info_male">
                                    Male
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender_rb" id="tr_info_female">
                                <label class="form-check-label" for="tr_info_female">
                                    Female
                                </label>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="row mt-4">
                    <div class="col">
                        <h6>CONTACT INFORMATION</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Email Address: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_email" placeholder="juandelacruz@example.com">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Contact Number: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_contact_no" placeholder="09*********">
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>ADDRESS</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Street: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_street">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">City: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_city">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">State: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_state">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Zip Code: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_zipcode">
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>EMERGENCY CONTACT</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Full Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_e_fname">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Contact Number: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="tr_info_e_contact_no">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Relationship: <span class="text-danger">*</span></label>
                        <select name="" id="tr_info_e_relationship" class="form-select form-control-required">
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
                    <div class="col-12 col-lg-6">

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

                <div class="row my-2">
                    <div class="col text-end">
                        <button class="btn" id="a_btn_register_teacher" style="background:#05147B; color:white; font-size:10pt">Register Teacher</button>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <div class="minipage" id="mini_page_view_teacher" style="display:none; ">

        <div class="d-flex justify-content-between align-items-center mb-2">
            <p class="lead my-auto" style="font-weight:500">Teacher Profile</p>
            <button class="btn border rounded" id="a_btn_close_tp"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                    <div class="bg-white p-4">

                        <div class="d-flex justify-content-center align-items-center flex-column">
                            <img src="src/img/1.jpg" id="tp_photo" class="my-3 border" style="height:200px; width:185px;" alt="">
                            <label id="tp_header_name" style="font-size:15pt; font-weight:500">Gonzales, Miguel Sebastian</label>
                            <label id="tp_header_email" class="text-muted" style="font-size:10pt;font-weight:400">gonzalesmiguel@gmail.com</label>
                        </div>

                        <div class="container-fluid mt-2">

                            <div class="row" style="font-weight:500">
                                <div class="col d-grid">
                                    <button class="btn text-light mt-2" style="background:#0A1881; font-size:10pt" id="btn_edit_teacher_profile_change_photo">
                                        <i class="fa-solid fa-camera"></i> Change Photo
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-8 pe-0">
                    <div class="bg-white border rounded ">

                        <ul class="nav nav-underline border-bottom px-4" id="emp_nav_tp_profile">
                            <li class="nav-item">
                                <a class="nav-link active pe_micro_nav" style="font-size:10pt" show_micropage="tp_micro_page_personal" aria-current="page" href="#">Personal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe_micro_nav" style="font-size:10pt" show_micropage="tp_micro_page_change_password" href="#">Change Password</a>
                            </li>
                        </ul>

                        <!-- MICRO PAGE 1 -->
                        <div class="micropage mt-3  p-2 px-4" id="tp_micro_page_personal" style="display:none;">
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">TEACHER INFORMATION</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Last Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_lname">

                            <label class="mt-2" style="font-size:10pt">First Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_fname">

                            <label class="mt-2" style="font-size:10pt">Middle Name </label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_mname">

                            <div class="row">
                                <div class="col-6 col-lg-10">
                                    <label class="mt-2" style="font-size:10pt">Date of Birth </label>
                                    <input type="date" class="form-control form-control-required mb-1" id="tp_info_dob">
                                </div>
                                <div class="col-6 col-lg-2">
                                    <label class="mt-2" style="font-size:10pt">Age </label>
                                    <input type="text" class="form-control form-control-required mb-1" id="tp_info_age" disabled>
                                </div>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Sex </label>
                            <div class="d-flex mb-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender_rb" id="tp_info_male">
                                    <label class="form-check-label me-2" for="tp_info_male">
                                        Male
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender_rb" id="tp_info_female">
                                    <label class="form-check-label" for="tp_info_female">
                                        Female
                                    </label>
                                </div>
                            </div>

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">CONTACT INFORMATION</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Email Address </label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_email">

                            <label class="mt-2" style="font-size:10pt">Contact No</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_contact_no">

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">ADDRESS</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Street</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_add_street">

                            <label class="mt-2" style="font-size:10pt">City</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_add_city">

                            <label class="mt-2" style="font-size:10pt">State</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_add_state">

                            <label class="mt-2" style="font-size:10pt">Zip Code</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_add_zipcode">

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">EMERGENCY CONTACT</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Full Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_e_fname">

                            <label class="mt-2" style="font-size:10pt">Contact No</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_e_contact">

                            <label class="mt-2" style="font-size:10pt">Relationship</label>
                            <input type="text" class="form-control form-control-required mb-1" id="tp_info_e_relationship">

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">SUBJECTS</p>
                            </div>

                            <div class="row ">
                                <div class="col-12">
                                    <div class="mt-1 border rounded px-1 py-0 " id="div_info_teacher_subjects">
                                        <a class="btn " id="btn_info_add_subject_to_teacher" style="font-size:9pt;">
                                            <i class="fa-solid fa-plus" style="font-weight:300"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button class="btn text-light mt-3" style="background:#0A1881; font-size:10pt" id="btn_edit_teacher_profile_save_changes">
                                <i class="fa-solid fa-floppy-disk"></i> Save Changes
                            </button>

                        </div>

                        <!-- MICRO PAGE 2 -->
                        <div class="micropage mt-3  p-2 px-4" id="tp_micro_page_change_password" style="display:none;">
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">CHANGE PASSWORD</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">New Password <span class="text-danger">*</span></label>
                            <input type="text" class="form-control txt-password mb-1" id="tp_cp_new_password">

                            <label class="mt-2" style="font-size:10pt">Confirm New Password <span class="text-danger">*</span></label>
                            <input type="text" class="form-control txt-password" id="tp_cp_new_password_confirm">
                            <div class="text-end" style="display:none;" id="tp_micro_cp_prompt">
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

    <!-- STAFFS -->
    <div class="minipage" id="mini_page_staffs" style="display:none">

        <div class="text-end">
            <button class="btn" style="background:#0A1881; color:#fff; font-size:10pt" id="btn_add_staff">Add Staff <i class="fa-solid fa-plus ms-2"></i></button>
        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">List of Staffs</h6>

            <table class="table border-top" id="tbl_admin_staffs" style="font-size:10pt; ">
                <thead>

                    <th class="py-2 text-center" style="color:#5F6D7E; font-weight:500" width="5%">No</th>

                    <th class="py-2" style="color:#5F6D7E; font-weight:500">
                        Name
                    </th>

                    <th class="py-2" width="18%" style="color:#5F6D7E; font-weight:500">
                        Email
                    </th>

                    <th class="py-2 text-center" width="18%" style=" color:#5F6D7E; font-weight:500">
                        Contact No
                    </th>

                    <th class="py-2 text-center" style="color:#5F6D7E; font-weight:500">
                        Role
                    </th>

                    <th class="py-2 text-center" width="10%" style="color:#5F6D7E; font-weight:500">
                        Date Joined
                    </th>

                    <th class="py-2 text-center" width="8%" style="color:#5F6D7E; font-weight:500">

                    </th>

                </thead>

                <tbody></tbody>
            </table>
        </div>
    </div>

    <div class="minipage" id="mini_page_add_staff" style="display:none">

        <div class="d-flex justify-content-between align-items-center">
            <p class="lead my-auto" style="font-weight:500">Staff Registration</p>
            <button class="btn border rounded" id="a_btn_close_sr"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="card mt-4 p-1" id="div_sr" style="border-radius:10px; border: 1px solid #EAEBF0;max-height:90vh; overflow-y:auto">
            <div class="container-fluid px-5" style="margin-top:2em;">

                <div class="row">
                    <div class="col">
                        <h6>STAFF INFORMATION</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Last Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_lname">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Date of Birth: <span class="text-danger">*</span></label>
                        <input type="date" name="" id="sr_info_dob" class="form-control form-control-required">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">First Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_fname">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Age: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_age" readonly>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Middle Name: </label>
                        <input type="text" class="form-control" id="sr_info_mname">
                    </div>
                    <div class="col-12 col-lg-6">

                        <label class="mt-2">Sex: <span class="text-danger">*</span></label>

                        <div class="d-flex">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender_rb" id="sr_info_male" checked>
                                <label class="form-check-label me-2" for="sr_info_male">
                                    Male
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender_rb" id="sr_info_female">
                                <label class="form-check-label" for="sr_info_female">
                                    Female
                                </label>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>CONTACT INFORMATION</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Email Address: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_email" placeholder="juandelacruz@example.com">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Contact Number: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_contact_no" placeholder="09*********">
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>ADDRESS</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Street: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_street">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">City: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_city">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">State: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_state">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Zip Code: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_zipcode">
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>EMERGENCY CONTACT</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Full Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_e_fname">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Contact Number: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_e_contact_no">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Relationship: <span class="text-danger">*</span></label>
                        <select name="" id="sr_info_e_relationship" class="form-select form-control-required">
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

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Role: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="sr_info_e_role">
                    </div>
                    <div class="col-12 col-lg-6">

                    </div>
                </div>


                <div class="row my-2">
                    <div class="col text-end">
                        <button class="btn" id="a_btn_register_staff" style="background:#05147B; color:white; font-size:10pt">Register Staff</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="minipage" id="mini_page_view_staff" style="display:none">

        <div class="d-flex justify-content-between align-items-center mb-2">
            <p class="lead my-auto" style="font-weight:500">Staff Profile</p>
            <button class="btn border rounded" id="a_btn_close_sp"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                    <div class="bg-white p-4">

                        <div class="d-flex justify-content-center align-items-center flex-column">
                            <img src="src/img/1.jpg" id="sp_photo" class="my-3 border" style="height:200px; width:185px;" alt="">
                            <label id="sp_header_name" style="font-size:15pt; font-weight:500">Gonzales, Miguel Sebastian</label>
                            <label id="sp_header_email" class="text-muted" style="font-size:10pt;font-weight:400">gonzalesmiguel@gmail.com</label>
                        </div>

                        <div class="container-fluid mt-2">
                            <div class="row" style="font-weight:500">
                                <div class="col d-grid">
                                    <button class="btn text-light mt-2" style="background:#0A1881; font-size:10pt" id="sp_btn_edit_teacher_profile_change_photo">
                                        <i class="fa-solid fa-camera"></i> Change Photo
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-8 pe-0">
                    <div class="bg-white border rounded">

                        <ul class="nav nav-underline border-bottom px-4" id="emp_nav_sp_profile">
                            <li class="nav-item">
                                <a class="nav-link active pe_micro_nav" style="font-size:10pt" show_micropage="sp_micro_page_personal" aria-current="page" href="#">Personal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe_micro_nav" style="font-size:10pt" show_micropage="sp_micro_page_change_password" href="#">Change Password</a>
                            </li>
                        </ul>

                        <!-- MICRO PAGE 1 -->
                        <div class="micropage mt-3  p-2 px-4" id="sp_micro_page_personal">
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">STAFF INFORMATION</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Last Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_lname">

                            <label class="mt-2" style="font-size:10pt">First Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_fname">

                            <label class="mt-2" style="font-size:10pt">Middle Name </label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_mname">

                            <div class="row">
                                <div class="col-6 col-lg-10">
                                    <label class="mt-2" style="font-size:10pt">Date of Birth </label>
                                    <input type="date" class="form-control form-control-required mb-1" id="sp_info_dob">
                                </div>
                                <div class="col-6 col-lg-2">
                                    <label class="mt-2" style="font-size:10pt">Age </label>
                                    <input type="text" class="form-control form-control-required mb-1" id="sp_info_age" disabled>
                                </div>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Sex </label>
                            <div class="d-flex mb-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender_rb" id="sp_info_male">
                                    <label class="form-check-label me-2" for="sp_info_male">
                                        Male
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender_rb" id="sp_info_female">
                                    <label class="form-check-label" for="sp_info_female">
                                        Female
                                    </label>
                                </div>
                            </div>

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">CONTACT INFORMATION</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Email Address </label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_email">

                            <label class="mt-2" style="font-size:10pt">Contact No</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_contact_no">

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">ADDRESS</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Street</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_add_street">

                            <label class="mt-2" style="font-size:10pt">City</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_add_city">

                            <label class="mt-2" style="font-size:10pt">State</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_add_state">

                            <label class="mt-2" style="font-size:10pt">Zip Code</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_add_zipcode">

                            <!-- <hr> -->
                            <div class="mt-4 d-flex justify-content-between align-items-center">
                                <p class="my-auto" style="font-weight:500">EMERGENCY CONTACT</p>
                            </div>

                            <label class="mt-2" style="font-size:10pt">Full Name</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_e_fname">

                            <label class="mt-2" style="font-size:10pt">Contact No</label>
                            <input type="text" class="form-control form-control-required mb-1" id="sp_info_e_contact">

                            <div class="row mt-1">
                                <div class="col-12 col-lg-6">
                                    <label class="mt-2" style="font-size:10pt;">Relationship</label>
                                    <select name="" id="sp_info_e_relationship" class="form-select form-control-required">
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
                                <div class="col-12 col-lg-6">
                                    <label class="mt-2" style="font-size:10pt;">Role</label>
                                    <input type="text" class="form-control form-control-required mb-1" id="sp_info_e_role">
                                </div>

                            </div>



                            <button class="btn text-light mt-3" style="background:#0A1881; font-size:10pt" id="btn_edit_staff_profile_save_changes">
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
                            <button class="btn text-light mt-4" style="background:#0A1881; font-size:10pt" id="sp_btn_changepass_profile_save_changes">
                                Change Password
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<script src="src/pages/admin/employees/employees.js"></script>

<!-- ARCHIVE TEACHER -->
<div class="modal fade" tabindex="-1" id="employee_md_teacher_confirm_archive">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Archive Teacher</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to archive this teacher?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="employee_btn_teacher_confirm_archive">Confirm</button>
            </div>
        </div>
    </div>
</div>

<!-- ADD SUBJECT -->
<div class="modal fade" tabindex="-1" id="employee_md_add_subject_to_teacher">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Subject</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <select id="md_sel_add_to_teacher" class="form-select"></select>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="employee_md_add_subject_to_teacher_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>

<!-- CHANGE PHOTO -->
<div class="modal fade" tabindex="-1" id="employee_md_tp_changephoto">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Change Photo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="file" name="" id="employee_md_tp_photo" class="form-control">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="employee_md_tp_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>

<!-- CHANGE PHOTO -->
<div class="modal fade" tabindex="-1" id="sp_employee_md_tp_changephoto">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Change Photo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="file" name="" id="sp_employee_md_tp_photo" class="form-control">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="sp_employee_md_tp_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- CONFIRM CHANGE PASS -->
<div class="modal fade" tabindex="-1" id="employee_md_tp_changepassword">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Confirm Change Password</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to change this user's password?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="employee_md_tp_changepassword_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- CONFIRM MODAL -->
<div class="modal fade" tabindex="-1" id="e_md_staff_archive">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Confirm Archive</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to archive this staff?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="e_md_staff_archive_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>