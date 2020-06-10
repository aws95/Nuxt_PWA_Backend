const mongoose = require('mongoose');

const SubCategorySchema = mongoose.Schema({
    subcategory: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);