var mongoose = require('mongoose');

// Setup schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: String,
    add_date: {
        type: Date,
        default: Date.now
    }
});

// Export Book model
var Book = module.exports = mongoose.model('book', bookSchema);

module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}