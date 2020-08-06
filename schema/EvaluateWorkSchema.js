const connectDB = require('../connectDB');
const schema = connectDB.mongoose.Schema;
const evaluateworkSchema = new schema({
    work: {
        type: schema.Types.ObjectId,
        ref: 'works'
    },
    evaluateDate: Date,
    evaluateNumber: Number,
    evaluateType: [{
            type: String,
            defalt: 'Year',
            text: Date,
        },
        { type: String, defalt: 'Before Changing' },
        { type: String, defalt: 'Continue' },
        { type: String, defalt: 'After Changing' },
        { type: String, defalt: "Accident" },
    ],
    matchrisk: [{
        orders: Number,
        areas: {
            type: schema.Types.ObjectId,
            ref: 'areas'
        },
        activities: {
            type: schema.Types.ObjectId,
            ref: 'activities'
        },
        risks: {
            type: schema.Types.ObjectId,
            ref: 'risks'
        },
        evaluate: {
            p1: Number,
            p2: Number,
            p3: Number,
            p4: Number,
            p5: Number,
            p: Number,
            r1: Number,
            r2: Number,
            r: Number,
            pr: Number,
            level: String, //N, L, M, H and D
        }
    }],
    wi: [{
        type: schema.Types.ObjectId,
        ref: 'wis'
    }]
});
module.exports.evaluateworkSchema = evaluateworkSchema;