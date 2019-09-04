var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("article")
});

router.post('/addArticle',async(req,res)=>{
    console.log("yes");
    
    
})
module.exports = router;
