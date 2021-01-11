
$(document).ready(function () {

   var times = [9, 10, 11, 12, 1, 2, 3, 4,5];
    for (var i =0; i < times.length; i++) {
    var dataHour = localStorage.getItem(times[i]);
    $(".form" + times[i]).val(dataHour);
    //console.log("times");
}


// event listener for localstorage
    $(".saveBtn").click(function() {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val()
    $(".form" + times[i]).val(dataHour);
    //console.log("helo");
})
    



//console.log("hello");
// A function the current time and date
    
var update = function (date) {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
   var currentTime = moment();
   currentTime = currentTime.startOf("hour");
   var beforeTime = moment().startOf("day").add(9, "hours");

              var timeBlock1 =beforeTime.add(0, "h");
              timeBlock1 = timeBlock1.format("hh:mm A");
              $("#form9").text(timeBlock1);

    }

   setInterval(update, 1000);
   
 
 

});



