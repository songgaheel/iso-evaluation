const express = require('express');
const createUserAccounct = require('../controller/create-account-controller');
const createCompanyStructure = require('../controller/create-companystructure-controller');
const createWork = require('../controller/create-work-controller');

const router = express.Router();

router
    .route('/account/user')
    .post(createUserAccounct.createUser);
router
    .route('/companystructure/company')
    .post(createCompanyStructure.createCompany);
router
    .route('/companystructure/department')
    .post(createCompanyStructure.createDepartment);
router
    .route('/companystructure/area')
    .post(createCompanyStructure.createArea);
router
    .route('/companystructure/activity')
    .post(createCompanyStructure.createActivity);
router
    .route('/home/work')
    .post(createWork.createWork);

module.exports = router;