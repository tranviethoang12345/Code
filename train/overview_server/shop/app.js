const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { join } = require('path');

app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not Found</h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);