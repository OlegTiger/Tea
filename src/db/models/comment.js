const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Tea }) {
      // define association here
      this.hasMany(User, { foreignKey: 'user_id' });
      this.hasMany(Tea, { foreignKey: 'tea_id' });
    }
  }
  Comment.init({
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    tea_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
