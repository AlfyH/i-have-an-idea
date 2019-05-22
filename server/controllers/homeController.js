const Entries = require('../models/entries');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const cnnFeed = 'https://medium.com/feed/@alfyhushairi';


exports.getFeed = (req, res) => {
  const rawFile = new XMLHttpRequest();
//retrieve and send RSS feed to front end
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
      res.send({
        body: rawFile.responseText
      });
    }
  };
  rawFile.open('GET', cnnFeed, false);
  rawFile.send();
}

exports.DBpost = (req, res) => {
  Entries.create({
    title: req.body.title,
    description: req.body.description
  }, (err, data) => {
    if (err) {
      res.sendStatus(400);
    }
  });
}

exports.DBget = (req, res) => {
  Entries.find({}, function(err, docs) {
      if (!err){
          res.send(docs)
      } else {throw err;}
  });
};


exports.DBDetailget = (req, res) => {
  let id = req.params.id;
  Entries.findById(`${id}`, function(err, docs) {
      if (!err){
          res.send(docs)
          console.log(req.params.id);
      } else {throw err;}
  });
};
