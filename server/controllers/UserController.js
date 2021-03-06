const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const models = require("../models");

const generateJwtToken = (id, email, role) => {
  return jwt.sign({ id: id, email, role }, "SOME_SECRET_KEY", {
    expiresIn: "24h",
  });
};

class UserController {
  async login(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      next(ApiError.badRequest("email or password incorrect"));
    }

    const user = await models.user.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.badRequest("user not found"));
    }
    const comparePassword = bcrypt.compareSync(password, user.password); // true
    if (!comparePassword) {
      return next(ApiError.badRequest("password invalid"));
    }

    const token = generateJwtToken(user.id, user.email, user.role);
    return res.json({ token });
  }

  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("email or password incorrect"));
    }

    const candidate = await models.user.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("user already exists"));
    }

    const hash = await bcrypt.hash(password, 5);
    const user = await models.user.create({ email, role, password: hash });
    const basket = await models.basket.create({ userId: user.id });
    const token = generateJwtToken(user.id, user.email, user.role);

    return res.json({ token });
  }

  async check(req, res, next) {
    console.log("check");
    const token = generateJwtToken(req.user.email, req.password, req.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
