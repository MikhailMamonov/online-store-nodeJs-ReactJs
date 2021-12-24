const models = require("../models");

class TypeController {
  async create(req, res, next) {
    try {
      debugger;
      const { name } = req.body;
      const type = await models.type.create({ name });
      return res.json(type);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }

  async getAll(req, res) {
    const types = await models.type.findAll();
    return res.status(200).json(types);
  }
}

module.exports = new TypeController();
