const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const activitySchema = new schema({
    name: String,
    activityType: [{ type: String, defalt: 'routine' }, { type: String, defalt: 'non-routine' }], // routine or non-routine
    location: [{ type: String, defalt: 'Inside' }, { type: String, defalt: 'Outside' }], // inside or outside
    operation: {
        staff: Boolean,
        vendor: Boolean,
        customer: Boolean,
        community: Boolean,
        etc: {
            enable: Boolean,
            detail: String
        }
    },
    effect: {
        staff: Boolean,
        vendor: Boolean,
        customer: Boolean,
        community: Boolean,
        etc: {
            enable: Boolean,
            detail: String
        }
    },
});
//create collection
module.exports.activitySchemas = activitySchema;