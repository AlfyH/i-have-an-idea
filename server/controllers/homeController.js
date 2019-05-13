const Entries = require('../models/entries');


exports.getFeed = (req, res) => {
  res.send("hello from server");
  console.log("hello");
}

exports.post = (req, res) => {
  Entries.create({
    title: req.body.title,
    description: req.body.description
  }, (err, data) => {
    if (err) {
      res.sendStatus(400);
    }
  });
}

exports.get = (req, res) => {
  Entries.find({}, function(err, docs) {
      if (!err){
          res.send(docs)
          console.log(docs);
      } else {throw err;}
  });
};
