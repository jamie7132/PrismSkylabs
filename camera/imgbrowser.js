//Jamie Sookprasong
//Prism Skylabs Challenge

$('#next_img').click(function () {
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "???",
        success: function (d) {
            function () {
                //assme JSON has the image url for next image
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
        url: "???",
        success: function (d) {
            function () {
                //assume JSON has the image url for previous image
                $('#loading_img').html('<img src="' + d.img_url + '"><br>');
            });
        }
    });
});