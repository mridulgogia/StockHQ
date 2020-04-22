const express = require('express');
const userCtrl = require('../controllers/user');

const router = express.Router();

router.get('/test', (req, res) => res.json({work: "working"}))
router.post('/signup', userCtrl.signup);
// router.post('/login', userCtrl.login);

module.exports = router;