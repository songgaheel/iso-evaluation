const mongoose = require('mongoose');
const UserSchema = require('./schema/UserSchema'); // require default data

const User = mongoose.model('user', UserSchema.userSchema);
async function inituser() {
    const admin = User({
        username: 'admin',
        password: '123456',
        name: 'admin',
        surname: 'admin',
    });
    const data = await admin.save();
    console.log(data);
}
inituser();