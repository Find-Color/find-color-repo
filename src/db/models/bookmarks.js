const knex = require("../knex");

class Bookmarks {
  constructor(bookmark_id,user_id, post_id) {
    this.bookmark_id = bookmark_id;
    this.user_id = user_id;
    this.post_id = post_id;
  }

  //create
  static async createBookmark(user_id, post_id) {
    try {
        const result = await knex.raw(
            `INSERT INTO bookmarks(user_id, post_id) VALUES (?, ?) RETURNING id`,
            [user_id, post_id]
          );
          const { id } = result.rows[0];
          return new Bookmark(id, user_id, post_id);
        } catch (err) {
          console.log(err);
          return null;
        }
    }
  

  //read
  static async getBookmarkCountForPosts() {
    try {
      const result = await knex.raw(`
        SELECT post_id, COUNT(*) AS bookmark_count
        FROM bookmarks
        GROUP BY post_id
      `);

      return result.rows;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

 

  //delete
  static async remove(user_id, post_id) {
    try {
      const result = await knex.raw(
        `DELETE FROM bookmarks WHERE user_id = ? AND post_id = ?`,
        [user_id, post_id]
      );
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = Bookmarks;
