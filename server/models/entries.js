const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
    title:  String,
    description: String
    }
  );

  const Entries = mongoose.model('entries', entriesSchema);

module.exports = Entries;
