var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var { getBday, addPerson,getDatabyId,deleteIteam } = require("../database/database")


router.use(express.json())


/* GET home page. */
router.get('/', async function (req, res, next) {
  let a = await getBday()
  res.render('index', { a: a })
});

// router.get('/try2', async function (req, res, next) {
//  res.send("hiii rwmovw working")
// });

router.get('/try', async function (req, res, next) {
  let userid = req.query.id
  if(isNaN(userid)){
    res.send("enter id with number")
  }else{
     let result = await getDatabyId(userid);
    if(result.length==0){
    res.send('enter valid id')
  }else{
    // res.send(result)
    res.render('index',{a : result})
  }
}
});


router.get('/list', async function (req, res) {
  let a = await getBday()
  console.log("GET");
  res.render('index', { a: a })
})

router.post('/list', async function (req, res) {
  let a = req.body.name
  let b = req.body.date
  console.log(a);
  if (!a||!b) {
    res.status(404).send(`<script>alert('syour alert message')</script>`)
  }else{
    await addPerson(a, b)
    res.redirect("http://localhost:3000/")
  }
})


router.get('/try2/:id', async function (req, res, next) {
  let userid = req.query.id
  console.log(userid);
  if(isNaN(userid)){
    res.send("enter id with number")
  }else{
     let result = await deleteIteam(userid);
    if(result.length==0){
    res.send('enter valid id')
  }
  res.send("deleted")
}
})
module.exports = router;

