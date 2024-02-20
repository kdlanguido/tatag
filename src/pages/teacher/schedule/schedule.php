<section class="page text-dark vh-100 p-5 px-3" style="display:none; background:#FAFBFC" id="page_schedule">

    <div class="text-end">
        <button class="btn" style="background:#0A1881; color:#fff; font-size:10pt" id="schedule__btn_print_schedule">Print <i class="fa-solid fa-print ms-2"></i></button>
    </div>

    <div class="card mt-4 p-1" style="border-radius:10px; border: 1px solid #EAEBF0">
        <h6 class="ps-2 pt-3 pb-2">Schedule</h6>
        <table class="table border-top" style="font-size:10pt; vertical-align:middle" id="tbl_teachers_schedule">
            <thead>
                <th class="py-2 " style=" color:#5F6D7E; font-weight:500">
                    Subject
                </th>

                <th class="py-2 text-center" width="11%" style="color:#5F6D7E; font-weight:500">
                    Section
                </th>
                <th class="py-2 text-center" width="13%" style="color:#5F6D7E; font-weight:500">
                    Days
                </th>

                <th class="py-2 text-center" width="13%" style="color:#5F6D7E; font-weight:500">
                    Time
                </th>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <div class="card mt-4 p-1" id="schedule__div_printable" style="border-radius:10px; border: 1px solid #EAEBF0; display:none;">
        <h6 class="ps-2 pt-3 pb-2 text-center">Schedule</h6>
        <table class="table border-top" style="font-size:10pt; vertical-align:middle" id="tbl_teachers_schedule_printable">
            <thead>
                <th class="py-2 " style=" color:#5F6D7E; font-weight:500">
                    Subject
                </th>

                <th class="py-2 text-center" width="11%" style="color:#5F6D7E; font-weight:500">
                    Section
                </th>
                <th class="py-2 text-center" width="13%" style="color:#5F6D7E; font-weight:500">
                    Days
                </th>

                <th class="py-2 text-center" width="13%" style="color:#5F6D7E; font-weight:500">
                    Time
                </th>
            </thead>
            <tbody></tbody>
        </table>
    </div>

</section>

<script src="src/pages/teacher/schedule/schedule.js"></script>