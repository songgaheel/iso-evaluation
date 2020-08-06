const mongoose = require('mongoose');
//database connection
const config = {
    autoIndex: true,
    useNewUrlParser: true,
};
const connectionString = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(connectionString, config)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Cannot cennect to MongoDB', err));

module.exports.mongoose = mongoose;