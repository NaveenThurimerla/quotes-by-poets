var mongoose = require("mongoose");
var Model = mongoose.Schema;

var quoteModel = new Model({
  author: {
    type: String,
  },
  quote: {
    type: String,
  },
});

module.exports = mongoose.model("Quotes", quoteModel);
