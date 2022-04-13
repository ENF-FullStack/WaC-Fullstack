var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema (
      {
      name: {type: String, required: true, maxlength: 30},
      account: {type: String, required: true, maxlength: 30},
      league: {type: String, required: true, maxlength: 15},
      level: {type: Number, required: true, maxlength:3},
      class: {type: String, required: true, maxlength:15},
      ascendancy: {type: String, required: true, maxlength:15}
      }
);

//Export model
module.exports = mongoose.model('characters', CharacterSchema);