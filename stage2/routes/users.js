const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const modelDB = require('../modelDB');

var copyToken;

router.get('/users', (req, res, next) => {
    let verify = jwt.verify(copyToken, 'Max')
    
    modelDB.findOne({_id: verify.id}).then(data => {
        console.log(data);
        if(data.role == 'Admin'){
            next()
        } else {
            res.send('Error')
        }
    })
}, async(req, res) => {
    try {
        let getAll = await modelDB.find();
        let arr = [];
        getAll.map(data => {
            let username = data.username;
            let fullName = data.firstName + ' ' + data.preName + ' ' + data.lastName;
            let role = data.role;
            arr.push({username: username, fullName: fullName, role: role})
        }) 
        res.json(arr)
    } catch (error) {
        console.log(error);
    }
});

router.post('/users', (req, res) => {
    let body = req.body;
    modelDB.create(body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    });
});

router.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    modelDB.deleteOne({_id: id})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
});

router.put('/users/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let update = await modelDB.findOneAndUpdate({_id: id}, body, {new: true});
        res.json(update);
    } catch (error) {
        console.log(error);
    }
});

router.get('/users/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let getOne = await modelDB.findOne({_id: id});
        if(getOne){
            copyToken = jwt.sign({id: getOne._id}, 'Max', {expiresIn:'1h'});
            res.json({data: getOne, token: copyToken});
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/login', (req, res) => {
    let username = req.query.username;
    let password = req.query.password;

    modelDB.findOne({username: username, password: password})
    .then(data => {
        res.json(data);
    })
    .catch ((err) => {
        console.log(err);
    });
});

module.exports = router;