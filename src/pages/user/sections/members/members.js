$('.btn__members_view').click(function () {
    // $('.page').hide();
    // $('.navbar').hide();
    // $('#page_members_view').fadeIn(300);

    show_toast('Feature Not Available','Devs are currently working for this feature...','warning')
})

loadMembers = () => {
    _GET(c_accounts, {

    }, (cb) => {

    })
}

