// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// var PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Routes
// ===========================================================
// // route sends user to home page
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });
  
// // route sends user to reserve page
// app.get("/reserve", function(req, res) {
//     res.sendFile(path.join(__dirname, "reserve.html"));
//   });

// // route sends user to tables page
// app.get("/tables", function(req, res) {
//     res.sendFile(path.join(__dirname, "tables.html"));
//   });

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  
