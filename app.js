const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginController = require('./controller/login-controller');
const createRouter = require('./route/createRouter');
const homeRouter = require('./route/homeRouter');
const updateRouter = require('./route/updateRouter');
const workRouter = require('./route/workRouter');

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

//login
app.post('/login', loginController.login);
app.use('/create', createRouter);
app.use('/home', homeRouter);
app.use('/update', updateRouter);
app.use('/work', workRouter);

const port = process.env.port || 5000;
app.listen(port, function() {
    console.log('Listenning on port: ', port);
});