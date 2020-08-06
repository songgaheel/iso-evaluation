const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = require('../schema/UserSchema');

const login = (req, res) => {
    const users = {
        username: req.body.username,
        password: req.body.password
    };
    const User = mongoose.model('user', UserSchema.userSchema);
    async function autentication(logindata) {
        const userdata = await User.find({ username: logindata });
        if (userdata.length == 1) {
            console.log(userdata[0].password);
            console.log(users.password);
            const resultHash = bcrypt.compare(users.password, userdata[0].password);
            resultHash.then(result => {
                console.log(result);
                if (result) {
                    res.send(result);

                } else {
                    res.send(result);
                }
            }).catch(err => {
                res.send(err);
            })
        } else {
            console.log('Error This user name have 2 accounts in database');
        }
    }
    autentication(users.username);
};
module.exports.login = login;