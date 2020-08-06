const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const UserSchema = require('./schema/UserSchema');
const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

//login
app.post('/login', function(req, res) {
    const users = {
        username: req.body.username,
        password: req.body.password
    };
    const User = mongoose.model('user', UserSchema.userSchema);
    async function login(logindata) {
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
    login(users.username);

});

const port = process.env.port || 5000;
app.listen(port, function() {
    console.log('Listen on port', port);
});