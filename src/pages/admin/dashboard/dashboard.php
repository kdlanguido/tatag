<!-- PAGE DASHBOARD -->
<section class="page text-dark vh-100 p-5" id="page_dashboard">
    <p class="lead" style="font-weight:500">Administrator's Dashboard</p>

    <div style="border:1.5px solid #F2F3F6; border-radius:5px">
        <div class="row row-cols-4">
            <div class="col ps-4 border-end">
                <div class="d-flex justify-content-between align-items-center w-100" style="height:50px; ">
                    <span>Total Students</span>
                    <i class="fa-solid fa-users fa-fw pe-2" style="color:#0A1881"></i>
                </div>
                <h3 style="color:#0A1881">2</h3>
            </div>
            <div class="col ps-4 border-end">
                <div class="d-flex justify-content-between align-items-center w-100" style="height:50px; ">
                    <span>Total Teacher</span>
                    <i class="fa-solid fa-users-gear fa-fw pe-2" style="color:#0A1881"></i>
                </div>
                <h3 style="color:#0A1881">2</h3>
            </div>
            <div class="col ps-4 border-end">
                <div class="d-flex justify-content-between align-items-center w-100" style="height:50px; ">
                    <span>Total Staffs</span>
                    <i class="fa-solid fa-users-gear fa-fw pe-2" style="color:#0A1881"></i>
                </div>
                <h3 style="color:#0A1881">2</h3>
            </div>
            <div class="col ps-4">
                <div class="d-flex justify-content-between align-items-center w-100" style="height:50px; ">
                    <span>Total Pre-enrolled</span>
                    <i class="fa-regular fa-rectangle-list fa-fw pe-2" style="color:#0A1881"></i>
                </div>
                <h3 style="color:#0A1881">2</h3>
            </div>
        </div>
    </div>

    <div class="mt-4 d-flex justify-content-between align-items-center">
        <div>
            <button class="btn p-2" style="border-radius:8px; border:1px solid #2D8A39;background:#F0FAF0;color:#2D8A39;font-weight:400" id="btn_start_enrollment">Start Enrollment</button>
            <button class="btn p-2" style="border-radius:8px; border:1px solid #F04438;background:#FFF2F0;color:#F04438;font-weight:400" id="btn_stop_enrollment">Stop Enrollment</button>
        </div>
        <div class="text-end">
            <span class="lead" style="font-size:12pt" id="d_txt_enrollment_sy"></span><br>
            <span class="lead" style="font-size:12pt" id="d_txt_enrollment_status"></span>

        </div>
    </div>



</section>

<script src="src/pages/admin/dashboard/dashboard.js"></script>



<!-- START ENROLLMENT MODAL -->
<div class="modal fade" tabindex="-1" id="md_se">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Start Enrollment</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="">School Year</label>
                <input type="text" class="form-control mb-2" id="txt_md_se_sy" readonly>

                <label for="">Semester</label>
                <select name="" id="sel_md_se_sem" class="form-select">
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                </select>
            </div>
            <div class="modal-footer">
                <!-- <button class="btn btn-secondary btn-sm" data-bs-dismiss="modal" id="btn_md_se_add_enrollment">Add Enrollment</button> -->
                <button class="btn text-light btn-sm" data-bs-dismiss="modal" style="background:#0A1881" id="btn_md_se_confirm_enrollment">Start Enrollment</button>
            </div>
        </div>
    </div>
</div>


<!-- STOP ENROLLMENT MODAL -->
<div class="modal fade" tabindex="-1" id="md_ee">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Stop Enrollment</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Do you want to stop Enrollment?
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="btn_md_ee_confirm_enrollment">Confirm</button>
            </div>
        </div>
    </div>
</div>