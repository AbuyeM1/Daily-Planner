
$(document).ready(function () {

    //console.log("hello");
    var update = function () {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

        var now = moment();
        var beforTime = moment();
        var beforTime = moment().startOf("day").add(9, "hours");

    }

   setInterval(update, 1000);
   /*
   // for set click event each button
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
        console.log("nine");
    })
     
    // afunction call on the page
    var remeber = function () {
        var block1 = localStorage.one;
        $("#block1").val(form1);
        var block1 = localStorage.one;
        $("#block1").val(form1);
        var block1 = localStorage.one;
        $("#block1").val(form1);
        var block1 = localStorage.one;
        $("#block1").val(form1);
        var block1 = localStorage.one;
        $("#block1").val(form1);
        var block1 = localStorage.one;
        $("#block1").val(form1);
        var block1 = localStorage.one;
        $("#block1").val(form1);
        var block1 = localStorage.one;
        $("#block1").val(form1);
        
        //console.log("block1");
    }
    function colors() {
        var time = moment().format("H");
        var textFram = ("#time1", "#time2", "#time3", "#time4", "#time5", "#time6", "#time7", "#time8", "#time9");
        for (var i = 0; i < textFram.length; i++);
        var currentTime = i + 9;
        if (time < currentTime) {
            $(textFram[i]).att("future");

        }
        else if (text > currentTime) {
            $(textFram[i]).att("past");
        }


        else $(textFram[i]).att("present"); {
        }


        colors();
        remeber();
    }
*/
});



