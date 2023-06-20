const knex = require("../knex");

class Upvote {
  constructor(user_id, post_id) {
    this.user_id = user_id;
    this.post_id = post_id;
  }

  //create
  static async add(user_id, post_id) {
    try {
      const {
        rows: { result },
      } = await knex.raw(`INSERT INTO upvotes(user_id, post_id) VALUES(?, ?)`, [
        user_id,
        post_id,
      ]);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  //read
  static async find(user_id, post_id) {
    try {
      const {
        rows: [exists],
      } = await knex.raw(
        `SELECT * FROM upvotes WHERE user_id = ? AND post_id = ?`,
        [user_id, post_id]
      );
      return exists;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async listFromPost(post_id) {
    try {
      const { rows } = await knex.raw(
        `SELECT * FROM upvotes WHERE post_id = ?`,
        [post_id]
      );
      return rows;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  static async listFromUser(user_id) {
    try {
      const { rows } = await knex.raw(
        `SELECT * FROM upvotes WHERE user_id = ?`,
        [user_id]
      );
      return rows;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  //delete
  static async remove(user_id, post_id) {
    try {
      const result = await knex.raw(
        `DELETE FROM upvotes WHERE user_id = ? AND post_id = ?`,
        [user_id, post_id]
      );
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async removeAllFromPost(post_id) {
    try {
      const result = await knex.raw(`DELETE FROM upvotes WHERE post_id = ?`, [
        post_id,
      ]);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async removeAllFromUser(user_id) {
    try {
      const result = await knex.raw(`DELETE FROM upvotes WHERE user_id = ?`, [
        user_id,
      ]);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = Upvote;
