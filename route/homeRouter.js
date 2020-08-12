const express = require('express');
const homeWork = require('../controller/home-work');

const router = express.Router();

router
    .route('/')
    .get(homeWork.listWork);
router
    .route('/')
    .delete(homeWork.deleteWork);

module.exports = router;