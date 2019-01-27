const Migration =  require('./migration');

class CreateMigrationsDocument extends Migration {
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

module.exports = CreateMigrationsDocument;