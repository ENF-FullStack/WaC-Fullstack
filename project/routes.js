const express = require('express');
const router = express.Router();

const db = require("./db/dbconfig");
const Character = require('./models/character');

// Fetch all characters
router.get("/characters", async (req, res) => {
      try {
            const characters = await Character.find();
            res.send(characters)
      } catch(err) {
            return res.status(500).json({ message: err.message });
      }
})

module.exports = router;