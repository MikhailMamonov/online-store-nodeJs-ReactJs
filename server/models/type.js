module.exports = function (sequelize, DataTypes) {
  var Type = sequelize.define(
    "type",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
    },
    {
      classMethods: {
        associate: function (models) {
          Type.belongsToMany(models.Brand, { through: models.TypeBrand });
          Type.hasMany(models.Device);
        },
      },
    }
  );
  return Type;
};
