const ModelFactory = require('./_ModelFactory');
const Schema = require('mongoose').Schema;

class Product extends ModelFactory {
    constructor() {
        let schema = new Schema({
            name: String
        });
        super(schema);
    }
}

module.exports = Product;