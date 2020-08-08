const express = require('express');
const addCompanyStructure = require('../controller/add-companystructure-controller');

const router = express.Router();

router
    .route('/user')
    .post(addCompanyStructure.addUser);

module.exports = router;