cssb-no-universals
====================

A css-bouncer plugin for ensuring there are no universal *'s in your CSS.

## Usage

```js
var cssb = require('css-bouncer');
var linter = cssb();
linter.rule('cssb-no-universals');
var result = linter.lint('.class element * {}');
console.log(result);
//[ { location: '1:1',
//    level: 'error',
//    message: 'Universal selectors are not allowed!' } ]
```
