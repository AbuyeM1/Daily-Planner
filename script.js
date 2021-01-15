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
    var currentTime = new  moment().hour();
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
  $("#form9").val(localStorage.getItem("9"));

  $("#form10").val(localStorage.getItem("10"));

  $("#form11").val(localStorage.getItem("11"));

  $("#form12").val(localStorage.getItem("12"));

  $("#form1").val(localStorage.getItem("1"));

  $("#form2").val(localStorage.getItem("2"));

  $("#form3").val(localStorage.getItem("3"));

  $("#form4").val(localStorage.getItem("4"));

  $("#form5").val(localStorage.getItem("5"));


  updateColors();

});




