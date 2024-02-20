<div class="kanban p-5 rounded" style="background:#F0F0F0">

    <div class="container">
        <div class="row">

            <div class="col">

                <div class="position-relative" >
                    <div class="kanban_title d-flex justify-content-between position-absolute" attr-state="closed" style="width:100%;">
                        <h6 class="kbt_display">Available Task</h6>
                        <input type="text" class="form-control kbt_edit_title" style="display:none">
                    </div>
                    <a class="kbt_display kbt_ellipsis position-absolute" style="display:none; right:1em;color:black"><i class="fa-solid fa-ellipsis"></i></a>
                </div>

                <div class="d-grid" style="margin-top:2em">
                    <button class="btn bg-white rounded text-start mt-1" style="font-size:10pt;"> <i class="fa-solid fa-plus me-3"></i> Add Task</button>
                </div>

                <ul class="kanban_linked shadow-sm mt-4 p-3" style="background:#fff" id="kanban_list1">
                    <li class="card my-1 p-2">TASK 1010</li>
                    <li class="card my-1 p-2">TASK 2582</li>
                    <li class="card my-1 p-2">TASK 9872</li>
                    <li class="card my-1 p-2">TASK 9237</li>
                </ul>
            </div>

            <div class="col">
                <div class="kanban_title d-flex justify-content-between" attr-state="closed">
                    <h6 class="kbt_display">In progress</h6>
                    <a class="kbt_display"><i class="fa-solid fa-ellipsis"></i></a>
                    <input type="text" class="form-control kbt_edit_title" style="display:none">
                </div>
                <ul class="kanban_linked shadow-sm mt-2 p-3" id="kanban_list2">
                    <li class="card my-1 p-2">TASK 4438</li>
                    <li class="card my-1 p-2">TASK 2341</li>
                    <li class="card my-1 p-2">TASK 5522</li>
                    <li class="card my-1 p-2">TASK 1123</li>
                </ul>
            </div>

            <div class="col">
                <div class="kanban_title d-flex justify-content-between" attr-state="closed">
                    <h6 class="kbt_display">Completed</h6>
                    <a class="kbt_display"><i class="fa-solid fa-ellipsis"></i></a>
                    <input type="text" class="form-control kbt_edit_title" style="display:none">
                </div>
                <ul class="kanban_linked shadow-sm mt-2 p-3" id="kanban_list3">

                </ul>
            </div>

            <div class="col">
                <div class="kanban_title d-flex justify-content-between" attr-state="closed">
                    <h6 class="kbt_display">Others</h6>
                    <a class="kbt_display"><i class="fa-solid fa-ellipsis"></i></a>
                    <input type="text" class="form-control kbt_edit_title" style="display:none">
                </div>
                <ul class="kanban_linked shadow-sm mt-2 p-3" id="kanban_list4">
                    <li class="card my-1 p-2">TASK 2532</li>

                </ul>
            </div>

        </div>
    </div>
</div>

<script src="src\pages\user\page_component\kanban\kanban_functions.js"></script>