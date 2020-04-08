const router = require("express").Router();
const userRoutes = require("./user");
const registerRoute = require("./registerRoute");
const loginRoute = require("./loginRoute");
const blogRoutes = require("./blog");
const historyRoutes = require("./history");

// user routes
router.use("/users", userRoutes);
router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/blog", blogRoutes)
router.use("/history", historyRoutes)

module.exports = router;

