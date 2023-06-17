const knex = require('../knex');

class Comment {
  constructor(comment_id, post_id, user_id, comment_text) {
    this.commentId = comment_id;
    this.postId = post_id;
    this.userId = user_id;
    this.commentText = comment_text;
  }

  static async create(post_id, user_id, comment_text) {
    const commentId = generateUniqueId();
    const comment = new Comment(commentId, post_id, user_id, comment_text);

    await knex.raw(
      'INSERT INTO comments (comment_id, post_id, user_id, comment_text) VALUES (?, ?, ?, ?)',
      [commentId, post_id, user_id, comment_text]
    );

    return comment;
  }

  static async find(comment_id) {
    const result = await knex.raw('SELECT * FROM comments WHERE comment_id = ?', [comment_id]);
    const comment = result.rows[0];

    if (comment) {
      return new Comment(comment.comment_id, comment.post_id, comment.user_id, comment.comment_text);
    } else {
      throw new Error('Comment not found');
    }
  }

  static async listFromPost(post_id) {
    const result = await knex.raw('SELECT * FROM comments WHERE post_id = ?', [post_id]);
    const comments = result.rows.map(
      (comment) => new Comment(comment.comment_id, comment.post_id, comment.user_id, comment.comment_text)
    );

    return comments;
  }

  static async listFromUser(user_id) {
    const result = await knex.raw('SELECT * FROM comments WHERE user_id = ?', [user_id]);
    const comments = result.rows.map(
      (comment) => new Comment(comment.comment_id, comment.post_id, comment.user_id, comment.comment_text)
    );

    return comments;
  }

  async update(newText) {
    this.commentText = newText;

    await knex.raw('UPDATE comments SET comment_text = ? WHERE comment_id = ?', [newText, this.commentId]);

    return this;
  }

  static async deleteAllFromPost(post_id) {
    await knex.raw('DELETE FROM comments WHERE post_id = ?', [post_id]);
  }

  static async deleteAllFromUser(user_id) {
    await knex.raw('DELETE FROM comments WHERE user_id = ?', [user_id]);
  }
}



module.exports = Comment;
