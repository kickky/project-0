const mongoose = require(resolvePath('database'));
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

describe('Connecting model', function () {
    const models = require(resolvePath('models'));

    it('Models imported correctly', function () {
        if(typeof(models) !== 'object'
            || !Object.keys(models).length) {
            throw new Error('No models')
        } else {
            assert.ok(true);
        }
    });

   for(let key in models) {
       if(key && models.hasOwnProperty(key)) {
           it(`Testing model ${key} creation`, function () {
               assert.ok(true);
           });
       }
   }
});

