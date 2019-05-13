const express = require('express');
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get('/feed', homeController.getFeed);
router.post('/entriespost', homeController.post)
router.get('/entriesget', homeController.get)

module.exports = router;
