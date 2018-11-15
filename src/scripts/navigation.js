// Navigation Click Events
function addNavClickEvents(){
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

  // Main Navigation Buttons > expand clicked category and hide others
    // Logout
    $("#logout__link").click(function(){
      window.location.reload(true);
      sessionStorage.clear()
  });
    $("#dashboard__link").click(function(){
      $("#news__container").removeClass("hide");
      $("#events__container").removeClass("hide");
      $("#chat__container").removeClass("hide");
      $("#todo__container").removeClass("hide");
      $("#add__news__form").addClass("hide");
      $("#add__event__form").addClass("hide");
      $("#add__chat__form").addClass("hide");
      $("#add__todo__form").addClass("hide");
  });
    // Navbar
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
      $("#add__news__form").toggle("hide");
  });
    $("#add__event").click(function(){
      $("#add__event__form").toggle("hide");
  });
    $("#add__chat").click(function(){
      $("#add__chat__form").toggle("hide");
  });
    $("#add__todo").click(function(){
      $("#add__todo__form").toggle("hide");
  });
  })
}

  export default addNavClickEvents