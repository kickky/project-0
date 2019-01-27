const Migration =  require('./migration');

class CreateRolesDocument extends Migration {
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

module.exports = CreateRolesDocument;