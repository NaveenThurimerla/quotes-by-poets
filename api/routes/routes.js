module.exports = (app) => {
    var quoteList = require('../controllers/controller');

    app.route('/quotes')
		.get(quoteList.list_all_quotes)
    .post(quoteList.create_a_quote);

};
