
con_auth = 'src/database/controllers/auth_controller.php'

$('#btn_t_login').unbind('click').click(function () {

    payload = {
        "request_type": "login",
        "payload_data": {
            "username": $('#txt_username').val(),
            "password": $('#txt_password').val()
        }
    }

    _GET(con_auth, payload, (cb, res, msg) => {
        if (res == 403) {
            show_toast("Login Fail", "Username or password is invalid", "error");
            setCookie('sesh_authorized', 0)

            $('.btn_login').show();
            $('.btn_account').hide();


        } else if (res == 200) {

            show_toast("Login Success", "Login successful");

            setTimeout(() => {
                setCookie('uid', cb['user_information'][0].id)
                setCookie('profile_id', cb['user_information'][0].profile_id)
                setCookie('access_level', cb['user_information'][0].access_level)
                setCookie('cur_page', 'dashboard')
                setCookie('sesh_authorized', 1)
                location.reload();
            }, 300);

        } else if (res == 401) {
            $('.btn_login').show();
            $('.btn_account').hide();

            show_toast("Invalid Token", "Page is reloading...", "error");

            setTimeout(() => {
                location.reload();
            }, 1500);
        }
    })

})
