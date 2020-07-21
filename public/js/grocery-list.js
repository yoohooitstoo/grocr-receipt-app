$(document).ready(function () {
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

  // Moving grocery item to previous section
  $(".remove-icon").on("click", function (event) {
    console.log("clicked move")
    //need to prevent default in form
    event.preventDefault();
    var id = $(this).data("id");
    const complete = $(this).data("complete")
    console.log($(this))
    // by using put method, burger is updated
    $.ajax("/api/purchases/" + id, {
      type: "PUT",
      data: {complete: !complete},
    }).then(function () {
      // Purchases.update({
      //   complete: true,
      // });
  
      location.reload();
    });
  });

  $(".add-icon").on("click", function (event) {
    console.log("clicked move")
    //need to prevent default in form
    event.preventDefault();
    var id = $(this).data("id");
    const complete = $(this).data("complete")
    console.log($(this))
    // by using put method, burger is updated
    $.ajax("/api/purchases/" + id, {
      type: "PUT",
      data: {complete: !complete},
    }).then(function () {
      // Purchases.update({
      //   complete: true,
      // });
  
      location.reload();
    });
  });
  $(".delete-icon").on("click", function (event) {
    console.log("clicked move")
    //need to prevent default in form
    event.preventDefault();
    var id = $(this).data("id");
    const complete = $(this).data("complete")
    console.log($(this))
    // by using put method, burger is updated
    $.ajax("/api/purchases/" + id, {
      type: "PUT",
      data: {complete: !complete},
    }).then(function () {
      // Purchases.update({
      //   complete: true,
      // });
  
      location.reload();
    });
  });
});
