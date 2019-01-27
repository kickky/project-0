import Migration from './migration.mjs';

export default class CreateProductsUpdatesDocument extends Migration {
    constructor() {
        super();

        this.document = 'products_updates';
        this.schema = {
            user_id: 'int',
            products: 'array'
            /*
            [
                {
                    article: 'string',
                    name: 'string',
                    prices: {
                        c1: 'string',
                        c2: 'string',
                        c3: 'string',
                        c4: 'string',
                    }
                }
            ]
            * */
        }
    }
}