const ModelFactory = require('./_ModelFactory');
const Schema = require('mongoose').Schema;

class Invoice extends ModelFactory {
    constructor() {
        let schema = new Schema({
            name: String
        });
        super(schema);
    }
}
module.exports = Invoice;