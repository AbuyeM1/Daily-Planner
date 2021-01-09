//  declaration for day and time 
$(document).ready(function () {

    //console.log("hello");
    var now = moment();

    var update = function () {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

    }
    setInterval(update, 1000);
    $("form9").click(function () {
        localStorage.one = ($("#block1")).val();
    })
    $("form10").click(function () {
        localStorage.two = ($("#block2")).val();
    })
    $("form11").click(function () {
        localStorage.three = ($("#block3")).val();
    })
    $("form12").click(function () {
        localStorage.four = ($("#block4")).val();
    })
    $("form1").click(function () {
        localStorage.five = ($("#block5")).val();
    })
    $("form2").click(function () {
        localStorage.six = ($("#block6")).val();
    })
    $("form3").click(function () {
        localStorage.seven = ($("#block7")).val();
    })
    $("form4").click(function () {
        localStorage.eight = ($("#block8")).val();
    })
    $("form5").click(function () {
        localStorage.nine = ($("#block9")).val();
    })



})