const { Type } = require("../models/models");

class TypeController {
  async create(req, res, next) {
    try {
      debugger;
      const { name } = req.body;
      const type = await Type.create({ name });
      return res.json(type);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.status(200).json(types);
  }
}

module.exports = new TypeController();
