var assert = require("assert"),
    textmail = require("../lib/mailer.js");

describe('textmail', function() {

    describe('@isClosed', function() {
        it('should be open immediately after being intialized', function() {
            var texter = textmail.textmail();
            assert.equal(texter.isClosed, false);
        });
    });

    describe('@transport', function() {
        it('should have a transport protool configured', function() {
            var texter = textmail.textmail();
            assert.notEqual(texter.transport, null);
        });
    });
});