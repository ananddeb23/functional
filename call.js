function duckCount(...args){
	//console.log(args);
	let count = 0;
	for(let i = 0; i < args.length; i++){
		if(Object.prototype.hasOwnProperty.call(args[i],'quack')){
			count += 1;
		}
	}
	return count;
}

module.exports = duckCount;

let obj1 = {
	quack : true
};
let obj2 = Object.create({quack : true});
let obj3 = {name: 'Anand', quack : 'true'};
let obj4 = {quack : 4};
let obj5 = {val: true};
console.log(duckCount(obj1));
console.log(duckCount(obj1,obj3));
console.log(duckCount(obj1, obj2, obj5));
console.log(duckCount(obj5));
console.log(duckCount());

//duckCount(1,2,3);
//duckCount('abc','dev',1,2);
