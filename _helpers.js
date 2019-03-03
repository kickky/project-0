const path = require('path');

global.__projectdir = path.resolve(__dirname);

require(path.resolve(__dirname, 'includes', 'helper_functions'));

if(env('NODE_ENV').toLowerCase() === 'test') {
    require(path.resolve(__dirname, 'includes', 'helper_test_mode_functions'));
}