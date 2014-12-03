var test = require('tape');
var cssb = require('css-bouncer');
var fixtures = require('./fixtures/css');

test('* in selector', function (t) {
	var linter = cssb();
	linter.rule('./index.js', {});
	var result = linter.lint(fixtures.universal);
	t.equal(result.length, 1, 'One error should happen.');
	t.end();
});

test('* not in selector', function (t) {
	var linter = cssb();
	linter.rule('./index.js', {});
	var result = linter.lint(fixtures.nouniversal);
	t.equal(result.length, 0, 'No error should happen.');
	t.end();
});
