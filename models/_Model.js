const pluralize = require('pluralize');
const DB = require(resolvePath('includes/db'));
/**
 * Class: Model
 * TODO: implement declared Public methods using Mongoose
 */
class Model extends DB {
    constructor() {
        super();

        this._document = pluralize.plural(this.constructor.name.toLowerCase());
    }

    find(_search) {
        const { _document: document } = this;
        switch (true) {
            case Array.isArray(_search): // array of id's
                return this._findByArray({document, key: null, find: _search});
            case typeof(_search) === 'object': // _search is object {key, find}
                if(_search.key && _search.find && Array.isArray(_search.find)) {
                    const { key, find } = _search;
                    return this._findByArray({ document, key, find})
                }
                return false;

            case typeof(_search) === 'string' || Number.isInteger(_search): // is string or number get by id only
                return this._findById({find: _search});



            default:
                return false;
        }
    }

    findOne(_search) {

    }
    all() { // get all model objects

    }
    create() {

    }
    update() {

    }
    remove() {

    }
}
module.exports = Model;
