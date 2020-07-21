$(document).ready(function() {
  // let purchases = $("#purchases");
// $(document).on("click", "remove-icon", removePurchases());
// $(document).on("click", "add-icon", addPurchases());
// $(document).on("click", "move-icon", movePurchases());
// $(document).on("click", "edit-icon", editPurchase());
$("#add-button").on("click", function(event){
  event.preventDefault();
  addPurchase()
});

$("#add-field").on("submit", function(event){
  event.preventDefault();
  addPurchase()
});

  const $newItemInput = $("");


  $("#add-button").on("click", function (event) {
    event.preventDefault();
    addPurchase();
  });

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(`${data.firstName} ${data.lastName}`);
  });

  getPurchases();

  // creating a newItem based on entry and
  function addPurchase() {
    let newItem = {
      description: $("#add-text-box").val().trim(),
    };

    $.post("/api/purchases", newItem).then(function (data) {
      $("#purchases");
      window.location.reload();
    });
  }

  // All items in our database
  function getPurchases() {
    $.get("/api/purchases", function (data) {
      console.log("decription", data);
      purchases = data;
    });
  }
});
