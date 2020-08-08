const mongoose = require('mongoose');
const config = {
    autoIndex: true,
    useNewUrlParser: true,
};

const connectionString = 'mongodb://127.0.0.1:27017/';
mongoose.connect(connectionString, config).then(() => console.log('Connected to MongoDB')).catch(err => console.log('Cannot cennect to MongoDB', err));