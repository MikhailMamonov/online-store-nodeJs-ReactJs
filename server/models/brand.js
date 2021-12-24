module.exports = function (sequelize, DataTypes) {
  var Brand = sequelize.define(
    "brand",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
    },
    {
      classMethods: {
        associate: function (models) {
          Brand.belongsToMany(models.Type, { through: models.TypeBrand });
          Brand.hasMany(models.Device);
        },
      },
    }
  );
  return Brand;
};
