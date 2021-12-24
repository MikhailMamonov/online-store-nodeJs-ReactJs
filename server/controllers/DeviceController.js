const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const models = require("../models");
const { title } = require("process");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await models.device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          models.deviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 20;
    let offset = limit * page - limit;

    let devices;
    if (!brandId && !typeId) {
      devices = await models.device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await models.device.findAndCountAll({
        where: {
          brandId,
        },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await models.device.findAndCountAll({
        where: {
          typeId,
        },
        limit,
        offset,
      });
    }

    if (brandId && typeId) {
      devices = await models.device.findAndCountAll({
        where: {
          brandId,
          typeId,
        },
        limit,
        offset,
      });
    }

    console.log(devices);
    return res.json(devices);
  }

  async getOne(req, res, next) {
    const { id } = req.params;

    if (!id) {
      next(ApiError.badRequest("id not found"));
    }

    const device = await models.device.findOne({
      where: { id },
      include: [
        {
          model: models.deviceInfo,
          as: "device_infos",
        },
      ],
    });
    res.json({ device });
  }
}

module.exports = new DeviceController();
