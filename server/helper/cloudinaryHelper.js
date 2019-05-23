var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var multer = require('multer');
const uuidv4 = require('uuid/v4');
require('dotenv').config();

//setting up parameters for Cloudinary storage
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'I-have-an-idea',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, uuidv4()); //filename as to change (what if duplicate name?)
  }
});

//.env for cloudinary keys
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET
});

var cloudinaryParser = multer({ storage: storage });
module.exports = cloudinaryParser;
