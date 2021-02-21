var express = require('express');

app = express();

const port = 3000;

mongoose = require('mongoose');
Quote = require('./api/models/modelMongoDB');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://user_quote:<<Password>>@datawalker-apzone.yzfrz.mongodb.net/quote_db?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log(`API server started on http://localhost:${port}`);
