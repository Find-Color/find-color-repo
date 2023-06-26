const knex = require("../knex");

class Bookmark {
  constructor(bookmark_id, user_id, post_id) {
    this.bookmark_id = bookmark_id;
    this.user_id = user_id;
    this.post_id = post_id;
  }

  // Create bookmark
  static async createBookmark(user_id, post_id) {
    try {
      const result = await knex.raw(
        `INSERT INTO bookmarks(user_id, post_id) VALUES (?, ?) RETURNING bookmark_id`,
        [user_id, post_id]
      );
      const { bookmark_id } = result.rows[0];
      return new Bookmark(bookmark_id, user_id, post_id);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // Get bookmark count for each post
  static async getBookmarkCountForPosts() {
    try {
      const result = await knex.raw(`
        SELECT post_id, COUNT(*) AS bookmark_count
        FROM bookmarks
        GROUP BY post_id
      `);

      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // Get all bookmarks from a user
  static async getAllBookmarksFromUser(user_id) {
    try {
      const result = await knex.raw("SELECT * FROM bookmarks WHERE user_id = ?", [user_id]);
      const bookmarks = result.rows.map((bookmark) => new Bookmark(bookmark.bookmark_id, bookmark.user_id, bookmark.post_id));
      return bookmarks;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // Get bookmarks from a post
  static async getBookmarksFromPost(post_id) {
    try {
      const result = await knex.raw("SELECT * FROM bookmarks WHERE post_id = ?", [post_id]);
      const bookmarks = result.rows.map((bookmark) => new Bookmark(bookmark.bookmark_id, bookmark.user_id, bookmark.post_id));
      return bookmarks;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // Delete bookmark
  static async remove(user_id, post_id) {
    try {
      const result = await knex.raw(
        `DELETE FROM bookmarks WHERE user_id = ? AND post_id = ?`,
        [user_id, post_id]
      );
      return result;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // Find users by post ID
  static async findUsersByPostId(post_id) {
    try {
      const result = await knex.raw(
        `SELECT user_id FROM bookmarks WHERE post_id = ?`,
        [post_id]
      );
      const userIds = result.rows.map((row) => row.user_id);
      return userIds;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}

module.exports = Bookmark;
