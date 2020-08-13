const mongoose = require('mongoose');
const WorkSchema = require('../schema/WorkSchema');

const Work = mongoose.model('works', WorkSchema.workSchema);

async function readWork(req, res) {
    const work = req.body;
    const workFind = await Work.find({ _id: work._id })
        .populate('user')
        .populate('company')
        .populate('department')
        .populate('areas')
        .populate('activities');
    /*const ret = {
        _id: workFind._id, //work object id
        name: workFind.name, //work name
        createDate: workFind.createDate, // work create date
        progress: workFind.progress, // work create progress
        userName: workFind.user.name, //name of user
        surname: workFind.user.surname, // surname of user
        company: workFind.company.name, // company name
        department: workFind.department.name, // departmentname
        areas: workFind.areas, // departmentname
        activities: workFind.activities, // departmentname
    };*/
    res.send(workFind);
    console.log(workFind);
}
async function deleteWork(req, res) {
    const listWork = req.body;
    const result = [{}];
    //console.log(listWork);
    //res.send(listWork);

    for (let index = 0; index < listWork.length; index++) {
        result[index] = await Work.deleteOne({ _id: listWork[index]._id }, (err) => {
            if (err) return err;
        });
        if (index == listWork.length - 1) {
            res.send(listWork);
            console.log(result);
        }
    }
}

module.exports.deleteWork = deleteWork;
module.exports.readWork = readWork;