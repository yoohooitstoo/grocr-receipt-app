// Requiring path to so we can use relative routes to our HTML files
var express = require("express")
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("grocerylist");
    }
    res.render(path.join(__dirname, "index"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("grocerylist");
    }
    res.sendFile(path.join(__dirname, "signup"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/grocerylist", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "grocerylist"));
  });

};
