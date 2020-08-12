const mongoose = require('mongoose');
const WorkSchema = require('../schema/WorkSchema');
const ActivitySchema = require('../schema/ActivitySchema'); // require default data
const AreaSchema = require('../schema/AreaSchema'); // require default data
const DepartmentSchema = require('../schema/DepartmentSchema'); // require default data
const CompanySchema = require('../schema/CompanySchema'); // require default data

const Activity = mongoose.model('activities', ActivitySchema.activitySchemas);
const Area = mongoose.model('areas', AreaSchema.areaSchema);
const Department = mongoose.model('departments', DepartmentSchema.departmentSchema);
const Company = mongoose.model('companies', CompanySchema.companySchema);

const Work = mongoose.model('works', WorkSchema.workSchema);

async function CreateWorkListDataStep1(req, res) {
    const data = await Company.find({})
        .populate('department');

    res.send(data);
}

async function createWork(req, res) {
    const work = {
        name: req.body.name,
        createDate: req.body.createDate,
        progress: req.body.progress,
        user: req.body.user,
        company: req.body.company,
        department: req.body.department,
        areas: req.body.areas,
        activities: req.body.activities
    }; // modifiedDate and evaluateWorks must not to use
    if (work.createDate === "now") {
        work.createDate = Date.now();
    } // req now for use
    const newWork = new Work(work);
    await newWork.save();
    const ret = {
        newWork
    };
    console.log(newWork.createDate);
    res.send(ret);
}

module.exports.createWork = createWork;
module.exports.CreateWorkListDataStep1 = CreateWorkListDataStep1;