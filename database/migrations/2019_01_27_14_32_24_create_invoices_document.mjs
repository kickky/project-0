import Migration from './migration.mjs';

export default class CreateInvoicesDocument extends Migration {
    constructor() {
        super();

        this.document = 'invoices';
        this.schema = {
            client_id: 'int',
            user_id: 'int',
            approved_at: 'datetime',
            products: 'object' /*
            {
                article: {
                    article: 'string:unique',
                    price: 'string'
                }
            }
            */
        }
    }
}