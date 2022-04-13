const db = require("../models");
const Character = db.characters;

// Create and Save a new character
exports.create = (req, res) => {
  // validation
  if (!req.body.name) {
      res.status(400).send({ message: "Empty name fields not allowed!"});
      return;
  }

  // create character
  const character = new Character ({
      name: req.body.name,
      account: req.body.account,
      league: req.body.league,
      level: req.body.level,
      class: req.body.class,
      ascendancy: req.body.ascendancy
  })

  // save character
  character
    .save(character)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send ({
            message:
                err.message || "Errors occurred in creating character"
        });
    });
};

// Retrieve all characters from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i"} } : {};
  
  Character.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send ({
            message:
                err.message || "Errors occured in looking for characters"
        });
    });
};

// Find a single character with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Character.findById(id)
    .then(data => {
        if (!data)
            res.status(404).send ({ message: "Could not find character with id " + id});
        else res.send(data);
    })
    .catch(err => {
        res
            .status(500)
            .send({ message: "Error occured in looking for character with id " + id});
    });
};

// Update a character by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
      return res.status(400).send ({
          message: "Data cannot be empty"
      });
  }

  const id = req.params.id;

  Character.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(400).send ({
                message: `Cannot update character with id ${id}, maybe it was not found`
            });
        } else res.send({ message: "Character was updated successfully." });
    })
    .catch(err => {
        res.status(500).send ({
            message: "Error updating character with id " + id
        });
    });
};

// Delete a character with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Character.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
        res.status(404).send({
            message: `Cannot delete character with id ${id}, maybe it was not found`
        });
        } else {
        res.send({
            message: "Character was deleted successfully!"
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete Character with id=" + id
        });
    });
};

// Delete all characters from the database.
exports.deleteAll = (req, res) => {
    Character.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} characters were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Errors occurred during character deletions."
      });
    });
};