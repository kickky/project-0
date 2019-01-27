import Migration from './migration.mjs';

export default class CreateProductsDocument extends Migration {
    constructor() {
        super();

        this.document = 'products';
        this.schema = {
            article: 'string:unique',
            name: 'string',
            description: 'text',
            image: 'string',
            amount: 'int',
            prices: 'object' /*
            {
                c1: 'string',
                c2: 'string',
                c3: 'string',
                c4: 'string',
            }
            */
        }
    }
}