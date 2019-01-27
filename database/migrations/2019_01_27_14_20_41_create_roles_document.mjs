import Migration from './mirgation';

export default class CreateRolesDocument extends Migration {
    constructor() {
        super();
        this.document = 'roles';
        this.schema = {
            name: 'string',
        }
    };
    up(){

    };
    down(){

    };
}