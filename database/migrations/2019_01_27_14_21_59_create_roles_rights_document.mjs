import Migration from './migration';

export default class CreateRightsDocument extends Migration {
    constructor() {
        super();

        this.document = 'rights';
        this.schema = {
            name: 'string',
            ability: 'string',
        }
    }
}