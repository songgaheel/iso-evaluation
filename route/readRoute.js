const express = require('express');
const readWork = require('../controller/read-work');

const router = express.Router();

router
    .route('/')
    .get(readWork.listWork);

module.exports = router;