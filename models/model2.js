const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    id:
    name:
    stores:
});

const Ingredient = mongoose.model('User', ingredientSchema);

module.exports = Ingredient;