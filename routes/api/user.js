const router = require("express").Router();
const { getUsers, getCustomers, getVendors } = require("../../controllers/userController");
const auth = require("../../middleware/auth");

  router.route('/')
  .get(auth, getUsers)
 
  router.route('/customers')
  .get(auth, getCustomers)

  router.route('/vendors')
  .get(auth, getVendors)

module.exports = router;

 