<!-- PAGE SCHOOL YEAR -->
<section class="page text-dark vh-100 p-5" style="display:none" id="page_schoolyear">
    <p class="lead" style="font-weight:500">School Year</p>

    <div class="text-end">
        <button class="btn" style="background:#0A1881; color:#fff; font-size:10pt" id="btn_add_sy">Add School Year <i class="fa-solid fa-plus ms-2"></i></button>
    </div>

    <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">

        <h6 class="ps-2 pt-3 pb-2">List of School Year</h6>

        <table class="table border-top" style="font-size:10pt; " id="tbl_admin_sy">
            <thead>
                <th class="text-center" width="5%" style="color:#5F6D7E; font-weight:500">
                    No
                </th>

                <th style="color:#5F6D7E; font-weight:500">
                    School Year
                </th>

                <th width="10%" class="text-center" style=" color:#5F6D7E; font-weight:500">
                    Status
                </th>

                <th width="10%" class="text-center" style="color:#5F6D7E; font-weight:500"></th>
            </thead>

            <tbody></tbody>
        </table>
    </div>
</section>

<script src="src/pages/admin/school_year/school_year.js"></script>

<!-- DELETE MODAL -->
<div class="modal fade" tabindex="-1" id="sy_md_delete_confirmation">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Delete Confirmation</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete this school year?
            </div>
            <div class="modal-footer">
                <button class="btn btn-sm text-white" style="background:#F04438" data-bs-dismiss="modal" id="sy_md_btn_del_confirm">Delete</button>
            </div>
        </div>
    </div>
</div>


<!-- UPDATE MODAL -->
<div class="modal fade" tabindex="-1" id="sy_md_edit">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit School Year</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="">School Year Start</label>
                <input type="text" class="form-control" id="sy_md_txt_sy_start">

                <label class="mt-2">School Year End</label>
                <input type="text" class="form-control" id="sy_md_txt_sy_end">

                <label class="mt-2">Status</label>
                <select id="sy_md_sel_status" class="form-select">
                    <option value="inactive">Inactive</option>
                    <option value="active">Active</option>
                </select>

            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="sy_md_btn_edit_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>

<!-- ADD MODAL -->
<div class="modal fade" tabindex="-1" id="sy_md_add">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add School Year</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="">School Year Start</label>
                <input type="text" class="form-control" id="sy_md_txt_sy_start_add">

                <label class="mt-2">School Year End</label>
                <input type="text" class="form-control" id="sy_md_txt_sy_end_add">

                <label class="mt-2">Status</label>
                <select id="sy_md_sel_status_add" class="form-select">
                    <option value="inactive">Inactive</option>
                    <option value="active">Active</option>
                </select>

            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" id="sy_md_btn_add_confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>