const express = require('express');
const WorkRegistration = require('../controller/work-registration');

const router = express.Router();

router
    .route('/')
    .get(WorkRegistration.readWork);
router
    .route('/')
    .delete(WorkRegistration.deleteWork);

module.exports = router;