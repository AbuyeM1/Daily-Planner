//todo 
//save lisener localstorage
//if else statment for color

$(document).ready(function () {

  // A function the current time and date
  var update = function (date) {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    var currentTime = moment();
    currentTime = currentTime.startOf("hour");
    var beforeTime = moment().startOf("day").add(9, "hours");
  }
  setInterval(update, 1000);

  localStorage.getItem(time)
  var time;
  var task;
  $(".saveBtn").click(function () {

    //value of text box, set in local storage
    console.log($(this).siblings("input").val())

    //returns number for the hour
    console.log($(this).parent().attr("data-hour"))
    time = $(this).parent().attr("data-hour");
    task = $(this).siblings("input").val();

    //saves in to local storage
    localStorage.setItem(time, task);


  })
  // for color function
  function updateColors() {
    var currentTime =  moment().hour();
    console.log(currentTime);
  
    $(".input-group-lg").each(function(){
      console.log($(this).attr("data-hour"));
      var dataHour=$(this).attr("data-hour");
      
      if(dataHour<currentTime){
          $(this).children('input').attr("class","form-control past");
      }
      else if(dataHour==currentTime){
        $(this).children('input').attr("class","form-control present");
      }
      else{
        $(this).children('input').attr("class","form-control future");
      }

    })
  }
  

  //display local storage data to screen
  $("#block1").val(localStorage.getItem("9"));

   $("#block2").val(localStorage.getItem("10"));

  $("#block3").val(localStorage.getItem("11"));

  $("#block4").val(localStorage.getItem("12"));

  $("#block5").val(localStorage.getItem("13"));

  $("#block6").val(localStorage.getItem("14"));

  $("#block7").val(localStorage.getItem("15"));

  $("#block8").val(localStorage.getItem("16"));

  $("#block9").val(localStorage.getItem("17"));


  updateColors();

});




