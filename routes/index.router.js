const express = require('express');
const router = express.Router();
 
const ctrlUser = require('../controllers/user.controller');
const ctrlData = require('../controllers/data.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/navbar');
router.post('/docu',ctrlData.docu);
router.get('/getdata',ctrlData.getData);
router.get('/get/:data',ctrlData.get);

module.exports = router;