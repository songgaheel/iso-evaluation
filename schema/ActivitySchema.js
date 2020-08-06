const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const activitySchema = new schema({
    name: String,
    activityType: String, // routine or non-routine
    location: String, // inside or outside
    area: {
        type: schema.Types.ObjectId,
        ref: 'areas'
    },
    operation: {
        staff: Boolean,
        vendor: Boolean,
        customer: Boolean,
        comunity: Boolean,
        etc: {
            enable: Boolean,
            detail: String
        }
    },
    effect: {
        staff: Boolean,
        vendor: Boolean,
        customer: Boolean,
        comunity: Boolean,
        etc: {
            enable: Boolean,
            detail: String
        }
    },
});
//create collection
module.exports.activitySchemas = activitySchema;