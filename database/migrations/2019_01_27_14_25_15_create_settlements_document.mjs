import Migration from './migration.mjs';

export default class CreateSettlementsDocument extends Migration {
    constructor() {
        super();

        this.document = 'settlements';
        this.schema = {
            name: 'string'
        }
    }
}