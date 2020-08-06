const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const riskSchema = new schema({
    name: String,
    defaultData: Boolean,
    sources: [
        { type: String, defalt: 'Environment/Physical' },
        { type: String, defalt: 'Environment/Biological' },
        { type: String, defalt: 'Environment/Chemical' },
        { type: String, defalt: 'Environment/Ergonomic' },
        { type: String, defalt: 'Equipment' },
        { type: String, defalt: 'Material' },
        { type: String, defalt: 'Unsafe Activity Security/Heath' },
        { type: String, defalt: 'Unsafe Activity Environment/Energy' },
        { type: String, defalt: 'Unsafe Condition Security/Heath' },
        { type: String, defalt: 'Unsafe Condition Environment/Energy' },
        { type: String, defalt: 'People and Social / Pysical Error' },
        { type: String, defalt: 'People and Social / Psycological Error' },
        { type: String, defalt: 'People and Social / Pysical Strain' },
        { type: String, defalt: 'People and Social / Psycological Strain' },
        { type: String, defalt: 'People and Social / Lack of knowledge' },
        { type: String, defalt: 'People and Social / Non-motivation' },
    ],
    environment: {
        resource: Boolean,
        pollution: Boolean,
        aspect: String,
        impact: String,
        status: {
            normal: Boolean,
            abnormal: Boolean,
            emergency: Boolean,
            law: Boolean
        },
    },
    security: {
        safety: Boolean,
        health: Boolean,
        risk: String,
        harzard: String,
        status: {
            normal: Boolean,
            abnormal: Boolean,
            emergency: Boolean,
            law: Boolean
        },
    }
});
module.exports.riskSchema = riskSchema;