const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mailSchema = new Schema({
  envelope: {
    type: String,
    required: true,
  },
  stamp: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Mail = mongoose.model("Mail",mailSchema)


module.exports = Mail;
