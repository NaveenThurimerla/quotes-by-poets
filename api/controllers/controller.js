var mongoose = require("mongoose");
Quote = mongoose.model("Quotes");

exports.list_all_quotes = (req, res) => {
  Quote.find({}, { author: 1, quote: 1, _id: 0 }, function (err, quote) {
    if (err) res.send(err);
    res.json(quote);
  });
};

exports.create_a_quote = (req, res) => {
  var new_quote = new Quote(req.body);
  new_quote.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};
