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

                <p class="my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue vehicula lacus id venenatis. Donec sed elit molestie nibh maximus finibus nec ut justo. Maecenas in pretium ex. Pellentesque eu ligula id dui gravida vehicula id nec ipsum. Morbi massa ipsum, placerat vel odio a, egestas rhoncus odio.
                </p>

            </div>
        </div>

        <div class="row">
            <div class="col mb-2">

                <h3 style="font-weight:700" style="margin-bottom:1em">PROCESS OF REGISTRATION</h3>
                <ol style="font-weight:400; margin-left:0; padding-left:1em">
                    <li>Ut feugiat sollicitudin justo. Proin pulvinar tincidunt turpis, a suscipit orci venenatis non.</li>
                    <li>Praesent a magna non quam interdum mattis.</li>
                    <li>Vivamus sagittis nec lacus eu sodales.</li>
                </ol>

            </div>
        </div>

        <div class="container">
            <div class="row my-3">
                <div class="col-6 align-items-center justify-content-center p-0">
                    <img src=" src/public/events/tanat.png" alt="" id="img__ev_form">
                </div>
                <div class="col align-items-center justify-content-center p-5  bg-light" id="div__ev_form">

                    <p class="mb-3" style="font-weight: 600;"> YOUR PERSONAL DETAILS</p>

                    <label for="">Full Name</label>
                    <input type="text" class="form-control mt-2 mb-3 input__ev_form" id="txt__ev_fullname">

                    <div class="row">
                        <div class="col">
                            <label for="">Nickname</label>
                            <input type="text" class="form-control mt-2 mb-3 input__ev_form" id="txt__ev_nickname">
                        </div>

                        <div class="col">
                            <label for="">Age</label>
                            <input type="text" class="form-control mt-2 mb-3 input__ev_form" id="txt__ev_age">
                        </div>
                    </div>

                    <label for="">Weight</label>
                    <input type="text" class="form-control mt-2 mb-3 input__ev_form" id="txt__ev_weight" placeholder="(kg)">

                    <label for="">Club Name</label>
                    <input type="text" class="form-control mt-2 mb-3 input__ev_form" id="txt__ev_clubname" placeholder="Optional">

                    <label for="">Address</label>
                    <textarea class="form-control mt-2 mb-3 input__ev_form" id="txt__ev_address" rows="3"></textarea>

                    <label for="">Mobile Number</label>
                    <input type="text" class="form-control mt-2 mb-3 input__ev_form" id="txt__ev_mobile_number" placeholder="ex. 09123456789">

                    <label for="">T-shirt Size</label>
                    <select class="form-select mt-2 mb-4 input__ev_form" id="select__ev_tshirt_size">

                        <option selected>Select Size</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                        <option value="4">XL</option>
                        <option value="5">2XL</option>
                        <option value="6">3XL</option>
                        <option value="7">4XL</option>

                    </select>

                    <button class="btn btn-warning ms-auto px-4" id="btn__ev_join" style="width: auto; float:right">Join</button>

                </div>
            </div>
        </div>
    </div>

    <script src="src/pages/user/sections/events/view/events_view.js"></script>

</section>