con_teacher = "src/database/controllers/teacher_controller.php";

$(document).ready(function () {
    load_teacher_schedule()
})

function load_teacher_schedule() {

    payload = {
        request_type: "get_my_sections",
        payload_data: {
            id: getCookie('profile_id')
        },
    };

    _GET(con_teacher, payload, (cb) => {

        output = ``;
        $.each(cb, (k, v) => {
            output += `
            <tr style="height:6vh !important;">
                <td>`+ v.subject + `</td>
                <td class="text-center">`+ v.name + `</td>
                <td class="text-center">`+ (v.day).replace(',', '<br>') + `</td>
                <td class="text-center">`+ (v.time).replace(',', '<br>') + `</td>
            </tr>`;
        })

        $('#tbl_teachers_schedule tbody').html(output)
        $('#tbl_teachers_schedule_printable tbody').html(output)
    })

}

$('#schedule__btn_print_schedule').click(function () {

    $('#schedule__div_printable').show();
    var element = document.getElementById('schedule__div_printable');

    var opt = {
        margin: 1,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    html2pdf().from(element).set(opt).save();
    setTimeout(() => {
        $('#schedule__div_printable').hide();
    }, 1000);

})