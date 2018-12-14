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

// tables and waitlist data
// =============================================================
var tables = [
    {
        name: "Laurie",
        phone: "123",
        email: "laurie@yahoo.com",
        unique_id: "1"
    },
    {
        name: "Sam",
        phone: "234",
        email: "sam@yahoo.com",
        unique_id: "2"
    },
    {
        name: "Mike",
        phone: "345",
        email: "mike@yahoo.com",
        unique_id: "3"
    },
    {
        name: "Jeff",
        phone: "456",
        email: "jeff@yahoo.com",
        unique_id: "4"
    },
    {
        name: "Blake",
        phone: "567",
        email: "blake@yahoo.com",
        unique_id: "5"
    }
];

var waitlist = [
    {
        name: "Tom",
        phone: "987",
        email: "tom@yahoo.com",
        unique_id: "6"
    },
    {
        name: "Jen",
        phone: "876",
        email: "jen@yahoo.com",
        unique_id: "7"
    },
    {
        name: "Jay",
        phone: "765",
        email: "jay@yahoo.com",
        unique_id: "8"
    },
    {
        name: "Kate",
        phone: "654",
        email: "kate@yahoo.com",
        unique_id: "9"
    },
    {
        name: "Bif",
        phone: "543",
        email: "bif@yahhho.com",
        unique_id: "10"
    }
];


// Routes for displaying HTML pages
// ===========================================================
// route sends user to home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// route sends user to reserve page
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// route sends user to names page
app.get("/names", function (req, res) {
    res.sendFile(path.join(__dirname, "names.html"));
});

// Routes for getting and posting data
// ===========================================================







// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

