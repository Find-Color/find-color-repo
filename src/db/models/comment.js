const knex = require("../knex");

class Comment {
  constructor({ comment_id, post_id, user_id, comment_text }) {
    this.comment_id = comment_id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.comment_text = comment_text;
  }

  static async create(post_id, user_id, comment_text) {
    const result = await knex.raw(
      'INSERT INTO comments (post_id, user_id, comment_text) VALUES (?, ?, ?) RETURNING *',
      [post_id, user_id, comment_text]
    );

    return comment;
  }

  static async find(comment_id) {
    try {
      const result = await knex.raw(
        "SELECT * FROM comments WHERE comment_id = ?",
        [comment_id]
      );
      const {
        rows: [comment],
      } = result;
      return new Comment(comment);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async listFromPost(post_id) {
    try {
      const result = await knex.raw(
        "SELECT * FROM comments WHERE post_id = ?",
        [post_id]
      );
      const comments = result.rows.map(comment => new Comment(comment));
      return comments;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async listFromUser(user_id) {
    const result = await knex.raw("SELECT * FROM comments WHERE user_id = ?", [
      user_id,
    ]);
    const comments = result.rows.map(comment => new Comment(comment));
    return comments;
  }

  async update(new_text) {
    this.comment_text = new_text;
    const comment = await knex.raw(
      "UPDATE comments SET comment_text = ? WHERE comment_id = ?",
      [new_text, this.comment_id]
    );
    return this;
  }

  static async deleteAllFromPost(post_id) {
    try {
      const result = await knex.raw("DELETE FROM comments WHERE post_id = ?", [
        post_id,
      ]);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async deleteAllFromUser(user_id) {
    try {
      const result = await knex.raw("DELETE FROM comments WHERE user_id = ?", [
        user_id,
      ]);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = Comment;
