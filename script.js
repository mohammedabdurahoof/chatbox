$(document).ready(function () {

    $('#show-icon').click(function () {
        $('#cathBox').slideToggle("slow")
        $('#top-part').fadeIn(2000, function () {
            $('.top-contant').fadeIn(300, function () {
                $('.bottom-part').fadeIn(500, function () { 
                    $('.bottom-part .box h6').fadeIn(500, function () { 
                        $('.bottom-part .box .p1').fadeIn(500, function () { 
                            $('.bottom-part .box .p2').fadeIn(500, function () { 
                                $('.bottom-part .box .p3').fadeIn(500, function () { 
                                    $('.bottom-part .box .p4').fadeIn(500, function () { 
                                        $('#chatButton').fadeIn(500, function () { 
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    });

    $('#close-popup').click(function () {
        $('#cathBox').slideToggle("slow")
    });
});