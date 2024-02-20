<!-- PAGE SUBJECTS -->
<section class="page text-dark vh-100 p-5" id="page_subjects" style="display:none">
    <p class="lead" style="font-weight:500">Subject</p>

    <div class="minipage" id="strand_home">
        <div class="text-end">
            <button class="btn" style="background:#0A1881; color:#fff; font-size:10pt" id="btn_add_strand">Add Grade Level <i class="fa-solid fa-plus ms-2"></i></button>
        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">List of Grade Level</h6>

            <table class="table border-top" style="font-size:10pt; " id="tbl_admin_strands">
                <thead>
                    <th class="py-2 text-center" width="10%" style="color:#5F6D7E; font-weight:500">
                        Grade Level
                    </th>

                    <th class="py-2" style="color:#5F6D7E; font-weight:500">
                        Strand
                    </th>

                    <th class="py-2 text-center" width="10%" style=" color:#5F6D7E; font-weight:500">

                    </th>

                </thead>

                <tbody></tbody>
            </table>
        </div>

    </div>

    <div class="minipage" style="display:none" id="strand_subjects">

        <div class="text-end d-flex align-items-center justify-content-between">
            <button class="btn border" style="  font-size:10pt ; width:120px;" id="btn_strand_subject_back">Back</button>
            <button class="btn" style="background:#0A1881; color:#fff; font-size:10pt" id="btn_add_subject">Add Subject <i class="fa-solid fa-plus ms-2"></i></button>
        </div>

        <div class="mt-4" id="subjects_div_semester">
            <p style="font-weight:500">Semester</p>

            <div class="d-flex">
                <div class="form-check me-2">
                    <input class="form-check-input" type="radio" name="subjects_semester" id="subjects_sem_1">
                    <label class="form-check-label me-2" for="subjects_sem_1">
                        1st
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="subjects_semester" id="subjects_sem_2">
                    <label class="form-check-label me-2" for="subjects_sem_2">
                        2nd
                    </label>
                </div>
            </div>
        </div>

        <div class="card mt-3 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2" id="strand_txt_grade_level"></h6>

            <table class="table border-top" style="font-size:10pt; " id="tbl_grade_level_subjects">
                <thead>
                    <th class="py-2" style="color:#5F6D7E; font-weight:500">
                        Subject
                    </th>

                    <th class="py-2 text-center" width="10%" style=" color:#5F6D7E; font-weight:500"></th>

                </thead>

                <tbody></tbody>
            </table>
        </div>

    </div>

</section>

<script src="src/pages/admin/subjects/subjects.js"></script>


<!-- EDIT MODAL -->
<div class="modal fade" tabindex="-1" id="strands_md_edit">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Strand</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="">Grade Level</label>
                <input type="text" class="form-control mb-2" id="strands_md_txt_grade_level">

                <label for="">Strand</label>
                <textarea name="" id="strands_md_txt_strand" rows="10" class="form-control"></textarea>

            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="strands_btn_confirm_edit">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- DELETE MODAL -->
<div class="modal fade" tabindex="-1" id="strands_md_delete">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Delete Strand</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to delete this strand?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="strands_btn_confirm_delete">Confirm</button>
            </div>
        </div>
    </div>
</div>

<!-- ADD MODAL -->
<div class="modal fade" tabindex="-1" id="strands_md_add">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Strand</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="">Grade Level</label>
                <select name="" id="add_strands_md_txt_grade_level" class="form-select mb-2">
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>

                <label for="">Strand</label>
                <textarea name="" id="add_strands_md_txt_strand" rows="10" class="form-control"></textarea>

            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="strands_btn_confirm_add">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- ADD SUBJECT MODAL -->
<div class="modal fade" tabindex="-1" id="subjects_md_add">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Subject</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label class="mt-2">Subject Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="subjects_md_txt_subject">
                <div id="div_subjects_md_sel_semester">
                    <label class="mt-2">Semester <span class="text-danger">*</span></label>
                    <select name="" id="subjects_md_sel_semester" class="form-select">
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="subjects_btn_confirm_add">Confirm</button>
            </div>
        </div>
    </div>
</div>


<!-- CONFIRM MODAL -->
<div class="modal fade" tabindex="-1" id="subjects_md_remove_subject">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Remove Subject</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to remove this subject from this strand?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="btn_subjects_md_removeconfirm">Confirm</button>
            </div>
        </div>
    </div>
</div>