'use strict';

const express = require('express');

const router = express.Router();

const pullipiCtrl = require('./pullipi.ctrl');

router.get('/:skillId', pullipiCtrl.findOneSkillById);
router.get('/:skillId/:tarotCardId', pullipiCtrl.findOneTarotCardById);

module.exports = router;
