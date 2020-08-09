const mongoose = require('mongoose');
const ActivitySchema = require('../schema/ActivitySchema'); // require default data
const AreaSchema = require('../schema/AreaSchema'); // require default data
const DepartmentSchema = require('../schema/DepartmentSchema'); // require default data
const CompanySchema = require('../schema/CompanySchema'); // require default data

const Activity = mongoose.model('activities', ActivitySchema.activitySchemas);
const Area = mongoose.model('areas', AreaSchema.areaSchema);
const Department = mongoose.model('departments', DepartmentSchema.departmentSchema);
const Company = mongoose.model('companies', CompanySchema.companySchema);

async function addCompany(req, res) {
    console.log('start');
    const companny = {
        name: req.body.name,
    };
    const newCompany = Company(companny);
    await newCompany.save();
    const ret = {
        newCompany
    };
    res.send(ret);
}


async function addDepartment(req, res) {
    console.log('start');
    const department = {
        name: req.body.name,
        company: req.body.company,
    };
    const newDepartment = Department(department);
    await newDepartment.save();
    const company = await Company.updateOne({ _id: newDepartment.companny }, {
        $push: { departments: newDepartment._id }
    });
    const ret = {
        newDepartment,
        company
    };
    res.send(ret);
}

async function addArea(req, res) {
    console.log('start');
    const area = {
        name: req.body.name,
        areaType: req.body.areaType,
        department: req.body.department
    };
    const newArea = Area(area);
    await newArea.save();
    const department = await Department.updateOne({ _id: newArea.department }, {
        $push: { areas: newArea._id }
    });
    const ret = {
        newArea,
        department
    };
    res.send(ret);
}

async function addActivity(req, res) {
    console.log('start');
    const activity = {
        name: req.body.name,
        activityType: req.body.activityType,
        location: req.body.location,
        operation: {
            staff: req.body.operation.staff,
            vendor: req.body.operation.vendor,
            customer: req.body.operation.customer,
            community: req.body.operation.community,
            etc: {
                enable: req.body.operation.etc.enable,
                detail: req.body.operation.etc.detail
            }
        },
        effect: {
            staff: req.body.effect.staff,
            vendor: req.body.effect.vendor,
            customer: req.body.effect.customer,
            community: req.body.effect.community,
            etc: {
                enable: req.body.effect.etc.enable,
                detail: req.body.effect.etc.enable
            }
        }
    };
    const newActivity = Activity(activity);
    await newActivity.save();
    const ret = {
        newActivity
    };
    res.send(ret);
}

module.exports.addCompany = addCompany;
module.exports.addDepartment = addDepartment;
module.exports.addArea = addArea;
module.exports.addActivity = addActivity;