const Migration =  require('./migration');
class CreatePermissionRoleDocument extends Migration {
    constructor() {
        super();

        this.document = 'permission_role';
        this.schema = {
            role_right_id: 'int',
            role_id: 'int',
        }
    }
}
module.exports = CreatePermissionRoleDocument;