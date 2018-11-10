// Click Events
function addClickEvents(){
  $(document).ready(function(){
    // Welcome Page - login and register links > show respective forms
    $("#login__link").click(function(){
      $("#login__form").removeClass("hide");
      $("#register__form").addClass("hide");
    });
    $("#register__link").click(function(){
      $("#register__form").removeClass("hide");
      $("#login__form").addClass("hide");
  });
    // After Login or Register Submit > hide welcome and show main page
    $("#login__button").click(function(){
      $("#welcome").addClass("hide");
      $("#nav").removeClass("hide");
      $("#categories").removeClass("hide")
  });
    $("#register__button").click(function(){
      $("#welcome").addClass("hide");
      $("#nav").removeClass("hide");
      $("#categories").removeClass("hide")
  });
  // Main Navigation Buttons > expand clicked category and hide others
    $("#news__nav").click(function(){
      $("#news__container").removeClass("hide");
      $("#events__container").addClass("hide");
      $("#chat__container").addClass("hide");
      $("#todo__container").addClass("hide");
  });
    $("#events__nav").click(function(){
      $("#events__container").removeClass("hide");
      $("#news__container").addClass("hide");
      $("#chat__container").addClass("hide");
      $("#todo__container").addClass("hide");
  });
    $("#chat__nav").click(function(){
      $("#chat__container").removeClass("hide");
      $("#news__container").addClass("hide");
      $("#events__container").addClass("hide");
      $("#todo__container").addClass("hide");
  });
    $("#todo__nav").click(function(){
      $("#todo__container").removeClass("hide");
      $("#news__container").addClass("hide");
      $("#events__container").addClass("hide");
      $("#chat__container").addClass("hide");
  });
  // Add Content to Categories
    $("#add__news").click(function(){
      $("#add__news__form").removeClass("hide");
  });
    $("#add__event").click(function(){
      $("#add__event__form").removeClass("hide");
  });
    $("#add__chat").click(function(){
      $("#add__chat__form").removeClass("hide");
  });
    $("#add__todo").click(function(){
      $("#add__todo__form").removeClass("hide");
  });
  });
  }

  export default addClickEvents