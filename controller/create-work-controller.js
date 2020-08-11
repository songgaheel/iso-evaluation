const mongoose = require('mongoose');
const WorkSchema = require('../schema/WorkSchema');

const Work = mongoose.model('works', WorkSchema.workSchema);

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