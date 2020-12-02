const express = require('express');

//app là web server
const app = express();

//router
app.get('/', (req, res) => {
    res.send("Hello World!!");
    res.sendFile(__dirname + "/package.json")
});

app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server start success!")
    }
})