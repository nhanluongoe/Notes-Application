//***CommonJS
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

//***ES6 Module
import { default as express } from "express";
export const router = express.Router();

router.get("/", async (req, res, next) => {
  // ... placeholder for Notes home page code
  res.render("index", { title: "Notes" });
});
