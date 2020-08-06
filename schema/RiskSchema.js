const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const riskSchema = new schema({
    name: String,
    defaultData: Boolean,
    sources: [
        { source: 'Environment/Physical' },
        { source: 'Environment/Biological' },
        { source: 'Environment/Chemical' },
        { source: 'Environment/Ergonomic' },
        { source: 'Equipment' },
        { source: 'Material' },
        { source: 'Unsafe Activity Security/Heath' },
        { source: 'Unsafe Activity Environment/Energy' },
        { source: 'Unsafe Condition Security/Heath' },
        { source: 'Unsafe Condition Environment/Energy' },
        { source: 'People and Social / Pysical Error' },
        { source: 'People and Social / Psycological Error' },
        { source: 'People and Social / Pysical Strain' },
        { source: 'People and Social / Psycological Strain' },
        { source: 'People and Social / Lack of knowledge' },
        { source: 'People and Social / Non-motivation' },
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