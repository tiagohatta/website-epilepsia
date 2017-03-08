function sendMsgToServer(message){
    $.ajax({
        method: 'get',
        url: '../server/script.php',
        data: {
        'str': message,
        'ajax': true
        },
        success: function(data) {
            $('#data').text(data);
        }
    });
};