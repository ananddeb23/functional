function logger(namespace) {
	return console.log.bind(logger, namespace);
	/*return function(){
		let suffix = Array.prototype.slice.apply([],arguments);

		console.log.apply(this, suffix);
	};*/
}
module.exports = logger;
let val = logger('prefix');
val('hello');
//console.log('hello');

/*logger = {
  namespace:
  append: function(){
    return namespace + strng;
  }
}

fn = logger.append.bind(logger);
fn(" following string");*/
console.log('Test for correct concatenation', true);
console.log(typeof(val) === 'function');
