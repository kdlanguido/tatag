<!-- PAGE ADMISSION -->
<section class="page text-dark vh-100 p-5" style="display:none; background:#FAFBFC" id="page_admission">

    <!-- MINI PAGE ADMISSION HOME -->
    <div class="minipage" id="mini_page_admission_home">
        <p class="lead" style="font-weight:500">Admissions</p>

        <div class="text-end">

            <div style="width:250px; position:relative;">
                <i class="fa-solid fa-magnifying-glass" style="position:absolute; top:10px; left:10px; color:#A6AEB8"></i>
                <input type="text" class="form-control" style="padding-left:2rem;" placeholder="Search">

            </div>

        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">List of Student Applications</h6>

            <table class="table border-top" style="font-size:10pt; " id="tbl_admin_admissions">
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

                    <th class="py-2 text-center" width="10%" style="color:#5F6D7E; font-weight:500">
                        Status
                    </th>

                    <th class="py-2" width="8%" style="color:#5F6D7E; font-weight:500">

                    </th>
                </thead>

                <tbody></tbody>
            </table>
        </div>
    </div>


    <!-- MINI PAGE ADMISSION VIEW APPLICATION -->
    <div class="minipage" style="display:none" id="mini_page_admission_view_application">

        <div class="d-flex justify-content-between align-items-center">
            <p class="lead my-auto" style="font-weight:500">Student Application</p>
            <button class="btn border rounded" id="a_btn_back_to_home"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="card mt-2 p-1" style="border-radius:10px; border: 1px solid #EAEBF0;max-height:85vh; overflow-y:auto">
            <div class="container-fluid px-5" style="margin-top:2em;">

                <div class="row">
                    <div class="col">
                        <h6>GRADE LEVEL AND SCHOOL INFORMATION</h6>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">School Year: <span class="text-danger">*</span></label>
                        <input readonly class="form-control" id="a_si_sy">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Grade Level: <span class="text-danger">*</span></label>
                        <input readonly class="form-control" id="a_si_gl">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Strand: <span class="text-danger">*</span></label>
                        <input readonly class="form-control" id="a_si_strand">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Semester: <span class="text-danger">*</span></label>
                        <input readonly class="form-control" id="a_si_semester">
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>STUDENT INFORMATION</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Learner Reference Number: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_lrn">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Date of Birth: <span class="text-danger">*</span></label>
                        <input type="date" name="" id="a_si_dob" class="form-control form-control-required">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Last Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_ln">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Age: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_age" readonly>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">First Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_fn">
                    </div>
                    <div class="col-12 col-lg-6">

                        <label class="mt-2">Sex: <span class="text-danger">*</span></label>

                        <div class="d-flex">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender_rb" id="a_si_male">
                                <label class="form-check-label me-2" for="a_si_male">
                                    Male
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender_rb" id="a_si_female">
                                <label class="form-check-label" for="a_si_female">
                                    Female
                                </label>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Middle Name: </label>
                        <input type="text" class="form-control" id="a_si_mn">
                    </div>
                    <div class="col-12 col-lg-6"></div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>CONTACT INFORMATION</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Email Address: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_email" placeholder="juandelacruz@example.com">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Contact Number: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_contact_no" placeholder="09*********">
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
                        <input type="text" class="form-control form-control-required" id="a_si_street">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">City: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_city">
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">State: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_state">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Zip Code: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_zipcode">
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>GUARDIAN'S INFORMATION</h6>
                    </div>
                </div>

                <div class="row mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Full Name: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_g_fullname">
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="mt-2">Contact Number: <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-required" id="a_si_g_contact_no">
                    </div>
                </div>

                <div class="row mt-4" id="a_div_requirement_checklist">
                    <div class="col">
                        <h6>REQUIREMENT CHECKLIST</h6>

                        <div class="d-flex">
                            <div class="form-check me-5">
                                <input class="a_approve_requirement form-check-input" document_name="SF9" type="checkbox" value="" id="a_approve_sf9">
                                <label class="form-check-label" for="a_approve_sf9">
                                    SF9
                                </label>
                            </div>

                            <div class="form-check me-5">
                                <input class="a_approve_requirement form-check-input" document_name="SF10" type="checkbox" value="" id="a_approve_sf10">
                                <label class="form-check-label" for="a_approve_sf10">
                                    SF10
                                </label>
                            </div>

                            <div class="form-check me-5">
                                <input class="a_approve_requirement form-check-input" document_name="NSO" type="checkbox" value="" id="a_approve_nso">
                                <label class="form-check-label" for="a_approve_nso">
                                    PSA/NSO Birth Certificate
                                </label>
                            </div>

                            <div class="form-check me-5">
                                <input class="a_approve_requirement form-check-input" document_name="GMC" type="checkbox" value="" id="a_approve_gmc">
                                <label class="form-check-label" for="a_approve_gmc">
                                    Good Moral Character
                                </label>
                            </div>

                            <div class="form-check me-5">
                                <input class="a_approve_requirement form-check-input" document_name="PHOTO" type="checkbox" value="" id="a_approve_photo">
                                <label class="form-check-label" for="a_approve_photo">
                                    2x2 Photo
                                </label>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col">
                        <h6>ATTACHED DOCUMENTS</h6>

                        <ul id="a_list_attachments" style="list-style-type:'&#128194;';border:1px dashed #DEE2E6">
                            <li>
                                <button class="btn border rounded">
                                    <i class="fa-regular fa-file"></i> SF9
                                </button>
                            </li>
                            <li>
                                <button class="btn border rounded">
                                    <i class="fa-regular fa-file"></i> SF10
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row my-2">
                    <div class="col text-end">
                        <button class="btn" id="a_btn_admit_student" style="background:#05147B; color:white; font-size:10pt">Admit Student</button>
                    </div>
                </div>

            </div>

        </div>
    </div>

</section>
<script src="src/pages/admin/admission/admission.js"></script>

<!-- CONFIRM CANCEL STUDENT APPLICATION -->
<div class="modal fade" tabindex="-1" id="a_md_confirm_cancel">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Cancel Application</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to cancel this student application?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="btn_cancel_application_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- CONFIRM REQUIREMENT APPROVAL -->
<div class="modal fade" tabindex="-1" id="a_md_confirm_approve_requirement">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Approve Requirement</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to approve this requirement?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="btn_confirm_approve_requirement">Confirm</button>
            </div>
        </div>
    </div>
</div>

<!-- CONFIRM REQUIREMENT DISAPPROVE -->
<div class="modal fade" tabindex="-1" id="a_md_confirm_disapprove_requirement">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Disapprove Requirement</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to disapprove this requirement?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="btn_confirm_disapprove_requirement">Confirm</button>
            </div>
        </div>
    </div>
</div>

<!-- CONFIRM ADMISSION OF STUDENT -->
<div class="modal fade" tabindex="-1" id="a_md_confirm_admit_student">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Admit Student</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to admit this student?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="btn_confirm_admit_student">Confirm</button>
            </div>
        </div>
    </div>
</div>