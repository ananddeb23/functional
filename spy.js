
function Spy(target, method) {

	obj = {count: 0};
	return obj;

}



module.exports = Spy;
let spyCaller = Spy(console,'error');
console.error('error');
console.error('error');


console.log(spyCaller.count);
console.log('return type of spy.count is a number: ',typeof(spyCaller.count) === 'number');
console.log('correct counting output of spy: ', spyCaller.count === 2);
