const mongoose = require('mongoose');
const UserSchema = require('./schema/UserSchema');
const ActivitySchema = require('./schema/ActivitySchema');
const AreaSchema = require('./schema/AreaSchema');
const DepartmentSchema = require('./schema/DepartmentSchema');
const CompanySchema = require('./schema/CompanySchema');
const RiskSchema = require('./schema/RiskSchema'); // require default data
const ImproveSchema = require('./schema/ImproveSchema'); // require default data
const WorkSchema = require('./schema/WorkSchema');
const EvaluateWorkSchema = require('./schema/EvaluateWorkSchema');
const WISchema = require('./schema/WISchema');
const ImproveWorkSchema = require('./schema/ImproveWorkSchema');

const User = mongoose.model('user', UserSchema.userSchema);
const Activity = mongoose.model('activity', ActivitySchema.activitySchema);
const Area = mongoose.model('area', AreaSchema.areaSchema);
const Department = mongoose.model('department', DepartmentSchema.departmentSchema);
const Company = mongoose.model('company', CompanySchema.companySchema);
const Work = mongoose.model('work', WorkSchema.workSchema);
const Risk = mongoose.model('risk', RiskSchema.riskSchema);
const EvaluateWork = mongoose.model('evaluatework', EvaluateWorkSchema.evaluateworkSchema);
const WI = mongoose.model('wi', WISchema.wiSchema);
const Improve = mongoose.model('improve', ImproveSchema.improveSchema);
const ImproveWork = mongoose.model('improvework', ImproveWorkSchema.improveworkSchema);
console.log('Start Create Collections');
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