var express = require('express');
var dotenv = require('dotenv').config()


app = express();

const port = 3000;
const mongodb = process.env.MONGO_DB;

mongoose = require('mongoose');
Quote = require('./api/models/modelMongoDB');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log(`API server started on http://localhost:${port}`);