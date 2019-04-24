$(document).ready(function() {
    var request;
    $("#view").on('click', function(e) {

        console.log("view");
        $('#img1').empty();
        $('#img2').empty();
        $('#img3').empty();
        $('#img4').empty();
        $('#img5').empty();
        $('#img6').empty();
        $('#img7').empty();
        $('#img8').empty();
        $('#img9').empty();

    });




    $("#searchForm").on('click', function(e) {

        $('#img1').empty();
        $('#img2').empty();
        $('#img3').empty();
        $('#img4').empty();
        $('#img5').empty();
        $('#img6').empty();
        $('#img7').empty();
        $('#img8').empty();
        $('#img9').empty();

        console.log("click");

        request = $("#search").val().trim();
        var count = 0;
        $.ajax({

            type: "get",
            url: "https://pixabay.com/api/?key=12265231-0c238bf7b476f2c9e5bd47d0a&q=" + request + " &image_type=photo",
            dataType: "json",
            data: {},

            success: function(data) {
                console.log(data);

                for (var i in data.hits) {
                    count++;
                    if (count == 2) {
                        break;
                    }


                    var post1 = data.hits[0];
                    var post2 = data.hits[1];
                    var post3 = data.hits[2];
                    var post4 = data.hits[3];
                    var post5 = data.hits[4];
                    var post6 = data.hits[5];
                    var post7 = data.hits[6];
                    var post8 = data.hits[7];
                    var post9 = data.hits[8];

                    $('#img1').css('background-image', 'url(' + post1.previewURL + ')');
                    $('#img2').css('background-image', 'url(' + post2.previewURL + ')');
                    $('#img3').css('background-image', 'url(' + post3.previewURL + ')');
                    $('#img4').css('background-image', 'url(' + post4.previewURL + ')');
                    $('#img5').css('background-image', 'url(' + post5.previewURL + ')');
                    $('#img6').css('background-image', 'url(' + post6.previewURL + ')');
                    $('#img7').css('background-image', 'url(' + post7.previewURL + ')');
                    $('#img8').css('background-image', 'url(' + post8.previewURL + ')');
                    $('#img9').css('background-image', 'url(' + post9.previewURL + ')');

                    $('.cell').append($('<img>').attr('src', './img/dislike01.png'));





                }


            },
            complete: function(data, status) {
                console.log(status);
            }

        });

    });

    var src1 = './img/like01.png';
    var src2 = './img/dislike01.png';

    $(".cell").on('click', function(e) {
        console.log(this.id)
        var idButton = this.id;

        if ("#" + idButton == "#img1") {
            var src = $('#img1 img').attr('src');
        }
        else if ("#" + idButton == "#img2") {
            var src = $('#img2 img').attr('src');
        }
        else if ("#" + idButton == "#img3") {
            var src = $('#img3 img').attr('src');
        }
        else if ("#" + idButton == "#img4") {
            var src = $('#img4 img').attr('src');
        }
        else if ("#" + idButton == "#img5") {
            var src = $('#img5 img').attr('src');
        }
        else if ("#" + idButton == "#img6") {
            var src = $('#img6 img').attr('src');
        }
        else if ("#" + idButton == "#img7") {
            var src = $('#img7 img').attr('src');
        }
        else if ("#" + idButton == "#img8") {
            var src = $('#img8 img').attr('src');
        }
        else if ("#" + idButton == "#img9") {
            var src = $('#img9 img').attr('src');
        }

        console.log(src);
        if (src == src1) {
            console.log("dislike")
            $("#" + idButton).empty();
            $("#" + idButton).append($('<img>').attr('src', './img/dislike01.png'));


        }
        else {
            console.log("like")
            $("#" + idButton).empty();
            $("#" + idButton).append($('<img>').attr('src', './img/like01.png'));
            
            
            var obj = { word: request , url: src };
            
            $.ajax
            ({
            type: "GET",
            dataType : 'json',
            async: false,
            url: 'saveJson.php',
            data: { data: JSON.stringify(obj) },
            success: function () {alert("Thanks!"); },
            failure: function() {alert("Error!");}
            });
        }
    });

});