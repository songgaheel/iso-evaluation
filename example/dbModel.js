const mongoose = require('mongoose');
const schema = mongoose.Schema;
//database connection
const config = {
    autoIndex: true,
    useNewUrlParser: true,
};
const connectionString = 'mongodb://127.0.0.1:27017/';
mongoose.connect(connectionString, config)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Cannot cennect to MongoDB', err));

//document schema
const userSchema = new schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    department: {
        type: schema.Types.ObjectId,
        ref: 'departments'
    },
});
const activitySchema = new schema({
    name: String,
    type: String, // routine or non-routine
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
const areaSchema = new schema({
    name: String,
    type: String, // inside or outside
    department: {
        type: schema.Types.ObjectId,
        ref: 'departments'
    },
    activities: [{
        type: schema.Types.ObjectId,
        ref: 'activities'
    }]
});
const departmentSchema = new schema({
    name: String,
    compay: {
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
const companySchema = new schema({
    name: String,
    departments: [{
        type: schema.Types.ObjectId,
        ref: 'departments'
    }]
});
const workSchema = new schema({
    name: String,
    createdate: Date,
    modifieddate: Date,
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
const riskSchema = new schema({
    name: String,
    source: {
        evironment: {
            en: { type: Boolean, default: false },
            entype: [String], // Physical, Biological, Chemical and Ergonomic
        },
        equipment: Boolean,
        material: Boolean,
        unsafeac: {
            enable: Boolean,
            type: [String] // Security/Heath(SH) and Environment/Energy(EEn)
        },
        unsafecondition: {
            enable: Boolean,
            type: [String] // Security/Heath(SH) and Environment/Energy(EEn)
        },
        peoplesocial: {
            enable: Boolean,
            type: [String] // PysicalError, PsycologicalError, PhysicalStrain, PsycologicalStrain, Unknowledge and Nonmotivation
        }
    },
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
const evaluateworkSchema = new schema({
    work: {
        type: schema.Types.ObjectId,
        ref: 'works'
    },
    evaluatedate: Date,
    number: Number,
    type: {
        year: {
            enable: Boolean,
            text: Date,
        },
        change: {
            before: Boolean,
            continue: Boolean,
            after: Boolean
        },
        accident: Boolean
    },
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
const wiSchema = new schema({
    evaluatework: {
        type: schema.Types.ObjectId,
        ref: 'evaluateworks'
    },
    createdate: Date,
    number: Number,
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
        wi: {
            resource: {
                enable: Boolean,
                detail: String,
            },
            pollution: {
                enable: Boolean,
                detail: String,
            },
            safety: {
                enable: Boolean,
                detail: String,
            },
            health: {
                enable: Boolean,
                detail: String,
            },
        }
    }],
});
const improveSchema = new schema({
    risk: {
        type: schema.Types.ObjectId,
        ref: 'risks'
    },
    environment: {
        p1: {
            0: [String],
            2: [String]
        },
        p2: {
            0: [String],
            2: [String]
        },
        p3: {
            0: [String],
            2: [String]
        },
        p4: {
            0: [String],
            2: [String]
        },
        p5: {
            0: [String],
            2: [String]
        }
    },
    security: {
        p1: {
            0: [String],
            2: [String]
        },
        p2: {
            0: [String],
            2: [String]
        },
        p3: {
            0: [String],
            2: [String]
        },
        p4: {
            0: [String],
            2: [String]
        },
        p5: {
            0: [String],
            2: [String]
        }
    }
});
const improveworkSchema = new schema({
    evaluatework: {
        type: schema.Types.ObjectId,
        ref: 'evaluateworks'
    },
    createdate: Date,
    number: Number,
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
        improve: {
            type: schema.Types.ObjectId,
            ref: 'improves'
        }
    }],
});
//create collection
const User = mongoose.model('user', userSchema);
const Activity = mongoose.model('activity', activitySchema);
const Area = mongoose.model('area', areaSchema);
const Department = mongoose.model('department', departmentSchema);
const Company = mongoose.model('company', companySchema);
const Work = mongoose.model('work', workSchema);
const Risk = mongoose.model('risk', riskSchema);
const EvaluateWork = mongoose.model('evaluatework', evaluateworkSchema);
const WI = mongoose.model('wi', wiSchema);
const Improve = mongoose.model('improve', improveSchema);
const ImproveWork = mongoose.model('improvework', improveworkSchema);
console.log('Start Create Schema');
User.createCollection()
    .then(() => console.log('Create User Schema Complete'))
    .catch(err => console.log('Cannot Create User Schema', err));
Activity.createCollection()
    .then(() => console.log('Create Activity Schema Complete'))
    .catch(err => console.log('Cannot Create Activity Schema', err));
Area.createCollection()
    .then(() => console.log('Create Area Schema Complete'))
    .catch(err => console.log('Cannot Create Area Schema', err));
Department.createCollection()
    .then(() => console.log('Create Department Schema Complete'))
    .catch(err => console.log('Cannot Create Department Schema', err));
Company.createCollection()
    .then(() => console.log('Create Company Schema Complete'))
    .catch(err => console.log('Cannot Create Company Schema', err));
Work.createCollection()
    .then(() => console.log('Create Work Schema Complete'))
    .catch(err => console.log('Cannot Create Work Schema', err));
Risk.createCollection() // defult data
    .then(() => console.log('Create Risk Schema Complete'))
    .catch(err => console.log('Cannot Create Risk Schema', err));
EvaluateWork.createCollection()
    .then(() => console.log('Create EvaluateWork Schema Complete'))
    .catch(err => console.log('Cannot Create EvaluateWork Schema', err));
WI.createCollection()
    .then(() => console.log('Create WI Schema Complete'))
    .catch(err => console.log('Cannot Create WI Schema', err));
Improve.createCollection() // defult data
    .then(() => console.log('Create Improve Schema Complete'))
    .catch(err => console.log('Cannot Create Improve Schema', err));
ImproveWork.createCollection()
    .then(() => console.log('Create ImproveWork Schema Complete'))
    .catch(err => console.log('Cannot Create ImproveWork Schema', err));
//inititail data
async function initUser() {
    const admin = User({
        username: 'admin',
        password: '123456',
        name: 'admin',
        surname: 'admin',
    });
    const data = await admin.save();
    console.log(data);
}
initUser();