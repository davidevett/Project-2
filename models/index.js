// Index model file to handle the relational logic between the user, post and comment models

const User = require("./User");
const Post = require("./post");
const Comment = require("./comment");

// A user can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Post belongs to the user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Comments belong to the user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// A user can have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Comments also belong to the post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// Posts can have many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
