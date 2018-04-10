const Rental = require("./models/rental");

module.exports = (function() {
  const data = {
    "rentals": [{
      "title": "Grand Old Mansion-1",
      "city": "San Francisco",
      "street": "Some fake street",
      "category": "condo",
      "image": "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      "bedrooms": 4,
      "description": "Very nice apartment in center of the city.",
      "dailyRate": 43
      },
      {
      "title": "Grand Old Mansion-2",
      "city": "San Francisco",
      "street": "Some fake street",
      "category": "apartment",
      "image": "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      "bedrooms": 1,
      "description": "Very nice apartment in center of the city.",
      "dailyRate": 11
      },
      {
      "title": "Grand Old Mansion-3",
      "city": "San Francisco",
      "street": "Some fake street",
      "category": "estate",
      "image": "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      "bedrooms": 5,
      "description": "Very nice apartment in center of the city.",
      "dailyRate": 23
    }]
  }

  function FakeDB() {};

  FakeDB.prototype.seed = function() {
    Rental.remove({}).then(() => {
      data['rentals'].forEach(rental => {
        const newRental = new Rental(rental);
        newRental.save();
      });
    });
  }

  return new FakeDB();
})();
