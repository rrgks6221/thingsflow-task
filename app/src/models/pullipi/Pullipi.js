'use strict';

const pool = require('../../../config/db');

const PullipiStorage = require('./PullipiStorage');
const Error = require('../../util/Error');

const makeResponse = require('../../util/makeResponse');

class Pullipi {
  constructor(req) {
    this.params = req.params;
  }

  async findOneSkillById() {
    let conn;

    try {
      conn = await pool.getConnection();

      const greetings = await PullipiStorage.findOneSkillById(
        conn,
        this.params.skillId
      );

      if (!greetings) {
        return makeResponse(404, '해당 스킬은 존재하지 않습니다.');
      }

      const tarotCards = await PullipiStorage.findTarotCardList(conn);

      return makeResponse(200, '타로카드 조회', { greetings, tarotCards });
    } catch (err) {
      return Error.ctrl(err);
    } finally {
      conn?.release();
    }
  }
}

module.exports = Pullipi;
