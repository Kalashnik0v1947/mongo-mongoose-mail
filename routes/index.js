var express = require("express");
var router = express.Router();
const Mail = require("../models/postman");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/usps", function (req, res, next) {
  Mail.create({
    envelope: req.body.envelope,
    stamp: req.body.stamp,
    address: req.body.address,
  }).then(() => {
    res.render("usps");
    console.log("worked added to db");
  });
});

router.get("/all-mail", function (req, res, next) {
  Mail.find().then((results) => {
    res.render("all-mail", results);
    console.log("worked added to db", results);
  });
});

router.get("/oneEnv/:one", function (req, res, next) {
  Mail.findById(req.params.one).then((results) => {
    res.render("oneEnv", results);
    console.log("worked added to db", results);
  });
});

router.get("/form", function (req, res, next) {
  res.render("form");
});

router.post("/form", function (req, res, next) {
  Mail.create({
    envelope: req.body.envelope,
    stamp: req.body.stamp,
    address: req.body.address,
  }).then((results) => {
    res.render("oneEnv", results);
    console.log("worked added to db");
  });
});

module.exports = router;
