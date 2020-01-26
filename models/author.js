const mongoose = require('mongoose');

const schema = mongoose.Schema;

const AuthorSchema = new schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

});

module.exports = mongoose.model('Author', AuthorSchema);
