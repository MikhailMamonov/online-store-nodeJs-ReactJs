module.exports = function (sequelize, DataTypes) {
  var TypeBrand = sequelize.define("type_brand", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  });
  return TypeBrand;
};
