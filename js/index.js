$(".btn-week").on("click", function(){
    $(".cal-week").removeClass("hide-cal");
    $(".cal-month").addClass("hide-cal");
});

$(".btn-month").on("click", function(){
    $(".cal-month").removeClass("hide-cal");
    $(".cal-week").addClass("hide-cal");
});
