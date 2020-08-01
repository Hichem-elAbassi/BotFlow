var express = require('express');
var router = express.Router();
/** API functions **/
/*
1. CRUD on "element"
*/
/* GET home page. */
router.get('/', function(req, res, next) {
  var results={
    "name":"hichem",
    "function":"testing"
  }
  res.json(results);
});
router.get('/elements', function(req, res, next) {
  var results={
    elements:[{"name":"test 1","function":"vector"},
              {"name":"test 2","function":"vector"},
              {"name":"test 3","function":"vector"},
              {"name":"test 4","function":"vector"}]
  }
  res.json(results);
});
router.post('/elements', function(req, res, next) {
  var results={
    "name":"hichem",
    "function":"testing"
  }
  res.json(results);
});
router.get('/', function(req, res, next) {
  var results={
    "name":"hichem",
    "function":"testing"
  }
  res.json(results);
});
module.exports = router;
