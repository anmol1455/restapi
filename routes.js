let Router = require('express').Router();

Router.get('/', function(req, res){
    res.json({
        status: 'WORKING',
        message: 'This is the /api/ route!'
    });
});

// Import book controller
var bookController = require('./bookController');

// Book routes
Router.route('/books')
    .get(bookController.index)
    .post(bookController.new);
    
Router.route('/books/:book_id')
    .get(bookController.view)
    .patch(bookController.update)
    .put(bookController.update)
    .delete(bookController.delete);

module.exports = Router;