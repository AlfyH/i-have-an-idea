const Entries = require('../models/entries');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var multer = require('multer');
require('dotenv').config();

const mediumFeed = 'https://medium.com/feed/@alfyhushairi';


exports.getMediumFeed = (req, res) => {
  const rawFile = new XMLHttpRequest();
//retrieve and send RSS feed to front end
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
      res.send({
        body: rawFile.responseText
      });
    }
  };
  rawFile.open('GET', mediumFeed, false);
  rawFile.send();
}

exports.postMongoDb = (req, res) => {
  Entries.create({
    title: req.body.title,
    description: req.body.description,
    type: req.body.type
  }, (err, data) => {
    if (err) {
      res.sendStatus(400);
    }
  });
}

exports.getMongoDb = (req, res) => {
  Entries.find({}, function(err, docs) {
      if (!err){
          res.send(docs)
      } else {throw err;}
  });
};


exports.getDetailPage = (req, res) => {
  let id = req.params.id;
  Entries.findById(`${id}`, function(err, docs) {
      if (!err){
          res.send(docs)
      } else {throw err;}
  });
};

exports.getCategoryPage = (req, res) => {
  let id = req.params.id;
  Entries.find({type: `${id}`}, function(err, docs) {
      if (!err){
          res.send(docs)
      } else {throw err;}
  });
};

exports.postCloudinary = (req, res) => {
    Entries.create({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      url: req.file ? req.file.secure_url : null
    }, (err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    });
}
