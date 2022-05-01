'use strict';

class PullipiStorage {
  static async findOneSkillById(conn, id) {
    try {
      const query = `
        SELECT greetings FROM skills WHERE id = ?;`;

      const greetings = await conn.query(query, id);

      return greetings[0][0] && greetings[0][0].greetings;
    } catch (err) {
      throw err;
    }
  }

  static async findTarotCardList(conn) {
    try {
      const query = `
        SELECT id FROM tarot_cards order by rand() limit 5;`;

      const tarotCards = await conn.query(query);

      return tarotCards[0].map((card) => card.id);
    } catch (err) {
      throw err;
    }
  }

  static async findOneTarotCardById(conn, tarotCardId) {
    try {
      const query = `
        SELECT
        name, description, iage_file_name AS imageFileName
        FROM tarot_cards
        WHERE id = ?;`;

      const tarotCards = await conn.query(query, tarotCardId);

      return tarotCards[0][0];
    } catch (err) {
      throw err;
    }
  }
}

module.exports = PullipiStorage;
