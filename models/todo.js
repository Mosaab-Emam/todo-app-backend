const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    name: String,
    done: Boolean
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
