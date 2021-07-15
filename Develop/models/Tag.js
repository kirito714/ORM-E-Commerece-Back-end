const { Model, DataTypes, STRING } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    //id
    id: {
      // integer
      type: DataType.INTEGER,
      //Not null
      allowNull: false,
      // Primary key
      primary: true,
      // auto INCREMENT
      autoIncrement: true,
    },
    //tag_name
    tag_name: {
      //string
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
