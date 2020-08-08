const bcrypt = require('bcrypt');

const resultHash = bcrypt.hash('qazwsxedc', 10);
resultHash
    .then(hash => {
        console.log(hash);
    }).catch(err => {
        console.log(err);
    });