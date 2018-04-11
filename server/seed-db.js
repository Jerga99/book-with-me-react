const Rental = require("./models/rental");

module.exports = (function() {
  const data = {
    "rentals": [{
      "title": "Nice view on River",
      "city": "kosice",
      "street": "Letna 9",
      "category": "condo",
      "image": "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      "bedrooms": 4,
      "description": "Very nice apartment in center of the city.",
      "dailyRate": 43
      },
      {
      "title": "Central Apartment",
      "city": "san francisco",
      "street": "main street",
      "category": "apartment",
      "image": "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      "bedrooms": 1,
      "description": "Very nice apartment in center of the city.",
      "dailyRate": 11
      },
      {
      "title": "Beautiful house",
      "city": "new york",
      "street": "times square",
      "category": "house",
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
