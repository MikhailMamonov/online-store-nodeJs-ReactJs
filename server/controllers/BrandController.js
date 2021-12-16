const ApiError = require("../error/ApiError");
const { Brand } = require("../models/models");

class BrandController {
  async create(req, res, next) {
    try {
      debugger;
      const { name } = req.body;
      const brand = await Brand.create({ name });
      return res.json(brand);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.status(200).json(brands);
  }
}

module.exports = new BrandController();
