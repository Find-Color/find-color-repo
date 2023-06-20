const knex = require("../knex");

class Post {
  constructor(
    post_id,
    user_id,
    name,
    location,
    status,
    date_reported,
    hair,
    height,
    eye_color,
    weight,
    race,
    ethnicity,
    gender,
    age,
    image,
    description_text,
    contact_info
  ) {
    this.post_id = post_id;
    this.user_id = user_id;
    this.name = name;
    this.location = location;
    this.status = status;
    this.date_reported = date_reported;
    this.hair = hair;
    this.height = height;
    this.eye_color = eye_color;
    this.weight = weight;
    this.race = race;
    this.ethnicity = ethnicity;
    this.gender = gender;
    this.age = age;
    this.image = image;
    this.description_text = description_text;
    this.contact_info = contact_info;
  }

  //CREATE
  static async create(
    user_id,
    name,
    location,
    status,
    date_reported,
    hair,
    height,
    eye_color,
    weight,
    ethnicity,
    gender,
    age,
    image,
    description_text,
    contact_info
  ) {
    try {
      const postInsert = await knex.raw(
        `
        INSERT INTO posts(name, location, status, date_reported, hair, height, eye_color, weight, ethnicity, gender, age, image, description_text, contact_info, user_id)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        RETURNING *;
      `,
        [
          name,
          location,
          status,
          date_reported,
          hair,
          height,
          eye_color,
          weight,
          ethnicity,
          gender,
          age,
          image,
          description_text,
          contact_info,
          user_id,
        ]
      );
      const newPost = postInsert.rows[0];
      return newPost;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  //READ
  static async find(post_id) {
    try {
      const post = await knex.raw(
        `
          SELECT *, users.username
          FROM posts
          JOIN users ON posts.user_id = users.id
          WHERE post_id = ?;
        `,
        [post_id]
      );
      return post.rows[0];
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async listAll() {
    try {
      const { rows } = await knex.raw(
        `
          SELECT *, users.username
          FROM posts
          JOIN users ON posts.user_id = users.id;
      `
      );
      return rows;
      // return rows.map(post => new Post(post));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async listFromUser(user_id) {
    try {
      const { rows } = await knex.raw(
        `
          SELECT *, users.username
          FROM posts
          JOIN users ON posts.user_id = users.id
          WHERE users.id = ?;
      `,
        [user_id]
      );
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  //UPDATE
  static async update(post_id, newEntries) {
    try {
      const postUpdate = await knex.raw(
        `
          UPDATE posts
          SET name = ?, 
            location = ?, 
            status = ?, 
            date_reported = ?, 
            hair = ?, 
            height = ?, 
            eye_color = ?, 
            weight = ?, 
            ethnicity = ?, 
            gender = ?, 
            age = ?, 
            image = ?, 
            description_text = ?, 
            contact_info = ? 
          WHERE post_id = ?
          RETURNING *;
      `,
        [
          newEntries.name,
          newEntries.location,
          newEntries.status,
          newEntries.date_reported,
          newEntries.hair,
          newEntries.height,
          newEntries.eye_color,
          newEntries.weight,
          newEntries.ethnicity,
          newEntries.gender,
          newEntries.age,
          newEntries.image,
          newEntries.description_text,
          newEntries.contact_info,
          post_id,
        ]
      );
      const updatedPost = postUpdate.rows[0];
      return updatedPost;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  //DELETE
  static async deletePost(post_id) {
    try {
      await knex.raw(
        `
      DELETE
      FROM upvotes
      WHERE post_id = ?;
      `,
        [post_id]
      );
      await knex.raw(
        `
      DELETE
      FROM comments
      WHERE post_id = ?;
      `,
        [post_id]
      );
      const result = await knex.raw(
        `
          DELETE FROM posts 
          WHERE post_id = ?
          RETURNING *;
        `,
        [post_id]
      );
      return result.rowCount;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = Post;
