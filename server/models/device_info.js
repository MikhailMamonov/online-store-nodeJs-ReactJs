module.exports = function (sequelize, DataTypes) {
  var DeviceInfo = sequelize.define(
    "device_info",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
    },
    {
      classMethods: {
        associate: function (models) {
          DeviceInfo.belongsTo(models.Device);
        },
      },
    }
  );
  return DeviceInfo;
};
