const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'static\\CSS')));
app.use(express.static("static"));
app.get("/aaghaz", function(req, res) {
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
app.get("/kfwbdfwkjfbsdkkncljlnf",(req,res)=>{
    res.redirect("https://instagram.com/tech_trail_6");
});
app.get("/kawbdfwkjfbsdkkncljlnf",(req,res)=>{
    res.redirect("https://t.me/Techwhiz_bot");
});
app.get("/kbwbdfwkjfbsdkkncljlnf",(req,res)=>{
    res.redirect("https://www.linkedin.com/posts/tech-trail-323969236_techtrail-techwhiz-hyperion-activity-6917309203573309440-kqjo?utm_source=linkedin_share&utm_medium=member_desktop_web");
});
app.get("/sdfvhdsjcvsjd",(req,res)=>{
    res.redirect("https://instagram.com/xojig96188");
});
app.get("/dsvhjdsgvcdsDFsd12",(req,res)=>{
    res.redirect("https://docs.google.com/forms/d/e/1FAIpQLSfY9xRj7vN0-Je29MDqT85VnKebvAN19EfsRKl5USQcHsYOzw/viewform?usp=sf_link");
});
app.get("/Hdsddwjfhwef",(req,res)=>{
    res.redirect("https://t.me/+otYAfPdcNalhOTRh");
});

app.get("/dsfhjgjhDJdskd",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1Pjhfc_W5GcD1COebTyxoJd0GXwFfkqaV/view?usp=sharing");
});
app.get("/HDSGFHcdfdd",(req,res)=>{
    res.redirect("https://pastebin.com/4HLyXCnC");
});
app.get("/DNBSDsdfasddsfjkbkds",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1CW5mRdXxtH_ZAgZUfmZQhQOXmvsGv8sA/view?usp=sharing");
});
app.get("/dfgbsvbgfdsj",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1peQ70EVxjDgzxe4gVoRVafc_E0xqMRZP/view?usp=sharing");
});

app.get("/kawbdfwkjfbsdkkncljlnf",(req,res)=>{
    res.redirect("https://t.me/Techwhiz_bot");
});
app.get("/kbwbdfwkjfbsdkkncljlnf",(req,res)=>{
    res.redirect("https://www.linkedin.com/posts/tech-trail-323969236_techtrail-techwhiz-hyperion-activity-6917198364149211137-MzUf?utm_source=linkedin_share&utm_medium=android_app");
});
app.get("/sdfvhdsjcvsjd",(req,res)=>{
    res.redirect("https://instagram.com/xojig96188");
});
app.get("/dsvhjdsgvcdsDFsd12",(req,res)=>{
    res.redirect("https://docs.google.com/forms/d/e/1FAIpQLSfY9xRj7vN0-Je29MDqT85VnKebvAN19EfsRKl5USQcHsYOzw/viewform?usp=sf_link");
});
app.get("/Hdsddwjfhwef",(req,res)=>{
    res.redirect("https://t.me/+otYAfPdcNalhOTRh");
});
app.get("/shvdhsGEdsjfjsdsdf",(req,res)=>{
    res.redirect("https://www.reddit.com/r/TechWhiz/comments/txgqmy/keep_an_eye_everywhere_clues_here_and_there/?utm_source=share&utm_medium=web2x&context=3");
});

app.get("/dsfhjgjhDJdskd",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1Pjhfc_W5GcD1COebTyxoJd0GXwFfkqaV/view?usp=sharing");
});
app.get("/HDSGFHcdfdd",(req,res)=>{
    res.redirect("https://pastebin.com/4HLyXCnC");
});
app.get("/DNBSDsdfasddsfjkbkds",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1CW5mRdXxtH_ZAgZUfmZQhQOXmvsGv8sA/view?usp=sharing");
});
app.get("/dfgbsvbgfdsj",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1peQ70EVxjDgzxe4gVoRVafc_E0xqMRZP/view?usp=sharing");
});

app.get("/dshgfwhjdvfjbjws",(req,res)=>{
    res.redirect("https://instagram.com/tech_trail_6");
});

app.get("/cghfudsygfyasj",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1ORnYImgFWwobcqr0h-c5-WQ1CkGmF2wY/view?usp=sharing");
});
app.get("/asjgfjhgfiuemdn",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1PJbMkizYDPAgcLhoVTryMv_WTysUP6PF/view?usp=sharing");
});
app.get("/sajgdsjdbdsfnd",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1PDJhmOMSeXA1oMTPDJzhBPrmjNZAjitZ/view?usp=sharing");
});
app.get("/dshgfwhjdvfjbjws",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1PP4S60dyGB1u9wYsF-P86IBao7g-xrDt/view?usp=sharing");
});
app.get("/shvfjdsvfjew",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1QBwrAP9x0Rnt2VruXHB42WP-0QdgFhPn/view?usp=sharing");
});
app.get("/sdfjguewjsdf",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1QUepNxptOMeXE1dL-Wm6TvEunyvCq4uu/view?usp=sharing");
});
app.listen(3000, function() {
    console.log('Server is running on port 3000.');
});