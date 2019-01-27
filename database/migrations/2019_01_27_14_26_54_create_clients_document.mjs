import Migration from './2019_01_27_14_18_14_create_migrations_document';

export default class CreateClientsTable extends Migration {
    constructor() {
        super();
        this.table = 'clients';
        this.schema = {
            name: 'string',
            address: 'string',
            settlement_id: 'integer',
            comments: '',
        }
    };
    up(){

    };
    down(){

    };
}