const express = require('express');
const WorkRegistration = require('../controller/work-registration');
const WorkEvaluation = require('../controller/create-work-evaluation-controller');

const router = express.Router();

router
    .route('/')
    .get(WorkRegistration.readWork);
router
    .route('/')
    .delete(WorkRegistration.deleteWork);
router
    .route('/work-evaluation/create/1')
    .get(WorkEvaluation.CreateWorkEvaluationStep1);

module.exports = router;