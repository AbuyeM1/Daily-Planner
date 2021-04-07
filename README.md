# Day Planner

## Table of Contents

- [Description](#description)

- [Deployed Link](#deployed-link)

- [CodeSnippets](#CodeSnippets)

- [License](#license)

- [TechnonlogyUse](#Technonlogy-Use)

- [Question](#Question)

## Description

This is a Day planer scheduler project with local time and updates live.
This project has moment.js for local time,current time and individual hours.

## Video

![Video](./Assets/image/video.gif)

## Deployed Link

[Deployed Link](https://abuyem1.github.io/Daily-Planner/)

## TechnonlogyUse

- HTML
- CSS
- Moment.js
- JavaScript

## Code Snaippet

### HTML

       <div class="input-group input-group-lg" data-hour="10">
        <div class="input-group-prepend input-group-text">
          <span class="input-group-text time-block">10:00 AM</span>
        </div>

        <input
          type="text"
          class="form-control"
          id="block2"
          aria-label="large"
        />
        <button class="btn saveBtn btn-outline-success">
          <i class="far fa-save"></i>
        </button>
      </div>

## Javascript

      $(".saveBtn").click(function () {
    console.log($(this).siblings("input").val());

    console.log($(this).parent().attr("data-hour"));
    time = $(this).parent().attr("data-hour");
    task = $(this).siblings("input").val();

    localStorage.setItem(time, task);
    });

## License

![badge](https://shields.io/badge/license-MIT-green)

## Question

- [Email](mailto:Abuye20@yahoo.com)

- [LinkedIn](https://www.linkedin.com/in/abuye-mamuye-5a49921b0/)

- [GitHub](https://github.com/AbuyeM1)
