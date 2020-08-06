const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const areaSchema = new schema({
    "name": String,
    "areaType": [{ data: 'Inside' }, { data: 'Outside' }],
    "department": {
        type: schema.Types.ObjectId,
        ref: 'departments'
    },
    "activities": [{
        type: schema.Types.ObjectId,
        ref: 'activities'
    }]
});
module.exports.areaSchema = areaSchema;