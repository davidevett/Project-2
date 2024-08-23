// Model file for comment structure

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const currentDate = new Date();
const formattedDate = `${new Date(currentDate).getDate()}/${
  new Date(currentDate).getMonth() + 1
}/${new Date(currentDate).getFullYear()}`;

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    commentContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    commentDate: {
      type: DataTypes.STRING,
      defaultValue: formattedDate,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;


