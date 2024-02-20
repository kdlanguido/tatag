<!-- PAGE SECTIONS -->
<section class="page text-dark vh-100 p-5" id="page_sections" style="display:none">

    <div class="minipage" id="mini_page_section_home">
        <p class="lead" style="font-weight:500">Sections</p>

        <div class="text-end">
            <button class="btn" style="background:#0A1881; color:#fff; font-size:10pt" id="btn_add_section">Add Section <i class="fa-solid fa-plus ms-2"></i></button>
        </div>
        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">List of Sections</h6>

            <table class="table border-top" style="font-size:10pt; " id="tbl_admin_sections">
                <thead>
                    <th class="py-2 text-center" style="color:#5F6D7E; font-weight:500">
                        Adviser
                    </th>

                    <th class="py-2" width="15%" style="color:#5F6D7E; font-weight:500">
                        Section
                    </th>

                    <th class="py-2 " width="10%" style=" color:#5F6D7E; font-weight:500">
                        Grade Level
                    </th>

                    <th class="py-2" style="color:#5F6D7E; font-weight:500">
                        Strand
                    </th>

                    <th class="py-2" width="10%" style="color:#5F6D7E; font-weight:500">
                        Semester
                    </th>

                    <th class="py-2" width="8%" style="color:#5F6D7E; font-weight:500"></th>
                </thead>
                <tbody></tbody>
            </table>

        </div>
    </div>

    <div class="minipage" id="mini_page_section_schedule" style="display:none">

        <div class="d-flex justify-content-between align-items-center">
            <p class="lead my-auto" style="font-weight:500">Schedule</p>
            <button class="btn border rounded" id="a_btn_close_sections_schedule"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="card mt-5 p-1" id="card_section_schedule" style="border-radius:10px; border: 1px solid #EAEBF0; max-height:80vh; overflow-y:auto">

            <h6 class="ps-2 pt-3 pb-2">Schedule</h6>

            <table class="table border-top table-bordered" style="font-size:10pt; " id="tbl_admin_section_subjects">
                <thead>
                    <th class="py-2" width="" style="color:#5F6D7E; font-weight:500">
                        Subject
                    </th>

                    <th class="py-2" width="10%" style="color:#5F6D7E; font-weight:500">
                        Days
                    </th>

                    <th class="py-2 " width="15%" style=" color:#5F6D7E; font-weight:500">
                        Time
                    </th>

                    <th class="py-2" width="20%" style="color:#5F6D7E; font-weight:500">
                        Teacher
                    </th>

                    <th class="py-2" width="8%" style="color:#5F6D7E; font-weight:500"></th>
                </thead>


                <tbody></tbody>
            </table>
        </div>
    </div>

</section>

<script src="src/pages/admin/sections/sections.js"></script>

<!-- ADD MODAL -->
<div class="modal fade" tabindex="-1" id="md_sections_add">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Section</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <label class="mt-2">Adviser's Name <span class="text-danger">*</span></label>
                <select id="md_sections_sel_adviser" class="form-select"></select>

                <label class="mt-2">Section Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="md_sections_txt_name">

                <label class="mt-2">Grade Level <span class="text-danger">*</span></label>
                <select id="md_sections_sel_grade" class="form-select">
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>

                <label class="mt-2">Strand <span class="text-danger">*</span></label>
                <select id="md_sections_sel_strand" class="form-select" disabled></select>

                <label class="mt-2">Semester <span class="text-danger">*</span></label>
                <select id="md_sections_sel_semester" class="form-select" disabled>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                </select>

            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sections_add_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- ADD MODAL -->
<div class="modal fade" tabindex="-1" id="md_sections_edit">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Section</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <label class="mt-2">Adviser's Name <span class="text-danger">*</span></label>
                <select id="md_sections_edit_sel_adviser" class="form-select"></select>

                <label class="mt-2">Section Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="md_sections_edit_txt_name">

                <label class="mt-2">Grade Level <span class="text-danger">*</span></label>
                <select id="md_sections_edit_sel_grade" class="form-select">
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>

                <label class="mt-2">Strand <span class="text-danger">*</span></label>
                <select id="md_sections_edit_sel_strand" class="form-select" disabled></select>

                <label class="mt-2">Semester <span class="text-danger">*</span></label>
                <select id="md_sections_edit_sel_semester" class="form-select" disabled>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                </select>

            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sections_edit_add_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- CONFIRM ARCHIVE MODAL -->
<div class="modal fade" tabindex="-1" id="md_archive_section">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Archive Section</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to archive this section?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_archive_section_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- ADD SCHEDULE -->
<div class="modal fade" tabindex="-1" id="md_section_add_schedule">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Schedule</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Teacher :
                <select name="" id="md_section_schedule_teacher" class="form-select" style="width:300px;"></select>

                <div class="mt-3">

                    <div class="container-fluid">
                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="md_section_schedule_chk_monday">
                                    M
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="M" id="md_section_schedule_chk_monday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_monday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_monday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="md_section_schedule_chk_tuesday">
                                    T
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="T" id="md_section_schedule_chk_tuesday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_tuesday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_tuesday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="md_section_schedule_chk_wednesday">
                                    W
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="W" id="md_section_schedule_chk_wednesday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_wednesday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_wednesday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="md_section_schedule_chk_thursday">
                                    TH
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="TH" id="md_section_schedule_chk_thursday">

                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_thursday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_thursday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="md_section_schedule_chk_friday">
                                    F
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="F" id="md_section_schedule_chk_friday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_friday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_friday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="md_section_schedule_chk_saturday">
                                    S
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="S" id="md_section_schedule_chk_saturday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_saturday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm" id="md_section_schedule_saturday_to">
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_section_add_schedule_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- EDIT SCHEDULE -->
<div class="modal fade" tabindex="-1" id="md_section_edit_schedule">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Schedule</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Teacher :
                <select name="" id="edit_md_section_schedule_teacher" class="form-select" style="width:300px;"></select>

                <div class="mt-3">

                    <div class="container-fluid">
                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="edit_md_section_schedule_chk_monday">
                                    M
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="M" id="edit_md_section_schedule_chk_monday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_monday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_monday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="edit_md_section_schedule_chk_tuesday">
                                    T
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="T" id="edit_md_section_schedule_chk_tuesday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_tuesday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_tuesday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="edit_md_section_schedule_chk_wednesday">
                                    W
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="W" id="edit_md_section_schedule_chk_wednesday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_wednesday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_wednesday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="edit_md_section_schedule_chk_thursday">
                                    TH
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="TH" id="edit_md_section_schedule_chk_thursday">

                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_thursday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_thursday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="edit_md_section_schedule_chk_friday">
                                    F
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="F" id="edit_md_section_schedule_chk_friday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_friday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_friday_to">
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-2">
                            <div class="col-1 d-flex flex-column">
                                <label class="form-check-label" for="edit_md_section_schedule_chk_saturday">
                                    S
                                </label>
                                <input style="font-size:16pt" class="form-check-input chk_subject_schedule_day" type="checkbox" value="S" id="edit_md_section_schedule_chk_saturday">
                            </div>
                            <div class="col-5">
                                <label>From: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_saturday_from">
                            </div>
                            <div class="col-5">
                                <label>To: <span class="text-danger">*</span></label>
                                <input type="time" class="form-control form-control-sm schedule_edit_day" disabled id="edit_md_section_schedule_saturday_to">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_section_edit_schedule_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>