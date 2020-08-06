const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = require('./schema/UserSchema'); // require default data

const User = mongoose.model('user', UserSchema.userSchema);

function inituser() {
    const admin = User({
        username: 'admin',
        password: '123456',
        name: 'admin',
        surname: 'admin',
    });
    const resultHash = bcrypt.hash(admin.password, 10);
    resultHash
        .then(async function(hash) {
            admin.password = hash;
            console.log(admin.password);
            const data = await admin.save();
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
}
inituser();