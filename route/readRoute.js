const express = require('express');
const readWork = require('../controller/read-work');

const router = express.Router();

router
    .route('/')
    .get(readWork.listWork);
router
    .route('/')
    .delete(readWork.deleteWork);

module.exports = router;