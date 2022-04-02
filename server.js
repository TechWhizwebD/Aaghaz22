const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'static\\CSS')));
app.use(express.static("static"));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "\\static\\index.html");

});
app.get("/events/dance", function(req, res) {
    res.sendFile(__dirname + "\\static\\dance.html");
});
app.get("/contactus", function(req, res) {
    res.sendFile(__dirname + "\\static\\contactus.html");
});
app.get("/events/dramatics", function(req, res) {
    res.sendFile(__dirname + "\\static\\dramatics.html");
});
app.get("/events", function(req, res) {
    res.sendFile(__dirname + "\\static\\events.html");
});
app.get("/events/finearts", function(req, res) {
    res.sendFile(__dirname + "\\static\\finearts.html");
});

app.get("/events/music", function(req, res) {
    res.sendFile(__dirname + "\\static\\music.html");
});
app.get("/events/photography", function(req, res) {
    res.sendFile(__dirname + "\\static\\photography.html");
});
app.get("/events/technical", function(req, res) {
    res.sendFile(__dirname + "\\static\\technical.html");
});
app.get("/events/timeline", function(req, res) {
    res.sendFile(__dirname + "\\static\\timeline.html");
});

app.listen(3000, function() {
    console.log('Server is running on port 3000.');
});