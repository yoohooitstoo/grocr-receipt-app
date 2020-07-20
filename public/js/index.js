$(document).ready(function () {
  $("#signup-btn").on("click", function (event) {
    event.preventDefault();
    window.location.replace("/signup");
  });
  $("#upload-btn").on("click", function (event) {
    event.preventDefault();
    window.location.replace("/upload");
  });
  $("#logout-btn").on("click", function(event){
    event.preventDefault();
    window.location.replace("/logout");
  })
  $("#login-page-btn").on("click", function(event){
    event.preventDefault();
    window.location.replace("/");
  })
});
