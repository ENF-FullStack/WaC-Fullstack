module.exports = app => {
    const characters = require("../controllers/character.controller.js");

    var router = require("express").Router();

    // Create new character
    router.post("/", characters.create);

    // Fetch all characters
    router.get("/", characters.findAll);

    // Retrieve single character with id
    router.get("/:id", characters.findOne);

    // Update character with id
    router.put("/:id", characters.update);

    // Delete character with id
    router.delete("/:id", characters.delete);

    // Delete all characters
    router.delete("/", characters.deleteAll);

    app.use('/api/characters', router);

};