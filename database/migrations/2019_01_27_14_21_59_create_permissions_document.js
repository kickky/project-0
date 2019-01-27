const Migration =  require('./migration');

class CreatePermissionsDocument extends Migration {
    constructor() {
        super();

        this.document = 'rights';
        this.schema = {
            name: 'string',
            ability: 'string',
        }
    }
}

module.exports = CreatePermissionsDocument;