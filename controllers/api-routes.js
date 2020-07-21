// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        // console.log(req.body)
        window.location.replace("/grocery-list");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        id: req.user.id
      });
    }
  });
// GET route for getting all of the items added by the user
// needs to modify to include added from the receipt
app.get("/api/purchases", function (req, res) {
  db.Purchases.findAll({}).then(function (dbPurchases) {
    // console.log(dbPurchases);
    res.json(dbPurchases);
  });
});

// Post route for saving a new purchase
app.post("/api/purchases", function (req, res) {
  // console.log(req.body);
  db.Purchases.create({
    description: req.body.description,
    item_price: req.body.item_price,
    sku: req.body.sku
  })
    .then(function (data) {
      // console.log(data);
      db.Purchases.findAll({}).then(function (dbPurchases) {
        // console.log(dbPurchases);
        res.render('grocerylist', {Purchases: dbPurchases});
      });
    })
    .catch(function (err) {
      res.json(err);
    });
});
// DELETE route for deleting purchases.
app.delete("/api/purchases/:id", function (req, res) {
  db.Purchases.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbPurchases) {
    res.json(dbPurchases);
  });
});

app.put("/api/purchases/:id", function (req, res) {
  db.Purchases.update(
    {
      // description: req.body.description,
      complete: req.body.complete,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(function (dbPurchases) {
      res.json(dbPurchases);
    })
    .catch(function (err) {
      res.json(err);
    });
});

};