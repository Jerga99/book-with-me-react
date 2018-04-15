const express       = require("express"),
      app           = express(),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose"),
      keys          = require("./keys"),
      fakeDB        = require("./seed-db"),
      Rental        = require("./models/rental");

const rentalsRoutes = require("./routes/rentals"),
      bookingRoutes = require("./routes/bookings"),
      authRoutes    = require("./routes/auth");

const url = `mongodb://${keys.DB_USER}:${keys.DB_PASSWORD}@ds241489.mlab.com:41489/bwm-dev-react`;

mongoose.connect(url).then(() => {
  // populate DB
  fakeDB.seed();
});

app.use(bodyParser.json()); // use od body parser to get values from get req

app.use("/api/v1/", authRoutes);
app.use("/api/v1/rentals", rentalsRoutes);
app.use("/api/v1/bookings", bookingRoutes);

const PORT = process.env.PORT || '3001';

app.listen(PORT, function(){
    console.log("Node server started on port " + PORT);
});
