const mongoose = require('mongoose');
const WorkSchema = require('../schema/WorkSchema');

const Work = mongoose.model('works', WorkSchema.workSchema);

async function listWork(req, res) {
    const listWork = await Work.find({});
    const element = [{}];

    for (let index = 0; index < listWork.length; index++) {
        element[index] = {
            _id: listWork[index]._id,
            name: listWork[index].name,
            createDate: listWork[index].createDate,
            progress: listWork[index].progress,
            user: listWork[index].user,
            company: listWork[index].company,
            department: listWork[index].department,
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
            res.send(result);
            console.log(listWork);
        }
    }
}

module.exports.deleteWork = deleteWork;
module.exports.listWork = listWork;