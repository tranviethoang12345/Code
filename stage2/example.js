const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

app.use('/', usersRouter);

app.listen(3000, () => {
    console.log('Success!');
});