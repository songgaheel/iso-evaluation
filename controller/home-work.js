const mongoose = require('mongoose');
const WorkSchema = require('../schema/WorkSchema');

const Work = mongoose.model('works', WorkSchema.workSchema);

async function listWork(req, res) {
    const listWork = await Work.find({})
        .populate('user')
        .populate('company')
        .populate('department');
    const element = [{}];

    for (let index = 0; index < listWork.length; index++) {
        element[index] = {
            _id: listWork[index]._id, //work object id
            name: listWork[index].name, //work name
            createDate: listWork[index].createDate, // work create date
            progress: listWork[index].progress, // work create progress
            userName: listWork[index].user.name, //name of user
            surname: listWork[index].user.surname, // surname of user
            company: listWork[index].company.name, // company name
            department: listWork[index].department.name, // departmentname
        };
        if (index == listWork.length - 1) {
            res.send(element);
            console.log(element);
        }
    }

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
module.exports.listWork = listWork;