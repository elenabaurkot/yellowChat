const router = require("express").Router();
const userRoutes = require("./user");
const registerRoute = require("./registerRoute");
const loginRoute = require("./loginRoute");
const bookRoutes = require("./books");

// user routes
router.use("/users", userRoutes);
router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/books", bookRoutes)

module.exports = router;
