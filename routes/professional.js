const express = require('express');

const proController = require('../controllers/professional');

const router = express.Router();

//GET /professional
router.get('/', proController.getData);

module.exports = router;
