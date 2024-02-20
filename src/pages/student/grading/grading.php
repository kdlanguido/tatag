<!-- PAGE PROFILE -->
<div class="page text-dark vh-100 p-4" id="page_grading" style="display:none;">
    <div class="d-flex justify-content-between align-items-center mb-2">
        <p class="lead my-auto" style="font-weight:500">Grading</p>
    </div>

    <div class="container-fluid" style="font-size:10pt;">
        <div class="row mb-3">
            <div class="col px-0">
                <div class="d-flex justify-content-between align-items-bottom">
                    <div>
                        <label for="">Grade Level:</label>
                        <select id="sel_grading_grade_level" class="form-select form-control-sm" style="font-size:10pt; width:200px">
                            <option value="12">Grade 12</option>
                            <option value="11">Grade 11</option>
                            <option value="10">Grade 10</option>
                            <option value="9">Grade 9</option>
                            <option value="8">Grade 8</option>
                            <option value="7">Grade 7</option>
                        </select>
                    </div>
                    <div>
                        <button class="btn text-white rounded btn-sm" style="background:#0A1881" id="grading_btn_print">Print <i class="fa-solid fa-print ps-2"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-3 row-cols-3 ">
            <div class="col px-0 mb-1">
                <span style="font-weight:600">Student ID: </span>
                <span id="grading_txt_student_id"></span>
            </div>
            <div class="col px-0 mb-1">
                <span style="font-weight:600">Grade Level: </span>
                <span id="grading_txt_grade_level"></span>
            </div>
            <div class="col px-0 mb-1">
                <span style="font-weight:600">School Year: </span>
                <span id="grading_txt_school_year"></span>
            </div>
            <div class="col px-0 mb-1">
                <span style="font-weight:600">Name: </span>
                <span id="grading_txt_name"></span>
            </div>
            <div class="col px-0 mb-1">
                <span style="font-weight:600">Section: </span>
                <span id="grading_txt_section"></span>
            </div>
            <div class="col px-0 mb-1">
                <span style="font-weight:600">Sex: </span>
                <span id="grading_txt_sex"></span>
            </div>
        </div>

        <div class="row mb-1">
            <div class="col">
                <h6 class="text-center mt-2">REPORT ON LEARNING PROGRESS AND ACHIEVEMENT</h6>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col px-0">
                <div class="border rounded p-1 bg-white">

                    <table class="table" id="tbl_grading">
                        <thead>
                            <th width="40%" style="color:#5F6D7E; font-weight:500">Subjects</th>
                            <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">1st</th>
                            <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">2nd</th>
                            <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">3rd</th>
                            <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">4th</th>
                            <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">Final Grade</th>
                            <th class="text-center" width="10%" style="color:#5F6D7E; font-weight:500">Remark</th>
                        </thead>
                        <tbody></tbody>
                    </table>

                </div>
            </div>
        </div>


    </div>


</div>

<script src="src/pages/student/grading/grading.js"></script>