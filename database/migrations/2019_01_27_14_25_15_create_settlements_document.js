import Migration from './migration';

class CreateSettlementsDocument extends Migration {
    constructor() {
        super();

        this.document = 'settlements';
        this.schema = {
            name: 'string'
        }
    }
}

module.exports = CreateSettlementsDocument;