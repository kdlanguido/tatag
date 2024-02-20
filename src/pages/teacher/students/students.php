<section class="page text-dark vh-100 p-5 px-3" style="display:none; background:#FAFBFC" id="page_students">
    <div class="minipage students_minipage" id="minipage_students_home">
        <div class="text-end">
            <input type="text" class="form-control" id="" placeholder="Search" style="width:250px;">
        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">List of Sections</h6>

            <table class="table border-top" style="font-size:10pt; " id="tm_tbl_teachers_sections">
                <thead>
                    <th class="py-2" style="color:#5F6D7E; font-weight:500">
                        Subject
                    </th>

                    <th class="py-2 text-center" width="15%" style=" color:#5F6D7E; font-weight:500">
                        Section
                    </th>

                    <th class="py-2 text-center" width="10%" style="color:#5F6D7E; font-weight:500">
                        Grade Level
                    </th>

                    <th class="py-2" width="4%" style="color:#5F6D7E; font-weight:500"></th>
                </thead>
                <tbody></tbody>
            </table>

        </div>
    </div>

    <div class="minipage students_minipage" id="minipage_students_section_students" style="display:none">
        <div class="text-end">
            <input type="text" class="form-control" id="" placeholder="Search" style="width:250px;">
        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">LIST OF STUDENTS</h6>

            <table class="table" id="tbl_section_students" style="font-size:10pt;">
                <thead class="border-top">
                    <th style="color:#5F6D7E; font-weight:500">Name</th>
                    <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">1st</th>
                    <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">2nd</th>
                    <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">3rd</th>
                    <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">4th</th>
                    <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">Final Grade</th>
                    <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">Remark</th>
                    <th class="text-center" width="5%" style="color:#5F6D7E; font-weight:500"></th>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

</section>

<script src="src/pages/teacher/students/students.js"></script>

<!-- CONFIRM MODAL -->
<div class="modal fade" tabindex="-1" id="students_add_grade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="sag_subject">Title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="font-size:10pt;">
                <label for="">1st Grading :</label>
                <input type="number" class="grade_input form-control mb-2" value="0" id="sag_grade_1" placeholder="0">

                <label for="">2nd Grading :</label>
                <input type="number" class="grade_input form-control mb-2" value="0" id="sag_grade_2" placeholder="0">

                <label for="">3rd Grading :</label>
                <input type="number" class="grade_input form-control mb-2" value="0" id="sag_grade_3" placeholder="0">

                <label for="">4th Grading :</label>
                <input type="number" class="grade_input form-control mb-2" value="0" id="sag_grade_4" placeholder="0">

                <label for="">Final Grade :</label>
                <input type="number" class="grade_input form-control mb-2" value="0" id="sag_grade_f" disabled>
            </div>
            <div class="modal-footer">
                <button class="btn text-light btn-sm" data-bs-dismiss="modal" style="background:#0A1881" id="sag_subject_btn_confirm">Save</button>
            </div>
        </div>
    </div>
</div>