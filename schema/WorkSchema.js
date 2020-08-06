const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const workSchema = new schema({
    name: String,
    createDate: Date,
    modifiedDate: Date,
    user: {
        type: schema.Types.ObjectId,
        ref: 'users'
    },
    compay: {
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