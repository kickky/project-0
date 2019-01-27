import Migration from './mirgation';

export default class CreateUsersDocument extends Migration {
    constructor() {
        super();
        this.document = 'users';
        this.schema = {
            firstName: 'string',
            lastName: 'string',
            role_id: 'string',
            email: 'string',
            password: 'string'
        }
    };
    up(){

    };
    down(){

    };
}