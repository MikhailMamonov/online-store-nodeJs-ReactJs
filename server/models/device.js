module.exports = function (sequelize, DataTypes) {
  var Device = sequelize.define(
    "device",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      rating: { type: DataTypes.INTEGER, defaultValue: 0 },
      img: { type: DataTypes.STRING },
    },
    {
      classMethods: {
        associate: function (models) {
          Device.belongsTo(models.Brand);
          Device.belongsTo(models.Type);
          Device.hasOne(models.BasketDevice);
          Device.hasMany(models.DeviceInfo);
          Device.hasMany(models.Rating);
        },
      },
    }
  );
  return Device;
};
