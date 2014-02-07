// add loading image to div
$('#loading_img').html('<img src="" loading...');

$('#next_img').click(function () {
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "",
        success: function (d) {
            function () {
                $('#loading_img').html('<img src="' + d.img_url + '"><br>');
            });
        }
    });
});

$('#prev_img').click(function () {
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "",
        success: function (d) {
            function () {
                $('#loading_img').html('<img src="' + d.img_url + '"><br>');
            });
        }
    });
});