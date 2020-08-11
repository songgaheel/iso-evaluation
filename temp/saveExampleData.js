const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const UserSchema = require('../schema/UserSchema'); // require default data
const ActivitySchema = require('../schema/ActivitySchema'); // require default data
const AreaSchema = require('../schema/AreaSchema'); // require default data
const DepartmentSchema = require('../schema/DepartmentSchema'); // require default data
const CompanySchema = require('../schema/CompanySchema'); // require default data

const userData = require('../src/example/user.json');
const activityData = require('../src/example/activity.json');
const areaData = require('../src/example/area.json');
const departmentData = require('../src/example/department.json');
const companyData = require('../src/example/company.json');

const User = mongoose.model('users', UserSchema.userSchema);
const Activity = mongoose.model('activities', ActivitySchema.activitySchemas);
const Area = mongoose.model('areas', AreaSchema.areaSchema);
const Department = mongoose.model('departments', DepartmentSchema.departmentSchema);
const Company = mongoose.model('companies', CompanySchema.companySchema);

function saveExampleData() {
    for (let index = 0; index < userData.length; index++) {
        const element = User(userData[index]);
        element.save()
            .then(data => { console.log(data); })
            .catch(err => { console.log(err); });
    }

    for (let index = 0; index < activityData.length; index++) {
        const element = Activity(activityData[index]);
        element.save()
            .then(data => { console.log(data); })
            .catch(err => { console.log(err); });
    }

    for (let index = 0; index < areaData.length; index++) {
        const element = Area(areaData[index]);
        element.save()
            .then(data => { console.log(data); })
            .catch(err => { console.log(err); });
    }

    for (let index = 0; index < departmentData.length; index++) {
        const element = Department(departmentData[index]);
        element.save()
            .then(data => { console.log(data); })
            .catch(err => { console.log(err); });
    }

    for (let index = 0; index < companyData.length; index++) {
        const element = Company(companyData[index]);
        element.save()
            .then(data => { console.log(data); })
            .catch(err => { console.log(err); });
    }
}
saveExampleData();