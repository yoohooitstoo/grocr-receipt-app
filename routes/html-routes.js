// Requiring path to so we can use relative routes to our HTML files
var express = require("express")
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
<<<<<<< HEAD
      res.render("grocerylist");
    }
    res.render(path.join(__dirname, "index"));
=======
      res.render("grocerylist", req.body);
    }
    res.render("index", req.body);
>>>>>>> 0c8d4356cef38da945e0195f0e359504b2dca3b3
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
<<<<<<< HEAD
      res.redirect("grocerylist");
    }
    res.sendFile(path.join(__dirname, "signup"));
=======
      res.render("grocerylist", req.body);
    }
    res.render("signup", req.body);
>>>>>>> 0c8d4356cef38da945e0195f0e359504b2dca3b3
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
<<<<<<< HEAD
  app.get("/grocerylist", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "grocerylist"));
=======
  app.get("/grocery-list", isAuthenticated, function(req, res) {
    res.render("grocerylist", req.body);
>>>>>>> 0c8d4356cef38da945e0195f0e359504b2dca3b3
  });

    // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/upload", isAuthenticated, function(req, res) {
    res.render("upload", req.body);
  });
  

};
