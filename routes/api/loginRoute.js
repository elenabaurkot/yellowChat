const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// Load input validation
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/user");

// route POST api/users/login
router.post("/", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
// Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
   jwt.sign(
     payload,
      config.get("jwtSecret"), 
      {expiresIn: 3600},
        (err, token) => {
          if (err) throw (err);
          res.json({
            success: true,
            token: "Bearer " + token
          });
        }
      );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.get("/", (req, res) => {
    User.find().select("-password") 
      .then(user => {
        res.json(user)
      })
  });

module.exports = router;