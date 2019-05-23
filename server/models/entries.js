const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
    title:  String,
    description: String,
    type: String,
    url: String
    }
  );

  const Entries = mongoose.model('entries', entriesSchema);

module.exports = Entries;
