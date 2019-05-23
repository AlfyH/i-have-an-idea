const express = require('express');
const router = express.Router();
const homeController = require("../controllers/homeController");
const cloudinaryParser = require("../helper/cloudinaryHelper");

router.get('/feed', homeController.getMediumFeed);
router.post('/entriespost', homeController.postMongoDb)
router.get('/entriesget', homeController.getMongoDb)
router.get('/detailget/:id', homeController.getDetailPage)
router.get('/getcategory/:id', homeController.getCategoryPage)
router.post('/upload', cloudinaryParser.single('recfile'), homeController.postCloudinary)

module.exports = router;
