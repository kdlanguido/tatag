$('#btn__events_view_back').click(function () {
    $('.page').hide();
    $('#page_events_view').hide()
    $('#page_events').fadeIn(300)
    $('.navbar').fadeIn(300);
})

$('.required_number').keyup(function () {
    if (!$(this).val()) {
        $(this).val()
        show_toast('Invalid Number', 'Please enter a valid number', 'warning')
    }
})

$('#btn__ev_join').click(function () {

    $('#txt__ev_mobile_number')
        .removeClass('border')
        .removeClass('border-danger')

    $('#txt__ev_paymentProof')
        .removeClass('border')
        .removeClass('border-danger')

    $('.required_number')
        .removeClass('border')
        .removeClass('border-danger')

    $('.required_string')
        .removeClass('border')
        .removeClass('border-danger')

    requiredStringIsGood = true;
    requiredFileIsGood = true;
    requiredNumberIsGood = true;
    requiredMobileNumberIsGood = true;

    $('.required_string').each(function () {
        if (!$(this).val()) {
            requiredStringIsGood = false;
            $(this).addClass('border')
            $(this).addClass('border-danger')
        }
    })

    $('.required_number').each(function () {
        if (isNaN(parseInt($(this).val()))) {
            requiredNumberIsGood = false;
            $(this).addClass('border')
            $(this).addClass('border-danger')
        }
    })

    if (($('#txt__ev_mobile_number').val()).length != 11) {
        requiredMobileNumberIsGood = false;
        $('#txt__ev_mobile_number').addClass('border').addClass('border-danger')
    }

    if ($('#txt__ev_paymentProof').get(0).files.length === 0) {
        requiredFileIsGood = false;
        $('#txt__ev_paymentProof').addClass('border').addClass('border-danger')
    }

    if (!requiredStringIsGood || !requiredFileIsGood) {
        show_toast('Check your input', 'Please input required fields.', 'error');

    } else if (!requiredMobileNumberIsGood) {
        show_toast('Invalid mobile number', 'Please check your mobile number.', 'error');

    } else if (!requiredNumberIsGood) {
        show_toast('Invalid number', 'Please enter numbers only.', 'error');

    } else {
        if ($('#cb__ev').is(':checked')) {

            var payment_proof = document.getElementById('txt__ev_paymentProof')

            payload = {
                request_type: "submit_registration",
                fullname: $('#txt__ev_fullname').val(),
                weight: $('#txt__ev_weight').val(),
                mobile_no: $('#txt__ev_mobile_number').val(),
                shirt_size: $('#select__ev_tshirt_size').val(),
                league: $('#select__ev_league').val(),
                category: $('#select__ev_category').val(),
                payment_name: $('#txt__ev_gcashName').val(),
                payment_ref_no: $('#txt__ev_referenceNo').val(),
                payment_proof: payment_proof.files[0]
            };

            _POST(controller_accounts, payload, (cb) => {
                if (cb == 1) {
                    $('#modal__ev_otp').modal('show')
                } else {
                    show_toast('Contact Administrator', 'Registration failed', 'error')
                }
            })

        } else {
            show_toast('Terms and Condition Error', 'Please read and accept the TERMS and CONDITIONS.', 'error');
        }
    }
})

$('#btn__ev_sendOtp').click(function () {
    show_toast('Registration Successful', 'Your registration is successful, your ticket number will be sent to your mobile number.');
})