import Migration from './migration';

class CreateClientsDocument extends Migration {
    constructor() {
        super();
        this.table = 'clients';
        this.schema = {
            name: 'string',
            address: 'string',
            settlement_id: 'integer',
            contacts: 'text',
            comments: 'text',
        }
    };
    up(){

    };
    down(){

    };
}

module.exports = CreateClientsDocument;