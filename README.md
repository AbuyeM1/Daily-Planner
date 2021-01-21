# Day Planner
 This is a Day planer scheduler project with local time and updates live.
 This project has moment.js for local time,current time and individual hours.
 

## Summary

* HTML,CSS and Javascript document create a day planner with 8 hurs work day
* This project used of moment.js for time calculation and formatting conversion

## Images

 ![alttext](https://lh3.googleusercontent.com/V2cB66mWLE4HlTCnqwQkESdP7B5f-yr4tnrJ2p_Iq9cuLpnMyMHfFxJMUB3KcfTeNqCo=s500)
 


 ## Code Snaippet
  ### HTML
  
        <div class="input-group input-group-lg"  data-hour="9">
               <div class="input-group-prepend">
              <span class="input-group-text time-block" >09:00 AM</span>
      </div>
              <input type="text" class="form-control" id="block1" aria-label="Large">
             <button class="btn saveBtn"><i class="far fa-save"></i></button>
    </div>

   
  
  ## Javascript

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



  ## Links
  *[GitHub](https://github.com/AbuyeM1/Daily-Planner) <br>
  *[GitHub.io](https://abuyem1.github.io/Daily-Planner/) <br>
  *[LinkedIn](https://www.linkedin.com/in/abuye-mamuye-5a49921b0/)
