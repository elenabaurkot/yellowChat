const router = require("express").Router();
const userRoutes = require("./user");
const registerRoute = require("./registerRoute");
const loginRoute = require("./loginRoute");

// user routes
router.use("/users", userRoutes);
router.use("/register", registerRoute);
router.use("/login", loginRoute);

module.exports = router;
