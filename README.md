# Day Planner
 This is a Day planer scheduler project with local time and updates live.
 This project has moment.js for local time,current time and individual hours.
 

## Summary

* HTML,CSS and Javascript document create a day planner with 8 hurs work day
* This project used of moment.js for time calculation and formatting conversion

## Images

 ![alt text](https://lh3.googleusercontent.com/bvItvheREk1nWZEtHm3U-TaWDJtKfWFKl-VX4qpf3TfjxENmzkeccFYMY9byloW1j6l4=s500)
 
 ![alt text](https://lh3.googleusercontent.com/4X_STNHsEoLI5AoAMzhLTT_cS_AwTxcPOjnVr_qXRlUfx2kbk1C5vvg9R94bHOkjrDG1Bg=s500)
 

 ## Code Snaippet
  ### HTML
  
     <div class="container">
    <!-- 9AM timeblocks goes here -->
    <div class="input-group input-group-lg" data-hour="9">
      <div class="input-group-prepend">
        <span class="input-group-text time-block block1"></span>
      </div>
      <input type="text" class="form-control form9" aria-label="Large">
      <button class="btn saveBtn"><i class="far fa-save"></i></button>
    </div>
  
  
  
  
  
  
  
  
  ## Javascript

      moment(Date);
      $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
      // Moment Current time 
       var currentTime = moment();

      currentTime = currentTime.startOf("hour");
     // Calculates the start of day + 9 to return 9 am
     var beforeTime = moment().startOf('day').add(9, "hours");

     // Time blocks
      // 9 AM 
         var time1 = beforeTime.add(0, "h");
       // var time1 = beforeTime;
         time1 = time1.format('hh:mm A');
     // Add time formula into html
       $(".block1").text(time1);
       // 10 AM
       var time2 = beforeTime.add(1, "h");
    time2 = time2.format('hh:mm A');
    // Add time formula into html
    $(".block2").text(time2);
      

  ## Links
  *[GitHub](https://github.com/AbuyeM1/Daily-Planner) <br>
  *[GitHub.io](https://abuyem1.github.io/Daily-Planner/) <br>
  *[LinkedIn](https://www.linkedin.com/in/abuye-mamuye-5a49921b0/)
