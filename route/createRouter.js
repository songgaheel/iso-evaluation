const express = require('express');
const createUserAccounct = require('../controller/create-account-controller');
const createCompanyStructure = require('../controller/create-companystructure-controller');
const createWork = require('../controller/create-work-controller');

const router = express.Router();
// Careate Account
router
    .route('/account/user')
    .post(createUserAccounct.createUser);
// Create Company Structure
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
// Create Work
router
    .route('/home/work/step1')
    .post(createWork.CreateWorkListDataStep1);
router
    .route('/home/work/step2')
    .post(createWork.CreateWorkListDataStep2);
router
    .route('/home/work/step3')
    .post(createWork.CreateWorkListDataStep1);
router
    .route('/home/work/step4')
    .post(createWork.CreateWorkListDataStep1);
router
    .route('/home/work/complete')
    .post(createWork.createWork);

module.exports = router;