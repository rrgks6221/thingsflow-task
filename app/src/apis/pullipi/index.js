'use strict';

const express = require('express');

const router = express.Router();

const pullipiCtrl = require('./pullipi.ctrl');

router.get('/:skillId', pullipiCtrl.findOneSkillById);

module.exports = router;
