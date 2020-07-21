// Requiring path to so we can use relative routes to our HTML files
const express = require("express")
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("grocerylist", req.body);
    }
    res.render("index", req.body);
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("grocerylist", req.body);
    }
    res.render("signup", req.body);
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/grocery-list", isAuthenticated, function(req, res) {
    console.log(req.user);
    db.Purchases.findAll({
    
    }).then(function (dbPurchases) {
      // console.log(dbPurchases);
      res.render('grocerylist', {Purchases: dbPurchases});
    });
  });

    // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/upload", isAuthenticated, function(req, res) {
    res.render("upload", req.body);
  });
  

};
