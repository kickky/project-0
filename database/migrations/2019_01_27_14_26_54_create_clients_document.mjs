import Migration from './migration.mjs';

export default class CreateClientsDocument extends Migration {
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