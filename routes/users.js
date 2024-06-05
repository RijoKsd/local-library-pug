const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/cool", (req,res)=>{res.send("Your are so cool")
  console.log(req.originalUrl, " requ.originalUrl");
  console.log(req.baseUrl, " req.baseUrl");
  console.log(req.path, " req.path");
  console.log(req.hostname, " req.hostname");
  console.log(req.ip, " req.ip");
  console.log(req.protocol, " req.protocol");
  console.log(req.method, " req.method");
  console.log(req.query, " req.query");
  console.log(req.params, " req.params");
  console.log(req.body, " req.body");
  console.log(req.headers, " req.headers");
  console.log(req.cookies, " req.cookies");
  console.log(req.signedCookies, " req.signedCookies");
  console.log(req.get('Content-Type'), " req.get('Content-Type')");
  console.log(req.url, " req.url"); 
});

module.exports = router;
