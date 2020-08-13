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
        .populate('departments');

    res.send(data);
    console.log(data);
}

async function CreateWorkListDataStep2(req, res) {
    const department = req.body.department;
    const data = await Department.findOne({ _id: department })
        .populate({
            path: 'areas',
            populate: { path: 'activities' }
        });

    res.send(data);
    console.log(data);
}

async function CreateWorkListDataStep3(req, res) {
    const area = req.body;
    const area_inside = [{}];
    const area_outside = [{}];
    console.log(area);

    for (let index = 0; index < area._id.length; index++) {
        console.log('for ', index);
        area_inside[index] = await Area.findOne({
                _id: area._id[index],
                areaType: [
                    "inside"
                ]
            })
            .populate({
                path: 'activities'
            });
        area_outside[index] = await Area.findOne({
                _id: area._id[index],
                areaType: [
                    "outside"
                ]
            })
            .populate({
                path: 'activities'
            });
        if (index == area._id.length - 1) {
            let ret = {
                area_inside,
                area_outside
            };
            res.send(ret);
            console.log(ret);
        }
    }
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
module.exports.CreateWorkListDataStep2 = CreateWorkListDataStep2;
module.exports.CreateWorkListDataStep3 = CreateWorkListDataStep3;