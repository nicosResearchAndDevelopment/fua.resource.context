const
    expect = require('expect'),
    {describe, test} = require('mocha'),
    context = require('../src/context.js');

describe('fua.resource.context', function () {

    test.skip('develop', function () {
        console.log(context);
    });

    test('should export a frozen object', function () {
        expect(context).toBeTruthy();
        expect(typeof context).toBe('object');
        expect(Object.isFrozen(context)).toBe(true);
    });

    test('should have identifier keys and uri values', function () {
        for (let [key, value] of Object.entries(context)) {
            expect(key).toMatch(/^\S+$/);
            expect(value).toMatch(/^https?:\/\/\S+[/#]$/);
        }
    });

    test('should contain correct namespace for rdf, rdfs and owl', function () {
        expect(context.rdf).toBe('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
        expect(context.rdfs).toBe('http://www.w3.org/2000/01/rdf-schema#');
        expect(context.owl).toBe('http://www.w3.org/2002/07/owl#');
    });

});
