const ModelFactory = require('./_ModelFactory');
const Schema = require('mongoose').Schema;

class Role extends ModelFactory {
    constructor() {
        let schema = new Schema({
            name: String
        });
        super(schema);
    }
}

module.exports = Role;