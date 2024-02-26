<section class="page" id="page_events_view" style="display:none">

    <div style="background:#000; color:#E9C001" id="div__register_header" class="d-flex flex-column  justify-content-center align-items-center py-4 pt-2">
        <div class="w-100 px-2">
            <button class="btn text-dark float-end" style="background:#E9C001; font-weight:600; font-size:11pt; font-weight:400" id="btn__events_view_back">
                Back
            </button>
        </div>
        <img src="src/img/tatag_logo.png" style="width:210px">
    </div>

    <div class="container">
        <div class="row">
            <div class="col">

                <div class="form-floating my-3">
                    <input type="email" class="form-control" id="txt__ev_fullname">
                    <label for="txt__ev_fullname">Fullname</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="txt__ev_nickname">
                    <label for="txt__ev_nickname">Nickname</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="txt__ev_weight">
                    <label for="txt__ev_weight">Weight</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="txt__ev_clubname">
                    <label for="txt__ev_clubname">Club Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="txt__ev_age">
                    <label for="txt__ev_age">Age</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="txt__ev_address">
                    <label for="txt__ev_address">Address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="txt__ev_mobilenumber">
                    <label for="txt__ev_mobilenumber">Mobile number</label>
                </div>
                
                <label for="">T-shirt Size</label>
                <select class="form-select" id="select__ev_shirt_size">
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                    <option value="5">2XL</option>
                    <option value="6">3XL</option>
                    <option value="7">4XL</option>

                </select>
            </div>
        </div>
    </div>

    <script src="src/pages/user/sections/events/view/events_view.js"></script>

</section>