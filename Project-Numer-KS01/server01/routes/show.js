var express = require('express');
var router = express.Router();

var cors = require('cors')
router.use(cors())

const monk = require('monk')
//const url = 'mongodb+srv://admin:1234@cluster0-w2znz.azure.mongodb.net/numerdb'
//const url ='mongodb+srv://mig:mig@cluster0-pfsnn.azure.mongodb.net/numerdb'
//const url = 'mongodb://localhost:27017/numerdb' 
const url ='mongodb+srv://mig:mig@cluster0-p6wcv.gcp.mongodb.net/numerdb'
const db = monk(url);
const collection = db.get('numer')


db.then(() => {
    console.log('Connected correctly to server')
  })
/* GET home page. */
router.get('/', function(req, res, next) {
    collection.find({}).then((docs) => {
        console.log(docs)
        res.json(docs)
    })
});
router.get('/bisec', function(req, res, next) {
    collection.find({name:"bisection"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
    
  });
  router.get('/false', function(req, res, next) {
    collection.find({name:"false position"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
    
  });
  router.get('/newton', function(req, res, next) {
    collection.find({name:"newton"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
    
  });
  router.get('/secant', function(req, res, next) {
    collection.find({name:"secant"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
    
  });
  router.get('/onepoint', function(req, res, next) {
    collection.find({name:"onepoint"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
    
  });
  router.get('/taylor', function(req, res, next) {
    collection.find({name:"taylor"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
  });
  router.get('/carmer', function(req, res, next) {
    collection.find({name:"carmer"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
  });
  router.get('/diff', function(req, res, next) {
    collection.find({name:"diff"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
  });
  router.get('/trap', function(req, res, next) {
    collection.find({name:"trap"}).then((docs) => {
        console.log(docs)
        res.send(docs)
    })
  });
module.exports = router;
