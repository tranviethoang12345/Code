const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<h1>The Middleware that handles just /user </h1>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<h1>The Middleware that handles just / </h1>');
});

app.listen(3000);