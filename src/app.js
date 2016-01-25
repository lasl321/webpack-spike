// CSS
require('./style.css');

var add = require('./math');
var f = require('./es6/arrows');

console.log(add(1, 2));
// Invoke function from es6 module
f.f();

console.log('hello world again!');