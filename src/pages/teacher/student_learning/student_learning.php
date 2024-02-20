<!-- PAGE STUDENT LEARNING -->
<section class="page text-dark vh-100 p-5 px-3" style="display:none; background:#FAFBFC" id="page_student_learning">

    <p class="lead" style="font-weight:500">Student Learning</p>

    <!-- MINIPAGE -->
    <div class="sl_minipage bg-white border rounded p-4" id="minipage_sl_home">
        <div class="text-end">

            <div style="width:250px; position:relative;">
                <i class="fa-solid fa-magnifying-glass" style="position:absolute; top:10px; left:10px; color:#A6AEB8"></i>
                <input type="text" class="form-control" style="padding-left:2rem;" placeholder="Search">
            </div>
        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">List of Sections</h6>

            <table class="table border-top" style="font-size:10pt; " id="tbl_sl_sections">
                <thead>
                    <th style="color:#5F6D7E; font-weight:500">
                        Adviser
                    </th>

                    <th style="color:#5F6D7E; font-weight:500">
                        School Year
                    </th>

                    <th width="10%" style="color:#5F6D7E; font-weight:500">
                        Grade Level
                    </th>

                    <th style="color:#5F6D7E; font-weight:500">
                        Strand
                    </th>

                    <th width="10%" style="color:#5F6D7E; font-weight:500">
                        Semester
                    </th>

                    <th width="10%" style="color:#5F6D7E; font-weight:500"></th>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

    <!-- MINIPAGE -->
    <div class="sl_minipage bg-white border rounded p-4" id="minipage_sl_subjects" style="display:none">
        <div class="d-flex justify-content-between">

            <div style="width:250px; position:relative;">
                <i class="fa-solid fa-magnifying-glass" style="position:absolute; top:10px; left:10px; color:#A6AEB8"></i>
                <input type="text" class="form-control" style="padding-left:2rem;" placeholder="Search">
            </div>

            <button class="btn border rounded" id="btn_sl_close_subjects"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

            <h6 class="ps-2 pt-3 pb-2">Subjects</h6>

            <table class="table border-top" style="font-size:10pt; " id="tbl_sl_subjects">
                <thead>
                    <th style="color:#5F6D7E; font-weight:500; width:20%;">
                        Teacher
                    </th>

                    <th style="color:#5F6D7E; font-weight:500">
                        Subject
                    </th>

                    <th width="10%" style="color:#5F6D7E; font-weight:500"></th>
                </thead>

                <tbody></tbody>
            </table>
        </div>
    </div>

    <!-- MINIPAGE QUIZ MAINTENANCE -->
    <div class="sl_minipage bg-white border rounded p-4" id="minipage_sl_open_subject" style="display:none; height:100%">

        <div class="d-flex justify-content-between">
            <h5 id="minipage_sl_subject_name"></h5>
            <button class="btn border rounded" id="btn_sl_close_opened_subjects"><i class="fa-solid fa-xmark"></i></button>
            <button class="btn border rounded" id="btn_sl_close_quiz_div" style="display:none"><i class="fa-solid fa-xmark"></i></button>
            <button class="btn border rounded" id="btn_sl_close_quiz_preview" style="display:none"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div id="div_minipage_sl_opened_subject_nav">
            <div class="mt-4 d-flex border-bottom">
                <button id="smnc_btn_subject" class="sl_mini_nav_category px-0 me-3 selected_sl_category">Subject</button>
                <button id="smnc_btn_participants" class="sl_mini_nav_category px-0 me-3">Participants</button>
            </div>
        </div>

        <div class="div_minipage_quiz_maintenance" id="div_minipage_sl_quiz" style="display:none">
            <div class="mt-4 d-flex border-bottom">
                <button class="sl_mini_nav_category px-0 me-3 selected_sl_category" id="btn_minipage_sl_quiz_nav_quiz_information">Quiz</button>
                <button class="sl_mini_nav_category px-0 me-3" id="btn_minipage_sl_quiz_nav_quiz_questions">Questions</button>
                <button class="sl_mini_nav_category px-0 me-3" id="btn_minipage_sl_quiz_nav_quiz_results">Results</button>
            </div>

            <div class="div_micropage_sl_quiz p-3 px-0 " style="font-size:10pt;" id="div_minipage_sl_quiz_information">
                <div class="d-flex justify-content-between border-bottom pb-2">
                    <div>
                        Attempts Allowed : <span class="fw-bold" id="txt_sl_quiz_attempts"> 5 </span>
                        <br>
                        Time Limit: <span class="fw-bold" id="txt_sl_quiz_time_limit"> 1 hour </span>

                    </div>
                </div>
            </div>

            <div class="div_micropage_sl_quiz p-3 px-0" style="display:none" id="div_minipage_sl_quiz_questions">
                <button class="border rounded btn mt-3" style="font-size:10pt; background:#0A1881; color:#fff; display:none;" id="sl_quiz_btn_preview_quiz"> Preview</button>
                <button class="border rounded btn mt-3" style="font-size:10pt;" id="sl_quiz_btn_add_quiz"> <i class="fa-solid fa-plus"></i> Add question</button>

                <div class="p-3 rounded mt-2" style="background:#FFF2DB; color:#B1772B;" id="div_micropage_sl_quiz_alert">
                    No questions have been added yet
                </div>

                <table class="table border-top  mt-2" style="font-size:10pt; display:none;" id="tbl_admin_quiz_questions">
                    <thead>
                        <tr>
                            <th class="py-2 text-center" width="5%" style="color:#5F6D7E; font-weight:500">
                                No
                            </th>

                            <th class="py-2" style="color:#5F6D7E; font-weight:500">
                                Question
                            </th>

                            <th class="py-2 text-center" width="5%" style=" color:#5F6D7E; font-weight:500"></th>
                        </tr>
                    </thead>

                    <tbody></tbody>
                </table>
            </div>

            <div class="div_micropage_sl_quiz p-3 px-0" style="display:none" id="div_minipage_sl_quiz_results">

                <button class="border rounded btn mt-0 mb-1 float-end" style="font-size:10pt; background:#0A1881; color:#fff; " id="sl_quiz_btn_preview_quiz"> Print</button>

                <table class="table border-top  mt-2" style="font-size:10pt;" id="tbl_teacher_quiz_results">
                    <thead>
                        <tr>
                            <th class="py-2 text-center" width="5%" style="color:#5F6D7E; font-weight:500">
                                No
                            </th>

                            <th class="py-2" style="color:#5F6D7E; font-weight:500">
                                Student
                            </th>

                            <th class="py-2 text-center" width="8%" style="color:#5F6D7E; font-weight:500">
                                Marks
                            </th>

                        </tr>
                    </thead>

                    <tbody></tbody>
                </table>
            </div>
        </div>

        <!-- QUIZ MODULE -->
        <div class="div_minipage_quiz_maintenance" id="div_minipage_sl_preview_quiz" style="display:none">

            <div class="d-flex flex-column ">
                <div class="ms-auto rounded p-2 my-2" style="border:1px solid #E2341D; background:#FFFCFC;">
                    Time Left: <span style=" font-weight:500;">00:59:59</span>
                </div>

                <div class="rounded p-3" style="border:1px solid #646DAF; background:#F5FAFF">

                    <div id="preview_quiz_title" style="font-weight:500">Question 1</div>

                    <div id="preview_quiz_question" class="my-2">
                        Use of books, notes, calculators, internet, communication
                    </div>

                    <ul class="mt-2 ms-0 ps-0" style="list-style-type:none" id="preview_quiz_options">
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cheating
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cheating
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cheating
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cheating
                                </label>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <div class="text-end mt-2">

                <button class="btn border btn-sm" id="preview_quiz_back">Back</button>
                <button class="btn border btn-sm" id="preview_quiz_next">Next</button>

            </div>
        </div>

        <div class="div_sl_category pt-4 p-1" style="position:relative; height:87%; overflow-y: auto;" id="div_sl_category_subject">
            <div id="div_card_topic" class="mb-2"></div>
        </div>

        <button class="btn btn-sm" id="sl_btn_add_topic">Add Topic</button>

        <div style="display:none" class="div_sl_category" id="div_sl_category_participants">
            <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">
                <!-- <input type="text" class="form-control my-1 ms-auto mb-2" placeholder="Search..." style="width:250px; font-size:10pt;"> -->

                <div class="ms-auto my-1" style="width:250px; position:relative;">
                    <i class="fa-solid fa-magnifying-glass" style="position:absolute; top:10px; left:10px; color:#A6AEB8"></i>
                    <input type="text" class="form-control" style="padding-left:2rem;" placeholder="Search...">
                </div>

                <table class="table border-top" style="font-size:10pt; vertical-align:middle" id="tbl_sl_participants">
                    <thead>
                        <th class="py-2 " style=" color:#5F6D7E; font-weight:500">
                            Name
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>te</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div style="display:none" class="div_sl_category" id="div_sl_category_grades"></div>

        <div style="display:none" class="div_sl_category" id="div_sl_view_quiz">

        </div>

    </div>

    <!-- MINIPAGE QUIZ ADD QUESTION -->
    <div class="sl_minipage bg-white border rounded p-4" id="minipage_sl_create_quiz" style="display:none;">

        <div class="d-flex justify-content-between">
            <h5>Add Question</h5>
            <button class="btn border rounded" id="btn_sl_close_add_question"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <label for="">Question:</label>
        <div class="mb-2" id="f_sl_add_question_description"></div>

        <label for="">Mark:</label>
        <select style="width:200px;" id="f_sl_add_question_mark" class="form-select">
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>

        <h6 class="mt-3 mb-1">Answers</h6>
        <div id="f_sl_add_question_answers" style="font-size:10pt;">
            <div id="f_sl_quiz_options1">
                <div class="d-flex justify-content-between">
                    <label for="">Choice 1</label>
                    <button target="f_sl_quiz_options1" class="btn p-0 text-danger f_sl_quiz_delete_option"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <textarea rows="2" class="form-control mb-2 f_sl_quiz_options" id="choice1"></textarea>
            </div>
        </div>

        <button class="border rounded btn my-3" style="font-size:10pt;" id="f_sl_add_options"> <i class="fa-solid fa-plus"></i> Add option</button>
        <br>
        <label for="">Correct:</label>
        <select style="width:400px;" id="f_sl_add_question_correct" class="form-select"></select>

        <button class="border rounded btn mt-3" style="font-size:10pt;background:#0A1881; color:#fff; width:120px;" id="f_sl_add_question_save"> Save</button>
    </div>

    <!-- MINIPAGE QUIZ EDIT QUESTION -->
    <div class="sl_minipage bg-white border rounded p-4" id="minipage_sl_edit_quiz" style="display:none;">

        <div class="d-flex justify-content-between">
            <h5>Edit Question</h5>
            <button class="btn border rounded" id="btn_sl_close_edit_question"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <label for="">Question:</label>
        <div class="mb-2" id="f_sl_edit_question_description"></div>

        <label for="">Mark:</label>
        <select style="width:200px;" id="f_sl_edit_question_mark" class="form-select">
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>

        <h6 class="mt-3 mb-1">Answers</h6>
        <div id="f_sl_edit_question_answers" class="pe-1" style="font-size:10pt; max-height:30vh; overflow-y:auto;">

            <div id="f_sl_quiz_options1">

                <div class="d-flex justify-content-between">
                    <label for="">Choice 1</label>
                    <button target="f_sl_quiz_options1" class="btn p-0 text-danger f_sl_quiz_delete_option"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <textarea rows="2" class="form-control mb-2 f_sl_quiz_options_edit" id="choice1"></textarea>
            </div>

        </div>

        <button class="border rounded btn my-3" style="font-size:10pt;" id="f_sl_edit_add_options"> <i class="fa-solid fa-plus"></i> Add option</button>
        <br>
        <label for="">Correct:</label>
        <select style="width:400px;" id="f_sl_edit_question_correct" class="form-select"></select>

        <button class="border rounded btn mt-3" style="font-size:10pt;background:#0A1881; color:#fff; width:120px;" id="btn_sl_edit_question_save"> Save</button>
    </div>

    <!-- MINIPAGE VIEW PAGE -->
    <div class="sl_minipage" id="minipage_sl_view_page" style="display:none; font-size:10pt;">
        <div class="bg-white border rounded p-4">
            <div class="d-flex justify-content-between mb-3">
                <h6 id="minipage_sl_view_page_name"></h6>
                <button class="btn border rounded" id="btn_sl_close_view_page"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div id="minipage_sl_view_page_content"></div>
        </div>

        <div class="bg-white border rounded p-4 my-2">
            <div class="d-flex justify-content-between mb-3">
                <h6>Videos</h6>
                <button class="btn border rounded" id="btn_sl_page_add_video"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div class="container-fluid">
                <div id="minipage_sl_view_page_videos" class="row row-cols-2">
                    <span class="text-muted">No videos available yet...</span>

                    <!-- <div class="col mb-2">
                    <div class="d-flex justify-content-between mb-1">
                        <label style="font-weight:600; font-size:10pt;">Video 1</label>
                        <a class="text-danger page_delete_video" style="font-size:11pt;" href=""><i class="fa-solid fa-trash-can"></i></a>
                    </div>
                    <video width="100%" controls>
                        <source src="src/public/topic_vids/mov_bbb.mp4" type="video/mp4">
                    </video>
                </div> -->

                </div>
            </div>

        </div>

    </div>

    <!-- EDIT TOPIC -->
    <div class="modal fade" tabindex="-1" id="md_sl_edit_topic" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Topic</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">Topic Name</label>
                    <input type="text" class="form-control mb-2" id="md_sl_et_txt_topic_name">

                    <label for="">Description</label>
                    <div id="md_sl_et_txt_topic_description" class="py-2 px-1">
                        <h3><strong style="color: rgb(0, 102, 204);">Sample Topic Description Heading</strong></h3>
                        <p><br></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere ligula et diam facilisis molestie.</p>
                        <p>Morbi dignissim nunc eget nibh viverra, eu lobortis ligula rutrum.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_edit_topic_btn_confirm">Save Changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ADD ACTIVITY -->
    <div class="modal fade" tabindex="-1" id="md_sl_add_activity" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add an Activity or Resource</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <button class="btn text-center me-2" data-bs-dismiss="modal" id="md_sl_add_activity_btn_quiz" style="background:#9564F6; color:#fff; height:40px; width:40px;">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <label style="font-weight:400">Quiz</label>
                            </div>
                            <div class="col-6">
                                <button class="btn text-center me-2" data-bs-dismiss="modal" id="md_sl_add_activity_btn_page" style="background:#437EF7; color:#fff; height:40px; width:40px;">
                                    <i class="fa-regular fa-file-lines"></i>
                                </button>
                                <label style="font-weight:400">Page</label>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-6">
                                <button class="btn text-center me-2" data-bs-dismiss="modal" id="md_sl_add_activity_btn_file" style="background:#F25F6E; color:#fff; height:40px; width:40px;">
                                    <i class="fa-regular fa-file"></i>
                                </button>
                                <label style="font-weight:400">File</label>
                            </div>
                            <div class="col-6"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <!-- ADD FILE -->
    <div class="modal fade" tabindex="-1" id="md_sl_add_file" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add File</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">File Name</label>
                    <input type="text" class="form-control mb-3" id="md_sl_add_file_name">
                    <label for="">Description</label>
                    <!-- <div id="md_sl_add_file_description" class="py-2 px-1 mb-3"></div> -->
                    <textarea name="" id="md_sl_add_file_description" class="form-control" rows="5"></textarea>
                    <input type="file" class="form-control mb-2" id="md_sl_add_file_uploaded_file">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_add_file_btn_confirm">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!-- EDIT FILE -->
    <div class="modal fade" tabindex="-1" id="md_sl_edit_file" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit File</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label style="font-size:10pt">File Name</label>
                    <input type="text" class="form-control mb-2" id="md_sl_edit_file_name">

                    <label style="font-size:10pt">Description</label>
                    <input type="text" class="form-control mb-3" id="md_sl_edit_file_description">

                    <input type="file" class="form-control mb-2" id="md_sl_edit_file_uploaded_file">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_edit_file_btn_confirm">Update</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ADD QUIZ -->
    <div class="modal fade" tabindex="-1" id="md_sl_add_quiz" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Quiz</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">Quiz Name</label>
                    <input type="text" class="form-control mb-3" id="md_sl_quiz_txt_quiz_name">

                    <label for="">Description</label>
                    <div id="md_sl_quiz_txt_quiz_description" class="py-2 px-1  mb-3"></div>

                    <label for="">Open the quiz</label>
                    <input type="date" class="form-control mb-3" id="md_sl_quiz_open_quiz">

                    <label for="">Close the quiz</label>
                    <input type="date" class="form-control mb-3" id="md_sl_quiz_close_quiz">

                    <label for="">Time limit</label>
                    <div class="input-group mb-3" style="width:140px;">
                        <input type="text" class="form-control text-end" id="md_sl_quiz_time_limit">
                        <span class="input-group-text">Minutes</span>
                    </div>

                    <label for="">Attempts allowed</label>
                    <input type="text" class="form-control mb-3" id="md_sl_quiz_txt_attempts_allowed">

                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_quiz_btn_confirm">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!-- EDIT QUIZ -->
    <div class="modal fade" tabindex="-1" id="md_sl_edit_quiz" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Quiz</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">Quiz Name</label>
                    <input type="text" class="form-control mb-3" id="md_sl_quiz_edit_txt_quiz_name">

                    <label for="">Description</label>
                    <div id="md_sl_quiz_edit_txt_quiz_description" class="py-2 px-1  mb-3"></div>

                    <label for="">Open the quiz</label>
                    <input type="date" class="form-control mb-3" id="md_sl_quiz_edit_open_quiz">

                    <label for="">Close the quiz</label>
                    <input type="date" class="form-control mb-3" id="md_sl_quiz_edit_close_quiz">

                    <label for="">Time limit</label>
                    <div class="input-group mb-3" style="width:140px;">
                        <input type="text" class="form-control text-end" id="md_sl_quiz_edit_time_limit">
                        <span class="input-group-text">Minutes</span>
                    </div>

                    <label for="">Attempts allowed</label>
                    <input type="text" class="form-control mb-3" id="md_sl_quiz_edit_txt_attempts_allowed">

                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_quiz_edit_btn_confirm">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ADD PAGE -->
    <div class="modal fade" tabindex="-1" id="md_sl_add_page" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Page</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">

                    <label for="">Name</label>
                    <input type="text" class="form-control mb-2" id="md_sl_add_page_file_name">

                    <label for="">Description</label>
                    <!-- <div id="md_sl_add_page_description" class="py-2 px-1 mb-2" style="height:15vh;"></div> -->
                    <input type="text" class="form-control mb-2" id="md_sl_add_page_description">

                    <label for="">Page Content</label>
                    <div id="md_sl_add_page_content" class="py-2 px-1 mb-2" style="height:40vh;"></div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_add_page_btn_confirm">Save</button>
                </div>

            </div>
        </div>
    </div>

    <!-- ADD TOPIC -->
    <div class="modal fade" tabindex="-1" id="md_sl_add_topic" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Topic</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <label for="">Name</label>
                    <input type="text" class="form-control mb-2" id="md_sl_add_topic_file_name">
                    <label for="">Description</label>
                    <div id="md_sl_add_topic_description" class="py-2 px-1 mb-2"></div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_add_topic_btn_confirm">Save</button>
                </div>

            </div>
        </div>
    </div>

    <!-- EDIT PAGE -->
    <div class="modal fade" tabindex="-1" id="md_sl_edit_page" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Page</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">

                    <label for="" style="font-size:10pt;">Name</label>
                    <input type="text" class="form-control mb-2" id="md_sl_edit_page_file_name">

                    <label for="" style="font-size:10pt;">Description</label>
                    <textarea name="" id="md_sl_edit_page_description" cols="30" rows="4" class="form-control mb-2"></textarea>

                    <label for="" style="font-size:10pt;">Page Content</label>
                    <div id="md_sl_edit_page_content" class="py-2 px-1 mb-2" style="height:40vh;"></div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_edit_page_btn_confirm">Save</button>
                </div>

            </div>
        </div>
    </div>

    <!-- DELETE TOPIC -->
    <div class="modal fade" tabindex="-1" id="md_sl_delete_topic" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete Topic</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    Do you want to delete this topic?
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_delete_topic_btn_confirm">Save</button>
                </div>

            </div>
        </div>
    </div>

    <!-- EDIT QUIZ QUESTION -->
    <div class="modal fade" tabindex="-1" id="md_sl_edit_quiz_question">
        <div class="modal-dialog modal-dialog-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Question</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <label class="mt-2">Question: <span class="text-danger">*</span></label>
                    <div id="txt_md_sl_edit_quiz_question"></div>

                    <label class="mt-2">Mark: <span class="text-danger">*</span></label>
                    <select id="md_sections_sel_adviser" class="form-select"></select>


                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_edit_quiz_question_btn_confirm">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- CONFIRM DELETE ANSWER -->
    <div class="modal fade" tabindex="-1" id="md_sl_delete_quiz_answer">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete Choice</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Do you want to delete this choice? This action is irreversible.
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_delete_quiz_answer_btn_confirm">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- CONFIRM DELETE QUIZ -->
    <div class="modal fade" tabindex="-1" id="md_sl_delete_quiz">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete Quiz</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Do you want to delete this quiz? This action is irreversible.
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_delete_quiz_btn_confirm">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- VIEW IMAGE -->
    <div class="modal fade" tabindex="-1" id="md_sl_preview_image">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Image Preview</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="" alt="" id="img_preview" style="width:100%;object-fit:contain">
                </div>

            </div>
        </div>
    </div>

    <!-- UPLOAD VIDEO -->
    <div class="modal fade" tabindex="-1" id="md_sl_add_video_to_page">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Upload Video</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">Title</label>
                    <input type="text" class="form-control mb-2" id="avtp_title">

                    <input type="file" class="form-control" id="avtp_video">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_add_video_to_page_btn_confirm">Upload</button>
                </div>
            </div>
        </div>
    </div>

    <!-- CONFIRM DELETE VIDEO -->
    <div class="modal fade" tabindex="-1" id="md_sl_delete_video">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete Video</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Do you want to delete this video? This action is irreversible.
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_delete_video_btn_confirm">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- DELETE FILE -->
    <div class="modal fade" tabindex="-1" id="md_sl_delete_file" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete File</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    Do you want to delete this file?
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_delete_file_btn_confirm">Save</button>
                </div>

            </div>
        </div>
    </div>

    <!-- DELETE PAGE -->
    <div class="modal fade" tabindex="-1" id="md_sl_delete_page" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete Page</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    Do you want to delete this page?
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="md_sl_delete_page_btn_confirm">Save</button>
                </div>

            </div>
        </div>
    </div>




</section>

<script src="src/pages/teacher/student_learning/student_learning.js"></script>