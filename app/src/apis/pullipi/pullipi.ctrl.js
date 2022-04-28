'use strict';

const Pullipi = require('../../models/pullipi/Pullipi');

const processCtrl = require('../../util/process.ctrl');

const process = {
  findOneSkillById: async (req, res) => {
    const pullipi = new Pullipi(req);

    const response = await pullipi.findOneSkillById();

    return processCtrl(res, response);
  },
};

module.exports = process;
