const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const workSchema = new schema({
    name: String,
    createDate: Date,
    progress: String, // 1 2 3 4 and complete
    modifiedDate: Date,
    user: {
        type: schema.Types.ObjectId,
        ref: 'users'
    },
    company: {
        type: schema.Types.ObjectId,
        ref: 'companies'
    },
    department: {
        type: schema.Types.ObjectId,
        ref: 'departments'
    },
    areas: [{
        type: schema.Types.ObjectId,
        ref: 'areas'
    }],
    activities: [{
        type: schema.Types.ObjectId,
        ref: 'activities'
    }],
    evaluateworks: [{
        type: schema.Types.ObjectId,
        ref: 'evaluateworks'
    }]
});
module.exports.workSchema = workSchema;