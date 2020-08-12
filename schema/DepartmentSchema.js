const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const departmentSchema = new schema({
    name: String,
    company: {
        type: schema.Types.ObjectId,
        ref: 'compamies'
    },
    users: [{
        type: schema.Types.ObjectId,
        ref: 'users'
    }],
    areas: [{
        type: schema.Types.ObjectId,
        ref: 'areas'
    }]
});
module.exports.departmentSchema = departmentSchema;