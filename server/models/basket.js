module.exports = function (sequelize, DataTypes) {
  var Basket = sequelize.define(
    "basket",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    },
    {
      classMethods: {
        associate: function (models) {
          Basket.belongsTo(models.User);
          Basket.hasMany(models.BasketDevice);
        },
      },
    }
  );
  return Basket;
};
