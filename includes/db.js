const { connection } = require(resolvePath('database'));

/**
 * Class: DB
 * TODO: implement private methods that will be used in model
 */
class DB {
    constructor() {
        this._defaultKey = 'id';

    }

    _findByArray({document, _key, find}) { // get objects
        const key = _key ? _key : this._defaultKey;

    }
    _findById({document, find}) {

    }
}

module.exports = DB;