<!-- PAGE PROFILE -->
<div class="page text-dark vh-100 p-4" id="page_enrollment" style="display:none;">
    <p class="lead" style="font-weight:500">Enrollment</p>

    <div class="text-end">
        <button class="btn" style="background:#0A1881; color:#fff; font-size:10pt" id="btn_new_enrollment">New Enrollment <i class="fa-solid fa-plus ms-2"></i></button>
    </div>

    <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

        <h6 class="ps-2 pt-3 pb-2">Enrollment Table</h6>

        <table class="table border-top" style="font-size:10pt;" id="tbl_se_enrollments">
            <thead>
                <th class="text-center" width="5%" style="color:#5F6D7E; font-weight:500">
                    No
                </th>

                <th style="color:#5F6D7E; font-weight:500">
                    Lrn
                </th>

                <th width="10%" class="text-center" style="color:#5F6D7E; font-weight:500">
                    Grade Level
                </th>

                <th width="10%" class="text-center" style=" color:#5F6D7E; font-weight:500">
                    Status
                </th>

                <th width="10%" class="text-center" style="color:#5F6D7E; font-weight:500"></th>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</div>

<script src="src/pages/student/enrollment/enrollment.js"></script>

<!-- CONFIRM MODAL -->
<div class="modal fade" tabindex="-1" id="md_new_enrollment">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">New Enrollment</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <label for="">Grade Level</label>
                <select id="md_new_enrollment_grade_level" class="form-select" disabled>
                    <option value="12">Grade 12</option>
                    <option value="11">Grade 11</option>
                    <option value="10">Grade 10</option>
                    <option value="9">Grade 9</option>
                    <option value="8">Grade 8</option>
                    <option value="7">Grade 7</option>
                </select>

                <label class="mt-2">Strand</label>
                <select id="md_new_enrollment_strand" class="form-select" disabled>
                    <option value="12">Grade 12</option>
                    <option value="11">Grade 11</option>
                    <option value="10">Grade 10</option>
                    <option value="9">Grade 9</option>
                    <option value="8">Grade 8</option>
                    <option value="7">Grade 7</option>
                </select>

                <label class="mt-2">Semester</label>
                <select id="md_new_enrollment_semester" class="form-select" disabled>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                </select>

            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_new_enrollment_btn_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>