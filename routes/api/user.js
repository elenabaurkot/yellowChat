const router = require("express").Router();
const { getUsers, getCustomers, getVendors } = require("../../controllers/userController");

// for all vendors, all customers and all users
router.route('/')
  .get(getUsers)

  router.route('/customers')
  .get(getCustomers)

  router.route('/vendors')
  .get(getVendors)

module.exports = router;

 