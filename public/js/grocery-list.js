$(document).ready(function() {
  const purchases = $("#purchases");
$(document).on("click", "remove-icon", removePurchases)
$(document).on("click", "add-icon", addPurchases)
$(document).on("click", "move-icon", movePurchases)

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(`${data.firstName} ${data.lastName}`);
  });  
const purchases = [];

getPurchases();

function initializeRows() {
  $purchases.empty();
  var rowsToAdd = [];
  for (var i = 0; i < purchases.length; i++) {
    rowsToAdd.push(createNewRow(purchases[i]));
  }
  $purchases.prepend(rowsToAdd);
}

});