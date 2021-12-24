module.exports = function (sequelize, DataTypes) {
  var Rating = sequelize.define(
    "rating",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      rate: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      classMethods: {
        associate: function (models) {
          Rating.belongsTo(models.Device);
          Rating.belongsTo(models.User);
        },
      },
    }
  );
  return Rating;
};
