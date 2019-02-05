const Model = require('./model');
const mongoose = require('mongoose');

/**
 * Class user
 *
 */
class User extends Model {
    constructor() {
        super();
    }
}

module.exports = User;