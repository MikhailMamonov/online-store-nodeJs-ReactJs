const ApiError = require("../error/ApiError");
const models = require("../models");

class BrandController {
  async create(req, res, next) {
    try {
      debugger;
      const { name } = req.body;
      const brand = await models.brand.create({ name });
      return res.json(brand);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }

  async getAll(req, res) {
    const brands = await models.brand.findAll();
    return res.status(200).json(brands);
  }
}

module.exports = new BrandController();
