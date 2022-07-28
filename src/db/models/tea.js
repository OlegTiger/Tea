const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment }) {
      // define association here
      this.hasMany(Comment, { foreignKey: 'tea_id' });
    }
  }
  Tea.init({
    tea_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    place: DataTypes.STRING,
    img: DataTypes.TEXT,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tea',
  });
  return Tea;
};
