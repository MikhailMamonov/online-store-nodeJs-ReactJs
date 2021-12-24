module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define(
    "user",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING },
      role: { type: DataTypes.STRING, defaultValue: "USER" },
    },
    {
      classMethods: {
        associate: function (models) {
          User.hasOne(models.Basket);
          User.hasOne(model.Rating);
        },
      },
    }
  );
  return User;
};
