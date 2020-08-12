const mongoose = require('mongoose');
const AreaSchema = require('../schema/AreaSchema'); // require default data

const Area = mongoose.model('areas', AreaSchema.areaSchema);

async function updateArea(req, res) {
    console.log('start');
    const area = req.body;
    const activityID = req.body.activities;
    console.log(area);
    for (let index = 0; index < activityID.length; index++) {
        await Area.updateOne({ _id: area._id }, {
            $push: { activities: activityID[index]._id }
        });
    }

    const listWork = await Area.find({ _id: area._id })
        .populate('activities');
    const element = [{}];

    for (let index = 0; index < listWork.length; index++) {
        element[index] = listWork[index];
        if (index == listWork.length - 1) {
            res.send(element);
            console.log(element);
        }
    }
}

module.exports.updateArea = updateArea;