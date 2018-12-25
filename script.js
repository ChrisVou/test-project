var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));

// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
// 	(a, b) => a.concat(b), []);

// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
// 	(accumulator, array) => {
// 		console.log('array', array);
// 		console.log('accumulator', accumulator);
// 		return accumulator.concat(array) 
// 	}, []); 

// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
// 	(accumulator, array) => {
// 		debugger;
// 		return accumulator.concat(array) 
// 	}, []); 