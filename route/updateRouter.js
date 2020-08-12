const express = require('express');
const updateCompanyStructure = require('../controller/update-companystructure-controller');

const router = express.Router();

router
    .route('/companystructure/area')
    .put(updateCompanyStructure.updateArea);

module.exports = router;