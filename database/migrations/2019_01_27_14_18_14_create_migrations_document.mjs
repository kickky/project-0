import Migration from './mirgation';

export default class CreateClientsDocument extends Migration {
    constructor() {
        super();
        this.document = 'migrations';
        this.schema = {
            name: 'string',
            date: 'datetime',
        }
    };
    up(){

    };
    down(){

    };
}