const express = require('express'); //how to set up as env?
const routes = require('./routes/route');
/*Mongodb*/
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
/*image upload*/
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var multer = require('multer');

require('dotenv').config();
const app = express();

//make connection to Mongodb
mongoose.connect('mongodb+srv://alfyhushairi:Password123@alfy-iqker.gcp.mongodb.net/i-have-an-idea?retryWrites=true', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongodb is connected")
});

//setting up parameters for Cloudinary storage
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, 'filename');
  }
});

//.env for cloudinary keys
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET
});

var parser = multer({ storage: storage });

app.post('/upload', parser.single('recfile'), function (req, res) {
  console.log(req.file);
});

//setting port number for production and localhost
const port = process.env.PORT || 3001;

//used for Mongodb
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'what',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


app.use('/', routes);

app.listen(port, () => {
  console.log(`----App ready----`);
});
