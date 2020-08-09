const express = require('express');
const addUserAccounct = require('../controller/add-account-controller');
const addCompany = require('../controller/add-companystructure-controller');

const router = express.Router();

router
    .route('/account/user')
    .post(addUserAccounct.addUser);

router
    .route('/companystructure/company')
    .post(addCompany.addCompany);
router
    .route('/companystructure/department')
    .post(addCompany.addDepartment);
router
    .route('/companystructure/area')
    .post(addCompany.addArea);
router
    .route('/companystructure/activity')
    .post(addCompany.addActivity);

module.exports = router;