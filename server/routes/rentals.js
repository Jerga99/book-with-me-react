const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");
const User = require("../models/user");
const Auth = require("../controllers/auth");
const {normalizeErrors} = require("../helpers/mongoose-helper");

// TEST WITH AUTH MIDDLEWARE
router.get("", function(req, res) {
  const city = req.query.city;

  if (city) {
    Rental.find({city: city.toLowerCase()}).select('-bookings').exec(function(err, filteredRentals) {
      if (err || filteredRentals.length === 0 ) {
        return res.status(422).send({errors: [{title: 'No Rentals found', detail: `There are no rentals for city ${city}`}] });
      }

      res.json(filteredRentals);
    });
  } else {
      Rental.find({}).select('-bookings').exec(function(err, allRentals) {
      res.json(allRentals);
    });
  }
});

router.get("/:id", function(req, res) {
  Rental.findById(req.params.id).
    populate('user', 'email -_id').
    populate('bookings', 'startAt endAt -_id').
    exec(function(err, foundRental) {
      res.json(foundRental);
  });
});

router.post("", Auth.authMiddleware, function(req, res) {
  const { title, city, street, category, image, bedrooms, description, dailyRate } = req.body;

  const rental = new Rental({title, city, street, category, image, bedrooms, description, dailyRate});
  const user = res.locals.user;
  rental.user = user;

  Rental.create(rental, function(err, newRental) {
    if (err) {
      return res.status(422).send({errors: normalizeErrors(err.errors) });
    } else {
      User.update({_id: user.id}, { $push: {rentals: newRental}}, function(){});
      res.status(200).send({rental: newRental});
    }
  });
});

router.get("/manage", Auth.authMiddleware, function(req, res) {
  const user = res.locals.user;

  Rental.where({user: user}).populate('bookings').exec(function(err, foundRentals){
    if (err) {
      return res.status(422).send({errors: normalizeErrors(err.errors) });
    }

    res.json(foundRentals);
  });
});

module.exports = router;

