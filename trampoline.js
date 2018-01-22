function repeat(operation, num) {
	// Modify this so it doesn't cause a stack overflow!
	if (num <= 0) return;

	return function() {
		operation();
		return repeat(operation, --num);
	};
}

function trampoline(fn){
	return function(){
		let res = fn.apply(this, arguments);
		while(typeof(res) === 'function'){
			res = res();
		}
		return res;
	};
}

module.exports = function(operation, num) {
	// You probably want to call your trampoline here!
	return trampoline(function() {
		return repeat(operation, num);
	});
};
