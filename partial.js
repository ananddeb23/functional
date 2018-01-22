

function logger(namespace) {
	return function() {
		let suffix = Array.prototype.slice.apply([], arguments);
		console.log(suffix);
		const newArray = [namespace].concat(suffix);
		// console.log.apply(null, newArray);
		console.log(newArray);
		//console.log()
		//return cons;
	};
}

// module.exports = logger;

let info  = logger('prefix');
info(' following part of sentence');
//info(' following the following'); */
//console.log(logger())
console.log('Test for correct concatenation', true);
