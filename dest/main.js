'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unique = require('uniq'); /*class User{
                              	register(){
                              		console.log("User Registered...")
                              	}
                              
                              }*/

var output = _fs2.default.readFileSync('data.txt', 'utf-8').trim().split('\n').map(function (line) {
	return line.split('t');
}).reduce(function (customers, line) {
	customers[line[0]] = customers[line[0]] || [];
	customers[line[0]].push({
		name: line[1],
		price: line[2],
		quantity: line[3]
	});
	return customers;
}, {});

console.log(unique('output', JSON.stringify(output, null, 2)));