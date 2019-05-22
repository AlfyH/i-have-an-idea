const express = require('express');
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get('/feed', homeController.getFeed);
router.post('/entriespost', homeController.DBpost)
router.get('/entriesget', homeController.DBget)
router.get('/detailget/:id', homeController.DBDetailget)

module.exports = router;
