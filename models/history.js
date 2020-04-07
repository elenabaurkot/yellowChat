const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  historytype: String,
  username:    String,
  detail:      String,
  date:       { type: Date, default: Date.now }
});

const History = mongoose.model("History", HistorySchema);

module.exports = History;
