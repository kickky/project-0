import Migration from './migration';

export default class CreateRoleRightRoleDocument extends Migration {
    constructor() {
        super();

        this.document = 'role_right_role';
        this.schema = {
            role_right_id: 'int',
            role_id: 'int',
        }
    }
}