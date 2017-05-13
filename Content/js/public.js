$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav");
    } else { $(".navbar-fixed-top").removeClass("top-nav"); }
})

$(function () {
    $("#Flexible").click(function () {
        if ($(".fcn_list .fcn_listdiv").size() >= 3) {
            var html = "";
            $.each($('.fcn_list .fcn_listdiv:gt(3)'), function () {
                $(this).toggle();
            })
        }
    })
   

})



