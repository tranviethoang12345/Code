const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stage2vmo', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connect!');
});

const usersSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: String,
    preName: {type: String, unique: true},
    firstName: {type: String, unique: true},
    lastName: {type: String, unique: true},
    role: {type: String, unique: true},
    createdAt: {type: Date, default: Date.now()},
    updateAt: {type: Date, default: Date.now()}
});

const users = mongoose.model('Users', usersSchema);

module.exports = users;