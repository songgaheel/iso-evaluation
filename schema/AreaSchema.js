const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const areaSchema = new schema({
    "name": String,
    "areaType": [{ type: String, defalt: 'Inside' }, { type: String, defalt: 'Outside' }],
    "activities": [{
        type: schema.Types.ObjectId,
        ref: 'activities'
    }]
});
module.exports.areaSchema = areaSchema;