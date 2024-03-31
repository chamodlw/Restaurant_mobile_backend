const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    id:Number,
    name:String,
    stores:Number,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;