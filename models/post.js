// Model file for post structure

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const currentDate = new Date();
const formattedDate = `${new Date(currentDate).getDate()}/${
  new Date(currentDate).getMonth() + 1
}/${new Date(currentDate).getFullYear()}`;

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    creationDate: {
      type: DataTypes.STRING,
      defaultValue: formattedDate,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
