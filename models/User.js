const ModelFactory = require('./_ModelFactory');
const Schema = require('mongoose').Schema;

/**
 * Class user
 *
 */
class User extends ModelFactory {

    constructor() {
        let schema = new Schema({
            fullName: String
        });
        super(schema);
    }
}

module.exports = (new User).create();