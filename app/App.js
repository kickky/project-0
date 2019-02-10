const Product = require(resolvePath('models/Product'));

class Main {
    constructor(_App) {
        this.App = _App;
        this.init();
    }
    init() {
        this.logged = {};
        this.products = new Product().all();

    }

}

module.exports = Main;