const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const secretKey = process.env.secretKey;

const passsport = require('passport');

 exports.signup = (req, res) => {
    console.log('here')
    res.json({work: "working"});
 }