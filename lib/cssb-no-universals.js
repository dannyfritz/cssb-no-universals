var _ = require('lodash');

var defaults = {};

var errorTemplate = _.template(
	'Universal selectors are not allowed!'
);

module.exports = {
	selector: function (reporter, node, options) {
		var options = _.defaults(options, defaults);
		var universals = node.selector.match(/\*/gi);
		if (_.size(universals) > 0) {
			_.each(universals, function (id) {
				reporter.error(errorTemplate({options: options}));
			});
		}
	}
}
