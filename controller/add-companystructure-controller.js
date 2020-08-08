const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = require('../schema/UserSchema'); // require default data
const ActivitySchema = require('../schema/ActivitySchema'); // require default data
const AreaSchema = require('../schema/AreaSchema'); // require default data
const DepartmentSchema = require('../schema/DepartmentSchema'); // require default data
const CompanySchema = require('../schema/CompanySchema'); // require default data

const User = mongoose.model('users', UserSchema.userSchema);
const Activity = mongoose.model('activities', ActivitySchema.activitySchemas);
const Area = mongoose.model('areas', AreaSchema.areaSchema);
const Department = mongoose.model('departments', DepartmentSchema.departmentSchema);
const Company = mongoose.model('companies', CompanySchema.companySchema);

async function addUser(req, res) {

    const admin = {
        username: req.body.adminusername,
        password: req.body.adminpassword,
    };

    const userdata = await User.find({ username: admin.username });
    const resultHash = await bcrypt.compare(admin.password, userdata[0].password);

    if (userdata && resultHash) {
        console.log('start');
        const user = {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            surname: req.body.surname,
            department: req.body.department
        };
        const passwordHash = await bcrypt.hash(user.password, 10);
        user.password = passwordHash;
        const newUser = User(user);
        await newUser.save();
        console.log(newUser);
        const department = await Department.updateOne({ _id: newUser.department }, {
            $push: { users: newUser._id }
        });
        const ret = {
            newUser,
            department
        };
        res.send(ret);
    } else {
        console.log('Error This user name have 2 accounts in database');
    }
}


module.exports.addUser = addUser;