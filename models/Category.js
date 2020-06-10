const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', CategorySchema);