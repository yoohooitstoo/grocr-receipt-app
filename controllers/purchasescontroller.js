const express = require("express");
const db = require("../models");
const router = express.Router();

// GET route for getting all of the items added by the user
// needs to modify to include added from the receipt
router.get("/api/purchases", function (req, res) {
  db.Purchases.findAll({}).then(function (dbPurchases) {
    res.json(dbPurchases);
  });
});

// Post route for saving a new purchase
router.post("/api/purchases", function (req, res) {
  db.Purchases.create({
    description: req.body.description,
    complete: req.body.complete,
  })
    .then(function (dbPurchases) {
      res.json(dbPurchases);
    })
    .catch(function (err) {
      res.json(err);
    });
});
// DELETE route for deleting purchases.
router.delete("api/purchases/:id", function (req, res) {
  db.Purchases.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbPurchases) {
    res.json(dbPurchases);
  });
});

router.put("/api/purchases", function (req, res) {
  db.Purchase.update(
    {
      description: req.body.description,
      complete: req.body.complete,
    },
    {
      where: {
        id: req.body.id,
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

module.exports = express;