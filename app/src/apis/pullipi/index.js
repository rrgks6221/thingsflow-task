'use strict';

const exxpress = require('express');

const router = exxpress.Router();

const pullipiCtrl = require('./pullipi.ctrl');

router.get('/:skillId', pullipiCtrl.findOneSkillById);

module.exports = router;
