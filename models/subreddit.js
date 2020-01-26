const mongoose = require('mongoose');

const schema = mongoose.Schema;

const SubRedditSchema = new schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  }

});

module.exports = mongoose.model('SubReddit', SubRedditSchema);
