const pluralize = require('pluralize');
const { mongoose } = require(resolvePath('database'));

/**
 * Class: ModelFactory
 *
 */
class ModelFactory {
    constructor(schema = null) {
        this._document = pluralize.plural(this.constructor.name.toLowerCase());
        this.model = mongoose.model(this._document, schema);
    }
    create() {
        return this.model;
    }
}
module.exports = ModelFactory;
