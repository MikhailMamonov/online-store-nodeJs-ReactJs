const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method == "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "not authorized" });
      }

      //var decoded = jwt.verify(token, process.env.SECRET_KEY);
      var decoded = jwt.verify(token, "SOME_SECRET_KEY");
      if (decoded.role !== role) {
        return res.status(401).json({ message: "not access" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      console.log("error", e);
      return res.status(401).json({ message: "not authorized" });
    }
  };
};
