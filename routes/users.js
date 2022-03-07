var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send("respon sendeed")
});




module.exports = router;
