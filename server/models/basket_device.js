module.exports = function (sequelize, DataTypes) {
  var BasketDevice = sequelize.define(
    "basket_device",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    },
    {
      classMethods: {
        associate: function (models) {
          BasketDevice.belongsTo(models.Basket);
          BasketDevice.belongsTo(models.Device);
        },
      },
    }
  );
  return BasketDevice;
};
